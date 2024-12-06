import React, { useState } from "react";
import usePosts from "./hooks/usePosts";
import DropdownField from "../../components/DropdownField";
import PostCard from "./components/PostCard";

function Posts() {
  const { posts, postTitles, error: postsError } = usePosts();
  const [selectedPost, setSelectedPost] = useState(null);    // State to store selected post title and selected post object
  const [showPostDetails, setShowPostDetails] = useState(false); // State to control whether the post details card is shown

  /**
   * Handles the selection of a post title
   * @param {string} postTitle - The title of the selected post
   */
  const handlePostSelection = (postTitle) => {
    // Find the post by title from the posts array and set it as selectedPost
    const selected = posts.find(post => post.title === postTitle); 
    setSelectedPost(selected); // Update selected post with full object
    setShowPostDetails(false); // Hide the post details when a new post is selected
  };

  /**
   * Handles the submit action to display the selected post details
   */
  const handleSubmit = () => {
    if (selectedPost) {
      setShowPostDetails(true); 
    }
  };

  return (
      <div className="pt-5 mx-2">
        <div
          className="container-fluid mx-auto rounded p-4 shadow theme-color"
          style={{ maxWidth: "500px" }}
        >
          <h2 className="text-center mb-4 text-3xl text-white">Select Posts</h2>

          {/* Display any error that occurs during fetching */}
          {postsError && (
            <p className="text-danger text-center">{postsError}</p>
          )}

          {/* Dropdown for selecting a post title */}
          <div className="mb-3">
            <DropdownField
              label="Posts"
              onValueChange={handlePostSelection} // Pass the function to handle post selection
              options={postTitles}
              selectedValue={selectedPost ? selectedPost.title : ""} // Set selected value to the selected post (if any)
            />
          </div>

          {/* Submit button to show the post details card */}
          <button
            className="btn btn-primary w-100"
            onClick={handleSubmit}
            disabled={!selectedPost} // Disable submit if no post is selected
          >
            Submit
          </button>

          {/* conditionally render the postcard only when submit is clicked */}
          {showPostDetails && selectedPost && <PostCard post={selectedPost} />} 
        </div>
      </div>
  );
}

export default Posts;
