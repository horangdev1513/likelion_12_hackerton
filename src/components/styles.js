import styled from 'styled-components';

// Container.jsx

export const ContainerLayout = styled.div`
  max-width: 480px;
  margin: 0 auto;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  background-color: rgba(242, 242, 242, 1);
`;

// Layout.jsx

export const MainLayout = styled.main`
  width: 100%;
  padding: 0 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Header.jsx

export const HeaderLayout = styled.header`
  width: 100%;
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & .leftButton {
    padding: 15px;
  }

  & .rightButton {
    padding: 15px;
  }

  & button {
    border: 0;
    background-color: transparent;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: 800;
`;
