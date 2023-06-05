import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router';
import { useAddSellerListMutation, useEditSellerListMutation, useGetSellerDetailQuery } from '../../Components/all-products/allproductsApi/allProductsApi';

function SellerAddEditForm() {
    const params = useParams()
    const [validated, setValidated] = useState(false);
    const [sendDataItem] = useAddSellerListMutation()
    const { data  , isSuccess} = useGetSellerDetailQuery(params.id)
    const [status, setSatatus] = useState({ verification_status: false, cash_on_delivery_status: false, bank_payment_status: false })

    const [state, setState] = useState({
        seller_name: "",
        remaining_uploads: "",
        email: "",
        mobile: "",
        remaining_digital_uploads: "",
        invalid_at: "",
        remaining_auction_uploads: "",
        rating: "",
        num_of_reviews: "",
        num_of_sale: "",
        verification_status: false,
        cash_on_delivery_status: false,
        admin_to_pay: "",
        bank_name: "",
        bank_acc_no: "",
        bank_payment_status: false
    }
    )

    const [update] = useEditSellerListMutation()

    const onChangeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const ChengeStatus = (str) => {
        const clone = { ...status }
        for (const key in status) {
            if (str === key) {
                if (status[key].value) {
                    clone[key] = false
                } else {
                    clone[key] = true
                }
            }
        }
        setSatatus(clone);
    }

    const sendData = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        const mergData = { ...state, ...status }
        if (params.id) {
            update({ data: mergData, id: params.id })
        } else {
            sendDataItem(mergData);
        }
    }

    useEffect(() => {
        if (params.id) {
            const obj = {
                seller_name: data?.firstname,
                remaining_uploads: "",
                remaining_digital_uploads: "",
                invalid_at: "",
                remaining_auction_uploads: "",
                rating: "",
                num_of_reviews: "",
                num_of_sale: "",
                verification_status: data?.approve,
                cash_on_delivery_status: false,
                admin_to_pay: "",
                bank_name: "",
                email: data?.email,
                mobile: data?.mobile,
                bank_acc_no: "",
                bank_payment_status: false
            }
            setState(obj)
        }
    }, [params , isSuccess])



    return <div className='container'>
        {params.id ? <h2>Update Seller</h2> : <h2>Add Seller</h2>}
        <Form noValidate validated={validated} onSubmit={sendData}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='seller_name' onChange={onChangeHandle} value={state?.seller_name} style={{ width: "50%" }} placeholder="Seller Name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Rating</Form.Label>
                <Form.Control type="number" name='rating' onChange={onChangeHandle} value={state?.rating} style={{ width: "50%" }} placeholder="Rating In Number" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' onChange={onChangeHandle} value={state?.email} style={{ width: "50%" }} placeholder="Email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="number" name='mobile' onChange={onChangeHandle} value={state?.mobile} style={{ width: "50%" }} placeholder="Mobile Number" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Num Of Reviews</Form.Label>
                <Form.Control type="number" name='num_of_reviews' onChange={onChangeHandle} value={state?.num_of_reviews} style={{ width: "50%" }} placeholder="Num Of Reviews In Number" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Num Of Sale</Form.Label>
                <Form.Control name='num_of_sale' type="number" onChange={onChangeHandle} value={state?.num_of_sale} style={{ width: "50%" }} placeholder="Num Of Sale In Number" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Admin to Pay</Form.Label>
                <Form.Control type="number" name='admin_to_pay' onChange={onChangeHandle} value={state?.admin_to_pay} style={{ width: "50%" }} placeholder="Admin to Pay In Number" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control type="text" name='bank_name' onChange={onChangeHandle} value={state?.bank_name} style={{ width: "50%" }} placeholder="Bank Name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bank Acount Number</Form.Label>
                <Form.Control name='bank_acc_no' type="text" onChange={onChangeHandle} value={state?.bank_acc_no} style={{ width: "50%" }} placeholder="Bank Acount Number" required />
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                <Form.Label>Bank Payment Status</Form.Label>
                <label className="aiz-switch aiz-switch-success mb-0 d-flex"><input name="status" onClick={() => { ChengeStatus("bank_payment_status") }} type="checkbox" value="1" checked={status.bank_payment_status} />
                    <span className="slider round" style={{ marginLeft: "20px" }}></span>
                </label>
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                <Form.Label>Verification Status</Form.Label>
                <label className="aiz-switch aiz-switch-success mb-0 d-flex"><input onClick={() => { ChengeStatus("verification_status") }} name="status" type="checkbox" value="1" checked={status.verification_status} />
                    <span className="slider round" style={{ marginLeft: "20px" }}></span>
                </label>
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                <Form.Label>Cash on Delivery Status</Form.Label>
                <label className="aiz-switch aiz-switch-success mb-0 d-flex"><input onClick={() => { ChengeStatus("cash_on_delivery_status") }} name="status" type="checkbox" value="1" checked={status.cash_on_delivery_status} />
                    <span className="slider round" style={{ marginLeft: "20px" }}></span>
                </label>
            </Form.Group>

            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
    </div >
}
export default SellerAddEditForm