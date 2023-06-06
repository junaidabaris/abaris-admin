import { useState } from "react";
import ModalCombo from "../../Pages/addComboProduct/ModalCombo";
import { useGetProductSearchQuery } from "../all-products/allproductsApi/allProductsApi";
import { RxCross1 } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";

function ProductsInformationAdmin({ dataSetNext }) {
    const [show, setShow] = useState(true)
    const [modalShow, setModalShow] = useState(false);
    const [cartData, setcartData] = useState(null)
    const [showCombo, setShowCombo] = useState([])
    const [searchs, setSearch] = useState('')

    const { data: searchPro } = useGetProductSearchQuery(searchs)

    const SaveData = (val) => {
        setModalShow(false)
        const arr = [...showCombo, ...val]
        setShowCombo(arr)
    }

    const handelChange = (e) => {
        if (e.key === 'Enter') {
            const clone = e.target.value
            setSearch(clone);
            setShow(true)
        }
    }

    const setTableItem = (item) => {
        setcartData(item);
        setModalShow(true)
        setShow(false)
    }


    const deleteItem = (index) => {
        const filterd = showCombo.filter((item, i) => {
            if (i !== index) {
                return item
            }

        })
        setShowCombo(filterd);
    }

    const sendValues = ()=>{
        dataSetNext(showCombo)
    }

    return (
        <>


            {modalShow && <ModalCombo
                show={modalShow}
                onHide={() => setModalShow(false)}
                cartData={cartData}
                SaveData={SaveData}
                showCombo={showCombo}
            />}


            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Product Information</h5>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Product Name <span className="text-danger">*</span></label>
                        <div className="col-md-8">
                            <input className="form-control" onKeyDown={handelChange} placeholder="Please add products to order list" />
                            {show && searchPro?.getSearchedProduct?.length > 0 && <div className="showList">
                                <div style={{ fontSize: "19px" }} onClick={() => { setShow(false) }}><RxCross1 /></div>
                                {searchPro?.getSearchedProduct.map((item) => {
                                    return <h6 key={item._id} style={{ cursor: "pointer" }} onClick={() => setTableItem(item)}>{item.name}</h6>
                                })}
                            </div>}
                        </div>
                    </div>

                    <div className="row align-items-end">
                        <div className="col-12 sku_combination table-responsive form-group" id="sku_combination">
                            <table className="table table-bordered physical_product_show">
                                <thead>

                                    <tr>
                                        <td><label className="control-label">#</label></td>
                                        <td><label className="control-label">Product Name</label></td>
                                        <td><label className="control-label">SKU</label></td>
                                        <td><label className="control-label">Variant</label></td>
                                        <td><label className="control-label">MRP</label></td>
                                    </tr>

                                </thead>

                                <tbody>

                                    {showCombo && showCombo.map((item, i) => {
                                        return <tr key={i}>
                                            <td>
                                                <AiFillDelete onClick={() => { deleteItem(i) }} />
                                            </td>
                                            <td>
                                                <label name="productName" className="control-label">{item?.productName}</label>
                                            </td>
                                            <td>
                                                <input type="text" disabled value={item?.sku} name="sku" className="form-control" />
                                            </td>
                                            <td>
                                                <input type="text" disabled value={item?.weight} name="rate" className="form-control" />
                                            </td>
                                            <td>
                                                <input type="text" disabled value={item?.mrp} name="actual_rate" className="form-control" />
                                            </td>

                                        </tr>
                                    })}
                                </tbody>

                            </table>
                        </div>
                    </div>

                    <button type="button" class="btn btn-success" onClick={sendValues}>Next ..</button>
                </div>

            </div>
        </>
    )
}
export default ProductsInformationAdmin;