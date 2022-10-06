import { useEffect, useState } from 'react';

const Posts = () => {
	const [isFetching, setIsFetching] = useState(false);
	const [apiStatus, setApiStatus] = useState({
		status: isFetching ? 'pending' : 'idle',
		error: null,
	});

	return <div>Posts</div>;
};

export default Posts;

