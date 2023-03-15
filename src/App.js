import './App.css';
import ContactComponent from './components/container/contact';
import { Contact } from './models/contact.class';

function App() {
  const defaultContact = new Contact('Juan', 'Perez', 'juanperez23@gmail.com', true)
  return (
    <div className="App">
      <header className="App-header">
        <ContactComponent contact={defaultContact}/>
      </header>
    </div>
  );
}

export default App;
