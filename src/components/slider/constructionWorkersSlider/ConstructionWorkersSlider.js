import React, { useState } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom"

import ConstructionWorkersData from "../../../data/constructionWorkersData/ConstructionWorkersData"

import "./constructionWorkersSlider.css"

const ConstructionWorkersSlider = () => {

    const totalProducts = ConstructionWorkersData.length;
    const productPerView = 2;
    const maxIndex = totalProducts - productPerView;
    const productWidth = 100 / productPerView

    const [currentProduct, setCurrentProduct] = useState(0);

    const nextProduct = () => {
        setCurrentProduct((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    const prevProduct = () => {
        setCurrentProduct((prev) => (prev > 0 ? prev - 1 : maxIndex));
    };

    return (
        <>
            <div className="sliderContainer">
                <button onClick={prevProduct} className="prevBtn">
                    <FaArrowLeft />
                </button>

                <div className="sliderTrack"
                >
                    {
                        ConstructionWorkersData.slice(currentProduct, currentProduct + productPerView).map((worker) => (
                            <>
                                <div
                                    className="card"
                                    key={worker.id}
                                >
                                    <div className="title">
                                        {worker.name}
                                    </div>
                                    <div className="image">
                                        <img src={worker.photo} alt="worker" />
                                    </div>
                                    <div className="specialty">
                                        {worker.specialty}
                                    </div>
                                    <div className="text">
                                        {worker.description}
                                    </div>
                                    <div className="experience">
                                        exprience: {worker.experienceYears} year's
                                    </div>
                                    <div className="number">
                                        call them on: <br />
                                        <a href={`tel:${worker.phone.replace(/[()\s-]/g, '')}`}>{worker.phone} </a>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>

                <button onClick={nextProduct} className="nextBtn">
                    <FaArrowRight />
                </button>
            </div>
        </>
    )
}
export default ConstructionWorkersSlider
