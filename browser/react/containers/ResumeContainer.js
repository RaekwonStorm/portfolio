'use strict';

import { connect } from 'react-redux';
import Resume from '../components/Resume';

const mapStateToProps = function ({language}, ownProps) {
  return {
    language
  };
}


const statefulComponentCreator = connect(mapStateToProps);
const ResumeContainer = statefulComponentCreator(Resume);
export default ResumeContainer;
