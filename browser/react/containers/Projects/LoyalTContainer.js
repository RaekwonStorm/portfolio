'use strict';

import { connect } from 'react-redux';
import LoyalT from '../../components/Projects/LoyalT';

const mapStateToProps = function ({language}, ownProps) {
  return {
    language
  };
}


const statefulComponentCreator = connect(mapStateToProps);
const LoyalTContainer = statefulComponentCreator(LoyalT);
export default LoyalTContainer;
