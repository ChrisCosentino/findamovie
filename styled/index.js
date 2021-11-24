import styled from 'styled-components';

export const Button = styled.button`
  padding: 20px;
  border-radius: 10px;
`;

export const MovieCard = styled.div`
  height: 210px;
  flex: none;
  transition: transform 0.2s; /* Animation */
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  flex: none;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 16px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
  align-items: center;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export const PreviewDescription = styled.p`
  padding-left: 96px;
  padding-right: 96px;
`;
