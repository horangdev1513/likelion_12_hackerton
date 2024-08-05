import { Link } from 'react-router-dom';

import { LoginSignupParagraph } from './styles';

import LoginLogo from '../../assets/svg/login.svg?react';
import Form from './Form';
import { WarningModal } from '../../components/modal';
import styled from 'styled-components';

export default function LoginPage() {
  return (
    <>
      <WarningModal />
      <LogoBox>
        <LoginLogo />
      </LogoBox>

      <Form />
      <LoginSignupParagraph>
        아직 회원이 아니신가요?
        <Link to="/signup">
          <span className="signup">회원가입</span>
        </Link>
      </LoginSignupParagraph>
    </>
  );
}

const LogoBox = styled.div`
  margin-right: 50%;
  margin-top: 10%;
`;
