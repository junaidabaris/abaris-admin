import React from 'react';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { useAddStaffMutation, useGetRolesQuery } from '../../../Components/all-products/allproductsApi/allProductsApi';

function AddNewDeliveryBoy() {

    const [inputVal, setInputVal] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        password: '',
        role_id: '63fb963aba4c5193700943b0',
    });
    const params = useParams();

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    };


    const { data } = useGetRolesQuery(params.id);
    console.log('role data', data);

    const [addAllStaffsD, response] = useAddStaffMutation();


    const submitStaffData = (e) => {
        e.preventDefault();
        const clone = { ...inputVal }
        addAllStaffsD(clone)
        console.log(inputVal)
        document.getElementById("create-course-form").reset();
    };


    const toastSuccessMessage = () => {
        toast.success("Staff added Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    console.log(response)
    console.log(inputVal)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Delivery Boy Information</h5>
                                </div>
                                <form className="form-horizontal" id="create-course-form" onSubmit={submitStaffData}>
                                    <input type="hidden" name="_token" defaultValue="S0f7vDDtqJ5NbxPupX86gbiFGZumqx0Q8PyryILc" />
                                    <div className="card-body">

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="first name">Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="First Name" name="firstname" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="email">Email</label>
                                            <div className="col-sm-9">
                                                <input type="email" placeholder="abc@gmail.com" autoComplete="off" name="email" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="mobile">Phone</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Phone" name="mobile" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Password</label>
                                            <div className="col-sm-9">
                                                <input type="password" placeholder="Password" name="password" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Country</label>
                                            <div className="col-sm-9">
                                                <select class="form-select" aria-label="Default select example" name='country' onChange={onChangeHandler}>
                                                    <option value="1">Zambia</option>
                                                    <option value="2">Africa</option>
                                                    <option value="3">India</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">State</label>
                                            <div className="col-sm-9">
                                                <select class="form-select" aria-label="Default select example" name='state' onChange={onChangeHandler}>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">City</label>
                                            <div className="col-sm-9">
                                                <select class="form-select" aria-label="Default select example" name='city' onChange={onChangeHandler}>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">
                                                Image
                                            </label>
                                            <div className="col-md-9">
                                                <div className="input-group" data-type="image">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text bg-soft-secondary font-weight-medium">
                                                            Browse
                                                        </div>
                                                    </div>
                                                    <div className="form-control file-amount">
                                                        <input type="file" name="banner" className="selected-files" onChange={onChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="file-preview box sm">
                                                </div>
                                            </div>
                                        </div>


                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Adress</label>
                                            <div className="col-sm-9">
                                                <textarea placeholder="Adress" name="city" className="form-control" required onChange={onChangeHandler} rows="3" cols="50">
                                                </textarea>
                                            </div>
                                        </div>

                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
                <ToastContainer />
            </div>
        </>
    )
}

export default AddNewDeliveryBoy