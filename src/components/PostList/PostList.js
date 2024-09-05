import React, { useEffect } from "react";
import './PostList.css';
import { useSelector, useDispatch } from 'react-redux';
import { startLoading, postsLoaded, postsError } from '../../features/postsReducer/postsReducer';

const PostList = () => {
    const dispatch = useDispatch();
    const { list: posts, isLoading, error } = useSelector(state => state.posts);
    const searchTerm = useSelector(state => state.search.searchTerm);
  
    useEffect(() => {
      const fetchPosts = async () => {
        dispatch(startLoading());
        try {
          const response = await fetch(`https://api.reddit.com/search?q=${searchTerm}`);
          const data = await response.json();
          dispatch(postsLoaded(data.data.children));
        } catch (err) {
          dispatch(postsError(err.toString()));
        }
      };
  
      if (searchTerm) {
        fetchPosts();
      }
    }, [searchTerm, dispatch]);
  
    if (isLoading) return <div>Betöltés...</div>;
    if (error) return <div>Hiba történt: {error}</div>;
    if (!posts || posts.length === 0) return <div>Nincsenek találatok</div>;
  
    return (
      <div className="PostList">
        {posts.map(post => (
          <div key={post.data.id} className="post-item">
            <p className="post-title">{post.data.title}</p>
            {post.data.thumbnail && post.data.thumbnail !== 'self' ? (
                <img className="post-thumbnail" src={post.data.thumbnail} alt="" />
            ) : (
                <p>No image available</p>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default PostList;