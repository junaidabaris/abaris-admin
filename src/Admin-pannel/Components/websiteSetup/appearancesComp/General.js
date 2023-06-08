import axios from 'axios';
import React, { useEffect, useState } from 'react';

function General() {

    const [state, setState] = useState({
        front_top_message: "",
        icon: "",
    })

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/adminFrontMessage/id`)
        setState({
            front_top_message: res.data.front_top_message,
            icon: res.data.icon,
        })
    }

    useEffect(() => {
        getData()
    }, [])



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
        const formData = new FormData();
     

        formData.append('front_top_message', state.front_top_message);
        formData.append('image', file ? file : state.icon.url);
        try {
            const res = await axios.put(`https://onlineparttimejobs.in/api/adminFrontMessage/update_AdminGeneralMessages`, formData)
            alert('FRONT HEADER SETTING UPDATED')
            setState({
                front_top_message: res.data.front_top_message,
                icon: res.data.icon,
            })
        } catch (error) {
            alert('SERVER ERROR FRONT HEADER SETTING NOT UPDATED')
        }
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
                                <input type="text" name="front_top_message" value={state?.front_top_message} onChange={changeHandel} className="form-control" placeholder="Front Top Message" fdprocessedid="t2ds68j" />
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
                                <input type='file' name='icon' onChange={changephoto} className='form-control' />
                                <img style={{ width: "150px", margin: "10px 0", border: "1px solid black", padding: "10px", objectFit: "cover" }} src={state?.icon?.url} />
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