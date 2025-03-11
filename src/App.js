import './App.css';
import { DoctorCards } from './doctorcard/DoctorCard';
import {Doctors} from './doctors/Doctors';
import { Header } from './header/Header';

function App() {
  return (
    <div 
    style={{backgroundimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTCdIWhGc5v4IFu8gPYRVaq7qDRj-HssVcw&s'}}>
    <Header ></Header>
    <Doctors></Doctors>
    {/* <DoctorCards></DoctorCards> */}
    </div>
  );
}

export default App;
