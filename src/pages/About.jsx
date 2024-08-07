//Imports avatar image for About page from assets
import Avatar from '../../public/assets/portpicSamp.png'

//Setup for About page
export default function About() {
    return (
      <div className='container pt-0 mt-1'>
       <div className='row pt-5 text-center mt-sm-5'>
        <div className='col'>
          <h1 className='pageHeaderText'>About Me</h1>
          </div>
       </div>

       <div className='row my-5'>
         <div className='col pt-3 '>
           <img className='img-fluid mx-auto d-block circle' 
                src={Avatar} 
                alt="profile avatar of a man wearing sunglasses"
             />
         </div> 
       </div>

       <div className='row'>
         <div className='col my-3 pt-sm-4 pb-5 pb-sm-0 text-center '>
           <p className='mx-5 generalText'>
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