// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import { messaging, getToken, onMessage } from './firebase';

function App() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/flights')
      .then(response => response.json())
      .then(data => setFlights(data)) // Fetch actual data from API
      .catch(err => console.error('Fetch error:', err));
  }, []);

  useEffect(() => {
    // Request permission for notifications
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        getToken(messaging)
          .then(token => {
            console.log('FCM Token:', token);
            // You may want to send this token to your server for notifications
          })
          .catch(err => console.error('Error getting FCM token:', err));
      } else {
        console.error('Notification permission denied');
      }
    }).catch(err => console.error('Notification permission error:', err));

    // Handle incoming messages
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // You can display notifications or update UI here
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Status</h1>
        <table>
          <thead>
            <tr>
              <th>{process.env.REACT_APP_FIREBASE_API_KEY}</th>
              <th>Airline</th>
              <th>Status</th>
              <th>Gate</th>
              <th>Scheduled Time</th>
              <th>Updated Time</th>
            </tr>
          </thead>
          <tbody>
            {flights.map(flight => (
              <tr key={flight._id}>
                <td>{flight.flightNumber}</td>
                <td>{flight.airline}</td>
                <td>{flight.status}</td>
                <td>{flight.gate}</td>
                <td>{new Date(flight.scheduledTime).toLocaleString()}</td>
                <td>{new Date(flight.updatedTime).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
