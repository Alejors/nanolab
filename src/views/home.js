import '../styles/home.css';
import Nanolab from '../img/nanolab-cobre.png';

function Home() {
  return (
    <div className='container-fluid'>
      <div style={{'height':'45vh'}}>
      </div>
      <div className='row home-banner'>
        <div className='col-md-2 right-border'>
          <p className='home'>NANOPARTÍCULAS<br/> DE COBRE<br/><span className='orange-text'>NPs CU</span></p>
        </div>
        <div className='col-4 ms-auto'>
          <img className='img-fluid banner-logo' src={Nanolab} alt='Nanolab Logo'/>
        </div>
      </div>      
    </div>
  );
}

export default Home;
