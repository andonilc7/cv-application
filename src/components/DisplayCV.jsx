import { useState } from "react";
import { format } from 'date-fns';
import ExperienceDisplay from "./ExperienceDisplay";
import '../styles/DisplayCV.css'

export default function DisplayCV({generalInfo, eduInfo, experiences}) {
  return (
    <div className="cv-display">
    {Object.values(generalInfo).every(value => value !== '') && (
    <div className="gen-info-display">
      <h2 className="name">{generalInfo.name}</h2>
      <div className="other-gen-info">
        <div>{generalInfo.email}</div>
        <p> | </p>
        <div>{generalInfo.phoneNum}</div>
      </div>
      
    </div>
    )}
    
    {Object.values(eduInfo).every(value => value !== '') && (
      <div className="edu-info-display">
        <h3 className="section-header">EDUCATION</h3>
        <div className="edu-content-display">
          <div className="edu-left">
            <div><b>{eduInfo.school}</b></div>
            <div>{eduInfo.fieldOfStudy}</div>
          </div>
          <div className="edu-right">
            <div>{eduInfo.startDate && format(eduInfo.startDate, 'MMM yyyy')} - {eduInfo.endDate && format(eduInfo.endDate, 'MMM yyyy')}</div>
          </div>
        </div>
        
      </div>
    )}

    {experiences.length>0 && (<h3 className="section-header">WORK EXPERIENCE</h3>)}
    {experiences.map(experience => {
      return(
        <ExperienceDisplay key={experience.id} experience={experience}/>
      )
    })}
    

    
    </div>
  )
}