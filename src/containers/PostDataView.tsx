import { Post } from '../interfaces/post';

interface PostDataViewProps {
	post: Post;
	handlePostRemoval: (postId: number) => void;
}

function PostDataView({ post, handlePostRemoval }: PostDataViewProps) {
	return (
		<div key={post.id} style={{ padding: '10px' }}>
			<div>
				<span>{post.title}</span>
				<span>{post.userId}</span>

				<button onClick={() => handlePostRemoval(post.id)}>delete</button>
			</div>
			<div>{post.body}</div>
		</div>
	);
}

export default PostDataView;
