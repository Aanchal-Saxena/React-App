import { useEffect, useState } from "react";
import apiUrls from "../../../utils/api-urls";
import { getPosts } from "../../../services/api-services";

/**
 * Custom hook to post details from the api.
 * 
 * @returns {Object} The hook returns an object containing:
 *  - posts: Array of posts data.
 *  - postTitles: Array of post titles.
 *  - error: Error message if any occurs during fetching.
 */
function usePosts() {
  const [error, setError] = useState(""); // state to store any errors encountered during data fetch
  const [posts, setPosts] = useState([]); // state to store the full list of posts
  const [postTitles, setPostTitles] = useState([]); // State to store the titles of the posts

  useEffect(() => {
    // ;(async() = {
      
    // })
    async function fetchPosts() {
      try {
        // Fetch posts from the api
        const response = await getPosts(apiUrls.postsUrl.subUrls.fetchPosts);
        if (response.data) {
          // Extract the titles of the posts
          const titles = response.data.map((res) => res.title);
          setPostTitles(titles);
          setPosts(response.data);
          setError("");      // Clear any existing errors
        } 
      } catch (err) {
        console.error("Error fetching posts:", err);

        // If an error occurs, set an error message
        setError("An error occurred while fetching posts");
      }
    }
    // Call the fetchPosts function when the component mounts
    fetchPosts();
  }, []); 
  // Return the fetched posts, post titles, and any error encountered
  return { posts, postTitles, error };
}
export default usePosts;
