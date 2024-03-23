//Imports avatar image for About page from assets
import Avatar from '../../public/assets/projectAvatarSamp.png'

//Setup for About page
export default function About() {
    return (
      <div className='container'>
       <div className='row text-center'>
          <h1>About Me</h1>
       </div>
       <div className='row text-center'>
         <div className='col-md-6'>
           <img className='img-fluid' src={Avatar} alt="profile avatar of a man wearing sunglasses" />
         </div> 
         <div className='col-md-6 align-self-center'>
           <p>
            Hey hey!
            Budding developer here taking the learning journey
            day by day. 
            Also I REALLY like cookies.
           </p>
         </div>
       </div>
      </div>
    );
  }