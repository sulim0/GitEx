import logo from './logo.svg';
import './App.css';
import {Tabs, Tab, Sonnet} from 'react-bootstrap';

function App() {
  const [key, setKey] = useState('home');
  return (
    <div className="App">
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <Sonnet />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Sonnet />
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <Sonnet />
      </Tab>
    </Tabs>
      <span class="one">BED</span>
      <span>침대</span>
      
    </div>
  );
}

export default App;
