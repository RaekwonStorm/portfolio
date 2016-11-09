'use strict';

import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = function ({language}, ownProps) {
  return {
    language
  };
}


const statefulComponentCreator = connect(mapStateToProps);
const HomeContainer = statefulComponentCreator(Home);
export default HomeContainer;
