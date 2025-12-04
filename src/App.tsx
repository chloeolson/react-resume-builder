import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Nationalities from './components/Nationalities';
import Contact from './components/Contact';
import Publication from './components/Publication';

import { ResumeData } from './dataModel';
import DownloadPDF from './components/DownloadButton';


interface AppProps {
  profile: ResumeData;
}

function App({ profile }: AppProps) {
  return (
    <div className="app">
      <div className="sidebar">
        <div className='centered'>
          <img className="photo" alt='profile' src={profile.photo} />
        </div>

        <Contact
          {...profile.contact}
          hyperlinks={profile.hyperlinks !== false}
        />
        <hr className="divider" />
        <About
          {...profile.about}
        />
        <hr className="divider" />
        <Languages
          languages={profile.languages}
        />
        <hr className="divider" />
        <Nationalities nationalities={profile.nationalities} />
    
      </div>
      <div className="main">
        <h1 className="name">{profile.name}</h1>
        <h2 className='title'>{profile.title}</h2>
        <hr className="divider" />
        <Experience
          experiences={profile.experiences}
        />
        <hr className="divider" />
        <Education
          educations={profile.education}
        />
        <hr className="divider" />
        <Publication
          publications={profile.publications}
          hyperlinks={profile.hyperlinks !== false}
        />
      </div>
          <DownloadPDF />
    </div>

  );
}

export default App;
