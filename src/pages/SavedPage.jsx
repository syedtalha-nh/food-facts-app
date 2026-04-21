import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../store/savedSlice'
import { useNavigate } from 'react-router-dom'

function SavedPage() {
  const savedItems = useSelector(state => state.saved.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (savedItems.length === 0) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>No saved items</h2>
        <button onClick={() => navigate('/')}>Go to Search</button>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Saved Items</h2>

      {savedItems.map(product => (
        <div
          key={product.id}
          style={{
            border: '1px solid #ccc',
            marginBottom: '15px',
            padding: '10px',
            borderRadius: '8px'
          }}
        >
          <h3>{product.product_name || 'Unknown Product'}</h3>
          <p>{product.brands || 'Unknown Brand'}</p>

          {product.image_small_url && (
            <img
              src={product.image_small_url}
              alt={product.product_name}
              style={{ width: '100px' }}
            />
          )}

          <div style={{ marginTop: '10px' }}>
            <button
              onClick={() =>
                navigate(`/product/${product.id}`, { state: { product } })
              }
            >
              View Details
            </button>

            <button
              onClick={() => dispatch(removeItem(product.id))}
              style={{ marginLeft: '10px' }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SavedPage