//Imports react sample resume from assets for download link
import resumeDownload from '../../public/assets/ResumeDownload.txt'


//Setup for Resume page
export default function Resume() {
    return (
      <div>
        <h1 className='pt-5 text-center pageHeaderText'>Resume</h1>

        <div className='pt-3 text-center generalText'>
          <a className='text-center' href={resumeDownload} target="_blank" download>Download My Resume</a>
        </div>

        <h2 className='pt-3 text-center'>Front-End Proficies</h2>
          <ul className='text-center generalText'>
            <div>React</div>
            <div>Javascript</div>
            <div>JQuery</div>
            <div>HTML</div>
            <div>CSS</div>
            <div>Bootstrap</div>
            <div>Responsive Design</div>
          </ul>

        <h2 className='text-center'>Back-End Proficies</h2>
          <ul className='text-center generalText'>
            <div>MySQL, Sequelize</div>
            <div>MongoDB, Mongoose</div>
            <div>GraphQL</div>
            <div>API's</div>
            <div>REST</div>
            <div>Node</div>
            <div>Express</div>
            <div>Node</div>
          </ul>
      </div>
    );
  }