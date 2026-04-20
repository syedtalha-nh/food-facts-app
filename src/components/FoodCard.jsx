function FoodCard({ product }) {
  const { product_name, brands, nutriments, image_small_url } = product

  return (
    <div className="food-card">
      <img
        src={image_small_url || 'https://via.placeholder.com/100'}
        alt={product_name}
      />

      <h3>{product_name || 'Unknown Product'}</h3>
      <p>{brands}</p>

      <p>Calories: {nutriments?.['energy-kcal_100g'] || 0}</p>
      <p>Protein: {nutriments?.proteins_100g || 0}g</p>
      <p>Carbs: {nutriments?.carbohydrates_100g || 0}g</p>
      <p>Fat: {nutriments?.fat_100g || 0}g</p>
    </div>
  )
}

export default FoodCard