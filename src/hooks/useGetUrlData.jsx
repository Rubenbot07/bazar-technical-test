import { useLocation, useParams } from "react-router-dom";
export function useGetUrlData (productList) {
    const { id } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const itemName = searchParams.get('search') || '';
    let filter = ''
    if(id) {
        filter = productList.filter(item => item.id == id)
        console.log(filter)
    } else {
        filter = productList.filter(item => 
            item.title.toUpperCase().includes(itemName.toUpperCase()) || 
            item.category.includes(itemName)
        )
    }

    return { filter, itemName, id }
}