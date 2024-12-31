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
          <a href="#shop">Shop</a>
          <a href="#membership">Membership</a>
          <a href="#contact">Contact</a>
          <a href="#location">Loaction</a>
        </div>
        <div id="home" className="home">
          <h3> Top Books this year.</h3>
          <div id="TopBooksPoster" className="TopBooksPoster">
            <div className="posterBook one"></div>
            <div className="posterBook two"></div>
            <div className="posterBook three"></div>
            <div className="posterBook four"></div>
          </div>
        </div>
      </div>
    </body>
   </html>
     
  );
}

export default App;
