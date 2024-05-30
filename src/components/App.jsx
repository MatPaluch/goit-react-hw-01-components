import Style from "./App.module.css";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import user from "./profile/user.json";
import data from "./statistics/data.json";

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
    </>
  );
}

export default App;
