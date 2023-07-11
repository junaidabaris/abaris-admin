import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

function ListComboProdust() {
    const [data, setData] = useState(null)

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/comboDeal`)
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])


    const deleteDatas = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/comboDeal/delete_ComboDeal/${id}`)
            alert('Deleted Combo List Successfully!')
            getData()
        } catch (error) {
            alert('Deleted Combo List Faild!')
        }
    }

    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="card" style={{ padding: "10px" }}>
                <h5>List Combo Products</h5>

                <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                    <input style={{ width: '250px' }} placeholder="Filter" className="form-control" />
                    <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Filter</button>
                </div>

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Variant Detail</th>
                            <th>Actual Rate</th>
                            <th>Combo Rate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data ? data.map((item, i) => {
                            console.log('item-----list combo prod', item)
                            return <tr key={item?.combo._id}>
                                <td>{1 + i}</td>
                                <td>
                                    {item?.combo?.products?.map((item) => {
                                        return <div style={{ margin: "0 5px" }}>{item?.name} </div>
                                    })}
                                </td>
                                <td>

                                    {item?.combo?.products.map((item, j) => {
                                        return <div>
                                            {item?.variant?.map((ite) => {
                                                return <span style={{ margin: "0 5px" }}>{ite?.weight} ,</span>
                                            })}
                                        </div>
                                    })}
                                </td>
                                <td>{item?.combo?.actualRate}</td>
                                <td>{item?.combo?.offer_Price}</td>
                                <td>
                                    {/* <Link to="#" className="btn btn-soft-success btn-icon btn-circle btn-sm" title="View">
                                        <i className="las la-eye" />
                                    </Link> */}
                                    <Link to="#" className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                        {/* {`edit/${item?.combo._id}`} */}
                                        <i className="las la-edit" />
                                    </Link>

                                    <button type="button" onClick={() => { deleteDatas(item?.combo._id) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                        <i className="las la-trash" />
                                    </button>

                                </td>
                            </tr>
                        }) : <tr><td><h5>No Data</h5></td></tr>}



                    </tbody>
                </Table>
            </div>
        </div>

    </div>
}

export default ListComboProdust