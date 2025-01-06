import './About.css';
import location from './images/location.png';
export function About() {
    return(
<div id="about">
    <h1>About</h1>
Hi, we are a Banepa-based bookstore passionate about connecting readers with stories that 
inspire, educate, and entertain. Located in the heart of this vibrant town, our store offers 
a cozy haven for book lovers of all ages, whether you're a student, an avid reader, or someone 
exploring the joy of books for the first time. From timeless classics to contemporary bestsellers, 
our curated collection spans diverse genres, including fiction, non-fiction, self-help, academic 
resources, and children's literature. At our store, we take pride in fostering a warm and welcoming 
environment where customers can browse freely, discover hidden gems, and share their love for reading. 
We also support local authors by showcasing their work, celebrating the unique voices of our community. 
Whether you’re searching for a new novel to dive into, a thoughtful gift, or educational materials, our 
dedicated staff is here to help you find exactly what you need. Join us in celebrating the magic of books 
and the power they hold to bring people together, spark imagination, and enrich lives.
<br/>
<br/>
<br/>
<br/>
<h3>Location</h3>
<img src={location} className="location"></img>
<h3>Membership</h3>
Memberships are yet to be introduced.
</div>
    );
}