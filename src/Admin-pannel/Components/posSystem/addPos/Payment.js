import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Payment({ showCombo, totalPosProductsPrice, bringedDiscountVal, bringedOrderTaxVal, totalPosProductsItem }) {

    const [smShow, setSmShow] = useState(false);
    const calculatedOrderTaxAmount = totalPosProductsPrice * bringedOrderTaxVal?.order_tax / '100';

    const [state, setState] = useState({ cash: true, giftCard: false, creditCard: false, cheque: false })

    const changeHandle = (e) => {
        console.log(e.target.value);
        const clone = { cash: false, giftCard: false, creditCard: false, cheque: false }
        clone[e.target.value] = true
        setState(clone)
    }
    const [payData, setPayData] = useState(null)
    const getPaymentData = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/africanConfig/available')
        setPayData(res.data)
    }
    useEffect(() => {
        getPaymentData()
    }, [])
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
                                <select className="form-select" onChange={changeHandle} aria-label="Default select example">
                                    <option value="cash">Cash</option>
                                    <option value="giftCard">Gift Card</option>
                                    <option value="creditCard">Credit Card</option>
                                    <option value="cheque">Cheque</option>
                                    <option value="cash">Other</option>
                                    <option value="cash">Deposit</option>
                                </select>
                            </div>

                            {state.giftCard && <div className='col-lg-12'>
                                <label className='fw-bold mt-3'>Gift Card Number</label>
                                <input className='form-control'></input>
                            </div>}


                            {state.creditCard && <div>
                                {payData && payData.map((item, i) => {
                                    return <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id={`flexRadioDefault1${i}`} />
                                        <label className="form-check-label" htmlFor={`flexRadioDefault1${i}`}>
                                            {item.name}
                                        </label>
                                    </div>
                                })}

                                <div className='col-lg-12 mt-4'>
                                    <input className='form-control' placeholder='Swipe'></input>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6 mt-3'>
                                        <input className='form-control' placeholder='Credit Card Number'></input>
                                    </div>
                                    <div className='col-lg-6 mt-3'>
                                        <input className='form-control' placeholder='Holder Name'></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-3 mt-3'>
                                        <select className="form-select" aria-label="Default select example">
                                            <option value={1}>Visa</option>
                                            <option value={2}>MasterCard</option>
                                            <option value={3}>Amex</option>
                                            <option value={3}>Discover</option>
                                        </select>

                                    </div>
                                    <div className='col-lg-3 mt-3'>
                                        <input className='form-control' placeholder='Month'></input>
                                    </div>
                                    <div className='col-lg-3 mt-3'>
                                        <input className='form-control' placeholder='Year'></input>
                                    </div>
                                    <div className='col-lg-3 mt-3'>
                                        <input className='form-control' placeholder='Security Code'></input>
                                    </div>
                                </div>
                            </div>}

                            {state.cheque && <div className='col-lg-12'>
                                <label className='fw-bold mt-3'>Cheque No</label>
                                <input className='form-control'></input>
                            </div>}

                            <div className='col-lg-12'>
                                <label className='fw-bold mt-3'>Payment Note</label>
                                <textarea className='form-control' rows={'2'}></textarea>
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