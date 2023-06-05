
import { Link, useNavigate } from "react-router-dom";

function AllWholsaleProductsPage() {

    // const navigate = useNavigate();

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <h1 className="h3">All Wholesale Products</h1>
                            </div>
                            <div className="col text-right">
                                <Link to="/admin/wholesale-product/create" className="btn btn-circle btn-info">
                                    <span>Add New Wholesale Product</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <form className id="sort_products" action method="GET">
                            <div className="card-header row gutters-5">
                                <div className="col">
                                    <h5 className="mb-md-0 h6">All Wholesale Product</h5>
                                </div>
                                <div className="dropdown mb-2 mb-md-0">
                                    {/* <select className="form-select" aria-label="Default select example">
                                        <option selected>Bulk Action</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select> */}
                                    <button className="btn border dropdown-toggle" type="button" data-toggle="dropdown" fdprocessedid="5bpb9r" aria-expanded="false">
                                        Bulk Action
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right" style={{}}>
                                        <a className="dropdown-item" href="#" onclick="bulk_delete()"> Delete selection</a>
                                    </div>
                                </div>
                                <div className="col-md-2 ml-auto">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Demo Seller</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>

                                    {/* <div className="dropdown bootstrap-select form-control form-control-sm aiz- mb-2 mb-md-0">
                                        <select className="form-control form-control-sm aiz-selectpicker mb-2 mb-md-0" id="user_id" name="user_id" onchange="sort_products()" tabIndex={-98}>
                                            <option value>All Sellers</option>
                                            <option value={3}>Abaris Products (Abaris Seller)</option>
                                        </select>
                                        <button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="user_id" title="All Sellers" fdprocessedid="2cercc">
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">All Sellers</div>
                                                </div>
                                            </div>
                                        </button>
                                        <div className="dropdown-menu" style={{ overflow: 'hidden' }}>
                                            <div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1} aria-activedescendant="bs-select-1-0" style={{ overflowY: 'auto' }}>
                                                <ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}>
                                                    <li className="selected active">
                                                        <a role="option" className="dropdown-item active selected" id="bs-select-1-0" tabIndex={0} aria-setsize={2} aria-posinset={1} aria-selected="true"><span className="text">All Sellers</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a role="option" className="dropdown-item" id="bs-select-1-1" tabIndex={0}><span className="text">Abaris Products (Abaris Seller)</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="col-md-2 ml-auto">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Sort By</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                    {/* <div className="dropdown bootstrap-select form-control form-control-sm aiz- mb-2 mb-md-0"><select className="form-control form-control-sm aiz-selectpicker mb-2 mb-md-0" name="type" id="type" onchange="sort_products()" tabIndex={-98}>
                                        <option value>Sort by</option>
                                        <option value="rating,desc">Rating (High &gt; Low)</option>
                                        <option value="rating,asc">Rating (Low &gt; High)</option>
                                        <option value="num_of_sale,desc">Num of Sale (High &gt; Low)</option>
                                        <option value="num_of_sale,asc">Num of Sale (Low &gt; High)</option>
                                        <option value="unit_price,desc">Base Price (High &gt; Low)</option>
                                        <option value="unit_price,asc">Base Price (Low &gt; High)</option>
                                    </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" data-id="type" title="Sort by" fdprocessedid="ikxw9d"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Sort by</div></div> </div></button><div className="dropdown-menu" style={{ maxHeight: 196, overflow: 'hidden' }}><div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1} aria-activedescendant="bs-select-2-0" style={{ maxHeight: 180, overflowY: 'auto' }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-2-0" tabIndex={0} aria-setsize={7} aria-posinset={1} aria-selected="true"><span className="text">Sort by</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-1" tabIndex={0} aria-setsize={7} aria-posinset={2}><span className="text">Rating (High &gt; Low)</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-2" tabIndex={0} aria-setsize={7} aria-posinset={3}><span className="text">Rating (Low &gt; High)</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-3" tabIndex={0} aria-setsize={7} aria-posinset={4}><span className="text">Num of Sale (High &gt; Low)</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-4" tabIndex={0} aria-setsize={7} aria-posinset={5}><span className="text">Num of Sale (Low &gt; High)</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-5" tabIndex={0}><span className="text">Base Price (High &gt; Low)</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-6" tabIndex={0}><span className="text">Base Price (Low &gt; High)</span></a></li></ul></div></div>
                                    </div> */}
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group mb-0">
                                        <input type="text" className="form-control form-control-sm" id="search" name="search" placeholder="Search" fdprocessedid="93y0ed" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                    <thead>
                                        <tr className="footable-header">
                                            {/*<th data-breakpoints="lg">#</th>*/}
                                            <th className="footable-first-visible" style={{ display: 'table-cell' }}>
                                                <div className="form-group">
                                                    <div className="aiz-checkbox-inline">
                                                        <label className="aiz-checkbox">
                                                            <input type="checkbox" className="check-all" />
                                                            <span className="aiz-square-check" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </th>
                                            <th style={{ display: 'table-cell' }}>Name</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Added By</th>
                                            <th data-breakpoints="sm" style={{ display: 'table-cell' }}>Info</th>
                                            <th data-breakpoints="md" style={{ display: 'table-cell' }}>Total Stock</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Todays Deal</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Published</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Featured</th>
                                            <th data-breakpoints="sm" className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {/*<td>1</td>*/}
                                            <td className="footable-first-visible" style={{ display: 'table-cell' }}>
                                                <div className="form-group d-inline-block">
                                                    <label className="aiz-checkbox">
                                                        <input type="checkbox" className="check-one" name="id[]" defaultValue={74} />
                                                        <span className="aiz-square-check" />
                                                    </label>
                                                </div>
                                            </td>
                                            <td style={{ display: 'table-cell' }}>
                                                <div className="row gutters-5 w-200px w-md-300px mw-100">
                                                    <div className="col-auto">
                                                        <img src="https://mmslfashions.in/public/assets/img/placeholder.jpg" alt="Image" className="size-50px img-fit" />
                                                    </div>
                                                    <div className="col">
                                                        <span className="text-muted text-truncate-2">test11</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{ display: 'table-cell' }}>superadmin</td>
                                            <td style={{ display: 'table-cell' }}>
                                                <strong>Num of Sale:</strong> 0 Times <br />
                                                <strong>Base Price:</strong> ZK120.00 <br />
                                                <strong>Rating:</strong> 0 <br />
                                            </td>
                                            <td style={{ display: 'table-cell' }}>
                                                100
                                            </td>
                                            <td style={{ display: 'table-cell' }}>
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input onchange="update_todays_deal(this)" defaultValue={74} type="checkbox" defaultChecked />
                                                    <span className="slider round" />
                                                </label>
                                            </td>
                                            <td style={{ display: 'table-cell' }}>
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input onchange="update_published(this)" defaultValue={74} type="checkbox" defaultChecked />
                                                    <span className="slider round" />
                                                </label>
                                            </td>
                                            <td style={{ display: 'table-cell' }}>
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input onchange="update_featured(this)" defaultValue={74} type="checkbox" />
                                                    <span className="slider round" />
                                                </label>
                                            </td>
                                            <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                <Link to="#" className="btn btn-soft-success btn-icon btn-circle btn-sm" target="_blank" title="View">
                                                    <i className="las la-eye" />
                                                </Link>
                                                <Link to="#" className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                    <i className="las la-edit" />
                                                </Link>
                                                {/* <Link to="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="#" title="Delete">
                                                    <i className="las la-trash" />
                                                </Link> */}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="aiz-pagination">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>

        </>
    )
}
export default AllWholsaleProductsPage;