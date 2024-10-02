import { useLocation } from 'react-router-dom';
import productsList from '../../products.json'

export function Results () {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const itemName = searchParams.get('search') || '';
    const filter = productsList.products.filter(item => 
        item.title.toUpperCase().includes(itemName.toUpperCase()) || 
        item.category.includes(itemName)
    );
    return (
        <>
            {
                filter.map(item => {
                    return (
                        <p key={item.id}>{item.title}</p>
                    )
                })
            }
        </>
    )
}