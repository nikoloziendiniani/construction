import image1 from "./../../asset/images/loft.jpg";
import image2 from "./../../asset/images/cozy.jpg";
import image3 from "./../../asset/images/condo.jpg";
import image4 from "./../../asset/images/apartamenWhithBedrooms.jpg";

const ApartmentsData = [
    {
        id: 1,
        name: "Downtown Loft",
        description: "Modern open-concept loft located in the heart of the city, featuring high ceilings, large windows, and stunning skyline views.",
        background: image1,
        price: {
            perMonth: 2300,
            perYear: 27600
        },
        city: "batumi",
        rooms: 2,
        area: 85 // in square meters
    },
    {
        id: 2,
        name: "Cozy Suburban Apartment",
        description: "Charming 2-bedroom apartment in a quiet neighborhood, perfect for small families or remote workers. Pet-friendly with nearby parks.",
        background: image2,
        price: {
            perMonth: 1590,
            perYear: 19080
        },
        city: "batumi",
        rooms: 1,
        area: 60
    },
    {
        id: 3,
        name: "Luxury High-Rise Studio",
        description: "Fully furnished studio in a luxury high-rise with amenities including a gym, pool, and 24/7 concierge service.",
        background: image3,
        price: {
            perMonth: 2490,
            perYear: 29880
        },
        city: "batumi",
        rooms: 2,
        area: 70
    },
    {
        id: 4,
        name: "Spacious 3-Bedroom Condo",
        description: "Ideal for larger households, this 3-bedroom condo offers generous space, a modern kitchen, and two balconies.",
        background: image4,
        price: {
            perMonth: 3200,
            perYear: 38400
        },
        city: "tbilisi",
        rooms: 4,
        area: 120
    }
];

export default ApartmentsData;
