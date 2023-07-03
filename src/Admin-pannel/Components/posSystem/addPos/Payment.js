import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Payment({ showCombo, totalPosProductsPrice, bringedDiscountVal, bringedOrderTaxVal, totalPosProductsItem }) {

    const [smShow, setSmShow] = useState(false);
    const calculatedOrderTaxAmount = totalPosProductsPrice * bringedOrderTaxVal?.order_tax / '100';

    return (
        <>
            <td rowSpan="2" className='bg-green' onClick={() => setSmShow(true)}>
                <button>Payment</button>
            </td>

            <Modal
                size="lg"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        <p>FINALIZE SALE</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Biller</h6>
                    <form className='row'>
                        <div className='col-lg-12 mb-3'>
                            <select className="form-select" aria-label="Default select example">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className='col-lg-6'>
                            <textarea rows={'3'} placeholder='Sale Note' className='form-control' />
                        </div>
                        <div className='col-lg-6'>
                            <textarea rows={'3'} placeholder='staff Note' className='form-control' />
                        </div>
                        <div className='row amount-sec'>
                            <div className='col-lg-6'>
                                <label className='fw-bold'>Amount</label>
                                <input className='form-control' type='text' value={totalPosProductsPrice - bringedDiscountVal?.discount + calculatedOrderTaxAmount} />
                            </div>
                            <div className='col-lg-6'>
                                <label className='fw-bold'>Paying by</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option value="1">Cash</option>
                                    <option value="2">Gift Card</option>
                                    <option value="3">Credit Card</option>
                                    <option value="3">Cheque</option>
                                    <option value="3">Other</option>
                                    <option value="3">Deposit</option>
                                </select>
                            </div>
                            <div className='col-lg-12'>
                                <textarea className='form-control mt-3' rows={'2'}></textarea>
                            </div>
                        </div>



                    </form>
                    <div className='table-responsive mt-5'>
                        <table className='table'>
                            <tbody >
                                <tr>
                                    <th>Total Items</th>
                                    <td>{totalPosProductsItem}</td>
                                    <th>Total Payable</th>
                                    <td>{totalPosProductsPrice - bringedDiscountVal?.discount + calculatedOrderTaxAmount}</td>
                                </tr>
                                <tr>
                                    <th>Total Paying</th>
                                    <td>{totalPosProductsPrice - bringedDiscountVal?.discount + calculatedOrderTaxAmount}</td>
                                    <th>Balance</th>
                                    <td>0.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setSmShow(false)}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Payment