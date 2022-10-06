import React from 'react';
import styled from 'styled-components';
import reactLogo from '../assets/react.svg';
import { HeaderWrapper, LogoWrapper, UserLoginWrapper } from './Header.styled';

const Header = () => {
	return (
		<HeaderWrapper>
			<LogoWrapper>
				<img src={reactLogo} alt="" />
			</LogoWrapper>
			<UserLoginWrapper>
				<span>something</span>
			</UserLoginWrapper>
		</HeaderWrapper>
	);
};

export default Header;

