'use strict';

import { connect } from 'react-redux';
import Blog from '../components/Blog';

const mapStateToProps = function ({language}, ownProps) {
  return {
    language
  };
}


const statefulComponentCreator = connect(mapStateToProps);
const BlogContainer = statefulComponentCreator(Blog);
export default BlogContainer;
