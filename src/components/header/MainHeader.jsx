import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';

import MainHeaderLogo from '../../assets/main/mainlogo.svg?react';

import { MY_PAGE } from '../../data/constants';

export default function MainHeader() {
  const navigate = useNavigate();

  function bugerMenuHandler() {
    navigate(MY_PAGE);
  }
  return (
    <Layout>
      <div className="logo-box">
        <MainHeaderLogo />
      </div>
      <div className="icon-box">
        <button onClick={bugerMenuHandler} className="buger-button">
          <FaBars />
        </button>
      </div>
    </Layout>
  );
}

const Layout = styled.header`
  width: 100%;
  height: 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid;
  border-color: #d9d9d9;
  font-family: 'NanumSquareRound';

  & .logo-box {
    margin-left: 5%;
  }

  & .icon-box {
    margin-right: 5%;

    & .buger-button {
      background: none;
      border: none;
    }
  }
`;
