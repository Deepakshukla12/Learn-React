import { useState } from 'react';

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
    };

    const [user, setUser] = useState({});

    const handleFirstName = (e) => {
        setUser(prev => {
            return {
                ...prev,
                firstName: e.target.value
            }
        })
    };

    const handleLastName = (e) => {
        setUser(prev => {
            return {
                ...prev,
                lastName: e.target.value
            }
        })
    }

    const handleMail = (e) => {
        setUser(prev => {
            return {
                ...prev,
                emailId: e.target.value
            }
        })
    };

    return (
        <>
            <h1>My car brand is {car.brand}</h1>
            <h2>
                It is a {car.color} {car.model} from {car.year}.
            </h2>
            <button type='button' onClick = {changeSpecs}> Change specs </button>
            <br /><br />
            <label>
                First Name:
                <input 
                    type='text' 
                    placeholder='Enter the first name here'
                    value={user.firstName}
                    onChange={handleFirstName} />
            </label>
            &nbsp;
            <label>
                Last Name:
                <input 
                    type='text' 
                    placeholder='Enter the last name here'
                    value={user.lastName}
                    onChange={handleLastName} />
            </label>
            &nbsp;
            <label>
                Email ID:
                <input 
                    type='email' 
                    placeholder='Enter the email here'
                    value={user.emailId}
                    onChange={handleMail} />
            </label>
            <p>
                {user.firstName}
                {user.lastName}
                ({user.emailId})
            </p>
        </>
    );
}

export default Object;