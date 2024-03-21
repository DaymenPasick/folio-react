//Imports avatar image for About page from assets
import Avatar from '../../public/assets/projectAvatarSamp.png'

//Setup for About page
export default function About() {
    return (
      <div>
        <h1>About Me</h1>
        <p>
          Hey hey!
          Budding developer here taking the learning journey
          day by day. 
          Also I REALLY like cookies.
        </p>
        <img src={Avatar} alt="profile avatar of a man wearing sunglasses" />
      </div>
    );
  }