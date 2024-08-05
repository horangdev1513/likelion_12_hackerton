import styled from 'styled-components';

// Form.jsx

export const FormLayout = styled.div`
  width: 100%;

  margin-top: 10%;

  & .buttonbox {
    margin-top: 50px;
  }
`;
// Login.jsx

export const LoginSignupParagraph = styled.p`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.l};
  font-family: NanumSquareRound;

  & .signup {
    margin-left: 10px;
    color: ${({ theme }) => theme.color.main};
    text-decoration: underline;
  }
`;
