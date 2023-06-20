import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Bill() {

    const [smShow, setSmShow] = useState(false);

    return (
        <>
            <td className='bg-deepblue' onClick={() => setSmShow(true)}>
                <button>Bill</button>
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

export default Bill