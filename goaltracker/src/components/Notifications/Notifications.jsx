import React from 'react';
import { connect } from 'react-redux';
import MenuWrapper from './../MenuWrapper';

const notificationsData = [
    { id: 1, date: new Date('2018-08-25T18:27:00'), message:'Your "mins" counter has been increased by 3.' },
    { id: 2, date: new Date('2018-08-27T16:22:00'), message:'Your "mins" counter has been increased by 17.' },
    { id: 3, date: new Date('2018-08-25T21:27:00'), message:'You have increased your "curses" counter by 1.' },
    { id: 4, date: new Date('2018-08-26T18:31:00'), message:'You have increased your "curses" counter by 1.' },
    { id: 5, date: new Date('2018-08-26T18:37:00'), message:'You have increased your "curses" counter by 1.' }
];

const listStyle = {
    border: "none"
};
const itemStyle = {
    borderBottom: "1px solid #e0e0e0"
};
const itemTitleStyle = {
    fontSize: "11px"
};

const NotificationItem = ({ date, message, id }) => (
    <li className="collection-item" style={itemStyle}>
        <span className="title" style={itemTitleStyle}>{date.toLocaleString()}</span>
        <p>{message}</p>        
    </li>
);

class NotificationsComponent extends React.Component {
    render() {
        return (
            <MenuWrapper heading="Notifications">
                <div className="notifications-wrapper">
                    <ul className="collection" style={listStyle}>
                        {
                            notificationsData.map(notification =>
                                <NotificationItem date={notification.date} message={notification.message} key={ "notificationElement_" + notification.id }/>)
                        }
                    </ul>
                </div>
            </MenuWrapper>
        );
    }
}

export const Notifications = connect(null, null)(NotificationsComponent);