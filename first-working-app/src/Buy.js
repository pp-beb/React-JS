import './Buy.css';
import pagalImg from './images/pagal.jpg';
import summerImg from './images/summer.jpg';
import karnaliImg from './images/karnali.jpg';
import OldImg from './images/old.jpg';
import milkImg from './images/milk.jpg';
import metaImg from './images/meta.jpg';
export function Buy() {
    return(
<div id="buy">
<h1>Buy</h1>

<section className="BuyDiv">
<section className="BuyBooks" onClick="error()">
    Pagal
    <br/>
    <img src={pagalImg} className="pagalImg"></img>
</section>
<section className="BuyBooks" onClick="error()">
    love
    <br/>
    <img src={summerImg} className="pagalImg"></img>
</section>
<section className="BuyBooks" onClick="error()">
    blues
    <br/>
    <img src={karnaliImg} className="pagalImg"></img>
</section>
</section>
<section className="BuyDiv2">
<section className="BuyBooks" onClick="error()">
    Old 
    <br/>
    <img src={OldImg} className="pagalImg"></img>
</section>
<section className="BuyBooks" onClick="error()">
    Milk
    <br/>
    <img src={milkImg} className="pagalImg"></img>
</section>
<section className="BuyBooks" onClick="error()()">
    kafka
    <br/>
    <img src={metaImg} className="pagalImg"></img>
</section>
</section>
<a href="allBooks.html">View All &rarr;</a>
</div>
    );
}

function error(){
    document.alert('This function is not yet available');
}