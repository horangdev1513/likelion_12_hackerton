import { Link } from 'react-router-dom';

import { LoginSignupParagraph } from './styles';
import Form from './Form';

export default function LoginPage() {
  return (
    <>
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
