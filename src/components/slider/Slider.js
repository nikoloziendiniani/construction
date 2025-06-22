import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ApartmentsData from "../../data/apartamentsData/ApartamentsData";
import "./slider.css";

const Slider = () => {
    const totalProducts = ApartmentsData.length;
    const productPerView = 1;
    const maxIndex = totalProducts - productPerView;

    const [currentProduct, setCurrentProduct] = useState(0);

    const nextProduct = () => {
        setCurrentProduct((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    const prevProduct = () => {
        setCurrentProduct((prev) => (prev > 0 ? prev - 1 : maxIndex));
    };


    const apartments = ApartmentsData.slice(currentProduct, currentProduct + 1);

    const num = []

    /* const paginate = () => {
 
         const currentPage = currentProduct + 1
 
         const pages = []
         const maxVisiblePages = 3;
 
         if (totalProducts <= 4) {
             return Array.from({ length: totalProducts }, (_, index) => index + 1)
         }
 
         pages.push(1);
 
         if (currentPage > maxVisiblePages) {
             pages.push("...")
         }
 
         const startPage = Math.max(2, currentPage - 1);
         const endPage = Math.min(currentPage + 1, totalProducts - 1);
 
         for (let i = startPage; i <= endPage; i++) {
             pages.push(i);
         }
 
         if (currentPage < totalProducts - maxVisiblePages + 1) {
             pages.push("...");
         }
 
         pages.push(totalProducts);
 
         return pages;
 
     }
 */

    return (
        <div className="sliderContainer">
            <div className="sliderWrapper">

                <button onClick={prevProduct} className="prevBtn">
                    <FaArrowLeft />
                </button>

                <div className="sliderTracker">
                    {apartments.map((apartment) => (
                        <div
                            className="card"
                            key={apartment.id}
                            style={{
                                backgroundImage: `url(${apartment.background})`,
                            }}
                        >
                            <div className="container">
                                <h2>{apartment.name}</h2>
                                <p>{apartment.description}</p>
                                <div className="prices">
                                    <div className="price">Monthly: {apartment.price.perMonth.toFixed(2)}$ </div>
                                    <div className="price">Yearly: {apartment.price.perYear.toFixed(2)}$ </div>
                                </div>
                                <button className="btn">
                                    learn more
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="pagination">
                    {
                        ApartmentsData.map((_, ind) => (
                            <button
                                key={ind}
                                onClick={() => setCurrentProduct(ind)}
                                className="circle"
                                style={
                                    currentProduct === ind
                                        ? { backgroundColor: "black",
                                            boxShadow: `0px 0px 5px white`
                                         }
                                        : undefined
                                }
                            >
                            </button>
                        ))
                    }

                </div>


                <button onClick={nextProduct} className="nextBtn">
                    <FaArrowRight />
                </button>

            </div>

        </div>
    );
};

export default Slider;
