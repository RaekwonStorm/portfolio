'use strict';

import { connect } from 'react-redux';
import Footer from '../components/Footer';

const mapStateToProps = function ({language}, ownProps) {
  return {
    language
  };
}


const statefulComponentCreator = connect(mapStateToProps);
const FooterContainer = statefulComponentCreator(Footer);
export default FooterContainer;
