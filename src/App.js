import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RightSide from './RightSide';
import LeftSide from './LeftSide';
import BackToTop from './BackToTop';
function App() {
  return (
    <div>
      <div  style={{display:"flex"}}>
        
        <LeftSide />
        <RightSide />
      </div>
      
    </div>
  );
}

export default App;
