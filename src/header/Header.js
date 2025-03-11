import './Header.css';
import {Navbar} from '../navbar/Navbar'

export function Header(prop) {
    let heading = 'DOCTOR MANGEMENT SYSTEM'
    let subheading = 'DOCTOR DIRECT'


    const styleobj ={
      backgroundColor: '#253857',
      padding : '10px',
      color: 'white',
      textAlign : 'center'
    }

    return (
      <header className='topheader' style={styleobj}>
        <h2>{heading}</h2>
        <Navbar mheading={subheading} ></Navbar>
      </header>
    );
  }