import React from 'react';
import { string } from 'prop-types';
import { Wrapper } from '../Wrapper';

const MenuWrapper = ({
  children, heading
}) => {
  return(
    <Wrapper heading={heading}>
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo right">STracker</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="sass.html">Menu</a></li>
            </ul>
          </div>
        </nav>
        { children }
      </div>
    </Wrapper>
  );
};

Wrapper.propTypes = {
  heading: string.isRequired
}

export default MenuWrapper;