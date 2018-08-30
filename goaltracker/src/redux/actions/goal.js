const actionTypePrefix = 'goal';

const GOAL_GET_AVAILABLE_USERS = `${actionTypePrefix}/getAvailableUsers`;
const GOAL_GET_AVAILABLE_USERS_DONE = `${actionTypePrefix}/getAvailableUsers/done`;
const GOAL_GET_AVAILABLE_USERS_ERROR = `${actionTypePrefix}/getAvailableUsers/error`;

const GOAL_INVITE_USER = `${actionTypePrefix}/inviteUser`;
const GOAL_INVITE_USER_ERROR = `${actionTypePrefix}/inviteUser/error`;

const getGoalAvailableUsers = payload => ({ type: GOAL_GET_AVAILABLE_USERS, payload });
const inviteUser = payload => ({ type: GOAL_INVITE_USER, payload });

export const types = {
  GOAL_GET_AVAILABLE_USERS,
  GOAL_GET_AVAILABLE_USERS_DONE,
  GOAL_GET_AVAILABLE_USERS_ERROR,

  GOAL_INVITE_USER,
  GOAL_INVITE_USER_ERROR
};

export const actions = {
  getGoalAvailableUsers,
  inviteUser
}