//Imports avatar image for About page from assets
import Avatar from '../../public/assets/projectAvatarSamp.png'

//Setup for About page
export default function About() {
    return (
      <div className='container'>
       <div className='row text-center pt-1'>
          <h1>About Me</h1>
       </div>
       <div className='row'>
         <div className='col-sm-6 '>
           <img className='img-fluid mx-auto d-block ' src={Avatar} alt="profile avatar of a man wearing sunglasses" />
         </div> 
         <div className='col-sm-6 align-self-center'>
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