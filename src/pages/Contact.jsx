//Will import Form from respective path
import Form from '../components/Forms/contactForm'

//Setup for About page
export default function Contact() {
    return (
      <div>
        <h1 className='text-center pt-5 pageHeaderText'>Contact Me</h1>

          <Form />
      </div>



    );
  }