
import axios from "axios";
import { useEffect, useState } from "react"
import { Button, Modal, Spinner } from "react-bootstrap"

function PodEnteris(props) {

    let setId;

    const isPickupManagerLogin = window.localStorage.getItem('isPickupManagerLogin')
    const showMainadmin = window.localStorage.getItem('showMainadmin')

    if (isPickupManagerLogin === 'true') {
        setId = window.localStorage.getItem('isPickupManagerId')
    }
    if (showMainadmin === 'true') {
        setId = window.localStorage.getItem('adminId')
    }


    const [state, setState] = useState({
        customer_id: props.data.getaOrderById.user._id,
        order_id: props.data.getaOrderById._id,
        createdBy: setId,
        AwbNo: "",
        Pkt_Status: "",
        mode: "",
        courierName: "In_house",
        courier_reference_no: "",
        RcDate: "",
        RcTime: "",
        Remarks: "",
        RcName: "",
        RcRelation: "",
        RcPhone: "",
        image: "",
    })

    const isDelevery = window.localStorage.getItem('isDeleveryBoy')
    const DeleveryBoyId = window.localStorage.getItem('DeleveryBoyId')

    const [file, setFile] = useState(null)
    const photoChange = (e) => {
        setFile(e.target.files[0])
    }

    const [data, setData] = useState(null)

    const onchangeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/orderStatusMaster`)
            setData(res.data)

        } catch (error) {
            alert('Status Not Load')
        }
    }
    const getData1 = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/orderStatusMaster/delivery`)
            setData(res.data)

        } catch (error) {
            alert('Status Not Load')
        }
    }

    useEffect(() => {
        if (isDelevery === 'true') {
            getData1()
        } else {
            getData()
        }
    }, [])


    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)

    const sendData = async () => {
        setLoader(true)
        const clone = { ...state, image: file }
        const formData = new FormData();

        formData.append('customer_id', props.data.getaOrderById.user._id);
        formData.append('order_id', props.data.getaOrderById._id);
        formData.append('createdBy', setId);
        formData.append('AwbNo', clone.AwbNo);
        formData.append('pkt_Status', clone.Pkt_Status);
        formData.append('rcDate', clone.RcDate);
        formData.append('rcTime', clone.RcTime);
        formData.append('remarks', clone.Remarks);
        formData.append('rcName', clone.RcName);
        formData.append('rcRelation', clone.RcRelation);
        formData.append('rcPhone', clone.RcPhone);
        formData.append('courier_reference_no', clone.courier_reference_no);
        formData.append('mode', clone.mode);
        formData.append('courierName', clone.courierName);
        formData.append('image', file);

        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/delivery/add_Delivery`, formData)
            setLoader(false)
            setError(false)
            alert('POD Send Successfully')
            props.onHide()
        } catch (error) {
            setLoader(false)
            setError(true)
        }
    }

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        POD Entry
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="row">
                            <div className="mb-3 col-lg-6">
                                <label htmlFor="number" className="form-label">AwbNo</label>
                                <input type="number" name="AwbNo" className="form-control" id="number1" onChange={onchangeHandle} aria-describedby="number" />
                            </div>

                            <div className="mb-3 col-lg-6">
                                <label htmlFor="number" className="form-label">Courier Reference No</label>
                                <input type="number" name="courier_reference_no" className="form-control" id="number1" onChange={onchangeHandle} aria-describedby="number" />
                            </div>

                            <div className="mb-3 col-lg-6">
                                <label htmlFor="number" className="form-label">Mode</label>
                                <select name="mode" onChange={onchangeHandle} className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="by_Road">By Road</option>
                                    <option value="by_Train">By Train</option>
                                    <option value="by_Air">By Air</option>
                                </select>
                            </div>

                            <div className="mb-3 col-lg-6">
                                <label htmlFor="number" className="form-label">Courier Company</label>
                                <select name="courierName" onChange={onchangeHandle} className="form-select" aria-label="Default select example">
                                    <option selected value='In_house'>In House</option>
                                    <option value="ARAMEX">ARAMEX</option>
                                    <option value="FedEX">FedEX</option>
                                    <option value="DHL">DHL</option>
                                </select>
                            </div>

                            <div className="mb-3 col-lg-6">
                                <label htmlFor="number" className="form-label">Pkt Status</label>
                                <select
                                    className="form-select"
                                    name="Pkt_Status"
                                    aria-label="Default select example"
                                    defaultValue={""}
                                    onChange={onchangeHandle}

                                    style={{ height: 38 + "px", fontSize: 13 + "px" }}>

                                    {data &&
                                        data.map((item, i) => {
                                            return (
                                                <option value={item._id} key={i}>
                                                    {item.orderStatusName}
                                                </option>
                                            );

                                        })}
                                </select>



                            </div>
                            <div className="mb-3 col-lg-6">
                                <label htmlFor="text" className="form-label">RcDate</label>
                                <input type="date" onChange={onchangeHandle} name="RcDate" className="form-control" id="text" aria-describedby="text" />
                            </div>
                            <div className="mb-3 col-lg-6">
                                <label htmlFor="text" className="form-label">RcTime</label>
                                <input type="time" onChange={onchangeHandle} name="RcTime" className="form-control" id="text" aria-describedby="text" />
                            </div>
                            <div className="mb-3 col-lg-6">
                                <label htmlFor="text" className="form-label">Remarks</label>
                                <input type="text" onChange={onchangeHandle} name="Remarks" className="form-control" id="text" aria-describedby="text" />
                            </div>
                            <div className="mb-3 col-lg-6">
                                <label htmlFor="text" className="form-label">RcName</label>
                                <input type="text" onChange={onchangeHandle} name="RcName" className="form-control" id="text" aria-describedby="text" />
                            </div>
                            <div className="mb-3 col-lg-6">
                                <label htmlFor="text" className="form-label">RcRelation</label>
                                <input type="text" onChange={onchangeHandle} name="RcRelation" className="form-control" id="text" aria-describedby="text" />
                            </div>
                            <div className="mb-3 col-lg-6">
                                <label htmlFor="text" className="form-label">RcPhone</label>
                                <input type="text" onChange={onchangeHandle} name="RcPhone" className="form-control" id="text" aria-describedby="text" />
                            </div>
                            <div className="mb-3 col-lg-6">
                                <label htmlFor="file" className="form-label">Photo</label>
                                <input type="file" onChange={photoChange} name="image" className="form-control" id="text" aria-describedby="text" />
                            </div>
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    {error && <h5 style={{ color: "red" }}>Server Error !</h5>}
                    <Button onClick={props.onHide}>Close</Button>
                    <Button type="button" style={{ display: "flex", alignItems: "center" }} onClick={sendData}>{loader && <Spinner style={{ marginRight: "8px" }} animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>} Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default PodEnteris