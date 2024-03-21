import resumeDownload from '../../public/assets/ResumeDownload.txt'

export default function Resume() {
    return (
      <div>
        <h1>Resume</h1>
        <a href={resumeDownload} target="_blank" download>Download My Resume</a>
        <h2>Front-End Proficies</h2>
          <ul>
            <li>React</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Responsive Design</li>
          </ul>
        <h2>Back-End Proficies</h2>
          <ul>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>GraphQL</li>
            <li>API's</li>
            <li>REST</li>
            <li>Node</li>
            <li>Express</li>
            <li>Node</li>
          </ul>

      </div>
    );
  }