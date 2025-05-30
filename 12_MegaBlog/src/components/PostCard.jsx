
import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
const imageUrl = featuredImage ? appwriteService.getFileView(featuredImage) : null;

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div className="w-full flex justify-center mb-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="rounded-xl max-h-48 object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-48 bg-gray-300 rounded-xl flex items-center justify-center text-gray-500">
              No image available
            </div>
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
