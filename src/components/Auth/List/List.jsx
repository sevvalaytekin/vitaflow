import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./List.css";
import  services  from "../../../constant/services.jsx";



const List = () => {
  return (
    <div style={{ display: "flex", flexDirection:"column", gap: "20px" }}>
      <div style={{display:"flex" ,alignItems:"center"}}>
        <div><FontAwesomeIcon icon={faHeart}/></div>
        <div><h1>VitaFlow</h1>
        <p>Akıllı sağlık yönetimi</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {services.map((service, index) => (
          <div style={{ border: "1px solid red" }} key={index}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span>{service.icon}</span>
              <h2>{service.name}</h2>
            </div>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
