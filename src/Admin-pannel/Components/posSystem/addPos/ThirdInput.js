import React from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ThirdInput() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='thirdInp'>
                <input type='text' placeholder='type here'></input>
                <span className='bg-gray'>
                    <button type='button' onClick={handleShow}>
                        <AiFillPlusSquare />
                    </button>

                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>ADD PRODUCT MANUALLY</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="col-lg-6 mx-auto">
                                <div className="card">
                                    <form className="form-horizontal" id="create-course-form">
                                        <div className="card-body">

                                            <div className="form-group row">
                                                <label className="col-sm-3 col-from-label" htmlFor="first name">Product Code *</label>
                                                <div className="col-sm-9">
                                                    <input type="text" placeholder="Product Code *" name="" className="form-control" required />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-from-label" htmlFor="first name">Product Name *</label>
                                                <div className="col-sm-9">
                                                    <input type="text" placeholder="Product Name *" name="" className="form-control" required />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-sm-3 col-from-label" htmlFor="email">Product Tax *</label>
                                                <div className="col-sm-9">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option value={1}>VAT @10%</option>
                                                        <option value={2}>GST @6%</option>
                                                        <option value={3}>VAT @20%</option>
                                                    </select>

                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-sm-3 col-from-label" htmlFor="mobile">Quantity *</label>
                                                <div className="col-sm-9">
                                                    <input type="text" placeholder="Quantity *" name="" className="form-control" required />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-sm-3 col-from-label" htmlFor="password">Product Discount</label>
                                                <div className="col-sm-9">
                                                    <input type="text" placeholder="Product Discount *" name="" className="form-control" required />
                                                </div>
                                            </div>


                                            <div className="form-group row">
                                                <label className="col-sm-3 col-from-label" htmlFor="password">Unit Price *</label>
                                                <div className="col-sm-9">
                                                    <input type="text" placeholder="Unit Price *" name="" className="form-control" required />
                                                </div>
                                            </div>
                                        </div>

                                    </form>

                                </div>
                                <table style={{ width: '100%' }}>
                                    <tbody>
                                        <tr>
                                            <th>Net Unit Price:</th>
                                            <td>0.00</td>
                                            <th>Product Tax:</th>
                                            <td>0.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>

                            <Button variant="primary" onClick={handleClose}>
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Modal>


                </span>
            </div>
        </>
    )
}

export default ThirdInput