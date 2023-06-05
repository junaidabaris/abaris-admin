import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { useAddNewCouponMutation, useGetCouponsQuery } from "../all-products/allproductsApi/allProductsApi";



function CouponInformationAdding() {
    const [inputval, setInputVal] = useState({ type: '', code: '', start_date: '', end_date: '', discount: '', discount_type: '' });

    const { data } = useGetCouponsQuery();
    const [addNewCoupon, response] = useAddNewCouponMutation();

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    };

    const addCouponsData = (e) => {
        e.preventDefault();
        addNewCoupon(inputval)
        console.log(inputval)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Coupon added Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('!Coupon not added')
    };


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="col-lg-8 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0 h6">Coupon Information Adding</h5>
                            </div>
                            <div className="card-body">
                                <form className="form-horizontal" id="create-course-form" onSubmit={addCouponsData}>
                                    <input type="hidden" name="_token" defaultValue="iBYZn0yUYtaUjAFRti5rGbbxBIt6hBfgN5hhrs59" />
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-from-label" htmlFor="name">Coupon Category</label>
                                        <div className="col-lg-9">

                                            <select className="form-control" name="type" onChange={onChangeHandler}>
                                                {/* {data && data.map((item) => {
                                                    return <option value={item._id} key={item._id}>{item.type}</option>
                                                })} */}
                                                <option value={'For Products'}>For Products</option>
                                                <option value={'For Orders'}>For Orders</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-lg-3 col-from-label" htmlFor="code">Code</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" placeholder="code" type="text" name="code" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-lg-3 col-from-label" htmlFor="discount">Discount</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" placeholder="discount" type="text" name="discount" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-lg-3 col-from-label" htmlFor="discount type">Discount Type</label>
                                        <div className="col-lg-9">
                                            {/* <input className="form-control" placeholder="discount type" type="text" name="discount_type" onChange={onChangeHandler} /> */}
                                            <select className="form-select" name="discount_type" aria-label="Default select example" onChange={onChangeHandler} >
                                                <option value={"Amount"}>Amount</option>
                                                <option value={"Percent"}>Percent</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-lg-3 col-from-label" htmlFor="start date">Start date</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" placeholder="start date" type="date" name="start_date" onChange={onChangeHandler} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-from-label" htmlFor="end date">End date</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" placeholder="end date" type="date" name="end_date" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    {/* <div id="coupon_form">
                                    </div> */}
                                    <div className="form-group mb-0 text-right">
                                        <button type="submit" className="btn btn-primary" >Save</button>
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
export default CouponInformationAdding;