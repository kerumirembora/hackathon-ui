import React from 'react';
import { string } from 'prop-types';
import classNameCreator from 'classnames';
import DocumentTitle from 'react-document-title';
import './Wrapper.scss';

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
        {children}
      </div>
      
    </div>
  )
}

Wrapper.propTypes = {
  heading: string.isRequired
}

export default Wrapper;