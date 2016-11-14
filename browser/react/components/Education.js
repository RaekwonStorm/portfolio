'use strict';
import React from 'react';
import { education } from './resumecontents';

export default ({language}) => (
  <div>
    <div className="education">
      <div>
        <h3><span className="glyphicon glyphicon-education"/>Fullstack Academy of Code </h3>
      </div>
      {
        education && education.map((school, i) => (
          <div key={`school arr ${i}`}>
            <h3><span className="glyphicon glyphicon-education"/>{language === 'English' ? school.name : school.name_chinese}</h3>
            <h4>{language === 'English' ? school.degree : school.degree_chinese}</h4>
            <h5>GPA: {school.gpa}</h5>
          </div>
        ))
      }
  </div>
</div>
)
