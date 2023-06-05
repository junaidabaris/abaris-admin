import { useDispatch, useSelector } from "react-redux";
import TextAreas from "./TextAreas"
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { usePostPopupMutation, useUpdatePopupsMutation } from "../../Components/all-products/allproductsApi/allProductsApi";
import { useParams } from "react-router-dom";
import { setDataDescription } from "../../Components/productDescriptionWrapper/textEditorSlice";

function AddPopups() {

    const { productDescription } = useSelector((state) => {
        return state.textEditorData
    })

    const [state, setState] = useState({
        page: "",
        url: "",
        date_from: "",
        date_to: "",
        duration: "Always",
        description: "",
        status: "",
        image: "",
    })

    const onChange = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }
    const [file, setFile] = useState()

    const changePhoto = (e) => {
        setFile(e.target.files[0])
    }

    const [sendDataVal, response] = usePostPopupMutation()

    const sendData = async () => {
        const formData = new FormData();
        formData.append('page', state.page);
        formData.append('url', state.url);
        formData.append('date_from', state.date_from);
        formData.append('duration', state.duration);
        formData.append('date_to', state.date_to);
        formData.append('image', file);
        formData.append('status', state.status);
        formData.append('description', productDescription);

        sendDataVal(formData)
    }

    const toastSuccessMessage = () => {
        toast.success("Popup added Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Popup not added", {
            position: "top-center"
        })
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
    }, [response]);

    useEffect(() => {
        if (response.isError === true) {
            toastErrorMessage()
        };
    }, [response])


    const dispatch = useDispatch()
    const params = useParams()
    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/popup/${params.id}`)
            setState(res.data)
            dispatch(setDataDescription(res.data.description))
        } catch (error) {
            alert('Server Error ,Fail to Load Data !')
        }
    }

    useEffect(() => {
        if (params.id) {
            getData()
        }
    }, [params])

    const [updateval, res2] = useUpdatePopupsMutation()
    const updateValue = () => {
        const formData = new FormData();
        let filesVal = file ? file : null
        
        formData.append('page', state.page);
        formData.append('url', state.url);
        formData.append('date_from', state.date_from);
        formData.append('duration', state.duration);
        formData.append('date_to', state.date_to);
        formData.append('image',filesVal);
        formData.append('status', state.status);
        formData.append('description', productDescription);

        updateval({ id: params.id, data: formData })
    }

    const toastSuccessMessage2 = () => {
        toast.success("Popup Update Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage2 = () => {
        toast.error("Popup not Updated", {
            position: "top-center"
        })
    };

    useEffect(() => {
        if (res2.isSuccess === true) {
            toastSuccessMessage2()
        };
    }, [res2]);

    useEffect(() => {
        if (res2.isError === true) {
            toastErrorMessage2()
        };
    }, [res2])


    return <div>
        <div className="profilePage p-30">
            <div className="container">
                <div className="pageTitle">
                    <h1 className="fs-3">Add Popup Details</h1>
                </div>
                <ToastContainer />
                <div className="row">
                    <div className="col-lg-12" >
                        <div className="card" style={{ padding: "10px" }}>
                            <div className="row">
                                <div className="col-4">
                                    <label className=" col-form-label">Select Page * </label>
                                    <select className="form-select" name="page" onChange={onChange} aria-label="Default select example">
                                        {params?.id ? <option selected>{state?.page}</option> : <option selected>Select Page *</option>}

                                        <option value="Home page">Home page</option>
                                        <option value="About">About</option>
                                        <option value="Contact">Contact</option>
                                        <option value="Product list">Product list</option>
                                        <option value="Product detail">Product detail</option>
                                    </select>
                                </div>

                                <div className="col-4">
                                    <label className=" col-form-label">URL * </label>
                                    <div className="col-md-10">
                                        <input
                                            onChange={onChange}
                                            type="text"
                                            className="form-control"
                                            name="url"
                                            value={state.url}
                                            placeholder="URL *"
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>

                                <div className="col-4">
                                    <label className=" col-form-label">Valid From * </label>
                                    <div className="col-md-10">
                                        <input
                                            onChange={onChange}
                                            name="date_from"
                                            type="date"
                                            className="form-control"
                                            placeholder="Valid From *"
                                            autoComplete="off"
                                        // value={state.date_from}
                                        />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <label className=" col-form-label">Valid To * </label>
                                    <div className="col-md-10">
                                        <input
                                            type="date"
                                            onChange={onChange}
                                            name="date_to"
                                            className="form-control"
                                            placeholder="Valid To *"
                                            autoComplete="off"
                                        // value={state.date_to}
                                        />
                                    </div>
                                </div>

                                {/* <div className="col-4">
                                    <label className=" col-form-label">Form Filed </label>
                                    <select className="form-select" disabled aria-label="Default select example">
                                        <option selected>Form Filed</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div> */}

                                <div className="col-4">
                                    <label className=" col-form-label">Duration </label>

                                    <select className="form-select" onChange={onChange} name="duration" aria-label="Default select example">
                                        <option value="Always">ALWAYS</option>
                                        <option value="onTime"> ON TIME</option>
                                    </select>
                                </div>



                            </div>


                            <div className="row" style={{ margin: "20px 0" }}>

                                <div className="col-5">
                                    <label className=" col-form-label">Status </label>

                                    <select className="form-select" onChange={onChange} name="status" aria-label="Default select example">
                                        <option value={true}>ACTIVE</option>
                                        <option value={false}>IN ACTIVE</option>
                                    </select>


                                    {/* <div className="form-check">
                                        <input className="form-check-input" type="radio" onClick={onChange} name='status' value={true} id="exampleRadios1" checked />
                                        <label className="form-check-label" onClick={onChange} name='status' value={true} for="exampleRadios1">
                                            ACTIVE
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" onClick={onChange} name='status' value={false} id="exampleRadios2" />
                                        <label className="form-check-label" onClick={onChange} name='status' value={false} for="exampleRadios2">
                                            
                                        </label>
                                    </div> */}
                                </div>

                                <div className="col-4">
                                    <label className=" col-form-label">Image </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="Valid To *"
                                        autoComplete="off"
                                        onChange={changePhoto}
                                    />
                                </div>

                                <div className="col-8">
                                    <TextAreas />

                                </div>



                            </div>

                        </div>

                        {params.id ? <button type="button" className="btn btn-success" onClick={updateValue}>Update</button> : <button type="button" className="btn btn-success" onClick={sendData}>Save</button>}
                        {/* <button type="button" className="btn btn-danger" style={{ margin: "0 10px" }}>Cancel</button> */}


                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default AddPopups