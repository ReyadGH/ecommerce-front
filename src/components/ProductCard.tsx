import productDataType from "../types/productDataType";

function ProductCard(props : {items : productDataType[]}){
    return(
        <>
        <div style={{display: "flex",flexWrap: "wrap",justifyContent: "center", gap:"10px"}} >
        {props.items.map(
                (item: productDataType) => {return(
                <div key={item.id} className="card" style={{width:300}}>
                    <img style={{height:200}} className="card-img-top" src={item.image} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <a href="#" className="btn btn-primary">buy for {item.price}$</a>
                        </div>
                </div>
        )}
        )}
        </div>
        </>
    )
}

export default ProductCard