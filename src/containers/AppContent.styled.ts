import styled, { css } from 'styled-components';

export const MainContentWrapper = styled.div`
    display: flex;
`;

export const SideMenuWrapper = styled.div<StyledSideMenu>`
    background-color: red;

    ${({ isExpanded }) =>
        isExpanded
            ? css`
                  padding: 10px;
                  width: 25%;
              `
            : css`
                  padding: 0;
                  width: 0;
              `};

    animation: 0.2s linear padding, width;
`;

interface StyledSideMenu {
    isExpanded: boolean;
}

