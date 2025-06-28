import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ApartmentsData from "../../data/apartamentsData/ApartamentsData";
import "./apartament.css";

export const Apartment = () => {
  const { id } = useParams();
  const apartment = ApartmentsData.find((apt) => apt.id === Number(id));

  const [comments, setComments] = useState(apartment ? apartment.coments : []);
  const [newOpinion, setNewOpinion] = useState("");
  const [newRating, setNewRating] = useState(5);

  if (!apartment) {
    return <div className="apartmentContainer">Apartment not found.</div>;
  }

  const handleAddComment = () => {
    if (!newOpinion.trim()) {
      alert("Please enter a comment.");
      return;
    }
    const newComment = {
      opinion: newOpinion.trim(),
      rating: Number(newRating),
    };
    setComments([...comments, newComment]);
    setNewOpinion("");
    setNewRating(5);
  };

  const reitingNumbers = Array.from({ length: 5 }, (_, ind) => 5 - ind)

  return (
    <div className="apartmentContainer">
      <img
        className="apartmentImage"
        src={apartment.background}
        alt={apartment.name}
      />
      <div className="apartmentHeader">
        <div className="apartmentTitle">
          {apartment.name}
          <span>{apartment.sold ? "Sold" : "Available"}</span>
        </div>
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
      <button
        className="apartmentBtn"
        onClick={() =>
          apartment.sold
            ? alert("This apartment is sold.")
            : alert("This apartment is available.")
        }
      >
        Buy Now
      </button>

      <div className="comentConatiner">
        <div className="addComent">
          <input
            type="text"
            placeholder="Add a comment"
            value={newOpinion}
            onChange={(e) => setNewOpinion(e.target.value)}
          />
          <select
            value={newRating}
            onChange={(e) => setNewRating(e.target.value)}
          >
            {reitingNumbers.map((num) => (
              <option key={num} value={num}>
                {num} Star{num > 1 ? "s" : ""}
              </option>
            ))}
          </select>
          <button className="apartmentBtn" onClick={handleAddComment}>
            Add Comment
          </button>
        </div>

        <div className="coments">
          {comments.map((val, index) => (
            <div className="coment" key={index}>
              <div className="comentContent">
                <div className="comentHeader">
                  <span className="comentRating">
                    {"⭐".repeat(val.rating)}{" "}
                    <span className="ratingValue">({val.rating}/5)</span>
                  </span>
                </div>
                <p className="comentText">{val.opinion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
