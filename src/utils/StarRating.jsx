import { IoStar, IoStarOutline } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
export const StarRating = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.3; // Para mostrar media estrella si el decimal es mayor o igual a 0.3
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    // Generar estrellas llenas
    for (let i = 1; i <= fullStars; i++) {
        stars.push(<span key={i} className="star filled"><IoStar /></span>);
    }

    // Generar estrella media si corresponde
    if (halfStar) {
        stars.push(<span key={fullStars + 1} className="star half"><IoStarHalf /></span>);
    }

    // Generar estrellas vacías
    for (let i = 1; i <= emptyStars; i++) {
        stars.push(<span key={fullStars + (halfStar ? 1 : 0) + i + 1} className="star"><IoStarOutline /></span>);
    }

    console.log(stars)
    return <div className="star-rating">{stars}</div>;
};