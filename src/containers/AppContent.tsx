import { useState } from 'react';
import FilesList from './PostList';
import { MainContentWrapper, SideMenuWrapper } from './AppContent.styled';
import { Post } from '../interfaces/post';
import useLocalStorageState from '../hooks/useLocalStorageState';

interface AppContentProps {
    fetchPosts: () => void;
    posts: Post[];
    handlePostRemoval: (postId: number) => void;
    isExpanded: boolean;
    handleSideMenuToggle: () => void;
}

const AppContent = ({ fetchPosts, posts, handlePostRemoval, isExpanded, handleSideMenuToggle }: AppContentProps) => {
    return (
        <MainContentWrapper>
            {/* <SideMenuWrapper isExpanded={isExpanded}>sdasd</SideMenuWrapper> */}
            {/* <button onClick={handleSideMenuToggle}>toggle menu</button> */}
            {posts.length < 1 && <button onClick={fetchPosts}>fetch</button>}
            {posts && (
                <div>
                    {posts.map(post => (
                        <div key={post.id} style={{ padding: '10px' }}>
                            <div>
                                <span>{post.title}</span>
                                <span>{post.userId}</span>

                                <button onClick={() => handlePostRemoval(post.id)}>delete</button>
                            </div>
                            <div>{post.body}</div>
                        </div>
                    ))}
                </div>
            )}
            {/* <FilesList files={posts} handleFileRemoval={handleFileRemoval} /> */}
        </MainContentWrapper>
    );
};

export default AppContent;

