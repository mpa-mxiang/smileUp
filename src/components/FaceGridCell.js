import React from 'react';
import PropTypes from 'prop-types';

function FaceGridCell({ imgUrl }) {
  return (
    <div>
      <img src={imgUrl} alt="Face" className="w-full" />
    </div>
  );
}

FaceGridCell.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default FaceGridCell;
