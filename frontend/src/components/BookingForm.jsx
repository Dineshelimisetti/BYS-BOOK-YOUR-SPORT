import { useState } from 'react';
import { submitBooking } from '../services/bookingService';

export default function BookingForm() {
  const [data, setData] = useState({
    name:'', regNo:'', course:'', section:'', 
    email:'', eventName:'', time:'', seatNumber:''
  });
  const [msg, setMsg] = useState('');

  const handleChange = e => setData({...data,[e.target.name]:e.target.value});
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await submitBooking(data);
      setMsg('🎉 Booking successful!');
      setData({name:'',regNo:'',course:'',section:'',email:'',eventName:'',time:'',seatNumber:''});
    } catch {
      setMsg('❌ Booking failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow mb-6">
      <h2 className="text-2xl mb-4">Book Your Event</h2>
      {Object.keys(data).map(key => (
        <input
          key={key}
          name={key}
          value={data[key]}
          onChange={handleChange}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          className="block w-full mb-3 p-2 border rounded"
          required
        />
      ))}
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Submit
      </button>
      {msg && <p className="mt-4">{msg}</p>}
    </form>
  );
}
