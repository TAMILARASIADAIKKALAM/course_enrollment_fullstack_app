import './App.css';
import { Home_Page } from './layouts/Home_page/Home_Page';
import { Footer } from './layouts/Nav_and_Footer/Footer';
import { Navbar } from './layouts/Nav_and_Footer/Navbar';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home_Page/>
     <Footer/>
    </div>
  );
}


export default App;
