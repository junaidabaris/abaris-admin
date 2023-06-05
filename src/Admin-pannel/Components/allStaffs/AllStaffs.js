import { Link } from "react-router-dom";

import fertilizer from "../../../assets/img/product-detail/fertilizer-application-bg1.jpg"
import fertilizer2 from "../../../assets/img/product-detail/fertilizer-application-bg2.jpg"
function AllStaffs({ data }) {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">{data.title}</h1>
              </div>
              <div className="col-md-6 text-md-right">
                <Link to={data.path} className="btn btn-circle btn-info">
                  <span>{data.addEmploy}</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">{data.heading}</h5>
            </div>
            <div className="card-body">
              <table className="table aiz-table footable footable-1 breakpoint-lg" style={{}}>
                <thead>
                  <tr className="footable-header">
                    <th width="10%" style={{ display: 'table-cell' }}>ID</th>
                    <th width="30%" style={{ display: 'table-cell' }}>Avatar</th>
                    <th style={{ display: 'table-cell' }}>Name</th>
                    <th width="10%" style={{ display: 'table-cell' }}>Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="footable-empty footableIcon ">
                    <td >1</td>
                    <td >
                      <img src={fertilizer} className="ferti" />
                    </td>
                    <td >John</td>
                    <td >#</td>
                  </tr>
                  <tr className="footable-empty footableIcon ">
                    <td >2</td>
                    <td ><img src={fertilizer2} className="ferti" /></td>
                    <td >Mike</td>
                    <td >#</td>
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

    </>
  )
}
export default AllStaffs;