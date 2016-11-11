import React from 'react';

import './ContentWrapper.scss';

const ContentWrapper = ({children, className = ""}) => (
  <div className={`content-wrapper ${className}`}>{children}</div>
);

export default ContentWrapper;
