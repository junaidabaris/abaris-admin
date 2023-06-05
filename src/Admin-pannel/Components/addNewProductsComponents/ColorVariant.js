import { useEffect, useState } from "react";

export const ColorVariant = ({ data, pickUp, handleVariant }) => {
    const [formData, setFormData] = useState(data)
    const onChangeHandler = (e) => {
        const inputName = e.target.name;
        const inputVal = e.target.value;
        setFormData({ ...formData, [inputName]: inputVal });
    }
    useEffect(() => {
        if (formData) {
            handleVariant(formData)
        }
    }, [formData])
    return (
        <tr>
            <td>
                <label name="varient" className="control-label">{data.weight}</label>
            </td>
            <td>
                <input type="number" name="mrp" className="form-control" required onChange={onChangeHandler} />
            </td>

            <td>
                <input type="text" name="purchase_rate" className="form-control" defaultValue={""} onChange={onChangeHandler} />
            </td>

            <td>
                <input type="number" name="tax" className="form-control" required onChange={onChangeHandler} />
            </td>

            <td>
                <select className="selectOptions" name="tax_type" aria-label="Default select example" onChange={onChangeHandler}>
                    <option value={'Inclusive'}>Inclusive</option>
                    <option value={'Exclusive'}>Exclusive</option>
                </select>
            </td>


            <td>
                <input type="number" name="sale_rate" className="form-control" required onChange={onChangeHandler} />
            </td>

            <td>
                <input type="number" name="discount" className="form-control" required onChange={onChangeHandler} />
            </td>

            <td>
                <select className="selectOptions" name="discount_type" aria-label="Default select example" onChange={onChangeHandler}>
                    <option value={'Percent'}>Percent</option>
                    <option value={'Amount'}>Amount</option>
                </select>
            </td>
            <td>
                <input type="text" name="sku" className="form-control" onChange={onChangeHandler} />
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