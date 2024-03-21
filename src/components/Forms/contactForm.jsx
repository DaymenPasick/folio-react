//Importing useState to utilize its hook functionality
import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function Form() {

    //Setting up useState variables and declaring their functions
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    //Similar to above setup, but for handling form errors
    const [errorMessage, setErrorMessage] = useState('');
    


    //Will listen for changes in declared useState variables
    const handleInputChange =(e) =>{

        //Sets target costs for cleaner code
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;


        //Uses useState to update form from entered data
        if (inputType === 'contactName') {
            setContactName(inputValue);
          } else if (inputType === 'email') {
            setEmail(inputValue);
          } else {
            setContactMessage(inputValue)
          }

    }


    //Will listen for "submit" button, and handle submitted data
    const handleFormSubmit =(e) =>{
        e.preventDefault();

        //Validation for email and contact name
        if (!validateEmail(email) ) {
            setErrorMessage('Please type a valid email');
        
            return
          }
        if (!contactName) {
            setErrorMessage('Please type a contact name')

          return;
          }

          
          //Resets form if validations pass
          setContactName('');
          setEmail('');
          setContactMessage('');
          alert(`Thanks for contacting me ${userName}. I'll respond ASAP! `);
    }
    
    //Will trigger error messages when form fields left blank
    const handleMouseEvent = (e) => {
      e.preventDefault();

      
      if (e.target.value === ""||
          e.target.value === e.target.placeholder ||
          e.target.value === " ") {
 
        setErrorMessage('field required');
      } else {
        setErrorMessage('')
      }

    };




    //Returns display of form based off prop data
    //taken in by the code above
    return (
        <div className="container text-center">
        <h1>Please Fill Out This Form</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            value={contactName}
            name="contactName"
            onBlur={handleMouseEvent}
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <input
            value={email}
            name="email"
            onBlur={handleMouseEvent}
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <textarea
            value={contactMessage}
            name="contactMessage"
            onBlur={handleMouseEvent}
            onChange={handleInputChange}
            type="textarea"
            placeholder="message"
          />
          <button type="submit">
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );

};

//Will export the Form function for use elsewhere in code
export default Form