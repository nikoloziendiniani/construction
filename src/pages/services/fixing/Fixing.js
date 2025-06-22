import React from "react";
import "./fixing.css";

import ConstructionWorkersSlider from "../../../components/slider/constructionWorkersSlider/ConstructionWorkersSlider";

export const Fixing = () => {
  return (
    <div className="fixingContainer">
      <h1 className="fixingTitle">Our Construction & Fixing Services</h1>

      <section className="fixingSection">
        <h2>How We Fix Houses</h2>
        <p>
          Our expert team specializes in comprehensive house repairs and
          renovations. From foundation fixes to roof repairs, we ensure your
          home is safe, durable, and beautiful. We assess the damage
          carefully, propose cost-effective solutions, and use modern methods
          to restore your home to the highest standards.
        </p>
      </section>

      <section className="fixingSection">
        <h2>Materials We Use</h2>
        <ul>
          <li>
            <strong>Concrete & Cement:</strong> For strong foundations,
            walls, and floors.
          </li>
          <li>
            <strong>Steel & Reinforcement Bars:</strong> To increase
            structural strength and durability.
          </li>
          <li>
            <strong>Eco-friendly Insulation:</strong> For energy efficiency
            and comfort.
          </li>
          <li>
            <strong>High-quality Wood:</strong> For interior framing,
            flooring, and finishes.
          </li>
          <li>
            <strong>Waterproof Coatings & Sealants:</strong> To protect
            against moisture damage.
          </li>
        </ul>
      </section>

      <section className="fixingSection">
        <h2>Our Construction Approach</h2>
        <p>
          Safety, sustainability, and customer satisfaction guide every
          project. We use the latest construction technologies and follow all
          safety regulations. Our dedicated team works closely with you from
          planning to completion to ensure your vision becomes reality.
        </p>
      </section>

      <section className="fixingSection">
        <h2>Contact Us</h2>
        <p>
          Interested in our services? Reach out to us for a consultation and
          quote. We are committed to building lasting relationships and
          quality results.
        </p>
        <ConstructionWorkersSlider />
      </section>
    </div>
  );
};

