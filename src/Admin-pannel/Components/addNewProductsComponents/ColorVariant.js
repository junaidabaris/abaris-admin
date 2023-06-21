import { useEffect, useState } from "react";

export const ColorVariant = ({ data, pickUp, handleVariant, setVariantsData }) => {
    const [formData, setFormData] = useState(data)
    const onChangeHandler = (e) => {
        if (e.target.name === 'discount') {
            const inputName = e.target.name;
            const inputVal = e.target.value;

            // if (e.target.value === 'Amount') {
            //     setFormData({ ...formData, sale_rate: formData.mrp - e.target.value, [inputName]: inputVal });
            // } else {
            //     setFormData({ ...formData, sale_rate: formData.mrp * 100 / e.target.value, [inputName]: inputVal });
            // }

            setFormData({ ...formData, sale_rate: formData.mrp - e.target.value, [inputName]: inputVal });
            setVariantsData(formData)
        } else {
            const inputName = e.target.name;
            const inputVal = e.target.value;
            setFormData({ ...formData, [inputName]: inputVal });
            setVariantsData(formData)
        }

    }
    useEffect(() => {
        if (formData) {
            handleVariant(formData)
        }
    }, [formData])
    useEffect(() => {
        setFormData(data)
    }, [data])
    return (
        <tr>
            <td>
                <label name="varient" className="control-label">{data.weight}</label>
            </td>
            <td>
                <input type="number" name="mrp" value={formData?.mrp} className="form-control" required onChange={onChangeHandler} />
            </td>

            <td>
                <input type="text" name="purchase_rate" value={formData?.purchase_rate} className="form-control" defaultValue={""} onChange={onChangeHandler} />
            </td>

            <td>
                <input type="number" name="tax" value={formData?.tax} className="form-control" required onChange={onChangeHandler} />
            </td>

            <td>
                <select className="selectOptions" name="tax_type" aria-label="Default select example" onChange={onChangeHandler}>
                    <option value={'Inclusive'}>Inclusive</option>
                    <option value={'Exclusive'}>Exclusive</option>
                </select>
            </td>


            <td>
                <input type="number" name="sale_rate" value={formData?.sale_rate} disabled className="form-control" required onChange={onChangeHandler} />
            </td>

            <td>
                <input type="number" name="discount" value={formData?.discount} className="form-control" required onChange={onChangeHandler} />
            </td>

            <td>
                <select className="selectOptions" name="discount_type" aria-label="Default select example" onChange={onChangeHandler}>
                    <option value={'Amount'}>Amount</option>
                    <option value={'Percent'}>Percent</option>
                </select>
            </td>
            <td>
                <input type="text" name="sku" value={formData?.sku} className="form-control" onChange={onChangeHandler} />
            </td>

            <td>
                <input type="text" name="hsn_code" value={formData?.hsn_code} className="form-control" onChange={onChangeHandler} />
            </td>
            <td>
                <input type="text" name="sale_rp" value={formData?.sale_rp} className="form-control" onChange={onChangeHandler} />
            </td>
            <td>
                <input type="text" name="share_rp" value={formData?.share_rp} className="form-control" onChange={onChangeHandler} />
            </td>

            {/* <td>
                <select className="js-example-basic-multiple js-states js-example-responsive demo-select2 w-100 select2-hidden-accessible selectOptions" name="pickupPoints" data-select2-id={20} tabIndex={-1} aria-hidden="true" onChange={onChangeHandler}>
                    {pickUp && pickUp.map((itemPickup) => {
                        return <option value={itemPickup._id} key={itemPickup._id}>{itemPickup.address}</option>
                    })}
                </select>
            </td>

            <td>
                <input type="number" name="current_qty" className="form-control" defaultValue={'1'} onChange={onChangeHandler} />
            </td> */}

        </tr>
    )
}