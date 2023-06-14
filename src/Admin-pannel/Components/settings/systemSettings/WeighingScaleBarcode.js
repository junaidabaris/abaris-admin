import React, { useEffect, useState } from 'react'
import { useGetSettingMoneyAndNumberFormatQuery, useUpdateMoneyFormatMutation } from '../../all-products/allproductsApi/allProductsApi';
import { ToastContainer, toast } from 'react-toastify';

function WeighingScaleBarcode() {

    const [inputVal, setInputval] = useState({
        WeighingScaleBarcode: '', Barcodecontains: '', Barcodetotalcharacters: '', FlagCharacters: "", ItemCodeStartingPosition: '', NumberofcharactersinItemCode: "", WeightStartingPosition: "", weightDivideBy: ''
    });

    const { isLoading, data } = useGetSettingMoneyAndNumberFormatQuery();
    console.log('WeighingScaleD----', data)

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

    const [updateMoneyFormatD, response] = useUpdateMoneyFormatMutation();

    const submitUpdatWeighingScaleD = () => {
        const abc = { ...inputVal }
        console.log('abc----', abc)
        updateMoneyFormatD(abc)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("WeighingScale Updated Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("WeighingScale not Updated !", {
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
                <legend className="scheduler-border">Weighing Scale Barcode</legend>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Barcode contains</label>
                        <select name="Barcodecontains" id="rows_per_page" className="form-select" onChange={onChangeHandler}>
                            <option value={'Weight/Quantity'} >Weight/Quantity</option>
                            <option value={'price'} >Price</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Barcode total characters</label>
                        <input type="text" name='Barcodetotalcharacters' className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Flag Characters</label>
                        <input type="text" name='FlagCharacters' className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="site_name">Item Code Starting Position</label>
                        <input type="text" name='ItemCodeStartingPosition' className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="site_name">Number of characters in Item Code</label>
                        <input type="text" name='NumberofcharactersinItemCode' className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Weight Starting Position</label>
                        <input type="text" name='WeightStartingPosition' className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Number of characters in Weight</label>
                        <input type="text" name='NumberofcharactersinWeight' className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Weight divide by</label>
                        <input type="text" name='Weightdivideby' className="form-control tip" onChange={onChangeHandler} />
                    </div>
                </div>
                <button className="btn btn-primary m-3 pe-5" type='button' onClick={submitUpdatWeighingScaleD} style={{ width: '60px', textAlign: 'end' }}>Save</button>
                <ToastContainer />
            </div>
        </>
    )
}

export default WeighingScaleBarcode