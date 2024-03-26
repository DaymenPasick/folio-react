//Imports avatar image for About page from assets
import Avatar from '../../public/assets/projectAvatarSamp.png'

//Setup for About page
export default function About() {
    return (
      <div className='container '>
       <div className='row text-center pt-5 '>
        <div className="col  ">
          <h1 className='pageHeaderText'>About Me</h1>
          </div>
       </div>


       <div className='row my-5'>
         <div className='col pt-3 '>
           <img className='img-fluid mx-auto d-block circle ' src={Avatar} alt="profile avatar of a man wearing sunglasses" />
         </div> 
       </div>

          <div className='row '>
         <div className='col text-center my-3 pt-4'>
           <p className='generalText mx-5 '>
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