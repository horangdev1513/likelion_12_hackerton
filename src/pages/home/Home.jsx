import SwiperSection from './Swiper';
import { useNavigate } from 'react-router-dom';

import { LargeButton } from '../../components/Button';
import { HomeButtonBox } from './styles';

export default function HomePage() {
  const navigate = useNavigate();

  function navHandler() {
    navigate('/login');
  }
  return (
    <>
      <SwiperSection />
      <HomeButtonBox>
        <LargeButton text="시작하기" onClick={navHandler} />
      </HomeButtonBox>
    </>
  );
}
