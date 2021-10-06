import logo from './logo.svg';

import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header component={Nav}/>
      <Main/>
      <Footer/>
      </div>
    
  )
}

export default App;
