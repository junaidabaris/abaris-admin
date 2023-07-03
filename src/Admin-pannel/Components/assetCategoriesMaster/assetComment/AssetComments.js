import React, { useState } from 'react'
import { AiFillEdit } from "react-icons/ai"
import { GrView } from 'react-icons/gr'
import { Link } from "react-router-dom"
function AssetComments() {
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
                    <h5 className="mb-0 h6">  Asset Comments List
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
                                <th class="table-secondary" scope="col">Asset Id</th>
                                <th class="table-secondary" scope="col">Asset Name</th>
                                <th class="table-secondary" scope="col">Message</th>
                                <th class="table-secondary" scope="col">Is Deleted</th>
                                <th class="table-secondary" scope="col">Created Date</th>
                                <th class="table-secondary" scope="col">Created By</th>
                                <th class="table-secondary" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >1</td>
                                <td >Dell</td>
                                <td>Mouse</td>
                                <td>A Simple Plot Marketing website for Soha Developers</td>
                                <td>No</td>
                                <td>2023-06-20T06:41:59.6755514</td>
                                <td>6/7/2023</td>
                                <td>
                                    <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                        <i className="las la-trash icon-icon">
                                        </i>
                                    </button>
                                </td>


                            </tr>
                            <tr>
                                <td >2</td>
                                <td >Lenevo</td>

                                <td>laptop</td>
                                <td>Yaa, its first comment, its for repair or maintenance type of work related...</td>
                                <td>No</td>
                                <td>2023-06-20T06:41:59.6755514</td>
                                <td>6/7/2023</td>
                                <td>

                                    <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                        <i className="las la-trash icon-icon">
                                        </i>
                                    </button>

                                </td>

                            </tr>
                            <tr>
                                <td scope="row">3</td>
                                <td>HP</td>
                                <td>Printer</td>
                                <td>this is second comment for this particular asset, u may have a full list of comments.</td>
                                <td>No</td>
                                <td>2023-06-20T06:41:59.6755514</td>
                                <td>6/7/2023</td>
                                <td>
                                    <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                        <i className="las la-trash icon-icon">
                                        </i>
                                    </button>
                                </td>

                            </tr>
                            <tr>
                                <td scope="row">4</td>
                                <td>Hp 420</td>
                                <td>Laptop</td>
                                <td>Average</td>
                                <td>No</td>
                                <td>2023-06-20T06:41:59.6755514</td>
                                <td>6/7/2023</td>
                                <td>
                                    <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                        <i className="las la-trash icon-icon">
                                        </i>
                                    </button>
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

export default AssetComments
