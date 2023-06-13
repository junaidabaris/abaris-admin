import React from 'react'

function MoneyAddNumberFormat() {
    return (
        <>
            <div className="scheduler-border">
                <legend className="scheduler-border">Money and Number Format</legend>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Decimals *</label>
                        <select name="rows_per_page" id="rows_per_page" className="form-select">
                            <option value={0} >Disable</option>
                            <option value={1} selected="selected">1</option>
                            <option value={2} >2</option>
                            <option value={3} >3</option>
                            <option value={4} >4</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Quantity Decimals *</label>
                        <select name="rows_per_page" id="rows_per_page" className="form-select">
                            <option value={0} >Disable</option>
                            <option value={1} selected="selected">1</option>
                            <option value={2} >2</option>
                            <option value={3} >3</option>
                            <option value={4} >4</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">South Asian Countries Currency Format *</label>
                        <select name="rows_per_page" id="rows_per_page" className="form-select">
                            <option value={0} >Disable</option>
                            <option value={1} selected="selected">Enable</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Decimals Separator *</label>
                        <select name="rows_per_page" id="rows_per_page" className="form-select">
                            <option value={0} >Dot(.)</option>
                            <option value={1} selected="selected">comma</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Thousands Separator *</label>
                        <select name="rows_per_page" id="rows_per_page" className="form-select">
                            <option value={0} >Dot(.)</option>
                            <option value={1} >comma</option>
                            <option value={1} selected="selected">Space</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Display Currency Symbol *</label>
                        <select name="rows_per_page" id="rows_per_page" className="form-select">
                            <option value={0} >Disable</option>
                            <option value={1} >Before</option>
                            <option value={1} selected="selected">After</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Currency Symbol</label>
                        <input type="text" className="form-control tip" />
                    </div>
                </div>
                <button className="btn btn-primary m-3 pe-5" style={{ width: '60px', textAlign: 'end' }}>Save</button>
            </div>
        </>
    )
}

export default MoneyAddNumberFormat