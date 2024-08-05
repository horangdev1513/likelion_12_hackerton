import { SuccessModal } from '../../components/modal';
import CreatePostInformation from './CreatePostInformation';
import CreatePostInput from './CreatePostInput';
import { CreatePostLayout } from './CreatePostLayout';

export default function PostWriting() {
  return (
    <>
      <SuccessModal />
      <CreatePostInformation />
      <CreatePostInput />
    </>
  );
}
