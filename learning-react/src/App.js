import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <html>
    <head>
      <title>Books</title>
    </head>
    <body>
      <h1 className="headingOne">THE books store</h1>
      <div className="contDiv">
        <div className="barCont">
          <a href="#home">Home</a>
          <a href="#buy">Buy</a>
          <a href="#membership">Membership</a>
          <a href="#contact">Contact us</a>
        </div>
        <div id="home" className="home">We are Banepa Based book store.</div>
      </div>
    </body>
   </html>
     
  );
}

export default App;
