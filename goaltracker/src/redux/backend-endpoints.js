export const userPost = "api/User";

export const availableSubscribers = (userId, userGoalId) => {
  return "api/User/" + userId + "/usergoal/" + userGoalId + "/availablesubscribers";
}

export const addSubscriber = (userId, userGoalId) => {
  return "api/User/" + userId + "/usergoal/" + userGoalId + "/subscriber";
}

export const goalPost = userId => `api/user/${userId}/usergoal`;
export const userGoalDetails = (userId, goalId) => `api/usergoal/${goalId}?loggedUserId=${userId}`;
export const updateProgress = (userGoalId, subscriber) => `api/usergoal/${userGoalId}/subscriber/${subscriber}`;