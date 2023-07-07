import { Link } from "react-router-dom"


function AddDeliveryChalanReport() {
    return (
        <>
        <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="down-head">
                        <div className="col">
                            <h5 className="mb-md-0 h6">Add Delivery Challan</h5>
                        </div>
                        {/* <div className="download-sec">
                            <div className="down">
                                <input
                                    type="date"
                                    className="aiz-date-range form-control"
                                    name="date"
                                    placeholder="Filter by date"
                                    data-format="DD-MM-Y"
                                    data-separator=" to "
                                    data-advanced-range="true"
                                    autoComplete="off"
                                    fdprocessedid="sq6vu7"
                                />
                            </div>
                            <div className="down">
                            <input
                                    type="date"
                                    className="aiz-date-range form-control"
                                    name="date"
                                    placeholder="Filter by date"
                                    data-format="DD-MM-Y"
                                    data-separator=" to "
                                    data-advanced-range="true"
                                    autoComplete="off"
                                    fdprocessedid="sq6vu7"
                                />
                            </div>
                            <div className="col-auto">
                                <div className="form-group mb-0">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        fdprocessedid="24gy4"
                                    >
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="card">
                        
                        <form>
                            {/* <AddDeliveryChalanReport/> */}
                            <div className="card-header row gutters-5">
                                <div className="col-lg-4 dropdown mb-2 mb-md-0">
                                    <label for="exampleInputEmail1" class="form-label">Challan No</label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                    >
                                        <option selected></option>
                                        <option>7797987</option>
                                        <option value="1">786876</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 ml-auto">
                                    <label for="exampleInputEmail1" class="form-label">Location</label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example">
                                        <option selected></option>
                                        <option>Filter by Status</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Confirmed</option>
                                        <option value="3">Picked Up</option>
                                        <option value="3">On The Way</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 ml-auto">
                                    <label for="exampleInputEmail1" class="form-label">Type</label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example">
                                        <option selected></option>
                                        <option value="1">Paid</option>
                                        <option value="2">Un-Paid</option>
                                    </select>

                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group mb-0">
                                        <label for="exampleInputEmail1" class="form-label">Date</label>
                                        <input
                                            type="date"
                                            className="aiz-date-range form-control"
                                            name="date"
                                            placeholder="Filter by date"
                                            data-format="DD-MM-Y"
                                            data-separator=" to "
                                            data-advanced-range="true"
                                            autoComplete="off"
                                            fdprocessedid="sq6vu7"
                                        />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="form-group mb-0">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            fdprocessedid="24gy4"
                                        >
                                            save
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info"
                                            fdprocessedid="24gy4"
                                        >
                                            Cancle
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="card-body">

                                <div className="seach-tab">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Search</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" />
                                    </div>

                                </div>

                                <table className="table table-striped table-2">
                                    <thead>
                                        <tr>
                                            <th scope="col">Challan No</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">No. Of Item</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>
                                                <Link
                                                    className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                                    to='#'
                                                    title="View"
                                                >
                                                    <i className="las la-eye" />
                                                </Link>
                                                <a
                                                    className="btn btn-soft-info btn-icon btn-circle btn-sm"
                                                    href="https://mmslfashions.in/invoice/8"
                                                    title="Download Invoice"
                                                >
                                                    <i className="las la-download" />
                                                </a>

                                                <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                    <i className="las la-trash" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>
                                                <Link
                                                    className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                                    to='#'
                                                    title="View"
                                                >
                                                    <i className="las la-eye" />
                                                </Link>
                                                <a
                                                    className="btn btn-soft-info btn-icon btn-circle btn-sm"
                                                    href="https://mmslfashions.in/invoice/8"
                                                    title="Download Invoice"
                                                >
                                                    <i className="las la-download" />
                                                </a>

                                                <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                    <i className="las la-trash" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>
                                                <Link
                                                    className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                                    to='#'
                                                    title="View"
                                                >
                                                    <i className="las la-eye" />
                                                </Link>
                                                <a
                                                    className="btn btn-soft-info btn-icon btn-circle btn-sm"
                                                    href="https://mmslfashions.in/invoice/8"
                                                    title="Download Invoice"
                                                >
                                                    <i className="las la-download" />
                                                </a>

                                                <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                    <i className="las la-trash" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>
                                                <Link
                                                    className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                                    to='#'
                                                    title="View"
                                                >
                                                    <i className="las la-eye" />
                                                </Link>
                                                <a
                                                    className="btn btn-soft-info btn-icon btn-circle btn-sm"
                                                    href="https://mmslfashions.in/invoice/8"
                                                    title="Download Invoice"
                                                >
                                                    <i className="las la-download" />
                                                </a>

                                                <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                    <i className="las la-trash" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>
                                                <Link
                                                    className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                                    to='#'
                                                    title="View"
                                                >
                                                    <i className="las la-eye" />
                                                </Link>
                                                <a
                                                    className="btn btn-soft-info btn-icon btn-circle btn-sm"
                                                    href="https://mmslfashions.in/invoice/8"
                                                    title="Download Invoice"
                                                >
                                                    <i className="las la-download" />
                                                </a>

                                                <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                    <i className="las la-trash" />
                                                </button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>




                                <div className="aiz-pagination"></div>
                            </div> */}
                        </form>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p className="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
            
        </>
    )
}
export default AddDeliveryChalanReport