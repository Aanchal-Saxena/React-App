import React from 'react';

function PostCard({ post }) {
  return (
    <div className="card mt-4 shadow-lg">
      {/* Card Header: Displays the post title */}
      <div className="card-header bg-info text-white">
        <h5 className="card-title">{post.title}</h5>
      </div>

      {/* Card Body: Displays the content (body) of the post */}
      <div className="card-body">
        <p className="card-text">{post.body}</p>
      </div>

      {/* Card Footer: Displays the Post id */}
      <div className="card-footer text-muted text-end">
        <small>Post ID: {post.id}</small>
      </div>
    </div>
  );
}

export default PostCard;
