const actionTypePrefix = 'goal';


const GOAL_GET_AVAILABLE_USERS = `${actionTypePrefix}/getAvailableUsers`;
const GOAL_GET_AVAILABLE_USERS_DONE = `${actionTypePrefix}/getAvailableUsers/done`;
const GOAL_GET_AVAILABLE_USERS_ERROR = `${actionTypePrefix}/getAvailableUsers/error`;

const GOAL_INVITE_USER = `${actionTypePrefix}/inviteUser`;
const GOAL_INVITE_USER_ERROR = `${actionTypePrefix}/inviteUser/error`;

const GOAL_NEW = `${actionTypePrefix}/new`;
const GOAL_NEW_DONE = `${actionTypePrefix}/new/done`;
const GOAL_NEW_ERROR = `${actionTypePrefix}/new/error`;

const getGoalAvailableUsers = payload => ({ type: GOAL_GET_AVAILABLE_USERS, payload });
const inviteUser = payload => ({ type: GOAL_INVITE_USER, payload });

const postGoal = payload => ({ type: GOAL_NEW, payload });

export const types = {
  GOAL_GET_AVAILABLE_USERS,
  GOAL_GET_AVAILABLE_USERS_DONE,
  GOAL_GET_AVAILABLE_USERS_ERROR,

  GOAL_INVITE_USER,
  GOAL_INVITE_USER_ERROR,
  
  GOAL_NEW,
  GOAL_NEW_DONE,
  GOAL_NEW_ERROR
};

export const actions = {
  getGoalAvailableUsers,
  inviteUser,
  postGoal
}