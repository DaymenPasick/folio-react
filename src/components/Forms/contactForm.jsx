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

        if (!contactMessage) {
            setErrorMessage('Please type a message')

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


    //Formatting form and giving it functionality created above
    return (
        <div className="container text-center">
        <p className='generalText'>Please Fill Out This Form</p>
        <form className="form row" onSubmit={handleFormSubmit}>
          <div className="col-12 my-2">
          <input className='formFieldColor'
            value={contactName}
            name="contactName"
            onBlur={handleMouseEvent}
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          </div>

          <div className="col-12 my-2"> 
          <input className='formFieldColor'
            value={email}
            name="email"
            onBlur={handleMouseEvent}
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          </div>

          <div className="col-12 my-2"> 
          <textarea className='formFieldColor'
            value={contactMessage}
            name="contactMessage"
            onBlur={handleMouseEvent}
            onChange={handleInputChange}
            type="textarea"
            placeholder="message"
          />
          </div>

          <div className="col "> 
          <button className="submitButton" type="submit">
            Submit
          </button>
          </div>
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