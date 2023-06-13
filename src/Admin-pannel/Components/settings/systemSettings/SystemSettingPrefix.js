import React from 'react'

function SystemSettingPrefix() {
    return (
        <>
            <div className="scheduler-border">
                <legend className="scheduler-border">Prefix</legend>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Sales Reference Prefix</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Return Sale Prefix</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Payment Reference Prefix</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Purchase Payment Prefix</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Delivery Reference Prefix</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Quotation Reference Prefix</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Purchase Reference Prefix</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Return Purchase Prefix</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Transfer Reference Prefix</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Expense Prefix</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Quantity Adjustment Prefix</label>
                        <input type="text" className="form-control tip" />
                    </div>
                </div>
                <button className="btn btn-primary m-3 pe-5" style={{ width: '60px', textAlign: 'end' }}>Save</button>
            </div>
        </>
    )
}

export default SystemSettingPrefix