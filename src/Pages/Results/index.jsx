import { useLocation } from 'react-router-dom';
import { Search } from '../../components/Search';
export function Results ({ productList }) {

    console.log(productList)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const itemName = searchParams.get('search') || '';
    const filter = productList.filter(item => 
        item.title.toUpperCase().includes(itemName.toUpperCase()) || 
        item.category.includes(itemName)
    );
    return (
        <section className='results'>
            <Search />
            <p>{`Search results of "${itemName}": ${filter.length}`}</p>
            <div className='results-container'>
                {
                    itemName.length
                    ? (
                        
                            filter.map(item => {
                                return (
                                    <div className="item-container" key={item.id}>
                                        <div className='img-container'>
                                            <img src={item.thumbnail} alt="" />
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