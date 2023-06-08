import React, { useState } from 'react';

function General() {

    const [state, setState] = useState({
        message: "",
        photo: "",
    })

    const [file, setFile] = useState()
    const changephoto = (e) => {
        setFile(e.target.files[0])
    }

    const changeHandel = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const sendData = async () => {

    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h6 className="fw-600 mb-0">General</h6>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Front Top Message</label>
                            <div className="col-md-8">
                                <input type="text" name="message" onChange={changeHandel} className="form-control" placeholder="Front Top Message" fdprocessedid="t2ds68j" />
                            </div>
                        </div>

                        {/* <div className="form-group row">
                            <label className="col-md-3 col-from-label">Site Motto</label>
                            <div className="col-md-8">
                                <input type="text" name="site_motto" className="form-control" placeholder="Best eCommerce Website" fdprocessedid="1rmaqv" />
                            </div>
                        </div> */}

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Site Icon</label>
                            <div className="col-md-8">
                                <input type='file' name='photo' onChange={changephoto} className='form-control' />
                            </div>
                        </div>

                        {/* <div className="form-group row">
                            <label className="col-md-3 col-from-label">Website Base Color</label>
                            <div className="col-md-8">
                                <input type="text" name="base_color" className="form-control" placeholder="#377dff" fdprocessedid="74zdr" />
                                <small className="text-muted">Hex Color Code</small>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Website Base Hover Color</label>
                            <div className="col-md-8">
                                <input type="text" name="base_hov_color" className="form-control" placeholder="#377dff" fdprocessedid="zhpbt" />
                                <small className="text-muted">Hex Color Code</small>
                            </div>
                        </div> */}

                        <div className="text-right">
                            <button type="button" className="btn btn-primary" onClick={sendData} fdprocessedid="nl9ds4">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default General;