import React from 'react';

const getProgress = (amount, limit) => {
  return {
    width: (amount / limit * 100) + "%"
  };
};

const unitLabelStyle = {
  textAlign: 'right',
  width: "35%"
};

const ProgressIndicator = ({ description, amount, limit, unit }) => (
  <div>
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "65%" }}>{description}</div>
      <div style={unitLabelStyle}>
        { amount + "/" + limit + " " + unit }
      </div>
    </div>
    <div className="progress">
      <div className="determinate" style={getProgress(amount, limit)}></div> 
    </div>
  </div>
);

export default ProgressIndicator;