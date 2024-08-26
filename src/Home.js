import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <Link to="/signup">signup</Link>
      <Link to="/login">login</Link>

    </div>
  )
}

export default Home
