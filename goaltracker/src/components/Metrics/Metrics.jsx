import React from 'react';
import ProgressIndicator from '../ProgressIndicator';

const metricElement = {
  display: "flex"
}

const SimpleMetric = ({ description, unit, amount }) => (
  <div style={metricElement}>
    <div>{description + ":"}</div>
    <div style={{ marginLeft: "15px" }}>{amount + " " + unit}</div>
  </div>
);

const Metrics = ({ metrics }) => (
  <div>
    { metrics.map(metric => {
      if (metric.limit)
        return (<ProgressIndicator description={metric.description} amount={metric.amount} limit={metric.limit} unit={metric.unit} key={"PI_" + metric.description} />)
      else
        return (<SimpleMetric description={metric.description} amount={metric.amount} unit={metric.unit} key={"SM_" + metric.description} />)
    }) }
  </div>
);

export default Metrics;