
const General = ({handleInputChange, handleSubmit, firstName, lastName, email, phoneNumber,
setFirstName, setLastName, setEmail, setPhoneNumber}) => {

        const handleFirstNameChange = (e) => {
            setFirstName(e.target.value);
        }

        const handleLastNameChange = (e) => {
          setLastName(e.target.value);
      }

      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      }

      const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value)
      }


  return(
    <div className="generalInfo">
            <div className="generalForm">
            <form id="general" onSubmit={handleSubmit}>
              <input type="text" className="general" onChange={handleFirstNameChange} value = {firstName} name="firstName" placeholder="First Name"/>
              <input type="text" className="general" onChange={handleLastNameChange} value = {lastName} name="lastName" placeholder="Last Name"/>
              <input type="text" className="general" onChange={handleEmailChange} value = {email} name="email" placeholder="Email"/>
              <input type="text" className="general" onChange={handlePhoneNumberChange} value = {phoneNumber} name="phoneNumber" placeholder="Phone Number"/>
              </form>
            </div>
          </div>
  )
}
 
export default General
