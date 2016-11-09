'use strict';

import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { toggleEnglish, toggleChinese } from '../action-creators/ToggleLanguage';

const mapStateToProps = function ({language}, ownProps) {
  return {
    language
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    toggleChinese: function () {
      dispatch(toggleChinese());
    },
    toggleEnglish: function () {
      dispatch(toggleEnglish());
    }
  }
};

const statefulComponentCreator = connect(mapStateToProps, mapDispatchToProps);
const NavContainer = statefulComponentCreator(Navbar);
export default NavContainer;
