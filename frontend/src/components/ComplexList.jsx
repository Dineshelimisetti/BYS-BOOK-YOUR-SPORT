import { useEffect, useState } from 'react'
import complexService from '../services/complexService'

export default function ComplexList() {
  const [complexes, setComplexes] = useState([])

  useEffect(() => {
    complexService.getAll().then(setComplexes)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {complexes.map(c => (
        <div key={c._id} className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">{c.name}</h3>
          <p>Location: {c.location}</p>
          <p>Sports: {c.sports.join(', ')}</p>
        </div>
      ))}
    </div>
  )
}
