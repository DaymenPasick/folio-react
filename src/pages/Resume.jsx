import resumeDownload from '../../public/assets/ResumeDownload.txt'

export default function Resume() {
    return (
      <div>
        <h1>Resume</h1>
        <a href={resumeDownload} target="_blank" download>Download My Resume</a>
        <h2>Front-End Proficies</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        <h2>Back-End Proficies</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

      </div>
    );
  }