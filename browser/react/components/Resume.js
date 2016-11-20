'use strict';
import React from 'react';
import {Link} from 'react-router';
import { summary } from './ResumeComponents/resumecontents';


export default ({language, children}) => (
  <div className="child-content col-lg-12 resume-page">

    <div className="top-half">
      <div className="col-lg-4 col-md-5 col-sm-12 left-column">
        <div className="header-name-plate">
          {language === 'English' ? (<h1 className="stay-left">REED M BRANSON</h1>) : (<h1 className="stay-left">黃瑞德</h1>) }
          {language === 'English' ? (<h1 className="go-right">WEB DEVELOPER</h1>) : (<h1 className="go-right">軟件工程師</h1>) }
        </div>
        <div className="summary">
          {language === 'English' ? (<h2>SUMMARY</h2>) : (<h2>總結</h2>)}
          {language === 'English' ? (<h5>{summary.english}</h5>) : (<h5>{summary.chinese}</h5>)}
        </div>
        <div className="contact">
          {language === 'English' ? (<h2>CONTACT</h2>) : (<h2>聯繫方式</h2>)}
          {language === 'English' ? (<h4><span className="btn btn-social-icon btn-reddit"><span className='glyphicon glyphicon-map-marker'/></span>New York, NY </h4>): (<h4><span className="btn btn-social-icon btn-reddit"><span className='glyphicon glyphicon-map-marker'/></span>紐約紐約市</h4>)}
          <h4><a href="mailto:reed.branson@gmail.com"><span className='btn btn-social-icon btn-google'><span className="glyphicon glyphicon-envelope"/></span>reed.branson@gmail.com</a></h4>
          <h4><a href="http://www.linkedin.com/in/reed-branson-17481881"><span className="btn btn-social-icon btn-linkedin"><span className='fa fa-linkedin social-icons'/></span>reed-branson-17481881</a></h4>
          <h4><a href="http://www.github.com/raekwonstorm"><span className="btn btn-social-icon btn-github"><span className='fa fa-github social-icons'/></span>raekwonstorm</a></h4>
        </div>
      </div>
      <div className="col-lg-8 col-md-7 col-sm-12 right-column">
        <div>
          <img className="img-responsive" id="reedhead" src='/Headshot.jpg'/>
        </div>
      </div>
    </div>

    <div className="bottom-half">
      <div className="col-lg-4 col-md-5 col-sm-12">
        <Link to="/about/skills">{language === 'English' ? (<h1 className="resume-links">SKILLS</h1>) : (<h1 className="resume-links">技術能力</h1>)}</Link>
        <Link to="/about/experience">{language === 'English' ? (<h1 className="resume-links">EXPERIENCE</h1>) : (<h1 className="resume-links">經驗</h1>)}</Link>
        <Link to="/work">{language === 'English' ? (<h1 className="resume-links">PROJECTS</h1>) : (<h1 className="resume-links">作品</h1>)}</Link>
        <Link to="/about/education">{language === 'English' ? (<h1 className="resume-links">EDUCATION</h1>) : (<h1 className="resume-links">學歷</h1>)}</Link>
        <a href="/ReedBransonResume.pdf" target="_blank">{language === 'English' ? (<h3 className="resume-links">Download Resume (.pdf)</h3>) : (<h3 className="resume-links">下載簡歷(.pdf)</h3>)}</a>
      </div>
      <div className="col-lg-8 col-md-7 col-sm-12">
        {children}
      </div>
    </div>

  </div>
)


//       <div className="projects">
//         <h1 className="resume-links">Porjex</h1>
//         <ul>
//           {
//             projects.map((project, i) => (
//             <div key={`project arr ${i}`}>
//               <h4><a href={project.github}><img src='github.ico'/></a>{project.name}</h4>
//               <ul>
//                 <li>{language === 'English' ? project.description : project.desc_chinese}</li>
//                 <li>{language === 'English' ? project.tech : project.tech_chinese}</li>
//               </ul>
//             </div>

//             ))
//           }
//         </ul>
//       </div>
