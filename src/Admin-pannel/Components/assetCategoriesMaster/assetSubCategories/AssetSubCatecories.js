import React, { useState } from 'react'
import { AiFillEdit } from "react-icons/ai"
import { GrView } from 'react-icons/gr'
import { Link } from "react-router-dom"
function AssetSubCatecories() {
    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">

            <div className="aiz-titlebar text-left mt-2 mb-3">
                <div className="row align-items-center">
                    <div className="col-md-6">

                    </div>
                    {/* <div className="col-md-6 text-md-right">
                    <Link to="/admin/roles/create" className="btn btn-circle btn-info">
                        <span>Add New Role</span>
                    </Link>
                </div> */}
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">  Asset Sub Categorie List
                    </h5>
                    <div className="col-md-6 text-md-right">
                        <Link to="/admin/add-asset-category" className="btn btn-circle btn-info">
                            <span>Add Asset Category</span>
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-3 position-relative">
                        <thead>
                            <tr>
                                <th class="table-secondary" scope="col">Id</th>
                                <th class="table-secondary" scope="col">Asset Categories</th>
                                <th class="table-secondary" scope="col">Name</th>
                                <th class="table-secondary" scope="col">Description</th>
                                <th class="table-secondary" scope="col">Created Date</th>
                                <th class="table-secondary" scope="col">Action</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >1</td>
                                <td >Dell</td>
                                <td>Mouse</td>
                                <td>A Simple Plot Marketing website for Soha Developers</td>
                                <td>6/7/2023</td>
                                <td>
                                    <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to="/admin/add-asset-category">
                                        {/* <i className="las la-eye">
                                    </i> */}
                                        <AiFillEdit className="icon-icon" />
                                    </Link>
                                    <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                        <i className="las la-trash icon-icon">
                                        </i>
                                    </button>

                                    <Link className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to="/admin/asset-category-type-view">
                                        {/* <i className="las la-eye">
                                    </i> */}
                                        <GrView />
                                    </Link>
                                </td>


                            </tr>
                            <tr>
                                <td >2</td>
                                <td >Lenevo</td>

                                <td>laptop</td>
                                <td>Good</td>
                                <td>	6/7/2023</td>
                                <td>
                                    <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to="/admin/add-asset-category">
                                        {/* <i className="las la-eye">
                                    </i> */}
                                        <AiFillEdit className="icon-icon" />
                                    </Link>
                                    <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                        <i className="las la-trash icon-icon">
                                        </i>
                                    </button>
                                    <Link className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to="/admin/asset-category-type-view">
                                        {/* <i className="las la-eye">
                                    </i> */}
                                        <GrView />
                                    </Link>
                                </td>

                            </tr>
                            <tr>
                                <td scope="row">3</td>
                                <td>HP</td>
                                <td>Printer</td>
                                <td>Bad</td>
                                <td>	6/7/2023</td>
                                <td>
                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" href="/admin/all_orders/order-Details/64789b752a93b23fb3d1220d">
                                        {/* <i className="las la-eye">
                                    </i> */}
                                        <AiFillEdit className="icon-icon" />
                                    </a>
                                    <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                        <i className="las la-trash icon-icon">
                                        </i>
                                    </button>
                                    <Link className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to="/admin/asset-category-type-view">
                                        {/* <i className="las la-eye">
                                    </i> */}
                                        <GrView />
                                    </Link>
                                </td>

                            </tr>
                            <tr>
                                <td scope="row">4</td>
                                <td>Asus</td>
                                <td>Laptop</td>
                                <td>Average</td>
                                <td>	6/7/2023</td>
                                <td>
                                    <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to="#">
                                        <AiFillEdit className="icon-icon" />
                                    </Link>
                                    <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                        <i className="las la-trash icon-icon">
                                        </i>
                                    </button>
                                    <Link className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to="/admin/asset-category-type-view">
                                        {/* <i className="las la-eye">
                                    </i> */}
                                        <GrView />
                                    </Link>
                                </td>

                            </tr>

                        </tbody>
                    </table>


                    <div className="aiz-pagination">
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
        </div>
    </div>
}

export default AssetSubCatecories
