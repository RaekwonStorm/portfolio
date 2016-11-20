'use strict';
import React from 'react';
import { technical } from './resumecontents';

export default () => (
  <div className="skills">
    <h1>TECHNICAL SKILLS</h1>
    <ul>
    {
      technical.map((skill, i) => (
          <span className={skill.type} key={`skill arr ${i}`}>{skill.name}</span>
        ))
    }
    </ul>
    <hr/>
    <div className="button-description">
      <span className="btn btn-primary">Front-end</span>
      <span className="btn btn-danger">Back-end</span>
      <span className="btn btn-success">Miscellaneous</span>
    </div>
  </div>
)
