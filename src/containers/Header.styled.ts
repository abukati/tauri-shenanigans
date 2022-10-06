import styled from 'styled-components';

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 10px;

	background: rgba(101, 111, 205);
	background: linear-gradient(145deg, rgba(101, 111, 205, 1) 0%, rgba(22, 32, 122, 1) 47%);
`;

const LogoWrapper = styled.div`
	color: white;
	font-size: 24px;
	display: block;

	padding: 10px;

	border-radius: 3px;

	&:hover {
		cursor: pointer;

		background-color: #091e4241;
	}
`;

const UserLoginWrapper = styled.div`
	color: white;
	font-size: 24px;
	display: block;

	padding: 10px;

	border-radius: 3px;

	&:hover {
		cursor: pointer;

		background-color: #091e4241;
	}
`;

export { HeaderWrapper, LogoWrapper, UserLoginWrapper };

