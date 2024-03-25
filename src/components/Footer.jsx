//Imports img links for Footer from assets
import gitIcon from '../../public/assets/GitHubIconLink.png'
import linkedIcon from '../../public/assets/LinkedInIconLink.png'
import twitterIcon from '../../public/assets/TwitterIconLink.png'

//Structure for Footer
export default function Footer(props) {
 return (
    <div className='container fixed-bottom'>
     <div className='row footBorder  '>
       <div className='col-3 col-sm-4 text-center '> 
    {/* <div className='container fixed-bottom'>
     <div className='row footBorder  mb-sm-5 pb-sm-5 mb-lg-5 pb-lg-5'>
       <div className='col-3 col-sm-4 text-center  mb-sm-5 mb-lg-5 '>  */}
        <a className='' href="https://github.com/DaymenPasick" target="_blank">
            <img className='img-fluid'  src={gitIcon} alt="GitHub Icon" />
        </a>
       </div> 
       <div className='col-5 col-sm-4 text-center '>
        <a href="https://www.linkedin.com/in/daymen-pasick-a956692a2/" target="_blank">
            <img className='img-fluid'  src={linkedIcon} alt="LinkedIn Icon" />
        </a>
        </div>
        <div className='col-3 col-sm-4 text-center '> 
        <a href="https://twitter.com/DaymensCode" target="_blank">
            <img className='img-fluid'  src={twitterIcon} alt="Twitter Icon" />
        </a>
        </div>

     </div> 
    </div>
 );
}