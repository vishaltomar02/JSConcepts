import "./input.scss"
const Input = ({
  placeholder = "Enter the value",
  type = "text",
  value = "",
  defaultValue = "",
  handleChange = () => {}
}) => {
  return (
    <div className='input-container'>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
    </div>
  )
}

export default Input