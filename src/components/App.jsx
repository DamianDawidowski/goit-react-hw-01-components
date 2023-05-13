import FriendList from "./friendListComponent/FriendList";
import Profile from "./profileComponent/Profile";
import userInfo from '../components/profileComponent/user.json';

export const App = () => {

    const { username, tag, location, avatar, stats } = userInfo;
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
      tag = {tag} 
      name = {username} 
      location = {location} 
      followers = { stats.followers} 
      views = { stats.views} 
       likes = { stats.likes} 
       
      />
      {/* <FriendList /> */}
    </div>
  );
};
