import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DoctorCards } from "../doctorcard/DoctorCard";

export function Doctors(){

const profiles = [
  {
    id: 1,
    name: "PERSON ONE",
    specialization: 'Cardiologists', 
    qualification:  'MBBS',
    Contact_info: 1234,
    experience : 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImg: "https://png.pngtree.com/png-clipart/20241112/original/pngtree-smiling-cartoon-doctor-with-stethoscope-clipart-png-image_16976469.png",
  },
  {
    id: 2,
    name: "PERSON TWO",
    specialization: 'Dentists',
    qualification: 'MS',
    Contact_info: 4363,
    experience : 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuabZVZXUdHoIQqlu2NhrqUcuHY2fKMvqn2g&s',
  },
  {
    id: 3,
    name: "PERSON THREE",
    specialization:'ENT specialists',
    qualification: 'MD',
    Contact_info: 1234,
    experience : 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8yG-lXjwXeyGBcgVO9LDFFqfpA-q511qfiQ&s",
  },
  {
    id: 4,
    name: "PERSON FOUR",
    specialization: 'Neurologists',
    qualification: 'MBBS',
    Contact_info: 1344,
    experience : 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImg: "https://spaces-cdn.clipsafari.com/jd5sqj2235ijhcrsajdor9z7cx52",
  },
  {
    id: 5,
    name: "PERSON FIVE",
    specialization: 'Gynecologists',
    qualification: 'MSurg',
    Contact_info: 13234,
    experience : 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW0Gd4sow2nNOq-eDQnTY1sDrAtZgm4m7NIg&s",
  },
  {
    id: 6,
    name: "PERSON SIX",
    specialization: 'Pediatricians',
    qualification: 'Msc' ,
    Contact_info: 2344,
    experience : 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Yy6Ct7qyXC_dxC3bDS9FkUWoq7KQ_uGChQ&s',
    
     
  }
  
];



const doctor_list = profiles.map((doctor,index)=><DoctorCards key={'do'+index} profile ={doctor}/>)
return (
    <article className="d-flex flex-wrap justify-content-evenly">
        {doctor_list}
    </article>
);
}