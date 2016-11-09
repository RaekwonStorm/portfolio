'use strict';

import store from './store';
import {SetPicturesToState} from './action-creators/Pictures';

export const onTravelEnter = function () {
  if (!store.getState().pictures.length) {
    fetch('api/')
    .then(pictures => pictures.json())
    .then(pictures => store.dispatch(SetPicturesToState(pictures)));
  }
};
