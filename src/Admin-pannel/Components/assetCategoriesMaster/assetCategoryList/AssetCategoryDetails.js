import React from 'react'
import { AiFillEdit } from "react-icons/ai"
import { GrView } from 'react-icons/gr'
import { Link } from "react-router-dom"
import Table from 'react-bootstrap/Table';
function AssetCategoryDetails() {
    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="aiz-titlebar text-left mt-2 mb-3">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="h3">Asset Categorie List</h1>
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
                    <h5 className="mb-0 h6"> Asset Categorie List </h5>
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
                                <th class="table-secondary" scope="col">Name</th>
                                <th class="table-secondary" scope="col">Description</th>
                                <th class="table-secondary" scope="col">Created Date</th>
                                <th class="table-secondary" scope="col">Modified Date</th>
                                <th class="table-secondary" scope="col">Created By</th>
                                <th class="table-secondary" scope="col">Modified By</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>jewellery</td>
                                <td>Inactive</td>
                                <td>Inactive</td>
                                <td>Inactive</td>
                                <td>Inactive</td>
                                <td>Inactive</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>jewellery</td>
                                <td>Inactive</td>
                                <td>Inactive</td>
                                <td>Inactive</td>
                                <td>Inactive</td>
                                <td>Inactive</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>jewellery</td>
                                <td>Inactive</td>
                                <td>Inactive</td>
                                <td>Inactive</td>
                                <td>Inactive</td>
                                <td>Inactive</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>jewellery</td>
                                <td>Inactive</td>
                                <td>Inactive</td>
                                <td>Inactive</td>
                                <td>Inactive</td>
                                <td>Inactive</td>
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

export default AssetCategoryDetails
