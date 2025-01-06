import './App.css';
import {Title} from './Title';
import {NavBar} from './navBar';
import {About} from './About';
import {Buy} from './Buy';
function App() {
  return (
    <div className="App">
       <Title />
      <NavBar />
      <About />
      <Buy />
    </div>
  );
}

export default App;
