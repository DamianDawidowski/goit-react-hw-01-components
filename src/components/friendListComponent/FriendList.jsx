//  import friendsInfo from './friends.json';
import './FriendList.css';
// import propTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import friends from './friends.json'


const FriendList = ({ friends }) => {
  return (
    <div>
      <ul>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </div>
  );
};






// FriendList.propTypes = {
//   userImage: propTypes.string.isRequired,
//   tag: propTypes.string.isRequired,
//   name: propTypes.string.isRequired,
//   location: propTypes.string.isRequired,

//   followers: propTypes.number.isRequired,
//   views: propTypes.number.isRequired,
//   likes: propTypes.number.isRequired,
// };

export default FriendList;
