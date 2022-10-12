import { useEffect, useState } from 'react';
import { PostList } from '../containers/PostList';
import { Post, PostsResponse } from '../interfaces/post';
import { invoke } from '@tauri-apps/api/tauri';

export const PostInfo = () => {
	// const [posts, setPosts] = useLocalStorageState<Post[]>('posts', []);
	const [posts, setPosts] = useState<Post[]>([]);
	const [hello, setHello] = useState('');
	const [isFetching, setIsFetching] = useState(false);
	const [{ status, error }, setApiStatus] = useState({
		status: isFetching ? 'pending' : 'idle',
		error: null,
	});

	useEffect(() => {
		if (!isFetching) {
			return;
		}

		setApiStatus({ error: null, status: 'pending' });

		fetch('https://dummyjson.com/posts')
			.then(res => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json() as Promise<PostsResponse>;
			})
			.then(data => {
				setApiStatus({ error: null, status: 'resolved' });
				handlePostsPopulation(data.posts);
			})
			.catch(error => {
				setApiStatus({ error, status: 'rejected' });
			});
	}, [isFetching]);

	function handlePostRemoval(postId: number) {
		const newPosts = posts.filter(post => post.id !== postId);
		setPosts(newPosts);
	}

	async function handlePostsPopulation(newPosts: Post[]) {
		setHello(await invoke('greet'));
		invoke('scan_folder');
		setIsFetching(false);
		setPosts(newPosts);
	}

	if (status === 'idle') return <button onClick={() => setIsFetching(true)}>fetch</button>;
	else if (status === 'pending') return <div>Loading...</div>;
	else if (status === 'resolved') return <div>{hello}</div>;
	// <PostList posts={posts} handlePostRemoval={handlePostRemoval} />;
	else if (status === 'rejected') throw error;
	throw new Error('Should not happen');
};

