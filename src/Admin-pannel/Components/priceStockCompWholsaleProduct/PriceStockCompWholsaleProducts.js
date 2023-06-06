import { useState } from "react";

function PriceStocCompkWholsaleProducts() {
    const [row, setRow] = useState([{ id: 12 }])

    const incRows = () => {
        const clone = [...row]
        clone.push({ id: Math.random() })
        setRow(clone)
    }

    const removeRow = (_id) => {
        const filterdRow = row.filter((item) => {
           if (item.id === _id) {

           } else {
            return item
           }
        })

        setRow(filterdRow)
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Product price + stock</h5>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Unit price <span className="text-danger">*</span></label>
                        <div className="col-md-6">
                            <input type="number" lang="en" min={0} defaultValue={0} step="0.01" placeholder="Unit price" name="unit_price" className="form-control" required fdprocessedid="jjt0ap" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">
                            Set Point
                        </label>
                        <div className="col-md-6">
                            <input type="number" lang="en" min={0} defaultValue={0} step={1} placeholder={1} name="earn_point" className="form-control" fdprocessedid="i4cfrb" />
                        </div>
                    </div>
                    <div>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Quantity <span className="text-danger">*</span></label>
                            <div className="col-md-6">
                                <input type="number" lang="en" min={0} defaultValue={0} step={1} placeholder="Quantity" name="current_stock" className="form-control" required fdprocessedid="f90buo" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">
                                SKU
                            </label>
                            <div className="col-md-6">
                                <input type="text" placeholder="SKU" name="sku" className="form-control" fdprocessedid="jlbx79" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">
                            Wholesale Prices
                        </label>



                        <div className="row align-items-end">
                            <div className="col-12 sku_combination table-responsive form-group" id="sku_combination">
                                <table className="table table-bordered physical_product_show">
                                    <thead>

                                        <tr>
                                            <td><label className="control-label">#</label></td>
                                            <td><label className="control-label">Product Name</label></td>
                                            <td><label className="control-label">SKU</label></td>
                                            <td><label className="control-label">Variant</label></td>
                                        </tr>

                                    </thead>

                                    <tbody>

                                        {true && [1].map((item, i) => {
                                            return <tr key={i}>
                                                <td>
                                                    {/* <AiFillDelete onClick={() => { deleteItem(i) }} /> */}1
                                                </td>
                                                <td>
                                                    {/* <label name="productName" className="control-label">{item?.productName}</label> */}sss
                                                </td>
                                                <td>
                                                    {/* <input type="text" disabled value={item?.sku} name="sku" className="form-control" /> */}
                                                    sss
                                                </td>
                                                <td>
                                                    {/* <input type="text" disabled value={item?.weight} name="rate" className="form-control" /> */}
                                                    ss
                                                </td>


                                            </tr>
                                        })}
                                    </tbody>

                                </table>
                            </div>
                        </div>







                        <div className="col-md-6">
                            <div className="qunatity-price">
                                {row.map((item) => {
                                    return <div className="row gutters-5">
                                        <div className="col-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Min QTY" name="wholesale_min_qty[]" required fdprocessedid="qotckq" />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Max QTY" name="wholesale_max_qty[]" required fdprocessedid="h58k6x" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Price per piece" name="wholesale_price[]" required fdprocessedid="sw6gj4" />
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" onClick={() => { removeRow(item.id) }}>
                                                <i className="las la-times" />
                                            </button>
                                        </div>
                                    </div>
                                })}
                            </div>
                            <button type="button" className="btn btn-soft-secondary btn-sm" onClick={incRows}>
                                Add More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default PriceStocCompkWholsaleProducts;