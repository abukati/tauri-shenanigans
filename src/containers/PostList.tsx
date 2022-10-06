import { Post } from '../interfaces/post';
import PostDataView from './PostDataView';

interface PostListProps {
	posts: Post[];
	handlePostRemoval: (postId: number) => void;
}

export const PostList = ({ posts, handlePostRemoval }: PostListProps) => {
	return (
		<div>
			<div>
				{posts.map(post => (
					<PostDataView post={post} handlePostRemoval={handlePostRemoval} />
				))}
			</div>
		</div>
	);
};

