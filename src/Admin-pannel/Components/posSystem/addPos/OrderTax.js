import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function OrderTax() {

    const [smShow, setSmShow] = useState(false);

    return (
        <>
            <td>Order Tax
                <button onClick={() => setSmShow(true)} className="me-2">
                    <FiEdit />
                </button>

                <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            <p> EDIT ORDER TAX</p>
                        </Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Body>
                        <p>ORDER TAX</p>
                        <select className="form-select" aria-label="Default select example">
                            <option value={1}>No Tax</option>
                            <option value={1}>VAT @10%</option>
                            <option value={2}>GST @6%</option>
                            <option value={3}>VAT @20%</option>
                        </select>
                    </Modal.Body> */}
                    <Modal.Footer>
                        <p>ORDER TAX</p>
                        <select className="form-select" aria-label="Default select example">
                            <option value={1}>No Tax</option>
                            <option value={1}>VAT @10%</option>
                            <option value={2}>GST @6%</option>
                            <option value={3}>VAT @20%</option>
                        </select>
                        <Button variant="primary" >
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>


            </td>
        </>
    )
}

export default OrderTax