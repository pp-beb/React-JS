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
<section className="BuyBooks">
    Pagal Basti
    <img src={pagalImg} className="pagalImg"></img>
</section>
<section className="BuyBooks">
    Summer love
    <img src={summerImg} className="pagalImg"></img>
</section>
<section className="BuyBooks">
    Karnal Blues
    <img src={karnaliImg} className="pagalImg"></img>
</section>
</section>
<section className="BuyDiv2">
<section className="BuyBooks">
    Old Man and The Sea
    <img src={OldImg} className="pagalImg"></img>
</section>
<section className="BuyBooks">
    Milk and Honey
    <img src={milkImg} className="pagalImg"></img>
</section>
<section className="BuyBooks">
    Metamorphisis
    <img src={metaImg} className="pagalImg"></img>
</section>
</section>
<a href="">View All &rarr;</a>
</div>
    );
}