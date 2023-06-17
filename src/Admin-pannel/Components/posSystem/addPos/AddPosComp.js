import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './AddPosComp.css';
import { FaPencilAlt } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AiFillEye, AiFillPlusSquare } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

function AddPosComp() {

  const [show, setShow] = useState(false);
  const [showSec, setShowSec] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [smShow2, setSmShow2] = useState(false);
  const [smShow3, setSmShow3] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseSec = () => setShowSec(false);
  const handleShowSec = () => setShowSec(true);

  return (
    <>
      <div className='main_pos_wrapper'>
        <div className='leftside'>
          <form>

            <div className='topInp'>
              <input type='text' placeholder='type here'></input>

              <span className='bg-gray'>
                <button type='button'>
                  <FaPencilAlt />
                </button>
              </span>

              <span className='bg-gray'>
                <button type='button' onClick={handleShowSec}>
                  <AiFillEye />

                </button>

                <Modal show={showSec} onHide={handleCloseSec}>
                  <Modal.Header closeButton >
                    <Modal.Title>AMJAD KHAN </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <table id="customers">
                      <tr>
                        <td className='bold-td-text'>Company</td>
                        <td>-</td>

                      </tr>
                      <tr>
                        <td className='bold-td-text'>Name</td>
                        <td>Amjad Khan</td>

                      </tr>
                      <tr>
                        <td className='bold-td-text'>Customer Group</td>
                        <td>General</td>
                      </tr>
                      <tr>
                        <td className='bold-td-text'>VAT Number</td>
                        <td>Maria Anders</td>
                      </tr>
                      <tr>
                        <td className='bold-td-text'>GST Number</td>
                        <td>Maria Anders</td>
                      </tr>
                      <tr>
                        <td className='bold-td-text'>Deposit</td>
                        <td>20.00</td>
                      </tr>
                      <tr>
                        <td className='bold-td-text'>Award Points</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className='bold-td-text'>Email</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className='bold-td-text'>Phone</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className='bold-td-text'>Address</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className='bold-td-text'>City</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className='bold-td-text'>State</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className='bold-td-text'>Postal Code</td>
                        <td></td>
                      </tr>

                      <tr>
                        <td className='bold-td-text'>Country</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className='bold-td-text'>Customer Custom Field 1</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className='bold-td-text'>Customer Custom Field 2</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className='bold-td-text'>Customer Custom Field 3</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className='bold-td-text'>Customer Custom Field 4</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className='bold-td-text'>Customer Custom Field 5</td>
                        <td></td>
                      </tr>

                    </table>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseSec}>
                      Close
                    </Button>
                    <Button variant="primary" >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>


              </span>

              <span className='bg-gray'>
                <button type='button' onClick={handleShow}>
                  <AiFillPlusSquare />
                </button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Customer</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Please fill in the information below. The field labels marked with * are required input fields.</p>

                    <div className="aiz-main-content">
                      <div className="px-15px px-lg-25px">
                        <div className="row">
                          <div className="col-lg-6 mx-auto">
                            <div className="card">
                              <form className="form-horizontal" id="create-course-form">
                                <div className="card-body">

                                  <div className="form-group row">
                                    <label className="col-sm-3 col-from-label" htmlFor="first name">Customer Group *</label>
                                    <div className="col-sm-9">
                                      <input type="text" placeholder="Customer Group" name="" className="form-control" required />
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-sm-3 col-from-label" htmlFor="first name">Name *</label>
                                    <div className="col-sm-9">
                                      <input type="text" placeholder="Name" name="" className="form-control" required />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label className="col-sm-3 col-from-label" htmlFor="email">Unique Customer ID</label>
                                    <div className="col-sm-9">
                                      <input type="text" placeholder="Unique Customer ID" autoComplete="off" name="" className="form-control" required />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label className="col-sm-3 col-from-label" htmlFor="mobile">GST Number</label>
                                    <div className="col-sm-9">
                                      <input type="text" placeholder="GST Number" name="" className="form-control" required />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label className="col-sm-3 col-from-label" htmlFor="password">Phone *</label>
                                    <div className="col-sm-9">
                                      <input type="number" placeholder="Phone *" name="" className="form-control" required />
                                    </div>
                                  </div>


                                  <div className="form-group row">
                                    <label className="col-sm-3 col-from-label" htmlFor="password">Address *</label>
                                    <div className="col-sm-9">
                                      <input type="text" placeholder="Address *" name="" className="form-control" required />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label className="col-sm-3 col-from-label" htmlFor="password">City</label>
                                    <div className="col-sm-9">
                                      <input type="text" placeholder="city" name="city" className="form-control" required />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label className="col-sm-3 col-from-label" htmlFor="password">State</label>
                                    <div className="col-sm-9">
                                      <input type="text" placeholder="state" name="state" className="form-control" required />
                                    </div>
                                  </div>

                                </div>
                              </form>
                            </div>
                          </div>

                          <div className="col-lg-6 mx-auto">
                            <div className="card">
                              <form className="form-horizontal" id="create-course-form">
                                <div className="card-body">

                                  <div className="form-group row">
                                    <label className="col-sm-3 col-from-label" htmlFor="first name">Price Group</label>
                                    <div className="col-sm-9">
                                      <select className="form-select" aria-label="Default select example">
                                        <option value={'Default'}>Default</option>
                                        <option value={'Retail'}>Retail</option>
                                        <option value={'Wholesale'}>Wholesale</option>
                                      </select>

                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label className="col-sm-3 col-from-label" htmlFor="first name">Postal Code</label>
                                    <div className="col-sm-9">
                                      <input type="text" placeholder="Postal Code" name="" className="form-control" required />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label className="col-sm-3 col-from-label" htmlFor="email">Country</label>
                                    <div className="col-sm-9">
                                      <input type="text" placeholder="Country" autoComplete="off" name="" className="form-control" required />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label className="col-sm-3 col-from-label" htmlFor="mobile">Customer Custom Field 1</label>
                                    <div className="col-sm-9">
                                      <input type="text" placeholder="Customer Custom Field 1" name="" className="form-control" required />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label className="col-sm-3 col-from-label" htmlFor="password">Customer Custom Field 2</label>
                                    <div className="col-sm-9">
                                      <input type="text" placeholder="Customer Custom Field 2" name="" className="form-control" required />
                                    </div>
                                  </div>


                                  <div className="form-group row">
                                    <label className="col-sm-3 col-from-label" htmlFor="password">Customer Custom Field 3</label>
                                    <div className="col-sm-9">
                                      <input type="text" placeholder="Customer Custom Field 3" name="" className="form-control" required />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label className="col-sm-3 col-from-label" htmlFor="password">Customer Custom Field 4</label>
                                    <div className="col-sm-9">
                                      <input type="text" placeholder="Customer Custom Field 4" name="" className="form-control" required />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label className="col-sm-3 col-from-label" htmlFor="password">Customer Custom Field 5</label>
                                    <div className="col-sm-9">
                                      <input type="text" placeholder="Customer Custom Field 5" name="" className="form-control" required />
                                    </div>

                                  </div>

                                  <div className="form-group row">
                                    <label className="col-sm-3 col-from-label" htmlFor="password">Customer Custom Field 6</label>
                                    <div className="col-sm-9">
                                      <input type="text" placeholder="Customer Custom Field 6" name="" className="form-control" required />
                                    </div>
                                  </div>

                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
                      {/* <ToastContainer /> */}
                    </div>

                  </Modal.Body>
                  <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button> */}
                    <Button variant="primary" onClick={handleClose}>
                      Add Customer
                    </Button>
                  </Modal.Footer>
                </Modal>
              </span>

            </div>

            <div className='secInp'>
              <select class="form-select" aria-label="Default select example">
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>


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


          </form>

          <div className='table_wrapper'>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                  <th>
                    <RiDeleteBin6Line />
                    {/* <button className='del-btn'>
                     
                    </button> */}
                  </th>
                </tr>
              </thead>
              <tbody className='fixedheight'>
                <div className='fixedheight'>
                  jjj
                </div>
              </tbody>
            </table>
            <table className='font-bold'>
              <tr>
                <td>Items</td>
                <td>0</td>
                <td>Total</td>
                <td className='text-right'>0.00</td>
              </tr>
              <tr>
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
                        EDIT ORDER TAX
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>ORDER TAX</p>
                      <select className="form-select" aria-label="Default select example">
                        <option value={1}>No Tax</option>
                        <option value={1}>VAT @10%</option>
                        <option value={2}>GST @6%</option>
                        <option value={3}>VAT @20%</option>
                      </select>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" >
                        Update
                      </Button>
                    </Modal.Footer>
                  </Modal>


                </td>
                <td>0.00</td>
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
                        EDIT ORDER DISCOUNT
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>Order Discount</p>
                      <form>
                        <input className='form-control' placeholder='0' type='text'></input>
                      </form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" >
                        Update
                      </Button>
                    </Modal.Footer>
                  </Modal>

                </td>
                <td className='text-right'>0.00</td>
              </tr>

            </table>
            <div className='bg-black'>
              <div>
                Total Payable
                <button onClick={() => setSmShow3(true)} className="me-2">
                  <AiFillPlusSquare />
                </button>

                <Modal
                  size="sm"
                  show={smShow3}
                  onHide={() => setSmShow3(false)}
                  aria-labelledby="example-modal-sizes-title-sm"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                      SHIPPING
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Shipping</p>
                    <form>
                      <input className='form-control' placeholder='0' type='text'></input>
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" >
                      Update
                    </Button>
                  </Modal.Footer>
                </Modal>

              </div>
              <div>
                0.00
              </div>
            </div>
          </div>

          <table className='colorfulTable'>
            <tr>
              <td className='bg-orange'>Suspend</td>
              <td className='bg-blue'>Order</td>
              <td rowspan="2" className='bg-green'>Payment</td>
            </tr>
            <tr>
              <td className='bg-red'>Cancel</td>
              <td className='bg-deepblue'>bill</td>
              {/* <td className='bg-deepblue'>bill</td> */}
            </tr>
          </table>
        </div>

        <div className='rightside'>

        </div>

      </div>
    </>
  )
}

export default AddPosComp