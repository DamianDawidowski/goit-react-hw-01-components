import './Statistics.css';

import propTypes from 'prop-types';

const Statistics = ({ stats, title }) => {
  var randomColor = () =>
    '#' + Math.floor(Math.random() * 16777215).toString(16);
  return (
    <section class="statistics">
      {title !== '' && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              class="itemStat"
              style={{ backgroundColor: `${randomColor()}` }}
            >
              <span class="label">{label}</span>
              <span class="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.array.isRequired,
};

export default Statistics;
