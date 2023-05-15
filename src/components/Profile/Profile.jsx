import './Profile.css';
import propTypes from 'prop-types';

const Profile = ({ userImage, tag, name, location, stats }) => (
  <div class="profile">
    <div class="description">
      <img src={userImage} alt={tag} class="avatar" width="148" />
      <p class="name">{name}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{stats.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  userImage: propTypes.string.isRequired,
  tag: propTypes.string,
  name: propTypes.string.isRequired,
  location: propTypes.string,
  stats: propTypes.shape({
    followers: propTypes.number,
    views: propTypes.number,
    likes: propTypes.number,
  }),
};

export default Profile;
