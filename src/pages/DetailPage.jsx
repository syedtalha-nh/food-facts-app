import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from '../store/savedSlice'

function DetailPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const savedItems = useSelector(state => state.saved.items)

  const product = location.state?.product

  if (!product) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Product not found</h2>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    )
  }

  const isSaved = savedItems.some(item => item.id === product.id)

  const handleSaveToggle = () => {
    if (isSaved) {
      dispatch(removeItem(product.id))
    } else {
      dispatch(addItem(product))
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h2>{product.product_name || 'Unknown Product'}</h2>
      <p>{product.brands || 'Unknown Brand'}</p>

      {product.image_url && (
        <img
          src={product.image_url}
          alt={product.product_name}
          style={{ width: '200px', marginBottom: '20px' }}
        />
      )}

      <div>
        <button onClick={handleSaveToggle}>
          {isSaved ? 'Remove from Saved' : 'Save to My List'}
        </button>
      </div>

      <h3>Nutrition per 100g</h3>
      <ul>
        <li>Calories: {product.nutriments?.['energy-kcal_100g'] || 'N/A'}</li>
        <li>Protein: {product.nutriments?.proteins_100g || 'N/A'}</li>
        <li>Carbs: {product.nutriments?.carbohydrates_100g || 'N/A'}</li>
        <li>Sugar: {product.nutriments?.sugars_100g || 'N/A'}</li>
        <li>Fat: {product.nutriments?.fat_100g || 'N/A'}</li>
      </ul>
    </div>
  )
}

export default DetailPage