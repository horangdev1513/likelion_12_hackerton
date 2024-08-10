import {
  LOGIN_PAGE,
  SIGN_UP_PAGE,
  MAIN_PAGE,
  MY_PAGE,
  CREATE_POST_PAGE,
  MY_PAGE_MYCOMMNETS,
  MY_PAGE_MYPOSTS,
  START_PAGE,
  POST_LISTS_PAGE,
} from '../data/constants/index';

export function selectName(path) {
  switch (path) {
    case LOGIN_PAGE:
      return {
        title: '로그인',
        leftBtn: true,
        rightBtn: false,
      };
    case SIGN_UP_PAGE:
      return {
        title: '회원가입',
        leftBtn: true,
        rightBtn: false,
      };
    case MY_PAGE:
      return {
        title: '마이페이지',
        leftBtn: true,
        rightBtn: true,
      };
    case CREATE_POST_PAGE:
      return {
        title: '글쓰기',
        leftBtn: true,
        rightBtn: true,
      };
    case MAIN_PAGE:
      return {
        title: null,
        leftBtn: false,
        rightBtn: true,
      };
    case MY_PAGE_MYCOMMNETS:
      return {
        title: '나의 활동 내역',
        leftBtn: true,
        rightBtn: true,
      };
    case MY_PAGE_MYPOSTS:
      return {
        title: '나의 활동 내역',
        leftBtn: true,
        rightBtn: true,
      };
    case POST_LISTS_PAGE:
      return {
        title: '글 모아보기',
        leftBtn: true,
        rightBtn: true,
      };
    default:
      return {
        title: 'test',
        leftBtn: true,
        rightBtn: true,
      };
  }
}
