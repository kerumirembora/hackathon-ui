import React from 'react';
import { string } from 'prop-types';
import classNameCreator from 'classnames';
import DocumentTitle from 'react-document-title';
import './Wrapper.scss';

const backgroundElement = {
  backgroundColor: 'rgb(247, 247, 248)'
};

const mainElementStyle = {
  maxWidth: '480px',
  //padding: '5px 5px 5px 5px',
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
        <div style={backgroundElement}>
          <div style={mainElementStyle}>
            {children}
          </div>
        </div>
      </div>
      
    </div>
  )
}

Wrapper.propTypes = {
  heading: string.isRequired
}

export default Wrapper;