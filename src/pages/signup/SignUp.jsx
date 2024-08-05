import { SuccessModal, WarningModal } from '../../components/modal';
import Form from './SignUpForm';

export default function SignUpPage() {
  return (
    <>
      <SuccessModal />
      <WarningModal />
      <Form />
    </>
  );
}
