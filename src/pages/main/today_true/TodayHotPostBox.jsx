import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import TodayHotPostContent from './TodayHotPostContent';
import { useAtom } from 'jotai';
import { postsNewAtom } from '../../../atoms';

export default function TodayHotPostBox() {
  const [{ data, isPending, isError }] = useAtom(postsNewAtom);

  if (isPending) {
    return (
      <LoadingBox>
        <RotatingLines visible={true} width="30" height="30" color="white" strokeColor="rgba(74, 144, 226, 1)" />
      </LoadingBox>
    );
  }

  return (
    <Layout>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {data.map(prod => {
          return (
            <SwiperSlide key={prod.id}>
              <TodayHotPostContent
                nickname={prod.memberNickname}
                text={prod.content}
                commentCount={prod.commentCount}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 100%;

  overflow: scroll;

  margin-top: 10px;
`;

const LoadingBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
