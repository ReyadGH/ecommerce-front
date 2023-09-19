import {useEffect, useState} from "react";
import SimpleTable from "../components/SimpleTable";

function Customer() {
    const [data, setData] = useState({
        items: [],
        isLoaded: false
    });

    const url = "http://localhost:8080/customer/list"
    const fetchInfo = () => {
        fetch(url)
            .then((result) =>
                result.json()
            )
            .then((d) =>
                setData({
                    items: d,
                    isLoaded: true
                })
            )
    }

    useEffect(() => {
        fetchInfo();
    }, []);


    return (!data.isLoaded)?(<h1>Please wait, data loading</h1>): (
        <>

            <h1>Customers Table</h1>
            <SimpleTable items={data.items}/>
        </>

    )
}

export default Customer;