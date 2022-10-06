import { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { AppWrapper } from './styles/Base';
import Header from './containers/Header';
import AppContent from './containers/AppContent';
import useLocalStorageState from './hooks/useLocalStorageState';
import { Post, PostsResponse } from './interfaces/post';

function App() {
	// const [posts, setPosts] = useLocalStorageState<Post[]>('posts', []);
	const [posts, setPosts] = useState<Post[]>([]);
	const [isExpanded, setIsExpanded] = useState(false);

	const handlePostRemoval = (postId: number) => {
		const newPosts = posts.filter(post => post.id !== postId);
		setPosts(newPosts);
	};

	const handleSideMenuToggle = () => {
		setIsExpanded(p => !p);
	};

	const handlePostsPopulation = (newPosts: Post[]) => {
		setPosts(newPosts);
	};

	const fetchPosts = () => {
		fetch('https://dummyjson.com/posts')
			.then(res => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json() as Promise<PostsResponse>;
			})
			.then(data => {
				handlePostsPopulation(data.posts);
			});
	};

	return (
		<AppWrapper>
			<Header />
			<AppContent
				fetchPosts={fetchPosts}
				posts={posts}
				handlePostRemoval={handlePostRemoval}
				isExpanded={isExpanded}
				handleSideMenuToggle={handleSideMenuToggle}
			/>
		</AppWrapper>
	);
}

export default App;

