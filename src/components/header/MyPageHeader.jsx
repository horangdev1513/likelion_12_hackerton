import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { AiOutlineClose } from 'react-icons/ai';
import { MAIN_PAGE } from '../../data/constants';

export default function MyPageHeader() {
  const navigate = useNavigate();

  function backButtonHandler() {
    navigate(MAIN_PAGE);
  }

  return (
    <Layout>
      <div className="left-box"></div>
      <div className="center-box">
        <p className="title">마이페이지</p>
      </div>
      <div className="right-box">
        <button onClick={backButtonHandler} className="back-button">
          <AiOutlineClose size={20} />
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

  & .left-box {
    width: 20%;

    margin-left: 1%;

    display: flex;
    align-items: center;
  }

  & .center-box {
    width: 40%;

    display: flex;
    justify-content: center;
    align-items: center;

    & .title {
      font-size: ${({ theme }) => theme.fontSize.l};
      font-weight: ${({ theme }) => theme.fontWeight.xl};
      font-family: 'NanumSquareRound';
    }
  }

  & .right-box {
    width: 20%;

    margin-right: 1%;

    display: flex;
    align-items: center;
    justify-content: center;

    & .back-button {
      background: none;
      border: none;
    }
  }
`;
