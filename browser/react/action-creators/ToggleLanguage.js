export const SET_ENGLISH = 'SET_ENGLISH';
export const SET_CHINESE = 'SET_CHINESE';

export const toggleEnglish = function () {
  const action = {
    type: SET_ENGLISH,
  };
  return action;
};

export const toggleChinese = function () {
  const action = {
    type: SET_CHINESE,
  };
  return action;
};
