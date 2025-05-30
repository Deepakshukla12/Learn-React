import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import ConfirmationLayout from "../components/ConfirmDelete";

export default function Post() {
  const [post, setPost] = useState(null);
  const [confrim, setConfirm] = useState(false);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
        setLoading(false);
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const handleDelete = () => {
    setConfirm(true);
  };

  const confirmDelete = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  const cancelDelete = () => {
    setConfirm(false);
  }

  if (loading) {
    return (
      <div className="py-10 text-center text-gray-500">Loading post...</div>
    );
  }

  if (!post) {
    return (
      <div className="py-10 text-center text-gray-500">Post not found.</div>
    );
  }

  return (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={
              post.featuredImage
                ? appwriteService.getFileView(post.featuredImage)
                : "/default-image.png"
            }
            alt={post.title}
            className="rounded-xl w-full max-h-[500px] object-contain mr-20"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>

        <ConfirmationLayout 
          isOpen = {confrim}
          title = "Delete Post"
          message = "Are you sure you want to delete this post?"
          onCancel={cancelDelete}
          onConfirm={confirmDelete}
          />
          
      </Container>
    </div>
  );
}
