import React from 'react';
import { Link } from "react-router-dom";
import { useDeleteStaffMutation, useGetAllStaffsQuery } from '../../../Components/all-products/allproductsApi/allProductsApi';


function AllDeliveryBoys() {

    const { isLoading, data } = useGetAllStaffsQuery();

    const [deleteDeliveryBoyD, response] = useDeleteStaffMutation();

    const deleteDeliveryBoyData = (id) => {
        deleteDeliveryBoyD(id)
    };

    if (response.isSuccess === true) {
        alert('Delivery Boy deleted Successfully')
    }

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">All Delivery Boys</h1>
                            </div>
                            <div className="col-md-6 text-md-right">
                                <Link to="/admin/delivery-boys/create" className="btn btn-circle btn-info">
                                    <span>Add New Delivery Boy</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Delivery Boys</h5>
                        </div>
                        <div className="card-body">
                            {isLoading ? <h2>Loading...</h2>
                                : <table className="table aiz-table footable footable-1 breakpoint-lg" style={{}}>
                                    <thead>
                                        <tr className="footable-header">
                                            <th width="10%" style={{ display: 'table-cell' }}>#</th>
                                            <th style={{ display: 'table-cell' }}>Name</th>
                                            <th style={{ display: 'table-cell' }}>Email</th>
                                            <th style={{ display: 'table-cell' }}>Phone</th>
                                            <th style={{ display: 'table-cell' }}>Earnings</th>
                                            <th style={{ display: 'table-cell' }}>Collections</th>
                                            <th width="10%" style={{ display: 'table-cell' }}>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map((item, i) => {
                                            return <tr className="footable-empty footableIcon" key={item._id}>
                                                <td >{i + 1}</td>
                                                <td >{item.firstname}</td>
                                                <td >{item.lastname}</td>
                                                <td >{item.email}</td>
                                                <td >{item.mobile}</td>
                                                <td >{item.role_id?.role_name}</td>
                                                <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                        <i className="las la-edit" />
                                                    </Link>
                                                    <button type="button" onClick={() => deleteDeliveryBoyData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                        <i className="las la-trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            }
                            <div className="aiz-pagination">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>
        </>
    )
}

export default AllDeliveryBoys