import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ModalCombo(props) {
    let selectedVariants = []

    const sendData = (data, i) => {
        let flag = false
        let index;
        if (selectedVariants?.length === 0) {
            selectedVariants.push({ productName: props?.cartData?.name, ...data, productId: props?.cartData?._id, variant: props?.cartData?.variations[i]._id })
        } else {
            for (let i = 0; i < selectedVariants.length; i++) {
                if (selectedVariants[i]._id === data._id) {
                    flag = true
                    index = i
                }
            }
            if (index) {
                selectedVariants.splice(index, 1)
            }
            if (!flag) {
                selectedVariants.push({ productName: props?.cartData?.name, ...data, productId: props?.cartData?._id , variant: props?.cartData?.variations[i]._id})
            }
        }

    }

    return <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Select Variant
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <table className="table table-bordered physical_product_show">
                <thead>

                    <tr>
                        <td><label className="control-label">#</label></td>
                        <td><label className="control-label">Product Name</label></td>
                        <td><label className="control-label">SKU</label></td>
                        <td><label className="control-label">Variant</label></td>
                        <td><label className="control-label">Actual Rate</label></td>
                    </tr>

                </thead>

                <tbody>

                    {props?.cartData && props?.cartData?.variations.map((item, i) => {
                        return <tr>
                            <td>
                                <Form>
                                    <Form.Check
                                        onClick={() => sendData(item, i)}
                                        inline
                                        name="group1"
                                        type='checkbox'
                                        id={`inline-checkbox-1`}
                                    />
                                </Form>
                            </td>
                            <td>
                                <label name="productName" className="control-label">{props?.cartData?.name}</label>
                            </td>
                            <td>
                                <input type="text" disabled value={item?.sku} name="sku" className="form-control" />
                            </td>
                            <td>
                                <input type="text" disabled value={item?.weight} name="rate" className="form-control" />
                            </td>
                            <td>
                                <input type="text" disabled value={item?.mrp} name="actual_rate" className="form-control" />
                            </td>

                        </tr>
                    })}

                </tbody>

            </table>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => props.SaveData(selectedVariants)}>Send</Button>
        </Modal.Footer>
    </Modal>

}

export default ModalCombo