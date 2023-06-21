import React from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAddPurchaseCartMutation, useGetProductSearchQuery } from '../../all-products/allproductsApi/allProductsApi';
import { RxCross1 } from "react-icons/rx"



function ThirdInput({ setCart }) {

    // const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [showData, setShowData] = useState([])



    const [show, setShow] = useState(false)
    const [searchs, setSearch] = useState('')
    const { data: searchPro } = useGetProductSearchQuery(searchs)


    const handelChange = (e) => {
        if (e.key === 'Enter') {
            const clone = e.target.value
            setSearch(clone);
            setShow(true)
        }
    }

    const setTableItem = async (item) => {
        const obj = { pickupPoints: ['6412fbf218fa66a37ed430d3'], purchase: showData }


        setCart({ id: item._id, data: obj })
        setShow(false)
    }



    return (
        <>
            {/* <div className='thirdInp'>
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
            </div> */}

            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div>
                            <input className="third-inp" onKeyDown={handelChange} placeholder="Please add products to order list" />
                            {show && searchPro?.getSearchedProduct?.length > 0 && <div className="showList">
                                <div style={{ fontSize: "19px" }} onClick={() => { setShow(false) }}><RxCross1 /></div>
                                {searchPro?.getSearchedProduct.map((item) => {
                                    return <h6 key={item._id} style={{ cursor: "pointer" }} onClick={() => setTableItem(item)}>{item.name}</h6>
                                })}
                            </div>}

                        </div>

                    </div>
                    {/* <span className='bg-gray'>
                            <button type='button' className='third-inp-btn' onClick={handleShow}>
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


                        </span> */}
                </div>



            </div>
        </>
    )
}

export default ThirdInput