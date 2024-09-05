import React from "react";
import './MainContent.css'
import PostList from "../PostList/PostList";

function MainContent() {
    return (
        <div className="main-area">
            <div className="main-items">
                <div className="main-texts">
                    <h2>Posts</h2>
                    <PostList />
                </div>
                <div className="main-subs">Subbreddits</div>
            </div>
        </div>
    )
}

export default MainContent;