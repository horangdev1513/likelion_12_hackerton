import Button from '../../components/Button';
import SwiperSection from './Swiper';

export default function HomePage() {
  return (
    <>
      <SwiperSection />
      <Button text="시작하기" link="/login" height={60} width={100} />
    </>
  );
}
