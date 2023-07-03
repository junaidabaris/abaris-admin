import React from 'react'
import { Tabs } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
function AddAssetCategories() {
    return <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
    >
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Add Asset</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className='border-1'>
                    <Tabs
                        defaultActiveKey="basic"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                    >
                        <Tab eventKey="basic" title="Basic Info">
                            <div className="aiz-main-content">
                                <div className="px-15px px-lg-25px">
                                    <div className="aiz-titlebar text-left mt-2 mb-3">
                                        <div className="row align-items-center">

                                            {/* <div className="col-md-6 text-md-right">
                                <Link to="/admin/roles/create" className="btn btn-circle btn-info">
                                    <span>Add New Role</span>
                                </Link>
                            </div> */}
                                        </div>
                                    </div>
                                    <div className="card">

                                        <div className="card-body">

                                            <section className="form-section">
                                                <div className="row">
                                                    {/* <form action=""> */}
                                                    <div className="col-lg-3">
                                                        <div>
                                                            <label htmlFor='Asset Id'>Asset ID</label>
                                                            <input type="text" className="form-control" id="exampleInputAssetId" aria-describedby="assetId" placeholder="Asset Id" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div>
                                                            <label htmlFor='Asset Model No'>Asset Model No</label>
                                                            <input type="text" className="form-control" id="exampleInputAssetModelNo" aria-describedby="assetModelNo" placeholder="Asset Model No" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div>
                                                            <label htmlFor='Asset Model No'>Name</label>
                                                            <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div>
                                                            <label htmlFor='Asset Model No'>Description</label>

                                                            <input type="text" className="form-control" id="exampleInputDescription" aria-describedby="Description" placeholder="Description" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <div>
                                                            <label htmlFor='Asset Model No'>Unit Price</label>

                                                            <input type="text" className="form-control" id="exampleUnitPrice" aria-describedby="emailHelp" placeholder="Unit Price" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <label htmlFor='assetStatus'>Asset Status</label>
                                                        <div>
                                                            <select id='assetStatus' className="form-select" aria-label="Default select example">
                                                                <option selected>Tc View</option>
                                                                <option value={1}>Good</option>
                                                                <option value={1}>Bad</option>
                                                                <option value={1}>Average</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <div>
                                                            <label htmlFor='Asset Model No'>Date Of Purchase</label>
                                                            <input type="date" className="form-control" id="exampleUnitPrice" aria-describedby="emailHelp" placeholder="Unit Price" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <label htmlFor='Asset Model No'>Date Of Purchase</label>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>Type</option>
                                                            <option value={1}>Make to order</option>
                                                            <option value={1}>Ready to ship</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <label htmlFor='Asset Model No'>Date Of Purchase</label>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>---select---</option>
                                                            <option value={1}>Make to order</option>
                                                            <option value={1}>Ready to ship</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <label htmlFor='Asset Model No'><b>Date Of Purchase</b></label>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>---select---</option>
                                                            <option value={1}>Make to order</option>
                                                            <option value={1}>Ready to ship</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <label htmlFor='Asset Model No'>Date Of Purchase</label>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>---select---</option>
                                                            <option value={1}>Make to order</option>
                                                            <option value={1}>Ready to ship</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <label htmlFor='Asset Model No'>Date Of Purchase</label>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>---select---</option>
                                                            <option value={1}>Make to order</option>
                                                            <option value={1}>Ready to ship</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <button className="btn btn-primary mr-3">Save</button>
                                                        <button className="btn btn-danger">Close</button>
                                                    </div>
                                                    {/* </form> */}
                                                </div>
                                            </section>

                                            <div className="aiz-pagination">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="other Info" title="other Info">

                            <div className="aiz-main-content">
                                <div className="px-15px px-lg-25px">
                                    <div className="aiz-titlebar text-left mt-2 mb-3">
                                        {/* <form action=""> */}
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 mt-3">
                                                <div>
                                                    <label htmlFor='Asset Model No'>Date Of Manufacture
                                                    </label>
                                                    <input type="date" className="form-control" id="exampleDateOfManufacture" aria-describedby="emailHelp" />
                                                </div>

                                            </div>
                                            <div className="col-lg-3 mt-3">
                                                <div>
                                                    <label htmlFor='Asset Model No'>Year Of Valuation</label>
                                                    <input type="date" className="form-control" id="exampleYearOfValuation" aria-describedby="emailHelp" />
                                                </div>

                                            </div>
                                            <div className="col-lg-3 mt-3">
                                                <div>
                                                    <label htmlFor='Asset Model No'>Warranety In  Month</label>
                                                    <input type="text" className="form-control" id="exampleUnitPrice" aria-describedby="emailHelp" />
                                                </div>

                                            </div>
                                            <div className="col-lg-3 mt-3">
                                                <div>
                                                    <label htmlFor='Asset Model No'>Depreciation In Month
                                                    </label>
                                                    <input type="text" className="form-control" id="exampleUnitPrice" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mt-3">
                                                <div>
                                                    <label htmlFor='Asset Model No'>Location</label>
                                                    <input type="text" className="form-control" id="exampleLocation" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            {/* <div className="col-lg-3 mt-3">
                                                <div>
                                                    <label htmlFor='Asset Model No'>Date Of Purchase</label>
                                                    <input type="text" className="form-control" id="exampleUnitPrice" aria-describedby="emailHelp" placeholder="Unit Price" />
                                                </div>
                                            </div> */}
                                            <div className="col-lg-3 mt-3">
                                                <div>
                                                    <label htmlFor='Asset Model No'>Image</label>
                                                    <input type="file" className="form-control" id="exmpleImage" aria-describedby="emailHelp" placeholder="Unit Price" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mt-3">
                                                <div>
                                                    <label htmlFor='Asset Model No'>Purchase Receipt</label>
                                                    <input type="file" className="form-control" id="examplePurchaseReceipt" aria-describedby="emailHelp" placeholder="Unit Price" />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor='Asset Model No'>
                                                <b>Note</b>
                                            </label>
                                            <textarea type="text" className="w-100" style={{ height: "100px" }} id="exampleNote" aria-describedby="emailHelp" />
                                        </div>
                                        {/* </form> */}
                                    </div>
                                    <div className="col-lg-3 mt-3 d-flex justifycontentCenter">
                                        <button className="btn btn-primary mr-3">Save</button>
                                        <button className="btn btn-danger">Close</button>
                                    </div>
                                </div>

                            </div>
                        </Tab>
                        <Tab eventKey="asset-asigin" title="Asset Assigin">
                            <div className="aiz-main-content">
                                <div className="px-15px px-lg-25px">

                                    <div className="card">

                                        <div className="card-body">

                                            <section className="form-section">
                                                <div className="row">
                                                    {/* <form action=""> */}

                                                    <div className="col-lg-3 mt-3">
                                                        <label htmlFor='Assign Employee'><b>Assign Employee</b></label>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>---select---</option>
                                                            <option value={1}>Unassigned</option>
                                                        </select>
                                                    </div>

                                                    {/* </form> */}
                                                </div>
                                                <div className="col-lg-3  d-flex justifycontentCenter">
                                                    <button className="btn btn-primary mr-3">Save</button>
                                                    <button className="btn btn-danger">Close</button>
                                                </div>
                                            </section>

                                            <div className="aiz-pagination">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                                </div>
                            </div>
                        </Tab>

                    </Tabs>
                </div>
            </Modal.Body>

            <Modal.Footer>
                {/*  <Button variant="secondary">Close</Button>
                <Button variant="primary">Save</Button> */}
            </Modal.Footer>
        </Modal.Dialog>
    </div>
}

export default AddAssetCategories
