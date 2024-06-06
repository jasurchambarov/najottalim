import Asida from '../Asida/Asida';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Main from '../Main/Main';
import Main_widget from '../Main_widget/Main_widget';
import Widget from '../Widget/Widget';
import Wrapper from '../Wrapper/Wrapper';
import './Home.css';






function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Asida />
      <Widget />
      <Wrapper />
      <Main_widget />
      <Footer/>
    </>
  );
}

export default Home;
