import React from 'react'

function WeighingScaleBarcode() {
    return (
        <>
            <div className="scheduler-border">
                <legend className="scheduler-border">Weighing Scale Barcode</legend>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Barcode contains</label>
                        <select name="rows_per_page" id="rows_per_page" className="form-select">
                            <option value={0} >Weight/Quantity</option>
                            <option value={1} >Price</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Barcode total characters</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Flag Characters</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="site_name">Item Code Starting Position</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="site_name">Number of characters in Item Code</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Weight Starting Position</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Number of characters in Weight</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Weight divide by</label>
                        <input type="text" className="form-control tip" />
                    </div>
                </div>
                <button className="btn btn-primary m-3 pe-5" style={{ width: '60px', textAlign: 'end' }}>Save</button>
            </div>
        </>
    )
}

export default WeighingScaleBarcode