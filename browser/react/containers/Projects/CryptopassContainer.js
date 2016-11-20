'use strict';

import { connect } from 'react-redux';
import Cryptopass from '../../components/Projects/Cryptopass';

const mapStateToProps = function ({language}, ownProps) {
  return {
    language
  };
}


const statefulComponentCreator = connect(mapStateToProps);
const CryptopassContainer = statefulComponentCreator(Cryptopass);
export default CryptopassContainer;
