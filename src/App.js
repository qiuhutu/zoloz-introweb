import selfieImage from './selfie_intro.svg';
import arrowLeft from './arrow_left.svg';
import './App.css';
import ZolozRealIdCore from './zolozReadIdCore';

const langPack = {
  system_error_title: "System Error",
  system_error_msg: 'Please try again later',
  system_error_got_it: 'Got it',
  network_error_title: 'No Internet Connection',
  network_error_msg: 'Please check your internet connection and try again',
  network_error_got_it: 'Got it',
  fe_retry_max_title: '',
  fe_retry_max_msg: 'Sorry, you have too many failed identification attempts. Please try again later.',
  fe_retry_max_got_it: 'Got it'
};

var zolozRealIdCore = new ZolozRealIdCore({})

function App() {
  return (
    <div className="zoloz-page">
      <div className="zoloz-topbar">
        <img src={arrowLeft} className="zoloz-icon-arrow-left" alt="turnBack" />
        <header className="zoloz-topbar-title">Scan Face</header>
      </div>
      <div>
        <img src={selfieImage} className="App-logo" alt="logo" />
      </div>
      <footer className="zoloz-bottomBar">
        Continue
      </footer>
    </div>
  );
}

export default App;
