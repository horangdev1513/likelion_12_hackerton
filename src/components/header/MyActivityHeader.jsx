import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { GoArrowLeft } from 'react-icons/go';
import { MY_PAGE, MY_PAGE_MYCOMMNETS, MY_PAGE_MYPOSTS } from '../../data/constants';

export default function MyActivityHeader() {
  const path = useLocation();
  const navigate = useNavigate();

  function backButtonHandler() {
    navigate(-1);
    if (path.pathname === MY_PAGE_MYPOSTS || MY_PAGE_MYCOMMNETS) {
      navigate(MY_PAGE);
    }
  }

  return (
    <Layout>
      <div className="left-box">
        <button onClick={backButtonHandler} className="back-button">
          <GoArrowLeft size="30" />
        </button>
      </div>
      <div className="center-box">
        <p className="title">나의 활동내역</p>
      </div>
      <div className="right-box"></div>
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

    margin-left: 5%;

    display: flex;
    align-items: center;

    & .back-button {
      background: none;
      border: none;
    }
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

    margin-right: 5%;
  }
`;
