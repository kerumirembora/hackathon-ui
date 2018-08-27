import React from 'react';
import { string } from 'prop-types';
import classNameCreator from 'classnames';
import DocumentTitle from 'react-document-title';
import './Wrapper.scss';


const mainElementStyle = {
  maxWidth: '480px',
  minHeight: '790px',
  height: '790px',
  backgroundColor: 'white',
  margin: 'auto'
};

const Wrapper = ({
  children, heading
}) => {
  const classNames = classNameCreator(
    'c-savingsgoal-wrapper',
    {

    }
  );

  return(
    <div className={classNames}>
      <div className="c-savingsgoal-wrapper-header">
        <DocumentTitle title={heading} />
      </div>
      <div className="c-savingsgoal-wrapper-content">
        <div style={mainElementStyle}>
          {children}
        </div>
      </div>
    </div>
  )
}

Wrapper.propTypes = {
  heading: string.isRequired
}

export default Wrapper;