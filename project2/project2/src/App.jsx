
import './App.css'
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/header';

function App() {

  return <div>

    <Header/>
    <main className="main_container">
    <Contact/>
    <ContactForm/>
    </main>
  
  </div>
}

export default App;
