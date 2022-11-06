import logo from './logo.svg';
import './App.css';
import Home from './Home';

  import Admin from './Admin';

function App() {
  return (
    <>
 {localStorage.getItem("names")!=null ? <Admin/> :<Home/>}
 
    
    </>
  );
}

export default App;
