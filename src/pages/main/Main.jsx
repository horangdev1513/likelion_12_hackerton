import { NonTodayUser } from './today_false';
import { TodayUser } from './today_true';
import { useAtomValue } from 'jotai';
import { readUserToday } from '../../atoms';

export default function MainPage() {
  const userTodayValue = useAtomValue(readUserToday);

  return <>{userTodayValue ? <TodayUser /> : <NonTodayUser />}</>;
}
