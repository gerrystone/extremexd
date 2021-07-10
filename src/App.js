import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Easter from './components/Easter';
import Places from './components/Places';
import Things from './components/Things';
import Happenings from './components/Happenings';
import Visit from './components/Visit';
import Footer from './components/Footer';
import './fonts/SyntaxLTStd-Roman.otf';

function App() {
  return (
    <div className="App">     
      <div className="topsection">
      <Navbar />
      <Header />
     
      </div>
      <div className="lowersection">
      <Info />  
      <Easter />
      <Places />
      <Things />
      <Happenings />
      <Visit />
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
