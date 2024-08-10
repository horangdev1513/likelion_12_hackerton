import styled from 'styled-components';
import { useDelete } from '../../hooks';
import { useNavigate, Link } from 'react-router-dom';

export default function MyCommentsBox({ comment, id, onDeleteSuccess }) {
  const { isLoading, deleteData, error } = useDelete(`comments/${id}`, onDeleteSuccess);
  const navigate = useNavigate();
  async function deleteHanlder() {
    await deleteData();
    navigate('.');
  }
  return (
    <Layout>
      <div className="comment-box">
        <p className="comment">{comment}</p>
      </div>

      <div className="button-box">
        <Link to={`${id}`}>
          <StyledButton>
            <p>수정</p>
          </StyledButton>
        </Link>

        <StyledButton onClick={deleteHanlder}>
          <p>삭제</p>
        </StyledButton>
      </div>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 50px;

  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid;

  font-family: NanumSquareRound;

  & .comment-box {
    width: 60%;

    overflow: hidden;
    height: 16px;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: keep-all;

    & .comment {
      font-family: NanumSquareRound;
    }
  }

  & .button-box {
    width: 40%;

    display: flex;
    justify-content: space-evenly;
  }
`;

const StyledButton = styled.button`
  width: 60px;

  border: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.main};
  color: white;

  & p {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.xl};
    font-family: NanumSquareRound;
  }
`;
