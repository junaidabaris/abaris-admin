import { Link } from "react-router-dom"

function SellerPackage () {
    return (
        <>
        <div className="aiz-main-content">
  <div className="px-15px px-lg-25px">
    <div className="aiz-titlebar mt-2 mb-3">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="h3">All Seller Packages</h1>
        </div>
        <div className="col-md-6 text-md-right">
          <Link to="/admin/seller_packages/create" className="btn btn-circle btn-info">
            <span>Add New Package</span>
          </Link>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card">
          <div className="card-body text-center">
            <img alt="Package Logo " src="https://mmslfashions.in/public/uploads/all/z1CNIkuY8rhgQFW7r8RvWWA0akrBbMCTOPgaKzja.png" className="mw-100 mx-auto mb-4 Package-3" height="150px" />
            <p className="mb-3 h6 fw-600">Silver</p>
            <p className="h4">ZK500.00</p>
            <p className="fs-15">Product Upload Limit:
              <b className="text-bold">10</b>
            </p>
            <p className="fs-15">Package Duration:
              <b className="text-bold">90 Days</b>
            </p>
            <div className="mar-top">
              <Link to="/admin/seller_packages/edit" className="btn btn-sm btn-info mr-1">Edit</Link>
              <a href="#" data-href="https://mmslfashions.in/admin/seller_packages/destroy/4" className="btn btn-sm btn-danger confirm-delete">Delete</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card">
          <div className="card-body text-center">
            <img alt="Package Logo " src="https://mmslfashions.in/public/uploads/all/qWtVvdVrkexRR41VVaNV6W7yzjMGUVrD3HqfnYNA.png" className="mw-100 mx-auto mb-4 Package-2" height="150px" />
            <p className="mb-3 h6 fw-600">Gold</p>
            <p className="h4">ZK1,000.00</p>
            <p className="fs-15">Product Upload Limit:
              <b className="text-bold">30</b>
            </p>
            <p className="fs-15">Package Duration:
              <b className="text-bold">180 Days</b>
            </p>
            <div className="mar-top">
              <Link to="/admin/seller_packages/edit" className="btn btn-sm btn-info mr-1">Edit</Link>
              <a href="#" data-href="https://mmslfashions.in/admin/seller_packages/destroy/5" className="btn btn-sm btn-danger confirm-delete">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
    {/*p class="mb-0">&copy;  v6.3.3</p*/}
  </div>
</div>

        </>
    )
}
export default SellerPackage