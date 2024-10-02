import { Link } from 'react-router-dom';
import { Search } from '../../components/Search';
import { useGetUrlData } from '../../hooks/useGetUrlData';
import './Results.css'
export function Results ({ productList }) {
    const { filter, itemName , id} = useGetUrlData(productList)
    console.log(id)
    return (
        <section className='results'>
            <Search />
            <p>{`Search results of "${itemName}"`}</p>
            <div className='results-container'>
                {
                    itemName.length
                    ? (
                        
                            filter.map(item => {
                                return (
                                    <Link to={`/items/${item.id}`} key={item.id}>
                                        <div className="item-container" >
                                            <div className='img-container'>
                                                <img src={item.thumbnail} alt={item.description} />
                                            </div>
                                            <div className="info-container">
                                                <span>{item.title}</span>
                                                <p>{item.description}</p>
                                                <div className='info__price-rating'>
                                                    <span>{`${item.price}$`}</span>
                                                    <span>{item.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                    )
                    : (
                        <p>No results</p>
                    )
                }
            </div>
            
        </section>
    )
}