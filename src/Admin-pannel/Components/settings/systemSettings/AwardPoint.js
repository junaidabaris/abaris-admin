import React, { useEffect, useState } from 'react'
import { useGetSettingMoneyAndNumberFormatQuery, useUpdateMoneyFormatMutation } from '../../all-products/allproductsApi/allProductsApi';
import { ToastContainer, toast } from 'react-toastify';

function AwardPoint() {

    const [inputVal, setInputval] = useState({
        CustomerAwardPoints: "", AwardPoints: "", StaffAwardPoints: ''
    });

    const { isLoading, data } = useGetSettingMoneyAndNumberFormatQuery();
    console.log('awardD----', data)

    useEffect(() => {
        const clon = { ...data }
        if (data) {
            setInputval(clon);
        }
    }, [data]);

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [updateAwardPointD, response] = useUpdateMoneyFormatMutation();

    const submitUpdatAwardPointDD = () => {
        const abc = { ...inputVal }
        console.log('abc----', abc)
        updateAwardPointD(abc)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("AwardPoint Updated Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("AwardPoint not Updated !", {
            position: "top-center"
        })
    }

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

    return (
        <>
            <div className="scheduler-border">
                <legend className="scheduler-border">Award Points</legend>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Customer Award Points</label>
                        <input type="text" name='CustomerAwardPoints' className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Award Points</label>
                        <input type="text" name='AwardPoints' className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Staff Award Points</label>
                        <input type="text" name='StaffAwardPoints' className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    {/* <div className="col-lg-4">
                        <label htmlFor="site_name">Award Points</label>
                        <input type="text" name='' className="form-control tip" onChange={onChangeHandler} />
                    </div> */}
                </div>
                <button className="btn btn-primary m-3 pe-5" type='button' onClick={submitUpdatAwardPointDD} style={{ width: '60px', textAlign: 'end' }}>Save</button>
                <ToastContainer />
            </div>
        </>
    )
}

export default AwardPoint