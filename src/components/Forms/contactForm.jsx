//Importing useState to utilize its hook functionality
import { useState } from 'react';

//Importing the validateEmail helper function to
//use within the form
import { validateEmail } from '../../utils/helpers';


function Form() {

    //Setting up useState variables and declaring their functions
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    //Similar to above setup, but for handling form errors
    const [errorMessage, setErrorMessage] = useState('');
    


    //Arrow function that will listen for changes in the
    //useState variables declared above
    const handleInputChange =(e) =>{

        //Will set a listner that will target
        //the html form (name) attribute that has been
        //typed in/altered while also targetting
        //the updated data(value) associated with the 
        //aforementioned (name) target
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;


        //Will update the useState variables
        //depending on which form inputType(name)
        //was altered
        if (inputType === 'contactName') {
            setContactName(inputValue);
          } else if (inputType === 'email') {
            setEmail(inputValue);
          } else {
            setContactMessage(inputValue)
          }

    }


    //Arrow function that will listen for
    //clicking on "submit" button, and handle submitted data
    const handleFormSubmit =(e) =>{
        e.preventDefault();

        //Will take in the form-entered username and email
        //and check if email is valid/username isn't empty
        if (!validateEmail(email) || !contactName) {
            setErrorMessage('Email or Name is invalid');
            //Would like to create a more detailed error message
            //if time permits
            
            return;
          }

          //If the above checks pass, the useState variables
          //will be reset to empty strings and 
          //alert message will diplay
          setContactName('');
          setEmail('');
          setContactMessage('');
          alert(`Thanks for contacting me ${userName}. I'll respond ASAP! `);
    }
    

    const handleMouseEvent = (e) => {
      e.persist();
      e.target.style.backgroundColor = "orange";
  
      setTimeout(() => {
        e.target.style.backgroundColor = "";
      }, 1000);
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
            onMouseLeave={handleMouseEvent}
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <textarea
            value={contactMessage}
            name="contactMessage"
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