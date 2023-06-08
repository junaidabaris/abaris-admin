import { useState } from "react";

function CustomScript() {

    const [state, setState] = useState({
        about_campany: "",
        about_campany: "",
        about_campany: "",
        about_campany: "",
        about_campany: "",
    })

    const changeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const sendData = async()=>{
        
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h6 className="fw-600 mb-0">Footer</h6>
                </div>
                <div className="card-body">
                    <form action="https://mmslfashions.in/admin/business-settings/update" method="POST" encType="multipart/form-data">

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">ABOUT COMPANY</label>
                            <div className="col-md-8">
                                <textarea name="header_script" onChange={changeHandle} rows={4} className="form-control" placeholder />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">OFFICE ADDRESS</label>
                            <div className="col-md-8">
                                <textarea name="header_script"  onChange={changeHandle} rows={4} className="form-control" placeholder />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">LOCATION</label>
                            <div className="col-md-8">
                                {/* <label className="col-md-3 col-from-label" >LOCATION</label> */}
                                <input className="form-control"  onChange={changeHandle} placeholder="LOCATION" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">PHONE NUMBER</label>
                            <div className="col-md-8">
                                {/* <label className="col-md-3 col-from-label">PHONE NUMBER</label> */}
                                <input className="form-control"  onChange={changeHandle} placeholder="PHONE NUMBER" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">EMAIL</label>
                            <div className="col-md-8">
                                {/* <label className="col-md-3 col-from-label">EMAIL</label> */}
                                <input className="form-control"  onChange={changeHandle} placeholder="EMAIL" />
                            </div>
                        </div>

                        <div className="text-right">
                            <button type="button" onClick={sendData} className="btn btn-primary" fdprocessedid="ujx6w">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default CustomScript;