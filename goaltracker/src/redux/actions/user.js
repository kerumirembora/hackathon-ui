const actionTypePrefix = 'user';

const USER_GET_DATA = `${actionTypePrefix}/getData`;
const USER_GET_DATA_DONE = `${actionTypePrefix}/getData/done`;
const USER_GET_DATA_ERROR = `${actionTypePrefix}/getData/error`;
const getUserData = payload => ({ type: USER_GET_DATA, payload });

const USER_GET_GOAL_DATA = `${actionTypePrefix}/getGoalData`;
const USER_GET_GOAL_DATA_DONE = `${actionTypePrefix}/getGoalData/done`;
const USER_GET_GOAL_DATA_ERROR = `${actionTypePrefix}/getGoalData/error`;
const getUserGoalData = payload => ({ type: USER_GET_GOAL_DATA, payload });

export const types = {
  USER_GET_DATA,
  USER_GET_DATA_DONE,
  USER_GET_DATA_ERROR,
  
  USER_GET_GOAL_DATA,
  USER_GET_GOAL_DATA_DONE,
  USER_GET_GOAL_DATA_ERROR
};

export const actions = {
  getUserData,
  getUserGoalData
}