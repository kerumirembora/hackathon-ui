import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/facebook';
import SolImage from './../../solskjaer.png';

const solImgStyle = {
    position: "absolute",
    top: 0
};
const sectionStyle = {
    position: "relative"
};

const actionsWrapperStyle = {
    position: "absolute",
    top: "620px",
    width: "195px",
    padding: "5px 7px"
};

class FacebookSnitcherComponent extends React.Component {
    constructor() {
        super();

        this.state = {            
            minutes: 0
        };

        this.onchange = this.onchange.bind(this);
    }

    onchange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.postFacebookMinutes(this.props.id, this.state.minutes);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="section" style={sectionStyle}>
                        <img src={SolImage} alt="solskjaer" style={solImgStyle}/>
                        <div className="actions-wrapper" style={actionsWrapperStyle}>
                            <form>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="minutes" 
                                            type="number"
                                            className="validate"
                                            value={this.state.minutes}
                                            onChange={this.onchange} />
                                        <label htmlFor="minutes" className="active">Minutes spent in facebook</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={(e)=>this.onSubmit(e)}>Submit<i className="material-icons right">send</i></button>
                                    </div>                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        id: state.goaltracker.user.userData.id || 1
    };
};

const mapDispatchToProps = dispatch => {
  return {
    postFacebookMinutes: (userId, minutes) => {
        dispatch(actions.postFacebookMinutes({ userId, minutes }));
    }
  };
};

export const FacebookSnitcher = connect(mapStateToProps, mapDispatchToProps)(FacebookSnitcherComponent);