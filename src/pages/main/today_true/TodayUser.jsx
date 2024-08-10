import TodayPost from './TodayPost';
import TodayPostLayout from './TodayPostLayout';
import TodayHotPostLayout from './TodayHotPostLayout';
import TodayHotPostBox from './TodayHotPostBox';

export default function TodayUser() {
  return (
    <>
      <TodayPostLayout>
        <TodayPost />
      </TodayPostLayout>

      <TodayHotPostLayout>
        <TodayHotPostBox />
      </TodayHotPostLayout>
    </>
  );
}
