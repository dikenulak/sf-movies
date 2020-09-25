import React from 'react';
import PropTypes from 'prop-types';
import { getMovieInfo } from '../../utils/utilites';
import CustomSelect from '../Select/Select';
import image from '../../image/sanfrancisco.jpg';

const LeftSideCard = ({ actualData, onReset, movieTitle, onDropDownChange }) => (
  <aside>
    <div className="aside__heading">
      <div>
        <img className="aside__image" src={image} alt="" />
      </div>
      <span>
        Places where movies have been filmed in <b> San Francisco </b>
      </span>
    </div>
    <CustomSelect
      label="Movie Title"
      placeholder="Search by movie title"
      options={getMovieInfo(actualData, 'title')}
      getOptionValue={({ value }) => value}
      getOptionLabel={({ label }) => label}
      onChange={event => onDropDownChange(event.value, 'movieTitle')}
      value={getMovieInfo(actualData, 'title').filter(({ value }) => value === movieTitle)}
    />
    <span className="aside__reset" onClick={() => onReset()}>Reset</span>
  </aside>
);

LeftSideCard.propTypes = {
  actualData: PropTypes.instanceOf(Object).isRequired,
  onReset: PropTypes.func.isRequired,
  onDropDownChange: PropTypes.func.isRequired,
  movieTitle: PropTypes.func.isRequired,
};

export default LeftSideCard;
