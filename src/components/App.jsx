import Style from "./App.module.css";

// Importowane komponenty ⬎
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactionHistory/TransactionHistory";

//Importowane dane ⬎
import user from "./profile/user.json";
import data from "./statistics/data.json";
import friends from "./friendList/friends.json";
import transactions from "./transactionHistory/transactions.json";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
