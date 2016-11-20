'use strict';

import { connect } from 'react-redux';
import Experience from '../../components/ResumeComponents/Experience';

const mapStateToProps = function ({language}, ownProps) {
  return {
    language
  };
}


const statefulComponentCreator = connect(mapStateToProps);
const ExperienceContainer = statefulComponentCreator(Experience);
export default ExperienceContainer;
