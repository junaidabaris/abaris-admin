import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useEditCustomerMutation, useGetCustomerByIdQuery } from '../all-products/allproductsApi/allProductsApi';

function EditCustomer() {
    const [inputval, setInputval] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        password: ''
    });

    const params = useParams();

    const { data } = useGetCustomerByIdQuery(params.id);
    const [editCustomer, response] = useEditCustomerMutation();

    useEffect(() => {
        const obj = { ...data }
        setInputval(obj)
    }, [data]);

    console.log(data)

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };
    const submitEditCustomerData = (e) => {
        e.preventDefault();
        editCustomer({ id: params.id, data: inputval })
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Customer Edited Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('!Customer not edited')
    };


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <h5 className="mb-0 h6">Customer Information</h5>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <div className="card">
                            <div className="card-body p-0">

                                <form className="p-4" id="create-course-form" onSubmit={submitEditCustomerData}>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">First Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="firstname" placeholder="first name" fdprocessedid="vrvrin" value={inputval?.firstname} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Last Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="lastname" placeholder="last name" fdprocessedid="vrvrin" value={inputval?.lastname} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Email Address</label>
                                        <div className="col-sm-9">
                                            <input type="email" className="form-control" name="email" placeholder="email" fdprocessedid="vrvrin" value={inputval?.email} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Phone</label>
                                        <div className="col-sm-9">
                                            <input type="number" className="form-control" name="mobile" placeholder="Phone number" fdprocessedid="vrvrin" value={inputval?.mobile} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Password</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="password" placeholder="Phone number" fdprocessedid="vrvrin" value={inputval?.password} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group mb-0 text-right">
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default EditCustomer;
