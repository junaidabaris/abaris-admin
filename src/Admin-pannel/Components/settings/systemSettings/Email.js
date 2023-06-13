import React from 'react'

function Email() {
    return (
        <>
            <div className="scheduler-border">
                <legend className="scheduler-border">Email</legend>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Email Protocol *</label>
                        <select name="rows_per_page" id="rows_per_page" className="form-select">
                            <option value={0} >PHP Mail Function</option>
                            <option value={1} >Send Mail</option>
                            <option value={1} >SMTP</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary m-3 pe-5" style={{ width: '60px', textAlign: 'end' }}>Save</button>
            </div>
        </>
    )
}

export default Email