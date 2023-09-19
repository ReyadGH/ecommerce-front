import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";


const url = "http://localhost:8080/product/page?sort=price,asc"



function Product(){
    const [data, setData] = useState({
        items: [],
        isLoaded: false
    });

    const fetchInfo = () => {
        fetch(url)
            .then((result) =>
                {console.log("r" , result)
                 return result.json()}
            )
            .then((d) =>
                setData({
                    items: d.content,
                    isLoaded: true
                })
            )
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    return(!data.isLoaded)?(<h1>Please wait, data loading</h1>):(
        <>
        <div>
            <ProductCard items={data.items}/>

        </div>
        
        </>
    )

}

export default Product