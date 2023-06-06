import { useState } from "react";

function ProductsInformationAdmin() {
    const [prodInfoInpVal, setProdInfoInpVal] = useState({
        prodName: '',
        category: '',
        brand: '',
        unit: '',
        weight: '',
        minQuantity: '',
        tags: '',
        barcode: '',
        refundable: ''

    });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...prodInfoInpVal };
        clonedObj[inpName] = inpVal;
        // setProdInfoInpVal(clonedObj)
    };

    const getInpData = () => {
        // console.log(prodInfoInpVal)
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Product Information</h5>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Product Name <span className="text-danger">*</span></label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="prodName" placeholder="Product Name" required fdprocessedid="3bss68" onChange={onChangeHandler} />
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
                                    </tr>

                                </thead>

                                <tbody>

                                    {true && [1,2].map((item, i) => {
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





                    {/* <div className="form-group row" id="category">
                        <label className="col-md-3 col-from-label">Category <span className="text-danger">*</span></label>
                        <div className="col-md-8">
                            <select className="form-select" aria-label="Default select example" name="category" onChange={onChangeHandler}>
                                <option>Fertilizer</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row" id="brand">
                        <label className="col-md-3 col-from-label">Brand</label>
                        <div className="col-md-8">
                            <select className="form-select" aria-label="Default select example" name="brand" onChange={onChangeHandler}>
                                <option>Select Brand</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Unit</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="unit" placeholder="Unit (e.g. KG, Pc etc)" required fdprocessedid="nnwct" onChange={onChangeHandler} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Weight <small>(In Kg)</small></label>
                        <div className="col-md-8">
                            <input type="number" className="form-control" name="weight" step="0.01" defaultValue={0.00} placeholder={0.00} fdprocessedid="sq5qc3" onChange={onChangeHandler} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Minimum Purchase Qty <span className="text-danger">*</span></label>
                        <div className="col-md-8">
                            <input type="number" lang="en" className="form-control" name="minQuantity" defaultValue={1} min={1} required fdprocessedid="d0gl3m" onChange={onChangeHandler} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Tags <span className="text-danger">*</span></label>
                        <div className="col-md-8">
                            <tags className="tagify  form-control aiz-tag-input" aria-haspopup="listbox" aria-expanded="false" role="tagslist" tabIndex={-1}>
                                <span contentEditable data-placeholder="Type and hit enter to add a tag" aria-placeholder="Type and hit enter to add a tag" className="tagify__input" role="textbox" aria-autocomplete="both" aria-multiline="false" />
                            </tags>
                            <input type="text" className="form-control aiz-tag-input" name="tags" placeholder="Type and hit enter to add a tag" onChange={onChangeHandler} />
                            <small className="text-muted">This is used for search. Input those words by which cutomer can find this product.</small>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Barcode</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="barcode" placeholder="Barcode" fdprocessedid="ifjwoo" onChange={onChangeHandler} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Refundable</label>
                        <div className="col-md-8">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" name="refundable" defaultChecked defaultValue={1} onChange={onChangeHandler} />
                                <span />
                            </label>
                        </div>
                    </div> */}
                    {/* <button type="button" onClick={getInpData}>click</button> */}
                </div>

            </div>
        </>
    )
}
export default ProductsInformationAdmin;