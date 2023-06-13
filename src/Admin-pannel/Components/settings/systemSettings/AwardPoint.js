import React from 'react'

function AwardPoint() {
    return (
        <>
            <div className="scheduler-border">
                <legend className="scheduler-border">Award Points</legend>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Customer Award Points</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Award Points</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Staff Award Points</label>
                        <input type="text" className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Award Points</label>
                        <input type="text" className="form-control tip" />
                    </div>
                </div>
                <button className="btn btn-primary m-3 pe-5" style={{ width: '60px', textAlign: 'end' }}>Save</button>
            </div>
        </>
    )
}

export default AwardPoint