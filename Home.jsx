import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Hero from '../components/Hero/Hero.jsx';
import Services from '../components/Services/Services.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import ContactForm from '../components/ContactForm/ContactForm.jsx';

export default function Home(){
 return (<>
  <Header />
  <Hero />
  <Services />
  <Testimonials />
  <ContactForm />
  <Footer />
 </>);
}