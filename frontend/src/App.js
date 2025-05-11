import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ name: '', address: '', phone: '', description: '' });

  useEffect(() => {
    axios.get('https://<YOUR-BACKEND-RENDER-URL>/api/services')
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://<YOUR-BACKEND-RENDER-URL>/api/pickup', form)
      .then(() => alert('Pickup Request Submitted'))
      .catch(err => console.error(err));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dry Cleaning Services</h1>
      <ul>
        {services.map(s => <li key={s.id}>{s.name} - ${s.price}</li>)}
      </ul>

      <h2>Request Pickup</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required /><br />
        <input name="address" placeholder="Address" onChange={handleChange} required /><br />
        <input name="phone" placeholder="Phone" onChange={handleChange} required /><br />
        <textarea name="description" placeholder="Clothes Description" onChange={handleChange} required /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;