import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Discount() {

    const [smShow2, setSmShow2] = useState(false);

    return (
        <>
            <td>Discount
                <button onClick={() => setSmShow2(true)} className="me-2">
                    <FiEdit />
                </button>

                <Modal
                    size="sm"
                    show={smShow2}
                    onHide={() => setSmShow2(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            <p> EDIT ORDER DISCOUNT</p>
                        </Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Body>
                        <p>Order Discount</p>
                        <form>
                            <input className='form-control' placeholder='0' type='text'></input>
                        </form>
                    </Modal.Body> */}
                    <Modal.Footer className='text-align-start'>
                        <p>Order Discount</p>
                        <form>
                            <input className='form-control' placeholder='0' type='text'></input>
                        </form>
                        <Button variant="primary" >
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>

            </td>
        </>
    )
}

export default Discount