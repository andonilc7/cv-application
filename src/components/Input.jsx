import '../styles/Input.css'

export default function Input({label, name, type, value, onChange, rows}) {
  return (
    <div className="input-cont">
      <label htmlFor={name}>
      {label}
      </label>
      {type === 'textarea' ? 
        <textarea 
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        rows={rows}
        />
      : <input 
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      rows="3"
      />}
    </div>
    
  );
  
}