import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useGetCustomerSelectedBillingAddressByIdQuery, useGetCustomerSelectedShippingAddressByIdQuery } from "../../all-products/allproductsApi/allProductsApi";
import { useParams } from "react-router-dom";
import { useState } from "react";

function AddressSec() {
    const params = useParams();
    const [billings, setBillings] = useState({
        country: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        zip: "",
        addressLine1: "",
        addressLine2: "",
        landmark: "",
        province: "",
        company: "",
    })
    const [shipping, setShipping] = useState({
        country: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        zip: "",
        addressLine1: "",
        addressLine2: "",
        landmark: "",
        province: "",
        company: "",
    })

    const { data: selectedShippingAddress } = useGetCustomerSelectedShippingAddressByIdQuery(params.id)
    const { data: selectedBilliingAddress } = useGetCustomerSelectedBillingAddressByIdQuery(params.id)

    const changeBilling = (e) => {
        const clone = { ...billings }
        clone[e.target.name] = e.target.value
        setBillings(clone)
    }
    const changeShipping = (e) => {
        const clone = { ...shipping }
        clone[e.target.name] = e.target.value
        setShipping(clone)
    }

    const senData = ()=>{
        console.log(billings);
        console.log(shipping);
    }

    return <>
        <div className='col-md-12 mt-3 mb-3'>
            <div className='row'>
                <div className='col-md-6 ' >
                    <h6 className='mr-3'>Billing Address
                        <small> <a href="#" className='ml-3'>Same as Customer Info</a></small></h6>

                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                        <input type="text" className="form-control" name="country" value={billings.country} onChange={changeBilling} aria-describedby="emailHelp" />
                    </div>

                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">State</label>
                        <input type="text" className="form-control" name="state" value={billings.state} onChange={changeBilling} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                        <input type="text" className="form-control" name="city" value={billings.city} onChange={changeBilling} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">ZIP</label>
                        <input type="text" className="form-control" name="zip" value={billings.zip} onChange={changeBilling} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Province</label>
                        <input type="text" className="form-control" name="province" value={billings.province} onChange={changeBilling} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={billings.email} onChange={changeBilling} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                        <input type="number" className="form-control" name="phone" value={billings.phone} onChange={changeBilling} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Address Line1</label>
                        <input type="text" className="form-control" name="addressLine1" value={billings.addressLine1} onChange={changeBilling} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Address Line2</label>
                        <input type="text" className="form-control" name="addressLine2" value={billings.addressLine2} onChange={changeBilling} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Landmark</label>
                        <input type="text" className="form-control" name="landmark" value={billings.landmark} onChange={changeBilling} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Company</label>
                        <input type="text" className="form-control" name="company" value={billings.company} onChange={changeBilling} aria-describedby="emailHelp" />
                    </div>

                </div>

                <div className='col-md-6 ' >
                    <h6 className='mr-3'> <AiOutlineQuestionCircle /> Shipping Address
                        <small> <a href="#" className='ml-3'>Copy Billing Adress</a></small></h6>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                        <input type="text" className="form-control" name="country" value={shipping.country} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>

                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">State</label>
                        <input type="text" className="form-control" name="state" value={shipping.state} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                        <input type="text" className="form-control" name="city" value={shipping.city} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">ZIP</label>
                        <input type="text" className="form-control" name="zip" value={shipping.zip} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Province</label>
                        <input type="text" className="form-control" name="province" value={shipping.province} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={shipping.email} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                        <input type="number" className="form-control" name="phone" value={shipping.phone} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Address Line1</label>
                        <input type="text" className="form-control" name="addressLine1" value={shipping.addressLine1} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Address Line2</label>
                        <input type="text" className="form-control" name="addressLine2" value={shipping.addressLine2} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Landmark</label>
                        <input type="text" className="form-control" name="landmark" value={shipping.landmark} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Company</label>
                        <input type="text" className="form-control" name="company" value={shipping.company} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>

                </div>

            </div>
        </div>
        <div className='col-md-12 d-flex justify-content-end mt-3'>
            <button type='button' className='btn btn-primary' onClick={senData}>Save</button>
        </div>
    </>
}
export default AddressSec