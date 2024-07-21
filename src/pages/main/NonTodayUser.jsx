import styled from 'styled-components';
import { SmallButton } from '../../components/Button';

import happy_off from '../../assets/main/emotion_off/happy.png';
import annoyance_off from '../../assets/main/emotion_off/annoyance.png';
import anxiety_off from '../../assets/main/emotion_off/anxiety.png';
import calmness_off from '../../assets/main/emotion_off/calmness.png';
import depression_off from '../../assets/main/emotion_off/depression.png';

import happy_on from '../../assets/main/emotion_on/happy.png';
import annoyance_on from '../../assets/main/emotion_on/annoyance.png';
import anxiety_on from '../../assets/main/emotion_on/anxiety.png';
import calmness_on from '../../assets/main/emotion_on/calmness.png';
import depression_on from '../../assets/main/emotion_on/depression.png';

export default function NonTodayUser() {
  function writeButtonHandler(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
  }

  return (
    <Layout>
      <UserData>
        안녕하세요, <span className="user-name">User</span> 님!
      </UserData>
      <StyledForm onSubmit={writeButtonHandler}>
        <p className="subject-select">먼저 오늘의 글감을 선택하세요.</p>
        <div className="subject-box">
          <StyledInput id="새싹" type="radio" value="새싹" name="subject" defaultChecked />
          <label htmlFor="새싹">
            <p>새싹</p>
          </label>
          <StyledInput id="테스트" type="radio" value="테스트" name="subject" />
          <label htmlFor="테스트">테스트</label>
          <StyledInput id="테스트1" type="radio" value="테스트" name="subject" />
          <label htmlFor="테스트1">테스트1</label>
        </div>
        <p className="subject-select">먼저 오늘의 글감을 선택하세요.</p>
        <div className="emotion-box">
          <StyledInput id="happy" type="radio" value="happy" name="emotion" defaultChecked />
          <label htmlFor="happy">
            <div className="emotion-happy" />
            <p>행복</p>
          </label>
          <StyledInput id="depression" type="radio" value="depression" name="emotion" />
          <label htmlFor="depression">
            <div className="emotion-depression" />
            <p>우울</p>
          </label>
          <StyledInput id="annoyance" type="radio" value="annoyance" name="emotion" />
          <label htmlFor="annoyance">
            <div className="emotion-annoyance" />
            <p>짜증</p>
          </label>
          <StyledInput id="anxiety" type="radio" value="anxiety" name="emotion" />
          <label htmlFor="anxiety">
            <div className="emotion-anxiety" />
            <p>불안</p>
          </label>
          <StyledInput id="calmenss" type="radio" value="calmenss" name="emotion" />
          <label htmlFor="calmenss">
            <div className="emotion-calmness" />
            <p>평온</p>
          </label>
        </div>
        <div className="submit-button-box">
          <SmallButton text="글쓰러가기" type="submit" />
        </div>
      </StyledForm>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const UserData = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.xl};
  & .user-name {
    color: ${({ theme }) => theme.color.main};
  }
`;

const StyledForm = styled.form`
  width: 100%;
  margin-top: 30px;

  & .subject-select {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.l};
  }

  & .subject-box {
    width: 100%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
  }

  & .subject-box {
    & label {
      display: flex;

      align-items: center;
      justify-content: center;
      border-radius: 10px;

      background-color: white;
      width: 30%;
      height: 70px;
      text-align: center;
    }
  }

  & .submit-button-box {
    width: 100%;

    margin-top: 20%;

    display: flex;
    justify-content: center;
  }

  & .emotion-box {
    width: 100%;
    height: 130px;

    margin-top: 10px;

    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    border-radius: 15px;

    & .emotion-happy {
      width: 50px;
      height: 50px;
      background-image: url(${happy_off});
    }

    & .emotion-depression {
      width: 50px;
      height: 50px;
      background-image: url(${depression_off});
    }

    & .emotion-annoyance {
      width: 50px;
      height: 50px;
      background-image: url(${annoyance_off});
    }

    & .emotion-anxiety {
      width: 50px;
      height: 50px;
      background-image: url(${anxiety_off});
    }

    & .emotion-calmness {
      width: 50px;
      height: 50px;
      background-image: url(${calmness_off});
    }
  }
`;

const StyledInput = styled.input`
  display: none;
  &:checked + label {
    color: ${({ theme }) => theme.color.main};
    border-color: ${({ theme }) => theme.color.main};
    & .emotion-happy {
      width: 50px;
      height: 50px;
      background-image: url(${happy_on});
    }

    & .emotion-depression {
      width: 50px;
      height: 50px;
      background-image: url(${depression_on});
    }

    & .emotion-annoyance {
      width: 50px;
      height: 50px;
      background-image: url(${annoyance_on});
    }
    & .emotion-anxiety {
      width: 50px;
      height: 50px;
      background-image: url(${anxiety_on});
    }

    & .emotion-calmness {
      width: 50px;
      height: 50px;
      background-image: url(${calmness_on});
    }
  }
  & .subject-select {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.l};
  }
`;
