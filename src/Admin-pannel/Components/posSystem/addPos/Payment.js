import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Payment() {

    const [smShow, setSmShow] = useState(false);

    return (
        <>
            <td rowspan="2" className='bg-green' onClick={() => setSmShow(true)}>
                <button>Payment</button>
            </td>

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        <p>Please add product before payment. Thank you!</p>
                    </Modal.Title>

                </Modal.Header>

                <Modal.Footer>
                    <Button variant="primary" onClick={() => setSmShow(false)}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Payment