
import productDataType from "../types/productDataType";
import ButtonCard from "./CardButton";
function ProductCard(props : {items : productDataType[]}){
    return(
        <>
        <div className="flex flex-wrap justify-center gap-4" >
        {props.items.map(
                (item: productDataType) => {return(
                    // card
                <div key={item.id} className="flex flex-col w-80 h-[26rem] p-5 shadow-xl rounded-md" >
                    {/* card-img-top */}
                    <img className="h-52 mx-auto" src={item.image} alt="Card image cap "/>
                    {/* card-body */}
                        <div className=" flex flex-col justify-between grow pt-4 border-dashed ">
                            <div>
                                {/* card-title */}
                                <h5 className="text-lg font-bold">{item.name}</h5>
                                {/* card-text */}
                                <p className="line-clamp-3">{item.description}</p>
                                {/* btn btn-primary */}
                            </div>
                            <ButtonCard key={"card-"+item.id} passedKey={"button-"+item.id} herf="#" text={"buy for $" +item.price}/>
                        </div>
                </div>
        )}
        )}
        </div>


        </>
    )
}

export default ProductCard