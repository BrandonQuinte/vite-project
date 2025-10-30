import './App.css';
import Navbar from './components/Navbar';
import ProgramGrid from './components/ProgramGrid';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="container">
      <Navbar />
      
      <header className="header">
        <h2>SERVICIO NACIONAL DE APRENDIZAJE</h2>
        <h3>CENTRO DE GESTIÓN DE MERCADOS</h3>
        <p>BOGOTÁ</p>
      </header>

      <ProgramGrid />
      <ContactForm />
    </div>
  );
}

export default App;
