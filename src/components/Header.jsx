import { GoArrowLeft } from 'react-icons/go';
import { FaBars } from 'react-icons/fa';
import { HeaderLayout, HeaderTitle } from './styles';

export default function Header({ title }) {
  return (
    <HeaderLayout>
      <div className="leftButton">
        <button>
          <GoArrowLeft size="30" />
        </button>
      </div>
      <div className="centertitle">
        <HeaderTitle>{title ? title : null}</HeaderTitle>
      </div>
      <div className="rightButton">
        <button>
          <FaBars size="20" />
        </button>
      </div>
    </HeaderLayout>
  );
}
