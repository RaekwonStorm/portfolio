'use strict';
import React from 'react';
import {Link} from 'react-router';
import {
  technical,
  projects,
  experience,
  experienceChinese,
  education,
  interest } from './resumecontents';

export default ({language}) => {
  let expLang = language === 'English' ? experience : experienceChinese;

  return (
    <div className="child-content">
      <div className="col-lg-4 col-xs-12">
        {language === 'English' ? (<h1 className="lolslide">Reed M. Branson</h1>) : (<h1 className="lolslide">黃瑞德</h1>) }
        {language === 'English' ? (<h4><span className='glyphicon glyphicon-map-marker'></span>New York, NY </h4>): (<h4><span className='glyphicon glyphicon-map-marker'></span>紐約紐約市</h4>)}
        <h4><a href="mailto:reed.branson@gmail.com"><span className='glyphicon glyphicon-envelope'></span>reed.branson@gmail.com</a></h4>
        <h4><a href="http://www.linkedin.com/" className="btn btn-social-icon btn-linkedin"><span className='fa fa-linkedin social-icons'></span></a></h4>
        <h4><a href="http://www.github.com/raekwonstorm" className="btn btn-social-icon btn-github"><span className='fa fa-github social-icons'></span></a></h4>
      </div>
      <div className="col-lg-2 col-xs-12">
        <img className="img-responsive" src='Headshot.jpg'/>
      </div>
      <h2><u>Technical Competencies</u></h2>
        <ul>
        {
          technical.map((skill, i) => (
              <li key={`skill arr ${i}`}>{skill}</li>
            ))
        }
        </ul>
      <h2><u>Projects</u></h2>
        <ul>
          {
            projects.map((project, i) => (
            <div key={`project arr ${i}`}>
              <h4><a href={project.github}><img src='github.ico'/></a>{project.name}</h4>
              <ul>
                <li>{language === 'English' ? project.description : project.desc_chinese}</li>
                <li>{language === 'English' ? project.tech : project.tech_chinese}</li>
              </ul>
            </div>

            ))
          }
        </ul>
      <h2><u>Profesh Experience</u></h2>
        {
          expLang.map((job, i) => (
            <div key={`experience arr ${i}`}>
              <h3>{job.company}</h3>
              <h4>{job.position} {job.location} {job.date}</h4>
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
      <h2><u>Educaish</u></h2>
        <div>
          <h3>Fullstack Academy of Code </h3>
        </div>
        {
          education.map((school, i) => (
            <div key={`school arr ${i}`}>
              <h3>{language === 'English' ? school.name : school.name_chinese}</h3>
              <h4>{language === 'English' ? school.degree : school.degree_chinese}</h4>
              <h5>GPA: {school.gpa}</h5>
            </div>
          ))
        }
      <h2><u>Interests</u></h2>
      <ul>
        {
          interest.map((interest, i) => (
            <div key={`interest arr ${i}`}>
              <li>{language === 'English' ? interest.name : interest.name_chinese }</li>
            </div>
          ))
        }
      </ul>
    </div>
  )
}
