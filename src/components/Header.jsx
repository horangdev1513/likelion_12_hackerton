import { GoArrowLeft } from 'react-icons/go';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

export default function Header({ title }) {
  return (
    <Layout>
      <div className="leftButton">
        <button>
          <GoArrowLeft />
        </button>
      </div>
      <div className="centertitle">
        <h1>{title ? title : null}</h1>
      </div>
      <div className="rightButton">
        <button>
          <FaBars />
        </button>
      </div>
    </Layout>
  );
}

const Layout = styled.header`
  width: 100%;

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
