import { useGetUrlData } from "../../hooks/useGetUrlData"
import { Search } from "../../components/Search"
import { BackButton } from "../../utils"
import './ProductDetail.css'

export function ProductDetail ({productList}) {
    const {filter} = useGetUrlData(productList)
    const product = filter[0]
    return (
        <section className="product-detail">
            <Search />
            <BackButton />
            <div className="product-detail__container">
                <div className="product-detail__images-container">
                    <div className="product-detail__main-img__container">
                        <img src={product?.thumbnail} alt={product.description} />
                    </div>
                    <div className="other-images__main-container">
                        {
                            product?.images.map((img, index) => {
                                return (
                                    <div className="other-images__item" key={index}>
                                        <img src={img} alt={product.description} />
                                    </div>  
                                )
                            })
                        }
                    </div>
                </div>   
                <div className="product-detail__info-container">
                    <p className="product-detail__title">{`${product?.title} - ${product.brand}`}</p>
                    <div className="product-detail__aditional--info">
                        <div className="stock-price__container">
                            <span className="price">{`${product?.price}$`}</span>
                            <span className="stock">{`${product?.stock} Available`}</span>
                        </div>
                        <span>{product?.rating}</span>
                    </div>
                </div>
                <div className="product-detail__description">
                    <p>
                        {product?.description}
                    </p>
                </div>
                <button className="buy-button">Buy now</button>
            </div>
        </section>
    )
}