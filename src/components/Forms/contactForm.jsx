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


    }


    //Arrow function that will listen for
    //clicking on submit button, and handle submitted data
    //when we set it up with the clickEvent later
    const handleFormSubmit =(e) =>{
        e.preventDefault();

        //Will take in the form-entered username and email
        //and check if email is valid/username isn't empty
        if (!validateEmail(email) || !contactName) {
            setErrorMessage('Email or username is invalid');

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
    
    return (
        <div>
            <p>boop</p>
        </div>
    );

};

//Will export the Form function for use elsewhere in code
export default Form