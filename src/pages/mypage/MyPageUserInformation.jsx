import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// components
import InformationBar from './MyPageInfromationBar';
import BagesInformation from './MyPageBagesInformation';
import ActivityInformation from './MyPageActivityInformation';

import icon from '../../assets/mypage/icon.png';

import { logout } from '../../utils';
import { LOGIN_PAGE } from '../../data/constants';
import { useAtomValue } from 'jotai';
import { readUserNickName } from '../../atoms';
import MyPageDeleteModal from './MyPageDeleteModal';

export default function UserInformation() {
  const dialog = useRef(null);
  const userNickName = useAtomValue(readUserNickName);

  const navigate = useNavigate();

  function deleteModalHanlder() {
    dialog.current.showModal();
  }

  function logoutHandler() {
    logout();
    navigate(LOGIN_PAGE);
  }
  return (
    <>
      <MyPageDeleteModal ref={dialog} />
      <UserData>
        <img src={icon} />
        <p className="user-name">{userNickName}</p>
      </UserData>
      {/* <InformationBar>
        <div className="infobox">
          <span>비밀번호 변경 하셨어요?</span>
        </div>
        <Link className="link">변경하기</Link>
      </InformationBar> */}
      <InformationBar>
        <p className="text">서비스가 마음에 안드시나요?</p>
        <StyledButton className="deletemodal-showbutton" onClick={deleteModalHanlder}>
          <p>탈퇴하기</p>
        </StyledButton>
      </InformationBar>

      <BagesInformation />

      <ActivityInformation />

      <LogoutButton onClick={logoutHandler}>
        <p className="logout-text">로그아웃</p>
      </LogoutButton>
    </>
  );
}

const UserData = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  margin-bottom: 15px;

  & .user-name {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.xl};
    font-family: NanumSquareRound;
  }
`;

const LogoutButton = styled.button`
  width: 100%;
  height: 60px;

  border: none;
  background-color: transparent;
  & .logout-text {
    width: 100%;

    text-decoration: underline;
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: white;

  & p {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.xl};
    font-family: NanumSquareRound;
  }
`;
