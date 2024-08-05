import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { authHttp } from '../../api/auth/authHttp';
import { useAtomValue } from 'jotai';
import { readUserId } from '../../atoms';
import { useNavigate } from 'react-router-dom';
import { LOGIN_PAGE } from '../../data/constants';
import { logout } from '../../utils';

const MyPageDeleteModal = forwardRef(function MyPageDeleteModal(prop, ref) {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const userId = useAtomValue(readUserId);
  const navigate = useNavigate();

  async function deleteUser() {
    setIsLoading(true);
    try {
      const res = await authHttp.delete(`/members/${userId}`);

      if (res.response.status === 200) {
        logout();
        navigate(LOGIN_PAGE);
      }
    } catch (err) {
      setError('회원 탈퇴에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <StyledDialog ref={ref}>
      <div className="message-box">
        <p className="message">{error ? error : '정말 탈퇴 하실껀가요?'}</p>
      </div>

      <div className="button-box">
        <form method="dialog" className="cancel">
          <CancelButton>취소</CancelButton>
        </form>
        <StyledButton onClick={deleteUser}>탈퇴</StyledButton>
      </div>
    </StyledDialog>
  );
});

export default MyPageDeleteModal;

const StyledDialog = styled.dialog`
  max-width: 320px;

  width: 100%;
  height: 30%;

  border-radius: 15px;
  border-color: #d9d9d9;
  font-family: NanumSquareRound;

  & .message-box {
    width: 100%;

    margin-top: 10%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .button-box {
    width: 100%;

    margin-top: 40%;

    display: flex;
    justify-content: space-evenly;

    & .cancel {
      width: 40%;
    }
  }
`;

const StyledButton = styled.button`
  width: 40%;
  height: 50px;

  border-radius: 15px;
  border: none;
  background-color: ${({ theme }) => theme.color.main};
  font-family: NanumSquareRound;

  color: white;
`;

const CancelButton = styled(StyledButton)`
  width: 100%;
`;
