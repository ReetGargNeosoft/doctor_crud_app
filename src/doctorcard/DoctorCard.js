import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

export function DoctorCards ({profile}) {
  return (
      <div className="card text-center shadow-lg p-4" style={{ maxWidth: "350px", borderRadius: "15px" ,margin:'25px'}}>
        <h5 className="card-title" style ={{backgroundColor : '#00bfff'}}>#{profile.id} </h5>
        <img
          src={profile.profileImg}
          alt="Profile"
          className="rounded-circle mx-auto"
          style={{ width: "120px", height: "120px", marginBottom: "15px" }}
        />
        <h3>{profile.name}</h3>
        <p className="text-muted">{profile.description}</p>

        <ul className="list-group list-group-flush">
              <li className="list-group-item"><i>Qualification :</i> <b>{profile.qualification}</b></li>
              <li className="list-group-item"><i>Specialization : </i><b>{profile.specialization}</b></li>
              <li className="list-group-item"><i>Experience :</i> <b>{profile.experience} yrs.</b></li>
              <li className="list-group-item"><i>Contact Info :</i> <b>{profile.Contact_info}</b></li>

        </ul>
        <div class="row">
            <div class="col-12 d-flex justify-content-between mt-3">
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-primary">Delete</button>
            </div>
            
        </div>
      </div>
  );
};


