import { Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Swiper.jsx

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 70vh;
  border-radius: 10px;
  cursor: grabbing;
  &::-webkit-scrollbar {
    display: none;
  }
  .swiper-slide {
    width: 100%;
    background-color: transparent !important;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & .imgBox {
    width: 200px;
    height: 120px;
    margin-bottom: 50px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & .title {
    text-align: center;
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.xl};
  }

  & .content {
    text-align: center;
    margin-bottom: 5px;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.xs};
  }
`;

// Button.jsx

export const StyleLink = styled(Link)`
  width: 100%;
  height: 60px;
  margin-top: 30px;
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.main};
  color: white;

  & p {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.xl};
  }
`;