import './FriendList.css';

import propTypes from 'prop-types';
import FriendListItem from './FriendListItem';

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

FriendList.propTypes = {
  friends: propTypes.array.isRequired,
};

export default FriendList;
