'use strict';
import React from 'react';
import { experience, experienceChinese } from './resumecontents';

export default ({language}) => {
  let expLang = language === 'English' ? experience : experienceChinese;
  return (
  <div>
    <div className="experience">
      {
        expLang.map((job, i) => (
          <div key={`experience arr ${i}`}>
            <h3>{job.company}</h3>
            <h4>{job.position}</h4>
            <h5>{job.location} | {job.date}</h5>
            <ul>
              {
                job.bullets.map((bullet, i) => (
                  <li key={`bullet ${i}`}>
                    {bullet}
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  </div>
  )
}
