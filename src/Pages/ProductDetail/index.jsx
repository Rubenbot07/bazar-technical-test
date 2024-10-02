import { useGetUrlData } from "../../hooks/useGetUrlData"

export function ProductDetail ({productList}) {
    const {filter, id} = useGetUrlData(productList)
    console.log(id)
    return (
        <section className="product-detail">
            <h2>Product Detail</h2>
            <p>{filter[0].title}</p>
            <img src={filter[0].thumbnail} alt="" />
        </section>
    )
}