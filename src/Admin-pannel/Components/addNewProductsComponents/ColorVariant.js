import axios from "axios";
import { useEffect, useState } from "react";

export const ColorVariant = ({ data, pickUp, handleVariant, setVariantsData, bringSelectedVariantImage }) => {
    const [formData, setFormData] = useState(data);
    const [imgArr, setImgArr] = useState();

    const onChangeHandler = (e) => {
        const inputName = e.target.name;
        const inputVal = e.target.value;
        // if (e.target.name === 'discount') {
        //     const inputName = e.target.name;
        //     const inputVal = e.target.value;
        //     setFormData({ ...formData, sale_rate: formData.mrp - formData.discount, [inputName]: inputVal });
        //     setVariantsData(formData)
        // }
        if (e.target.value === 'Percent') {

            // const resss = axios.post(`https://onlineparttimejobs.in/api/product/variation_cost`, formData)
            // const inputName = e.target.name;  
            // const inputVal = e.target.value;
            const calculatedSalePercent = formData.mrp * formData.discount / 100
            const calculatedSalerate = formData.mrp - calculatedSalePercent
            setFormData({ ...formData, sale_rate: calculatedSalerate, [inputName]: inputVal });
            setVariantsData(formData)
        } else if (e.target.value === 'Amount') {
            // const inputName = e.target.name;
            // const inputVal = e.target.value;
            setFormData({ ...formData, sale_rate: formData.mrp - formData.discount, [inputName]: inputVal });
            setVariantsData(formData)
        }
        else {
            const inputName = e.target.name;
            const inputVal = e.target.value;
            setFormData({ ...formData, [inputName]: inputVal });
            setVariantsData(formData)
        }
    };

    useEffect(() => {
        if (formData) {
            handleVariant(formData)
        }
    }, [formData])
    useEffect(() => {
        setFormData(data)
    }, [data])
    const onchangeImagehandle = async (e) => {
        const inpVal = e.target.files;
        const formDatas = new FormData();
        const arr = []
        for (const iterator of inpVal) {
            formDatas.append('image', iterator);
            try {
                const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, formDatas)
                const obj = { public_id: res.data.public_id, url: res.data.url }
                arr.push(obj)
            } catch (error) {
                alert('Somthing Went Wrong Image Not Up ')
            }
            formDatas.delete('image');
        }
        // const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, formDatas)

        setFormData({ ...formData, images: arr });
        setVariantsData(formData)
        // bringSelectedVariantImage(arr)
        setImgArr(arr)
    }
    console.log('imgArr--', imgArr);
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
                <select className="selectOptions" value={formData?.discount_type} name="discount_type" aria-label="Default select example" onChange={onChangeHandler}>
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
            <td>
                <input type="file" name="gallery_image" multiple accept="image/*" className="selected-files" onChange={onchangeImagehandle} />
            </td>

            <td style={{ display: 'table-cell' }}>
                {imgArr && imgArr.map((imgItem, i) => {
                    return <img src={imgItem?.url} alt="Brand" className="h-50px w-50px mb-1" />
                })}
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