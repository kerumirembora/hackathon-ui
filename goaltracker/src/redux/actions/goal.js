const actionTypePrefix = 'goal';

const GOAL_NEW = `${actionTypePrefix}/new`;
const GOAL_NEW_DONE = `${actionTypePrefix}/new/done`;
const GOAL_NEW_ERROR = `${actionTypePrefix}/new/error`;

const postGoal = payload => ({ type: GOAL_NEW, payload });

export const types = {
    GOAL_NEW,
    GOAL_NEW_DONE,
    GOAL_NEW_ERROR
};

export const actions = {
    postGoal
}