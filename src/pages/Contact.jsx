//Will import Form from respective path
import Form from '../components/Forms/contactForm'

//Setup for About page
export default function Contact() {
    return (
      <div>
        <h1 className='pt-5 text-center pageHeaderText'>Contact Me</h1>

          <Form />
      </div>



    );
  }