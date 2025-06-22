import React, { useState } from "react"
import { Link } from "react-router-dom"

import ApartmentsData from "../../data/apartamentsData/ApartamentsData"

import "./apartamentFilter.css"

const ApartamentFilter = () => {

    const [filtered, setFiltered] = useState(ApartmentsData);

    const [city, setSity] = useState("")

    const citys = ApartmentsData.map((apartament) => apartament.city).sort()

    const uniqeCitys = [...new Set(citys)]

    console.log(uniqeCitys)

    const [rooms, setRooms] = useState("")
    const [minApartamentArea, setMinApartamentArea] = useState("");
    const [maxApartamentArea, setMaxApartamentArea] = useState("");

    const [minApartamentPrice, setMinApartamentPrice] = useState("");
    const [maxApartamentPrice, setMaxApartamentPrice] = useState("");

    const filteredApartaments = () => {
        let result = ApartmentsData;

        if (city !== "") {
            result = result.filter(apartament => apartament.city === city);
        }

        if (minApartamentArea !== "" || maxApartamentArea !== "") {
            const min = minApartamentArea !== "" ? Number(minApartamentArea) : 0;
            const max = maxApartamentArea !== "" ? Number(maxApartamentArea) : Infinity;
            result = result.filter(apartament => apartament.area >= min && apartament.area <= max);
        }

        if (minApartamentPrice !== "" || maxApartamentPrice !== "") {
            const min = minApartamentPrice !== "" ? Number(minApartamentPrice) : 0;
            const max = maxApartamentPrice !== "" ? Number(maxApartamentPrice) : Infinity;
            result = result.filter(apartament => apartament.price.perMonth >= min && apartament.price.perMonth <= max);
        }

        if (rooms !== "everything" && rooms !== "") {
            result = result.filter(apartament =>
                rooms === "4+" ? apartament.rooms >= 4 : apartament.rooms === Number(rooms)
            );
        }

        setFiltered(result);
    };

    return (
        <>

            <div className="searchContainer">
                <div className="title">
                    apartments best search
                </div>
                <div className="searches">
                    <select value={city} className="search locationSearch"
                        onChange={(e) => { setSity(e.target.value) }}>
                        <option value="">
                            every city
                        </option>
                        {
                            uniqeCitys.map((city) => (
                                <>
                                    <option>
                                        {city}
                                    </option>
                                </>
                            ))
                        }
                    </select>
                    <select value={rooms} className="search roomSearch"
                        onChange={(e) => { setRooms(e.target.value) }}  >
                        <option >
                            everything
                        </option>
                        <option>
                            1
                        </option>
                        <option>
                            2
                        </option>
                        <option>
                            3
                        </option>
                        <option>
                            4+
                        </option>
                    </select>
                    <div className="areaSearches">
                        <input value={minApartamentArea}
                            onChange={(e) => { setMinApartamentArea(e.target.value) }}
                            className="search araeSearch"
                            placeholder="min-area (m²)"
                        />
                        <input value={maxApartamentArea}
                            onChange={(e) => { setMaxApartamentArea(e.target.value) }}
                            className="search araeSearch"
                            placeholder="max-area (m²)"
                        />
                    </div>
                    <div className="priceSearches">
                        <input value={minApartamentPrice}
                            onChange={(e) => { setMinApartamentPrice(e.target.value) }}
                            className="search priceSearch"
                            placeholder="min-price"
                        />
                        <input value={maxApartamentPrice}
                            onChange={(e) => { setMaxApartamentPrice(e.target.value) }}
                            className="search priceSearch"
                            placeholder="max-price"
                        />
                    </div>
                </div>
                <button className="btn"
                    onClick={filteredApartaments}
                >
                    filter
                </button>
            </div>

            <div className="cards">
                {
                    filtered.map((apartament, ind) => (
                        <>
                            <div
                                key={apartament.id}
                                className="card"
                            >
                                <div className="image">
                                    <img src={apartament.background} alt="apartament" />
                                </div>
                                <div className="title">
                                    {apartament.name}
                                </div>
                                <div className="price">
                                    {apartament.price.perMonth.toFixed(2)}$ perMonth
                                </div>
                                <div className="text">
                                    {apartament.description}
                                </div>
                                <Link to={`apartament/${apartament.id}`}>
                                <button className="btn">
                                    encquire now
                                </button>
                            </Link>
                        </div >
                        </>
            ))
                }
        </div >
        </>
    )
}
export default ApartamentFilter