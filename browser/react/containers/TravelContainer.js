'use strict';

import { connect } from 'react-redux';
import TravelImages from '../components/TravelImages';
import { SetPicturesToState } from '../action-creators/Pictures';

const mapStateToProps = function ({pictures, language}, ownProps) {
  return {
    pictures,
    language
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    SetPicturesToState: function (pictures) {
      dispatch(SetPicturesToState(pictures));
    }
  };
};

const statefulComponentCreator = connect(mapStateToProps, mapDispatchToProps);
const TravelContainer = statefulComponentCreator(TravelImages);
export default TravelContainer;
