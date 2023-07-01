
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <div className="App">
          <Navbar/>
            <BrowserRouter>
             <Routes>
              <Route path='/' element={<App/>}>
              <Route path="home" element={<Home />} />
              <Route path="detail" element={<Detail />} />
              <Route path="favs" element={<Favs />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            </Routes>
          </BrowserRouter>

          <Footer/>
      </div>
  );
}

export default App;
