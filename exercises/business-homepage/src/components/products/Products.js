import React from "react";

function Products() {
    return (
        <div>
            <div className="prod-one">
                <h2 className="product-name">Great Product</h2>
                <p className="product-desc">Wow. This product is great.</p>
            </div>
            <div className="prod-two">
                <h2 className="product-name">The <i>Product</i></h2>
                <p className="product-desc">This is <i>the</i> product. You know the one.</p>
            </div>
            <div className="prod-three">
                <h2 className="product-name">Honestly Not That Great Product</h2>
                <p className="product-desc">Full disclosure: This one sucks.</p>
            </div>
            <div className="prod-four">
                <h2 className="product-name">Not That Many Products</h2>
                <p className="product-desc">At this point you might think I only have two products. You are correct.</p>
            </div>
            <div className="prod-five">
                <h2 className="product-name">I am so sorry.</h2>
                <p className="product-desc">I apologize for lying about having lots of products.</p>
            </div>
        </div>
    )
}

export default Products;
