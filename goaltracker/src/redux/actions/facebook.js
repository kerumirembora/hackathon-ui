const actionTypePrefix = 'facebook';

const FB_NEW = `${actionTypePrefix}/new`;
const FB_NEW_DONE = `${actionTypePrefix}/new/done`;
const FB_NEW_ERROR = `${actionTypePrefix}/new/error`;


const postFacebookMinutes = payload => ({ type: FB_NEW, payload });

export const types = {
    FB_NEW,
    FB_NEW_DONE,
    FB_NEW_ERROR
};

export const actions = {
    postFacebookMinutes
}