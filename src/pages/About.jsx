import Avatar from '../../public/assets/projectAvatarSamp.png'

//May or may not use this object
const aboutMeDetails ={
  pageName:'About'
}

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