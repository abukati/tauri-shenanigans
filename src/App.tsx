import { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { AppWrapper } from './styles/Base';
import Header from './containers/Header';
import AppContent from './containers/AppContent';
import useLocalStorageState from './hooks/useLocalStorageState';
import { Post, PostsResponse } from './interfaces/post';
import { PostInfo } from './components/Posts';

function App() {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleSideMenuToggle = () => {
		setIsExpanded(p => !p);
	};

	return (
		<AppWrapper>
			<Header />
			<PostInfo />
		</AppWrapper>
	);
}

export default App;

