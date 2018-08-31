import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import MenuWrapper from './../MenuWrapper';
import { actions } from '../../redux/actions/goal';
import MapImg from './../../work map.png';

const categories = [
    { 
        id: 1, 
        name: "Social", 
        img: "https://financialtribune.com/sites/default/files/styles/slideshow/public/field/image/shahrivar1/12_Social%20Media%20%281%29.jpg?itok=WU4SVOlO&c=a30dbb2db167c853d8c65a6b85b89f8a",
        description: "My social media activities",
        unit: "mins"
    },
    { 
        id: 3, 
        name: "Trip", 
        img: "https://media.timeout.com/images/101594229/630/472/image.jpg",
        description: "Going on a trip",
        unit: "kr"
    },
    {
        id: 2, 
        name: "Curse Jar", 
        img: "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F67767244-0b54-11e7-85f8-9e9ad2f5cb5c.jpg?crop=3469%2C1951%2C311%2C2266&resize=685",
        description: "For whenever I say something inappropriate",
        unit: "curses"
    }
];

const getCategory = (id) => {
    return categories.find((cat) => cat.id === id);
};

const wrapperStyle = {
    backgroundColor: "white",
    height: "100%"
};

const styleCardItem = {
    overflow: "hidden"
};
const styleCardImgContainer = {
    height: "170px"
};
const styleCardImg = {
    position: "absolute",
    top: "0"
};
const styleCardTitle = {
    zIndex: 2,
    textShadow: "0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)"
};
const styleDarkOverlay = {
    position: "absolute",
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    zIndex: 1,
    opacity: 0.3
};

const Warning = ({ show }) => {
    if (!show) {
        return null;
    }
    
    return (
        <div className="alert alert-error">
            <p>Ooops, an error happened while trying to create the goal. Please make sure all fields are filled.</p>
        </div>
    );
};

const locationLabelStyle = {
    fontSize: "1rem"
};
const mapImgStyle = {
    height: "165px",
    background: `url('${MapImg}') -80px -50px`
};

class LocationComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            setLocation: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ setLocation: e.target.checked });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s9 offset-s1">
                        <label htmlFor="location" style={locationLabelStyle}>Set a Specific location</label>
                    </div>
                    <div className="col s2">
                        <div className="switch">
                            <label>
                                <input id="location" type="checkbox" onChange={this.handleChange} />
                                <span className="lever"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={`row${this.state.setLocation ? '' : ' hide'}`}>
                    <div className="col s10 offset-s1">
                        {/* <img src={require('./../../work map.png')} alt="location" style={mapImgStyle} /> */}
                        <div style={mapImgStyle}></div>
                    </div>                    
                </div>
            </div>
        );
    }
}

class CreateGoalComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            amountLimit: '',
            unit: '',
            savingsAmount: '',
            deadlineDate: '',
            goalTypeId: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.cat = getCategory(parseInt(this.props.match.params.catID));
        this.state.unit = this.cat.unit;
        this.state.goalTypeId = this.cat.id;
    }

    componentDidMount() {
        window.$('.datepicker').datepicker();
    }

    handleChange(ev) {
        this.setState({ [ev.target.id]: ev.target.value });
    }

    createGoal() {
        const i = window.M.Datepicker.getInstance(window.$('.datepicker'));
        const selectedDate = new Date(i.$el.val());
        // "yyyy-MM-dd" » `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        this.state.deadlineDate = i.$el.val() && selectedDate.toLocaleDateString();
        this.state.userId = 1;
        this.props.postGoal(this.state);
    }

    render() {
        const { goBack, error } = this.props;        

        return (
            <MenuWrapper heading="New Goal" onBack={goBack}>
                <div className="category-detail-wrapper" style={wrapperStyle}>

                    <div className="card" style={styleCardItem}>
                        <div className="card-image" style={styleCardImgContainer}>
                            <img src={this.cat.img} style={styleCardImg} alt={this.cat.name}/>
                            <span className="card-title" style={styleCardTitle}>{this.cat.name}</span>
                            <div className="dark-overlay" style={styleDarkOverlay}></div>
                        </div>
                    </div>

                    <form>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">place</i>
                                <input 
                                    id="name" 
                                    type="text" 
                                    className="validate" 
                                    value={this.state.name}
                                    onChange={this.handleChange} />
                                <label htmlFor="name">Goal Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">exposure</i>
                                <input 
                                    id="amountLimit" 
                                    type="number" 
                                    className="validate"
                                    value={this.state.amountLimit} 
                                    onChange={this.handleChange}/>
                                <label htmlFor="amountLimit">Limit</label>
                            </div>
                            <div className="input-field col s6">
                                <input 
                                    disabled 
                                    id="unit" 
                                    type="text" 
                                    className="validate" 
                                    onChange={this.handleChange} 
                                    value={this.state.unit} />
                                <label htmlFor="unit" className="active">Unit</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">event</i>
                                <input 
                                    id="deadlineDate" 
                                    type="text" 
                                    className="datepicker" />
                                <label htmlFor="deadlineDate">End Date</label>
                            </div>
                        </div>
                        <div className={`row${this.cat.id === 3 ? ' hide': ''}`}>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">attach_money</i>
                                <input 
                                    id="savingsAmount" 
                                    type="number" 
                                    className="validate"
                                    value={this.state.savingsAmount} 
                                    onChange={this.handleChange}/>
                                <label htmlFor="savingsAmount">Amount to save for each unit</label>
                            </div>
                        </div>
                        <div className={`row${this.cat.id !== 1 ? ' hide': ''}`}>
                            <LocationComponent />
                        </div>
                    </form>
                </div>

                <div style={{ marginTop: "auto", backgroundColor: "#EE6E73", textAlign: "center", paddingTop: "8px", paddingBottom: "8px" }}>
                    <a className="waves-effect waves-light btn red" onClick={() => this.createGoal()}><i className="material-icons right">send</i>Create Goal</a>
                </div>

                <Warning show={error}/>
            </MenuWrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.goaltracker.goal.postGoal
    }
};

const mapDispatchToProps = dispatch => {
  return {
    goBack: (ev) => {
        ev.preventDefault();
        dispatch(push('/goals-categories'));
    },
    postGoal: (goal) => {
        dispatch(actions.postGoal(goal));
    }
  }
};

export const CreateGoal = connect(mapStateToProps, mapDispatchToProps)(CreateGoalComponent);