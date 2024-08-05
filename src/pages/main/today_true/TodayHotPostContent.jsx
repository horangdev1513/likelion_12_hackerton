import styled from 'styled-components';

import commentIcon from '../../../assets/main/commentIcon.png';

export default function TodayHotPostContent({ group, nickname, likecount, text, commentCount }) {
  return (
    <Layout>
      <div className="group-nickname-box">
        <div className="emotion-nickname-box">
          {/* <img src={happy} className="emotion" /> */}
          <p className="nickname">{nickname}</p>
        </div>
      </div>
      <div className="text-box">
        <p className="text">{text}</p>
      </div>

      <div className="like-box">
        <img src={commentIcon} />
        <p className="commentCount">{commentCount}</p>
      </div>
    </Layout>
  );
}

const Layout = styled.article`
  width: 100%;
  height: 150px;

  margin: 10px 0;

  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: 15px;

  & .group-nickname-box {
    padding: 5px 15px;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .group {
      font-size: ${({ theme }) => theme.fontSize.m};
      font-weight: ${({ theme }) => theme.fontWeight.xl};
      font-family: NanumSquareRound;

    }
    & .emotion-nickname-box {
      display: flex;
      align-items: center;

      & .emotion {
        width: 24px;
        height: 24px;
      }
    }
  }

  & .text-box {
        overflow: hidden;
        height: 75px;
        white-space: normal;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        word-break: keep-all;
        padding: 0 15px;

        & .text {
          font-size: ${({ theme }) => theme.fontSize.s};
          font-weight: ${({ theme }) => theme.fontWeight.xs};
          font-family: NanumSquareRound;

          line-height: 24px;
        }
      }
    }

    & .like-box {
      width: 100%;

      margin-top: 5px;
      padding-right: 10px;
      display: flex;
      align-items: center;
      justify-content: right;

      & .commentCount {
        color: ${({ theme }) => theme.color.main};
          font-family: NanumSquareRound;
      }
    }
  }
`;

/**
 * suject-nickname-box
 *
 */
