import React from 'react'
import { useParams } from 'react-router-dom'
import SearchProducts from '../components/Products/SearchProducts'
import SingleFooter from '../components/SingleProduct/SingleFooter'
import useFetchData from '../hooks/useFetchData'

const Search = () => {
    const searchText = useParams()
    const [data, isLoading] = useFetchData(`/products/?title=${searchText.text}&offset=0&limit=20`)
    return (
        <div>
            {
                <SearchProducts data={data} />
            }
            <SingleFooter />
        </div>
    )
}

export default Search