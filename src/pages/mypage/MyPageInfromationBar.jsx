import styled from 'styled-components';

export default function InformationBar({ children }) {
  return <IBLayout>{children}</IBLayout>;
}

const IBLayout = styled.div`
  width: 100%;
  height: 50px;

  padding: 0 10px;
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;

  border-radius: 10px;

  & .infobox {
    display: flex;
    align-items: center;
    & span {
      font-size: ${({ theme }) => theme.fontSize.s};
      font-weight: ${({ theme }) => theme.fontWeight.xl};
      font-family: NanumSquareRound;
    }
    & span:last-child {
      // color: ${({ theme }) => theme.color.main};
    }
  }
  & .text {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.xl};
    font-family: NanumSquareRound;
  }

  & .link {
    text-decoration: underline;

    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.l};
    font-family: NanumSquareRound;

    color: rgba(118, 118, 118, 1);
  }
`;
