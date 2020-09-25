import React from 'react';
import PropTypes from 'prop-types';
import { uniqueItems } from '../../utils/utilites';
import './SideCard.scss';

const SideCard = ({ clear, data, onClear }) => (
  <>
    {!clear && <div className="side__bar">
      <span role="button" className="cross" onClick={() => onClear()} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
      <div className="side__bar__info">
        <div className="side__bar__title">Title: <span>{data[0].title}</span></div>
        <div className="side__bar__title"> Release Year: <span>{data[0].release_year}</span></div>
        <div className="side__bar__locations">
          <div>Locations:</div>
          {uniqueItems(data, 'locations').map(d => (
            <div className="side__bar__locations__info" key={d.locations}>
              {d.locations}
            </div>
          ))}
        </div>
      </div>
    </div>}
  </>
);

SideCard.propTypes = {
  clear: PropTypes.bool.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
  onClear: PropTypes.func.isRequired,
};

export default SideCard;
