//Importing useState to utilize its hook functionality
import { useState } from 'react';

//Importing the validateEmail helper function to
//use within the form
import { validateEmail } from '../../utils/helpers';


function Form() {

    //Setting up useState variables and declaring their functions
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
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

    }
    
    return (
        <div>
            <p>boop</p>
        </div>
    );

};

//Will export the Form function for use elsewhere in code
export default Form