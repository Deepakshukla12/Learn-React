import React, { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s+/g, "-");
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  const submit = async (data) => {
        try {
          if (post) {
            // Update flow
            const file =
              data.image && data.image.length > 0
                ? await appwriteService.uploadFile(data.image[0])
                : null;
    
            if (file && post.featuredImage) {
              await appwriteService.deleteFile(post.featuredImage);
            }
    
            const updateData = {
              ...data,
              featuredImage: file ? file.$id : post.featuredImage,
            };
    
            const dbPost = await appwriteService.updatePost(post.$id, updateData);
    
            if (dbPost && dbPost.$id) {
              navigate(`/post/${dbPost.$id}`);
            } else {
              console.error("Update failed: dbPost or dbPost.$id is missing", dbPost);
              alert("Failed to update the post. Please try again.");
            }
          } else {
            // Create flow
            if (!(data.image && data.image.length > 0)) {
              alert("Please upload a featured image.");
              return;
            }
    
            const file = await appwriteService.uploadFile(data.image[0]);
    
            if (!file || !file.$id) {
              alert("Image upload failed. Please try again.");
              return;
            }
    
            data.featuredImage = file.$id;
            data.userId = userData?.$id;
    
            const dbPost = await appwriteService.createPost(data);
    
            if (dbPost && dbPost.$id) {
              navigate(`/post/${dbPost.$id}`);
            } else {
              console.error("Create failed: dbPost or dbPost.$id is missing", dbPost);
              alert("Failed to create the post. Please try again.");
            }
          }
        } catch (error) {
          console.error("Submit error:", error);
          alert("An error occurred during submission. Please check the console.");
        }
      };
    

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-1 cursor-pointer"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mb-4">{errors.title.message}</p>
        )}
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-1"
          {...register("slug", { required: "Slug is required" })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        {errors.slug && (
          <p className="text-red-500 text-sm mb-4">{errors.slug.message}</p>
        )}
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4 cursor-pointer"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && post.featuredImage && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFileView(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4 cursor-pointer"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
          disabled={loading}
        >
          {loading ? "Submitting..." : post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
