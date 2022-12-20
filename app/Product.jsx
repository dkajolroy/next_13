import React from 'react'
const fetProduct = async () => {
    const res = await fetch("https://dummyjson.com/products")
    return await res.json()
}
export default async function Product() {

    const data = await fetProduct()

    return (
        <div>
            {
                data && data.products.map((product) => (
                    <div className="item" key={product.id}>
                        <span>{product.title}</span>
                    </div>
                ))
            }
        </div>
    )
}
