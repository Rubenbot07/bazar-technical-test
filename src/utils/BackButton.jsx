import { useNavigate } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa";


export const BackButton = () => {   
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1)
    }
    return (
        <button className="back-button" onClick={handleClick}><FaChevronLeft /></button>
    )
}
