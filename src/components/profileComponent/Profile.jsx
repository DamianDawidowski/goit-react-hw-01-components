import userInfo from './user.json';
import css from './Profile.css';
import propTypes from 'prop-types';

const Profile = ({
  userImage = userInfo.avatar,
  tag = userInfo.tag,
  name = userInfo.username,
  location = userInfo.location,
  followers = userInfo.stats.followers,
  views = userInfo.stats.views,
  likes = userInfo.stats.likes,
}) => (
  <div class="profile">
    <div class="description">
      <img src={userImage} alt={tag} class="avatar" />
      <p class="name">{name}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  userImage: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  location: propTypes.string.isRequired,

  followers: propTypes.number.isRequired,
  views: propTypes.number.isRequired,
  likes: propTypes.number.isRequired,
};

export default Profile;
