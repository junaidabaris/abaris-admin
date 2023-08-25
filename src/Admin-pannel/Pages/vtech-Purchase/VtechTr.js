
import { AiFillDelete } from "react-icons/ai";


function VtechTr({ item, index, pickUp, DeleteRow, setShowCombo, showCombo }) {

    const updateQty = (e) => {
        const addSerial = showCombo.map((item,i) => {
           
            if (i == e.target.id) {
                return { ...item, serialNo : +e.target.value }
            }else{
                return item
            }
        })
        setShowCombo(addSerial);
    };
    const setPichups = (e) => {
        const addSerial = showCombo.map((item,i) => {
            if (i == index) {
                return { ...item, pickupPoints : e.target.value }
            }else{
                return item
            }
        })
        setShowCombo(addSerial);
    };

    return <tr>
        <td>
            <AiFillDelete onClick={() => DeleteRow(index)} />
        </td>
        <td>
            <label name="varient" className="control-label">{item?.productId?.name}</label>
        </td>
        <td>
            <input type="text" disabled value={item?.variantId?.weight} name="sku" className="form-control" />
        </td>
        <td>
            <input type="text" disabled value={item?.sku} name="sku" className="form-control" />
        </td>

        <td>
            <select className="js-example-basic-multiple js-states js-example-responsive demo-select2 w-100 select2-hidden-accessible selectOptions" name="pickupPoints" data-select2-id={20} tabIndex={-1} value={item.pickupPoints} aria-hidden="true" onChange={setPichups} >

                {pickUp && pickUp.map((itemPickup) => {
                    return <option value={itemPickup._id} key={itemPickup._id} id={index}>{itemPickup.pickupPoint_name}</option>
                })}
            </select>
        </td>

        <td>
            <input type="number" name="serialNo " className="form-control" id={index} onChange={updateQty} />
        </td>

    </tr>
}
export default VtechTr