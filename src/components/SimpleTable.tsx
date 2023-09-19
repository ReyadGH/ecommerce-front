function SimpleTable(props : {items : Map<string,string>[]}){
    return(
        <>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    {
                        Object.keys(props.items[0]).map(
                            (name: string, i: number) => <th key={i} scope="col">{name.replace(/^./, name[0].toUpperCase())}</th>
                        )
                    }
                </tr>   
                </thead>
                <tbody>
                {props.items.map(
                    (item: any)=>{
                        return (
                            <tr>
                                {/*<th scope="row">{item.id}</th>*/}
                                {
                                    Object.keys(item).map((k: string,j : number)=>
                                        <td key={'row-'+j}>{item[k]}</td>
                                    )
                                }
                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
        </>
    )
}

export default SimpleTable