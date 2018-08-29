import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import { Wrapper } from '../Wrapper';

class MenuWrapper extends React.Component {
  componentDidMount() {
    window.$('.sidenav').sidenav();
  }

  render() {
    const { children, heading, onBack } = this.props;
    let styleMenuBtn = {
      display: "block"
    };
    let onBackButton;
    if (onBack) {
      onBackButton =  <ul className="left">
                        <li><a href="/" className="back-button" onClick={onBack}><i className="material-icons">arrow_back</i></a></li>
                      </ul>;
      styleMenuBtn.display = "none";
    }

    return(
      <Wrapper heading={heading}>
        <div>
          <nav style={{ marginBottom: "0px" }}>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center">STracker</a>
              <a href="/" data-target="nav-mobile" className="sidenav-trigger menu-button" style={styleMenuBtn}><i className="material-icons">menu</i></a>
              {onBackButton}
              <ul className="right">
                <li><a href="/" className="notification-button"><i className="material-icons">notifications</i></a></li>
              </ul>
              <ul id="nav-mobile" className="sidenav">
                <li><a href="sass.html"><i className="material-icons left">person</i>My Profile</a></li>
                <li><a href="sass.html"><i className="material-icons left">settings</i>Settings</a></li>
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