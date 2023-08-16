import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__teko">{title}</p>
    <img src={images.icon} alt="beer_image" className="beer__img" />
  </div>
);

export default SubHeading;
