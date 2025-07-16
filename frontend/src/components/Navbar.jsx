import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 space-x-4">
      <Link to="/">Home</Link>
      <Link to="/bookings">Bookings</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  )
}
