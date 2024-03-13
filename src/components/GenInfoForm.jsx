import Input from "./Input";
import '../styles/Forms.css'

export default function GenInfoForm({data, onChange, onSubmit, editMode, onEditModeChange}) {
  const isFormValid = Object.values(data).every(item => item.trim() !== '');
  return(
    <>
    {editMode ? (
      <div className="form-cont"> 
        <div className="form-header">
        <h2>General Info</h2>
        <button
          onClick = {onEditModeChange}
        >
          Close
        </button>
        </div>
      <form 
      onSubmit={onSubmit}>
        <Input
        label="Name"
        name="name"
        type="text"
        value={data.name}
        onChange={onChange}
        />
  
        <Input
        label="Email"
        name="email"
        type="text"
        value={data.email}
        onChange={onChange}
        />
  
        <Input
        label="Phone Number"
        name="phoneNum"
        type="tel"
        value={data.phoneNum}
        onChange={onChange}
        />
  
        <button className="top-form-button" type="submit" disabled={!isFormValid}>Submit</button>
      </form>
      
      </div>
    ) :
    (
    <div className="form-cont">
      <div className="form-header">
      <h2>General Info</h2>
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
  )

}