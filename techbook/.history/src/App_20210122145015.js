
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import widgets from './components/widgets';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app_body">
      
      <Sidebar/>
      <Feed/>
      <widgets

      </div>
      
    </div>
  );
}

export default App;
