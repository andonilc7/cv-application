import Input from "./Input";
import '../styles/Forms.css'

export default function EducationForm({data, onChange, onSubmit, editMode, onEditModeChange}) {
  const isFormValid = Object.values(data).every(item => item.trim() !== '');
  return(
    <>
    {editMode ? (
    <div className="form-cont">
      <div className="form-header">
        <h2>Education</h2>
        <button
          onClick = {onEditModeChange}
        >
          Close
        </button>
      </div>
      
    <form
    onSubmit = {onSubmit}
    >
      <Input
      label="School"
      name="school"
      type="text"
      value = {data.school}
      onChange = {onChange}
      />

      <Input
      label="Field of Study"
      name="fieldOfStudy"
      type="text"
      value = {data.fieldOfStudy}
      onChange={onChange}
      />

      <Input
      label="Start Date"
      name="startDate"
      type="date"
      value = {data.startDate}
      onChange={onChange}
      />

      <Input
      label="End Date"
      name="endDate"
      type="date"
      value = {data.endDate}
      onChange={onChange}
      />

      <button className="top-form-button" type="Submit" disabled={!isFormValid}>Submit</button>
    </form>
    
    </div>
    ) :
    (
      <div className="form-cont">
        <div className="form-header">
        <h2>Education</h2>
        <button
          onClick = {onEditModeChange}
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