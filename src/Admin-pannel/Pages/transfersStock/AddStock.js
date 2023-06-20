import { useEffect, useState } from "react"
import { useAddPurchaseCartMutation, useDeleteCartRowMutation, useGetPickupPointQuery, useGetProductSearchQuery } from "../../Components/all-products/allproductsApi/allProductsApi"
import { RxCross1 } from "react-icons/rx"
import GenerateTr from "../../Components/addPurchaseList/GenerateTr"

function AddStock() {
    const [show, setShow] = useState(false)
    const [searchs, setSearch] = useState('')
    const { data: searchPro } = useGetProductSearchQuery(searchs)
    const { data: pickUp } = useGetPickupPointQuery();

    const [setCart, { isLoading, data: cartData, isError: isCartsError }] = useAddPurchaseCartMutation()

    const [showData, setShowData] = useState([])
    const [finalCatD, setFinalCatD] = useState([]);

    const setTableItem = async (item) => {
        const obj = { purchase: showData, pickupPoints: finalCatD }

        setCart({ id: item._id, data: obj })
        setShow(false)
    }
    const SetPick = (e)=>{
        const clone = [...finalCatD]
        clone.push(e.target.value)
        setFinalCatD(clone)
    }

    const [deleteRow, { isLoading: deleteRows, data: resData }] = useDeleteCartRowMutation()

    useEffect(() => {
        if (deleteRows) {
            setShowData(resData)
        }
    }, [deleteRows, deleteRows])

    const DeleteRow = (index) => {
        deleteRow({ index: index, data: { purchase: showData } })
    }


    const handelChange = (e) => {
        if (e.key === 'Enter') {
            const clone = e.target.value
            setSearch(clone);
            setShow(true)
        }
    }


    return <div className="aiz-main-content" style={{ width: "1400px", margin: "auto" }}>
        <div className="px-15px px-lg-25px">
            <div className="row">
                <div className="col-lg-8 mx-auto"></div>

                <div className="card">
                    <div className="card-header d-block">
                        <h5 className="fw-600 mb-0">Add Stock Transfer</h5>
                        <div style={{ margin: "10px 0" }} className="fw-600 mb-0">lease fill in the information below. The field labels marked with * are required input fields.</div>
                    </div>
                </div>

                <div className="card">
                    <div className="container">
                        <div className="row mainaddStc">
                            <div className="col-4">
                                <label for="basic-url" class="form-label">Date</label>
                                <input type="file" className="form-control" />
                            </div>
                            <div className="col-4">
                                <label for="basic-url" class="form-label">Reference</label>
                                <input type="file" className="form-control" />
                            </div>

                            <div className="col-4">
                                <label for="basic-url" class="form-label">To Pickup Point *</label>
                                <select className="form-select" onChange={SetPick} aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    {pickUp && pickUp.map((item)=>{
                                        return  <option value={item._id}>{item?.pickupPoint_name}</option>
                                    })}
                                   
                                </select>
                            </div>
                            <div className="col-4">
                                <label for="basic-url" class="form-label">Status *</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Pending</option>
                                    <option value="2">Send</option>
                                </select>
                            </div>

                            <div className="col-4">
                                <label for="basic-url" class="form-label">Shipping</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col-4">
                                <label for="basic-url" class="form-label">From Pickup Point *</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>



                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <div>
                                            <label>Products *</label>
                                            <input className="form-control" onKeyDown={handelChange} placeholder="Please add products to order list" />
                                            {show && searchPro?.getSearchedProduct?.length > 0 && <div className="showList">
                                                <div style={{ fontSize: "19px" }} onClick={() => { setShow(false) }}><RxCross1 /></div>
                                                {searchPro?.getSearchedProduct.map((item) => {
                                                    return <h6 key={item._id} style={{ cursor: "pointer" }} onClick={() => setTableItem(item)}>{item.name}</h6>
                                                })}
                                            </div>}

                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="container-fluid">
                                <div className="card-header" style={{ padding: "0", marginTop: "10px" }}>
                                    <h4 className="mb-0">Variant SKU Wise Add Quantity</h4>
                                </div>
                                <div className="card mt-2 rest-part col-lg-12">
                                    <div className="card-body">
                                        <div className="row align-items-end">
                                            <div className="col-12 sku_combination table-responsive form-group" id="sku_combination">
                                                <table className="table table-bordered physical_product_show">
                                                    <thead>

                                                        <tr>
                                                            <td><label className="control-label">#</label></td>
                                                            <td><label className="control-label">Product Name</label></td>
                                                            <td><label className="control-label">Variant</label></td>
                                                            <td><label className="control-label">SKU</label></td>
                                                            <td><label className="control-label">Pickup Point</label></td>
                                                            <td><label className="control-label">Quantity</label></td>
                                                        </tr>

                                                    </thead>

                                                    <tbody>

                                                        {cartData && cartData.map((item, i) => {
                                                            return <GenerateTr showData={showData} setShowData={setShowData} DeleteRow={DeleteRow} key={i} item={item} index={i} pickUp={pickUp}/>
                                                        })}



                                                    </tbody>

                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>
                        <button style={{ margin: "10px 0" }} type="button" class="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default AddStock 