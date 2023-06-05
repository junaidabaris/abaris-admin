function PickUpPointOrder() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <form className action="true" id="sort_orders" method="GET">
              <div className="card-header row gutters-5">
                <div className="col">
                  <h5 className="mb-md-0 h6">All Orders</h5>
                </div>
                <div className="col-lg-2 dropdown mb-2 mb-md-0">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Bulk Action</option>
                    <option value="1">Delete Selection</option>
                  </select>
                </div>
                <div className="col-lg-2 ml-auto">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Filter by Delivery Status</option>
                    <option value="1">Pending</option>
                    <option value="2">Confirmed</option>
                    <option value="3">Picked Up</option>
                    <option value="3">On The Way</option>
                  </select>
                  {/* <div className="dropdown bootstrap-select form-control aiz-">
                    <select
                      className="form-control aiz-selectpicker"
                      name="delivery_status"
                      id="delivery_status"
                      tabIndex={-98}
                    >
                      <option value>Filter by Delivery Status</option>
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="picked_up">Picked Up</option>
                      <option value="on_the_way">On The Way</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancel</option>
                    </select>
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-light"
                      data-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-1"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-id="delivery_status"
                      title="Filter by Delivery Status"
                      fdprocessedid="yi4cvs"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">
                            Filter by Delivery Status
                          </div>
                        </div>{" "}
                      </div>
                    </button>
                    <div
                      className="dropdown-menu"
                      style={{ maxHeight: 201, overflow: "hidden" }}
                    >
                      <div
                        className="inner show"
                        role="listbox"
                        id="bs-select-1"
                        tabIndex={-1}
                        aria-activedescendant="bs-select-1-0"
                        style={{ maxHeight: 185, overflowY: "auto" }}
                      >
                        <ul
                          className="dropdown-menu inner show"
                          role="presentation"
                          style={{ marginTop: 0, marginBottom: 0 }}
                        >
                          <li className="selected active">
                            <a
                              role="option"
                              className="dropdown-item active selected"
                              id="bs-select-1-0"
                              tabIndex={0}
                              aria-setsize={7}
                              aria-posinset={1}
                              aria-selected="true"
                            >
                              <span className="text">
                                Filter by Delivery Status
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-1-1"
                              tabIndex={0}
                            >
                              <span className="text">Pending</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-1-2"
                              tabIndex={0}
                            >
                              <span className="text">Confirmed</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-1-3"
                              tabIndex={0}
                            >
                              <span className="text">Picked Up</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-1-4"
                              tabIndex={0}
                            >
                              <span className="text">On The Way</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-1-5"
                              tabIndex={0}
                            >
                              <span className="text">Delivered</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-1-6"
                              tabIndex={0}
                            >
                              <span className="text">Cancel</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="col-lg-2 ml-auto">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Filter by Payment Status</option>
                    <option value="1">Paid</option>
                    <option value="2">Un-Paid</option>
                  </select>
                  {/* <div className="dropdown bootstrap-select form-control aiz-">
                    <select
                      className="form-control aiz-selectpicker"
                      name="payment_status"
                      id="payment_status"
                      tabIndex={-98}
                    >
                      <option value>Filter by Payment Status</option>
                      <option value="paid">Paid</option>
                      <option value="unpaid">Un-Paid</option>
                    </select>
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-light"
                      data-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-2"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-id="payment_status"
                      title="Filter by Payment Status"
                      fdprocessedid="zjh2y"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">
                            Filter by Payment Status
                          </div>
                        </div>{" "}
                      </div>
                    </button>
                    <div
                      className="dropdown-menu"
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="inner show"
                        role="listbox"
                        id="bs-select-2"
                        tabIndex={-1}
                        aria-activedescendant="bs-select-2-0"
                        style={{ overflowY: "auto" }}
                      >
                        <ul
                          className="dropdown-menu inner show"
                          role="presentation"
                          style={{ marginTop: 0, marginBottom: 0 }}
                        >
                          <li className="selected active">
                            <a
                              role="option"
                              className="dropdown-item active selected"
                              id="bs-select-2-0"
                              tabIndex={0}
                              aria-setsize={3}
                              aria-posinset={1}
                              aria-selected="true"
                            >
                              <span className="text">
                                Filter by Payment Status
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-2-1"
                              tabIndex={0}
                            >
                              <span className="text">Paid</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-2-2"
                              tabIndex={0}
                            >
                              <span className="text">Un-Paid</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="col-lg-2">
                  <div className="form-group mb-0">
                    <input
                      type="text"
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
                <div className="col-lg-2">
                  <div className="form-group mb-0">
                    <input
                      type="text"
                      className="form-control"
                      id="search"
                      name="search"
                      placeholder="Type Order code & hit Enter"
                      fdprocessedid="wffmea"
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
                      Filter
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <table
                  className="table aiz-table mb-0 footable footable-1 breakpoint-xl"
                  style={{}}
                >
                  <thead>
                    <tr className="footable-header">
                      {/*<th>#</th>*/}
                      <th style={{ display: "table-cell" }}>
                        <div className="form-group">
                          <div className="aiz-checkbox-inline">
                            <label className="aiz-checkbox">
                              <input type="checkbox" className="check-all" />
                              <span className="aiz-square-check" />
                            </label>
                          </div>
                        </div>
                      </th>
                      <th style={{ display: "table-cell" }}>Order Code:</th>
                      <th
                        data-breakpoints="md"
                        style={{ display: "table-cell" }}
                      >
                        Num. of Products
                      </th>
                      <th
                        data-breakpoints="md"
                        style={{ display: "table-cell" }}
                      >
                        Customer
                      </th>
                      <th
                        data-breakpoints="md"
                        style={{ display: "table-cell" }}
                      >
                        Seller
                      </th>
                      <th
                        data-breakpoints="md"
                        style={{ display: "table-cell" }}
                      >
                        Amount
                      </th>
                      <th
                        data-breakpoints="md"
                        style={{ display: "table-cell" }}
                      >
                        Delivery Status
                      </th>
                      <th
                        data-breakpoints="md"
                        style={{ display: "table-cell" }}
                      >
                        Payment method
                      </th>
                      <th
                        data-breakpoints="md"
                        style={{ display: "table-cell" }}
                      >
                        Payment Status
                      </th>
                      <th style={{ display: "table-cell" }}>Refund</th>
                      <th
                        className="text-right"
                        width="15%"
                        style={{ display: "table-cell" }}
                      >
                        Options
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="footable-empty">
                      <td colSpan={11}>Nothing found</td>
                    </tr>
                  </tbody>
                </table>
                <div className="aiz-pagination"></div>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>
    </>
  );
}
export default PickUpPointOrder;
