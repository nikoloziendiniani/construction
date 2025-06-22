import React from "react";
import { useParams } from "react-router-dom";
import ApartmentsData from "../../data/apartamentsData/ApartamentsData";
import "./apartament.css";

export const Apartment = () => {
  const { id } = useParams();
  const apartment = ApartmentsData.find((apt) => apt.id === Number(id));

  if (!apartment) {
    return <div className="apartmentContainer">Apartment not found.</div>;
  }

  return (
    <div className="apartmentContainer">
      <img
        className="apartmentImage"
        src={apartment.background}
        alt={apartment.name}
      />
      <div className="apartmentHeader">
        <div className="apartmentTitle">{apartment.name}</div>
        <div className="apartmentPrice">
          ${apartment.price.perMonth.toFixed(2)} / month
        </div>
      </div>
      <div className="apartmentInfo">
        <span>📍 City: {apartment.city}</span>
        <span>🛏️ Rooms: {apartment.rooms}</span>
        <span>📐 Area: {apartment.area} m²</span>
      </div>
      <div className="apartmentDescription">{apartment.description}</div>
      <button className="apartmentBtn">buy now</button>
    </div>
  );
};
