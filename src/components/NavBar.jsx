import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function NavBar() {
  const savedCount = useSelector(state => state.saved.items.length)

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15px',
        background: '#eee'
      }}
    >
      <h2>🥗 FoodFacts</h2>

      <div style={{ display: 'flex', gap: '10px' }}>
        <NavLink to="/">Search</NavLink>
        <NavLink to="/saved">Saved ({savedCount})</NavLink>
      </div>
    </nav>
  )
}

export default NavBar