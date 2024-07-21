import { useNavigate } from 'react-router-dom';

import { GoArrowLeft } from 'react-icons/go';
import { FaBars } from 'react-icons/fa';
import { HeaderLayout, HeaderTitle } from './styles';

/**
 * 한 것
 *  - 뒤로 가기 로직 추가
 *
 * 할 것
 *  - 메뉴바
 *  - path별 레이아웃 변경
 */
export default function Header({ title }) {
  const navigate = useNavigate();

  function backButtonHandler() {
    navigate(-1);
  }

  return (
    <HeaderLayout>
      <div className="leftButton">
        <button onClick={backButtonHandler}>
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
