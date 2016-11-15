'use strict';

import axios from 'axios';
import store from './store';
import {SetPicturesToState} from './action-creators/Pictures';

export const onTravelEnter = function () {
  if (!store.getState().pictures.length) {
    axios.get('api/')
    .then(pictures => pictures.data)
    .then(pictures => store.dispatch(SetPicturesToState(pictures)));
  }
};
