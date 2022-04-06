import './App.css';
import { Body } from './components/Body';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="contenedor-sidebar-body">
        <Sidebar />
        <Body />
      </div>

    </div>
  );
}

export default App;
