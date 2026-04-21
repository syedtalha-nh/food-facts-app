import { useState } from 'react'
import axios from 'axios'

function useFoodSearch() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchFood = async (query) => {
    setLoading(true)
    setError(null)

    try {
      const res = await axios.get(
        'https://www.kaggle.com/datasets/openfoodfacts/world-food-facts/api/v0/product/737628064502.json',
        {
          params: {
            search_terms: query,
            json: 1,
            page_size: 10
          }
        }
      )

      const filtered = res.data.products.filter(
        p => p.product_name && p.product_name.trim() !== ''
      )

      setResults(filtered)
    } catch {
      setError('Error fetching data')
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  return { results, loading, error, searchFood }
}

export default useFoodSearch