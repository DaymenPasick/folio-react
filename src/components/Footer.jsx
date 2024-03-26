//Imports img links for Footer from assets
import gitIcon from '../../public/assets/GitHubIconLink.png'
import linkedIcon from '../../public/assets/LinkedInIconLink.png'
import twitterIcon from '../../public/assets/TwitterIconLink.png'

//Structure for Footer
export default function Footer(props) {
 return (
    <div className='container fixed-bottom'>
      <div className='row mb-2 d-flex justify-content-center footBorder'>
        <div className='col-3 text-center'> 
            <a href="https://github.com/DaymenPasick" target="_blank">
                <img className='img-fluid imgShadow'  src={gitIcon} alt="GitHub Icon" />
            </a>
        </div>

       <div className='col-5 col-md-6 text-center'>
        <a href="https://www.linkedin.com/in/daymen-pasick-a956692a2/" target="_blank">
            <img className='img-fluid imgShadowLinked'  src={linkedIcon} alt="LinkedIn Icon" />
        </a>
       </div>

       <div className='col-3 text-center'> 
        <a href="https://twitter.com/DaymensCode" target="_blank">
            <img className='img-fluid imgShadow'  src={twitterIcon} alt="Twitter Icon" />
        </a>
       </div>

      </div> 
    </div>
 );
}