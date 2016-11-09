'use strict';

import { combineReducers } from 'redux';
import {SET_CHINESE, SET_ENGLISH} from '../action-creators/ToggleLanguage';
import {SET_PICTURES} from '../action-creators/Pictures';

function LanguageReducer (state = 'English', action) {
  switch (action.type) {
    case SET_ENGLISH: return 'English'
    case SET_CHINESE: return 'Chinese'
    default: return state;
  }
}

function PictureReducer (state = [], action) {
  switch (action.type) {
    case SET_PICTURES: return action.pictures;
    default: return state;
  }
}

export default combineReducers({language: LanguageReducer, pictures: PictureReducer});
