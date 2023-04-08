import React, { useState } from 'react';
import './Booking.css';
const Booking = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [numOfGuests, setNumOfGuests] = useState(1);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <br />
            <label>
                Phone Number:
                <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </label>
            <br />
            <label>
                Number of Guests:
                <input type="number" value={numOfGuests} onChange={(e) => setNumOfGuests(e.target.value)} required />
            </label>
            <br />
            <label>
                Date:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </label>
            <br />
            <label>
                Time:
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </label>
            <br />
            <button type="submit">Book Now</button>
        </form>
    );
};

export default Booking;