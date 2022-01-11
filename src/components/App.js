import ProfilesList from './task_1/profileList';
import users from './task_1/user.json';

import Statistics from './task_2/statistics';
import statistics from './task_2/statistics.json';

import FriendList from './task_3/friendList';
import friends from './task_3/friends.json';

import TransactionsHistory from './task_4/transactionsHistory';
import transactions from './task_4/transactions.json';

export default function App() {
  return (
    <>
      <ProfilesList items={users} />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList items={friends} />
      <TransactionsHistory items={transactions} />
    </>
  );
}
