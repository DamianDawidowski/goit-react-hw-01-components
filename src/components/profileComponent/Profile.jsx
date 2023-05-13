import userInfo from '../../data_JSON/user.json';
 
import propTypes from 'prop-types';


const Profile = () => (
  <li>
    <img src={userInfo.avatar} alt={userInfo.avatar.tag} width="640" />
    <h2>{userInfo.username}</h2>
  </li>
);

Profile.propTypes = {
  imgUrl: propTypes.string,
  username: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  leftInStock: propTypes.number,
};

export default Profile;
