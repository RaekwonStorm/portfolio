export const SET_PICTURES = 'SET_PICTURES';

export const SetPicturesToState = function (pictures) {
  const action = {
    type: SET_PICTURES,
    pictures
  }
  return action;
};
