import './App.css';
import ContactCard from './components/Card';
import CardHeader from './components/CardHeader';
import Loader from './components/PageLoader';
import VideoBackground from './components/Background';
import CardContact from './components/CardContact';
import CardAboutMe from './components/CardAboutMe';
import CardSocials from './components/CardSocials';
import CardPay from './components/CardPay';
// import CardButtons from './components/CardButtons';
import CardFloaters from './components/CardFloaters';
import CardProducts from './components/CardProducts';

function App() {
  return (
    <div className="App">
      <Loader />
      <ContactCard>
        <CardHeader />
        <CardContact />
        <CardAboutMe />
        <CardSocials />
        <CardProducts />
        <CardPay />
        {/* <CardButtons /> */}
      </ContactCard>
      <CardFloaters />
      <VideoBackground />
    </div>
  );
}

export default App;