import { useState } from "react"
import { Link } from "react-router-dom"
export function Search () {
    const [searchInput, setSearchInput] = useState('')

    const handleChange = (event) => {
        setSearchInput(event.target.value)
    }
    return (
        <form>
            <Link to='/'>
                <div className="logo">Logo</div>
            </Link>
            <input type="text" onChange={handleChange} />
            <Link to={`/items?search=${searchInput}`}>
                <button type="submit">Search</button>
            </Link>
        </form>
    )
}