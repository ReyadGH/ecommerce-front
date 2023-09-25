import SimpleTable from "../components/SimpleTable";
import { useFetchData } from "../hooks/fetchData";

function Customer() {
    const url = "http://localhost:8080/customer/list"
    const [fetchedData, setfetchedData]: any = useFetchData({
        serverUrl: url,
        params: {},
      });
    
      if (fetchedData.loading) {
        return (
          <>
            <p>please wait, data loading...</p>
          </>
        );
      }
      console.log(fetchedData)
    return (
        <>

            <h1>Customers Table</h1>
            <SimpleTable items={fetchedData.response} actions={[]}/>
        </>

    )
}

export default Customer;