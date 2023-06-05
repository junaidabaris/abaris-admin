import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAddNewBrandMutation } from '../all-products/allproductsApi/allProductsApi';

function AddnewBrandsAdmin() {
    const [inputval, setInputval] = useState({ name: '', logo: '', meta_title: '', meta_description: '' });

    const [addNewBrand, response] = useAddNewBrandMutation();

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const addNewBrandData = (e) => {
        e.preventDefault();
        addNewBrand(inputval)
        document.getElementById("create-course-form").reset();
    };

    // console.log(response);

    const toastSuccessMessage = () => {
        toast.success("Brand added Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('!Error Brand not added')
    }


    return (
        <>
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Add New Brand</h5>
                    </div>
                    <div className="card-body">
                        <form id="create-course-form" onSubmit={addNewBrandData}>
                            <input type="hidden" name="_token" defaultValue="6klBhNOhEcSYzHAP1WU8ctR90lIocmkKBETVGkNx" />
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder="Name" name="name" onChange={onChangeHandler} className="form-control" required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Logo <small>(120x80)</small></label>
                                <div className="input-group" data-type="image" >
                                    <div className="input-group-prepend">
                                        <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                    </div>
                                    <div className="form-control file-amount">
                                        <input type="file" className="selected-files" name='logo' onChange={onChangeHandler} required />
                                    </div>
                                </div>
                                <div className="file-preview box sm">
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Meta Title</label>
                                <input type="text" name='meta_title' className="form-control" placeholder="Meta Title" onChange={onChangeHandler} required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Meta description</label>
                                <textarea name="meta_description" rows={5} className="form-control" onChange={onChangeHandler} required />
                            </div>
                            <div className="form-group mb-3 text-right">
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default AddnewBrandsAdmin;