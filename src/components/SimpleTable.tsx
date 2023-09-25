function SimpleTable(props : {items : Map<string,string>[], actions: any[] }){
    return(
    
        <div className="">
        <table className="divide-y  shadow-2xl">
                <thead className="">
                <tr>
                    {
                        Object.keys(props.items[0]).map(
                            (name: string, i: number) => <th key={i} className="px-2 py-3 bg-gray-100 text-left font-semibold text-gray-600 tracking-wider" scope="col">{name.replace(/^./, name[0].toUpperCase())}</th>
                        )
                    }
                </tr>   
                </thead>
                <tbody>
                {props.items.map(
                    (item: any)=>{
                        return (
                            <tr className="hover:bg-gray-200 odd:bg-gray-50 even:bg-white">
                                {/*<th scope="row">{item.id}</th>*/}
                                {
                                    Object.keys(item).map((k: string,j : number)=>
                                        <td key={'customer-table-row-'+j} className="px-2 py-3 border-b border-gray-200   text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{item[k]}</p>
                                        </td>
                                    )
                                }
                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
        </div>
    )
}

export default SimpleTable