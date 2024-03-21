//Imports img links for Footer
import gitIcon from '../../public/assets/GitHubIconLink.png'
import linkedIcon from '../../public/assets/LinkedInIconLink.png'
import twitterIcon from '../../public/assets/TwitterIconLink.png'

//Structure for Footer
export default function Footer(props) {
 return (
    <div>
        <a href="https://github.com/DaymenPasick" target="_blank">
            <img src={gitIcon} alt="GitHub Icon" />
        </a>
        <a href="https://www.linkedin.com/in/daymen-pasick-a956692a2/" target="_blank">
            <img src={linkedIcon} alt="LinkedIn Icon" />
        </a>
        <a href="https://twitter.com/DaymensCode" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
        </a>
    </div>
 );
}