import styled from 'styled-components';

// Container.jsx

export const ContainerLayout = styled.div`
  max-width: 480px;
  margin: 0 auto;

  width: 100%;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  background-color: rgba(242, 242, 242, 1);
`;

// Layout.jsx

export const MainLayout = styled.main`
  width: 100%;
  height: 100%;
  padding: 0 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Header.jsx

export const HeaderLayout = styled.header`
  width: 100%;
  height: 10%;

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

// Button.jsx

export const StyledLargeButton = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.main};
  color: white;

  & p {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.xl};
  }
`;

export const StyledSmallButton = styled(StyledLargeButton)`
  width: 30%;
  height: 40px;

  & p {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

// Input.jsx

export const InputLayout = styled.div`
  width: 100%;
  height: 75px;
  margin-bottom: 30px;

  & .label-box {
    margin: 3px;
  }

  & .label-text {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.l};
  }

  & .error-box {
    margin: 10px 0;
  }

  & .error-message {
    margin-top: 5px;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.l};
    color: red;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: none;
`;
