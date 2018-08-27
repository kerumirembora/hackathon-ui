import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import { Wrapper } from '../Wrapper';

class MenuWrapper extends React.Component {
  componentDidMount() {
    window.$('.sidenav').sidenav();
  }

  render() {
    const { children, heading } = this.props;
    return(
      <Wrapper heading={heading}>
        <div>
          <nav style={{ marginBottom: "0px" }}>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo center">STracker</a>
              <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="sidenav">
                <li><a href="sass.html">Menu Item 1</a></li>
                <li><a href="sass.html">Menu Item 2</a></li>
              </ul>
            </div>
          </nav>        
        </div>
        { children }
      </Wrapper>
    );
  }
}

Wrapper.propTypes = {
  heading: string.isRequired
}

const mapStateToProps = state => {
  // return { children, heading } = state;
  return state;
};

// export default MenuWrapper;
export default connect(mapStateToProps, null)(MenuWrapper);