import { useEffect, useState } from 'react'
import bookingService from '../services/bookingService'

export default function AdminPanel() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    bookingService.getAll().then(setBookings)
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Bookings</h2>
      <ul className="space-y-2">
        {bookings.map(b => (
          <li key={b._id} className="bg-white p-2 rounded shadow">
            {b.name} booked {b.eventName} at {b.time}
          </li>
        ))}
      </ul>
    </div>
  )
}
