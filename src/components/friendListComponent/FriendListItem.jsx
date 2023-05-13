// import friendsInfo from './friends.json';
 
import propTypes from 'prop-types';

const FriendListItem = props => (
  <li class="item">
     
        <p class="name">{props.name}</p>
  </li>
);

// FriendListItem.propTypes = {
//   userImage: propTypes.string.isRequired,
//   tag: propTypes.string.isRequired,
//   name: propTypes.string.isRequired,
//   location: propTypes.string.isRequired,

//   followers: propTypes.number.isRequired,
//   views: propTypes.number.isRequired,
//   likes: propTypes.number.isRequired,
// };

export default FriendListItem;






 