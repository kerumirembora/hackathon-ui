import React from 'react';

const getProgress = (progress, limit) => {
  return {
    width: (progress / limit * 100) + "%"
  };
};

const unitLabelStyle = {
  textAlign: 'right'
};

const ProgressIndicator = ({progress, limit, unit}) => (
  <div>
    <div className="progress">
      <div className="determinate" style={getProgress(progress, limit)}></div> 
    </div>
    <div style={unitLabelStyle}>
      { progress + "/" + limit + " " + unit }
    </div>
  </div>
);

export default ProgressIndicator;