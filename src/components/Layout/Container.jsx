import styled from 'styled-components';

export default function Container({ children }) {
  return <ContainerLayout>{children}</ContainerLayout>;
}

const ContainerLayout = styled.div`
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
