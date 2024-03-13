import Input from "./Input";
import '../styles/Forms.css'

export default function ProfessionalForm({experiences, onChange, onSubmit, isClosed, onFormToggle, onAddExperience, onClickEditExperience, handleCancel, handleDelete}) {
  return(
    <>
    
    {isClosed ? (
      <div className="form-cont">
        <div className="form-header">
        <h2>Work Experience</h2>
        <button
          onClick = {onFormToggle}
        >
          Close
        </button>
        </div>
      {experiences.map((experience) => {
        //if an property is not a string, it automatically returns true (since it's either id or editMode)
        //otherwise, if it is a string, checks if it isn't empty string
        const isFormValid = Object.values(experience).every(item => typeof item==='string' ? item.trim() !== '' : true);
        return (
        experience.editMode ? (
        <div key={experience.id}>
          <form 
            className="experience-form"
            onSubmit={(e) => onSubmit(e, experience.id)}
          >
          <Input
            label="Company"
            name="company"
            type="text"
            value={experience.company}
            onChange={(e) => onChange(e, experience.id)}
          />

          <Input
            label="Position Title"
            name="position"
            type="text"
            value={experience.position}
            onChange={(e) => onChange(e, experience.id)}
          />

          <Input
            label="Description"
            name="description"
            type="textarea"
            rows="3"
            value={experience.description}
            onChange={(e) => onChange(e, experience.id)}
          />

          <Input
            label="Start Date"
            name="startDate"
            type="date"
            value={experience.startDate}
            onChange={(e) => onChange(e, experience.id)}
          />

          <Input
            label="End Date"
            name="endDate"
            type="date"
            value={experience.endDate}
            onChange={(e) => onChange(e, experience.id)}
          />
        <button className="top-form-button" type="button"
        onClick={(e)=> handleCancel(e, experience.id)}>Cancel</button>
        <button
        type="button"
        onClick={(e)=> handleDelete(e, experience.id)}
        >
          Delete
        </button>
        <button type="submit" disabled={!isFormValid}>Submit</button>
        </form>
        
        </div>
        ) : (
          <div key={experience.id}>
          <h3>{experience.company}</h3>
          <div className="edit-delete-btn-cont">
            <button onClick={(e) => onClickEditExperience(e, experience.id)}>Edit</button>
            <button
            type="button"
            onClick={(e)=> handleDelete(e, experience.id)}
            >
              Delete
            </button>
          </div>
          
          </div>
          
        )
        
      )
      } )}
      <button
      className="add-experience-btn"
      onClick={onAddExperience}
      >
        Add Experience
      </button>
      </div>
      
      
    ) : 
    (
      <div className="form-cont">
        <div className="form-header">
        <h2>Work Experience</h2>
        <button
          onClick = {onFormToggle}
        >
          Open
        </button>
        </div>
      </div>
    )
  }
    </>
  );
}