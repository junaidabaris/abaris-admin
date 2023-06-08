import axios from "axios";
import { useEffect, useState } from "react";

function CustomScript() {

    const [state, setState] = useState({
        about_company: "",
        office_address: "",
        location: "",
        phoneNo: "",
        email: "",
    })

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/adminWeb_footer/get`)
        setState({
            about_company: res.data.about_company,
            office_address: res.data.office_address,
            location: res.data.contact_info.location,
            phoneNo: res.data.contact_info.phoneNo,
            email: res.data.contact_info.email,
        })
    }

    useEffect(() => {
        getData()
    }, [])



    const changeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const sendData = async () => {
        const clone = {
            contact_info: {
                location: state.location,
                phoneNo: state.phoneNo,
                email: state.email
            },
            about_company: state.about_company,
            office_address: state.office_address
        }
        try {
            const res = await axios.put(` https://onlineparttimejobs.in/api/adminWeb_footer/update`, clone)
            alert('FRONT FOOTER SETTING UPDATED')

        } catch (error) {
            alert('SERVER ERROR FRONT FOOTER SETTING NOT UPDATED')
        }
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
                                <textarea name="about_company" value={state?.about_company} onChange={changeHandle} rows={4} className="form-control" placeholder />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">OFFICE ADDRESS</label>
                            <div className="col-md-8">
                                <textarea name="office_address" value={state?.office_address} onChange={changeHandle} rows={4} className="form-control" placeholder />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">LOCATION</label>
                            <div className="col-md-8">
                                {/* <label className="col-md-3 col-from-label" >LOCATION</label> */}
                                <input className="form-control" value={state?.location} name="location" onChange={changeHandle} placeholder="LOCATION" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">PHONE NUMBER</label>
                            <div className="col-md-8">
                                {/* <label className="col-md-3 col-from-label">PHONE NUMBER</label> */}
                                <input className="form-control" value={state?.phoneNo} name="phoneNo" onChange={changeHandle} placeholder="PHONE NUMBER" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">EMAIL</label>
                            <div className="col-md-8">
                                {/* <label className="col-md-3 col-from-label">EMAIL</label> */}
                                <input className="form-control" name="email" value={state?.email} onChange={changeHandle} placeholder="EMAIL" />
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