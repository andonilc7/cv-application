import { useState } from "react";
import GenInfoForm from "./GenInfoForm";
import EducationForm from "./EducationForm";
import ProfessionalForm from "./ProfessionalForm";
import DisplayCV from "./DisplayCV";
import {v4 as uuidv4} from 'uuid';
import '../styles/App.css';

export default function App() {
  //info states
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phoneNum: ''
  })

  const [eduInfo, setEduInfo] = useState({
    school: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: ''
  })

  const [experiences, setExperiences] = useState([]);


  //submitted info states
  const [submittedGenInfo, setSubmittedGenInfo] = useState({
    name: '',
    email: '',
    phoneNum: ''
  });

  const [submittedEduInfo, setSubmittedEduInfo] = useState({
    school: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: ''
  })

  const [submittedExperiences, setSubmittedExperiences] = useState([]);

  //editMode states
  const [genEditMode, setGenEditMode] = useState(false);
  const [eduEditMode, setEduEditMode] = useState(false);
  const [experienceClosed, setExperienceClosed] = useState(false);

  //edit mode change handler functions
  function handleGenEditChange() {
    setGenEditMode(!genEditMode);
  }

  function handleEduEditChange() {
    setEduEditMode(!eduEditMode);
  }

  function handleExperienceClosedChange() {
    setExperienceClosed(!experienceClosed);
  }

  //add experience handler
  function handleAddExperience() {
    setExperiences([...experiences, {
      id: uuidv4(),
      editMode: true,
      company: '',
      position: '',
      description: '',
      startDate: '',
      endDate: ''
    }])
  }

  //info change handler functions
  function handleGeneralInfoChange(e) {
    const {name, value} = e.target;
    setGeneralInfo({...generalInfo, [name]: value});
  }

  function handleEduInfoChange(e) {
    const {name, value} = e.target;
    setEduInfo({...eduInfo, [name]:value});
  }

  function handleExperienceChange(e, id) {
    const {name, value} = e.target;
    setExperiences(previousExperiences => {
      //accesses previous state bc passing parameter
      return previousExperiences.map(experience => {
        if (experience.id == id) {
          return {...experience, [name]: value};
        }
        //if the id's match, then edit that experience
        //otherwise, just return the previous experience since not currently being changed
        return experience;
      })
    })
  }


  //info submit handlers
  function handleGenInfoSubmit(e) {
    e.preventDefault();
    setSubmittedGenInfo(generalInfo);
    handleGenEditChange();
  }

  function handleEduInfoSubmit(e) {
    e.preventDefault();
    setSubmittedEduInfo(eduInfo)
    handleEduEditChange();
  }

  function handleExperienceSubmit(e, id) {
    e.preventDefault();
    setExperiences(previousExperiences => {
      //accesses previous state bc passing parameter
      return previousExperiences.map(experience => {
        if (experience.id == id) {
          return {...experience, editMode: false};
        }
        //if the id's match, then make the editMode of that experience false
        //otherwise, just return the previous experience since not currently being changed
        return experience;
      })
    })
    setSubmittedExperiences(experiences);
  }

  function handleClickEditExperience(e, id) {
    setExperiences(previousExperiences => {
      //accesses previous state bc passing parameter
      return previousExperiences.map(experience => {
        if (experience.id == id) {
          return {...experience, editMode: true};
        }
        //if the id's match, then make the editMode of that experience false
        //otherwise, just return the previous experience since not currently being changed
        return experience;
      })
    })
  }

  function handleCancelEdit(e, id) {
    e.preventDefault();
    const submittedExperience = submittedExperiences.find(submittedExperience => submittedExperience.id === id);
    if (submittedExperience) {
      setExperiences(previousExperiences => {
        //accesses previous state bc passing parameter
        return previousExperiences.map(experience => {
          if (experience.id == id) {
            return {...submittedExperience, editMode:false};
          }
          //if the id's match, then make the editMode of that experience false
          //otherwise, just return the previous experience since not currently being changed
          return experience;
        })
      })
    } else {
      setExperiences(previousExperiences => {
        return previousExperiences.filter(experience => experience.id!==id);
      })
    }
  }

  function handleDeleteExperience(e, id) {
    setExperiences(experiences.filter(experience => experience.id !==id ));
    setSubmittedExperiences(submittedExperiences.filter(experience => experience.id !==id ));
  }




  return (
    <>
    <h1 className="website-title">Resume Builder</h1>
    <div className="overall-cont">
      <div className="forms-cont">
        <GenInfoForm 
        data={generalInfo}
        onChange={handleGeneralInfoChange}
        onSubmit={handleGenInfoSubmit}
        editMode = {genEditMode}
        onEditModeChange = {handleGenEditChange}
        />

        <EducationForm
        data={eduInfo}
        onChange={handleEduInfoChange}
        onSubmit={handleEduInfoSubmit}
        editMode={eduEditMode}
        onEditModeChange={handleEduEditChange}
        />

        <ProfessionalForm
        experiences={experiences}
        onChange={handleExperienceChange}
        onSubmit = {handleExperienceSubmit}
        isClosed={experienceClosed}
        onFormToggle={handleExperienceClosedChange}
        onAddExperience={handleAddExperience}
        onClickEditExperience={handleClickEditExperience}
        handleCancel={handleCancelEdit}
        handleDelete={handleDeleteExperience}
        />
      </div>
      

      <DisplayCV 
      className=""
      generalInfo={submittedGenInfo}
      eduInfo={submittedEduInfo}
      experiences={submittedExperiences}
      />
    </div>
    </>
  )

}

//i'm thinking i can have each section as a state
//on submit for each section, then the cv is updated
//and i can pass the necessary states for each individual input element (e.g. name, email, etc)
//start with just doing general section first!!