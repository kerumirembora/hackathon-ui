const actionTypePrefix = 'user';

const POST_USER = `${actionTypePrefix}/post`;
const POST_USER_DONE = `${actionTypePrefix}/post/done`;
const POST_USER_ERROR = `${actionTypePrefix}/post/error`;

const postUser = payload => ({ type: POST_USER, payload });

export const types = {
  POST_USER,
  POST_USER_DONE,
  POST_USER_ERROR
};

export const actions = {
  postUser
}