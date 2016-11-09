'use strict';

import { connect } from 'react-redux';
import Portfolio from '../components/Portfolio';

const mapStateToProps = function ({language}, ownProps) {
  return {
    language
  };
}


const statefulComponentCreator = connect(mapStateToProps);
const PortfolioContainer = statefulComponentCreator(Portfolio);
export default PortfolioContainer;
