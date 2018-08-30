export const userPost = "api/User";

export const availableSubscribers = (userId, userGoalId) => {
  return "api/User/" + userId + "/usergoal/" + userGoalId + "/availablesubscribers";
}

export const addSubscriber = (userId, userGoalId) => {
  return "api/User/" + userId + "/usergoal/" + userGoalId + "/subscriber";
}