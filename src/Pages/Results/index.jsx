import productsList from '../../products.json'

export function Results () {

    const currentUrl = window.location.href
    const endUrl = currentUrl.lastIndexOf('=')
    const itemName = currentUrl.slice(endUrl + 1)
    console.log(itemName)
    const filter = productsList.products.filter(item => (item.title.toLocaleUpperCase()).includes(itemName.toLocaleUpperCase()) === true || (item.category).includes(itemName) === true)
    console.log(filter)
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