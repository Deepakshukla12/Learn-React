import { useState } from 'React';
function Object() {
    const [car, setCar] = useState({
        brand: "BMW",
        model: "X5",
        color: "black",
        year: 2020
    });

    const changeSpecs = () => {
        setCar(prev => {
            return {
                ...prev,
                model:"M2",
                year: 2025
            };
        });
    }

    return (
        <>
            <h1>My car brand is {car.brand}</h1>
            <h2>
                It is a {car.color} {car.model} from {car.year}.
            </h2>
            <button type='button' onClick = {changeSpecs}> Change specs </button>
        </>
    );
}

export default Object;