import styled from 'styled-components';
import { LargeButton } from '../../components/buttons';

export default function MyPostsDetailEditBox({ text, onClick, onChange }) {
  return (
    <>
      <Layout>
        <StyledTextArea value={text} onChange={onChange} />
      </Layout>
      <ButtonBox>
        <LargeButton text="수정하기" onClick={onClick} />
      </ButtonBox>
    </>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 40%;

  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTextArea = styled.textarea`
  width: 90%;
  height: 90%;

  boder-color: #f2f2f2;
  resize: none;
  outline: none;
`;

const ButtonBox = styled.div`
  width: 100%;

  margin-top: 30%;
`;
