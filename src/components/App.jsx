import FriendList from './friendListComponent/FriendList';
import Profile from './profileComponent/Profile';
import userInfo from '../components/profileComponent/user.json';
import friends from '../components/friendListComponent/friends.json';
import Statistics from './statisticsComponent/Statistics';
import statsData from '../components/statisticsComponent/data.json';


export const App = () => {
  const { username, tag, location, avatar, stats } = userInfo;
  const {  title, data } = statsData;
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        userImage={avatar}
        tag={tag}
        name={username}
        location={location}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />

      <Statistics title="Upload stats" stats={statsData} />
   

      <FriendList friends={friends} />
    </div>
  );
};
