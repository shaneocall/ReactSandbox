import React from "react"


function Product(props) {

    const questionStyles = { display: !props.question && "none" }
    const answerStyles = { color: !props.question && "#888888" }

    return (
        <div className="product">
            <h3>Product: {props.product.name} </h3>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>  
            <hr />
        </div>
    )


}

export default Product;

