import { useState } from "react";
import _ from "underscore";

type searchHookType={
    list: object[],
    target: string,
    value: string,
    items?:object
}

export function useSearchFor(initialState: searchHookType){
    const [search, setSearch] : any= useState(initialState)


    const searchFor = (newSearch:searchHookType)=>{
        setSearch({...newSearch,items:_.filter(newSearch.list, (item) => {
            return item[newSearch.target].indexOf(newSearch.value) != -1;
          })})
    }
    return [search, searchFor]
}


// _.filter(fetchedData.response, (item) => {
//     return item["username"].indexOf(search) != -1;
//   })