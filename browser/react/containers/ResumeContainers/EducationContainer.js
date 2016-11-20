'use strict';

import { connect } from 'react-redux';
import Education from '../../components/ResumeComponents/Education';

const mapStateToProps = function ({language}, ownProps) {
  return {
    language
  };
}


const statefulComponentCreator = connect(mapStateToProps);
const EducationContainer = statefulComponentCreator(Education);
export default EducationContainer;
