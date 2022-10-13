import React from 'react';
import styled from 'styled-components';
import reactLogo from '../assets/react.svg';
import boscoLogo from '../assets/bosco.png';
import { HeaderWrapper, LogoWrapper, UserLoginWrapper } from './Header.styled';

const Logo = styled.img`
	width: 150px;
	height: 70px;
`;

const Header = () => {
	return (
		<HeaderWrapper>
			<LogoWrapper>
				<Logo src={boscoLogo} alt="" />
			</LogoWrapper>
			{/* <UserLoginWrapper><span>something</span></UserLoginWrapper> */}
		</HeaderWrapper>
	);
};

export default Header;

