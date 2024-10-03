import { Link } from 'react-router-dom';
import { BackButton } from '../../utils/BackButton'
import { Search } from '../../components/Search';
import { useGetUrlData } from '../../hooks/useGetUrlData';
import { StarRating } from '../../utils/StarRating';

import './Results.css'
export function Results ({ productList }) {
    const { filter, itemName , id} = useGetUrlData(productList)

    return (
        <section className='results'>
            <Search />
            <div className='top-info'>
                <BackButton />
                <p>{`Search results of "${itemName}"`}</p>
            </div>
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
                                                    <StarRating rating={item.rating}/>
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