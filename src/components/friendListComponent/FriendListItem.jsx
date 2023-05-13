import propTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  let status = isOnline ? 'statusOnline' : 'statusOffline';
  return (
    <li class="item" style={{ width: '200px' }}>
      <span class={status}></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class={'name'}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool,
};

export default FriendListItem;
