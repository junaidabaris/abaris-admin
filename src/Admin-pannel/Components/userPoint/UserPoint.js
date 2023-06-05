import { Link } from "react-router-dom"

function UserPoints() {
    return (
        <>
       <div className="aiz-main-content">
  <div className="px-15px px-lg-25px">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
              <thead>
                <tr className="footable-header">
                  <th className="footable-first-visible" style={{display: 'table-cell'}}>#</th><th style={{display: 'table-cell'}}>Order Code:</th><th data-breakpoints="lg" style={{display: 'table-cell'}}>Customer Name</th><th style={{display: 'table-cell'}}>Points</th><th data-breakpoints="lg" style={{display: 'table-cell'}}>Convert Status</th><th data-breakpoints="lg" style={{display: 'table-cell'}}>Earned At</th><th className="text-right footable-last-visible" width="10%" style={{display: 'table-cell'}}>Options</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="footable-first-visible" style={{display: 'table-cell'}}>1</td><td style={{display: 'table-cell'}}>
                    20221214-12222337
                  </td><td style={{display: 'table-cell'}}>
                    Mr Abdul
                  </td><td style={{display: 'table-cell'}}>0</td><td style={{display: 'table-cell'}}>
                    <span className="badge badge-inline badge-info">Pending</span>
                  </td><td style={{display: 'table-cell'}}>2022-12-14 12:22:23</td><td className="text-right footable-last-visible" style={{display: 'table-cell'}}>
                    <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm" to="/admin/club-points/Details" title="View">
                      <i className="las la-eye" />
                    </Link>
                  </td></tr><tr>
                  <td className="footable-first-visible" style={{display: 'table-cell'}}>2</td><td style={{display: 'table-cell'}}>
                    20221209-06452846
                  </td><td style={{display: 'table-cell'}}>
                    Azharuddin Shamim
                  </td><td style={{display: 'table-cell'}}>0</td><td style={{display: 'table-cell'}}>
                    <span className="badge badge-inline badge-success">Converted</span>
                  </td><td style={{display: 'table-cell'}}>2022-12-09 06:47:17</td><td className="text-right footable-last-visible" style={{display: 'table-cell'}}>
                    <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm" to="/admin/club-points/Details" title="View">
                      <i className="las la-eye" />
                    </Link>
                  </td></tr><tr>
                  <td className="footable-first-visible" style={{display: 'table-cell'}}>3</td><td style={{display: 'table-cell'}}>
                    20221128-11185643
                  </td><td style={{display: 'table-cell'}}>
                    ETG Customer2
                  </td><td style={{display: 'table-cell'}}>0</td><td style={{display: 'table-cell'}}>
                    <span className="badge badge-inline badge-success">Converted</span>
                  </td><td style={{display: 'table-cell'}}>2022-11-28 11:18:56</td><td className="text-right footable-last-visible" style={{display: 'table-cell'}}>
                    <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm" to="/admin/club-points/Details" title="View">
                      <i className="las la-eye" />
                    </Link>
                  </td></tr></tbody>
            </table>
            <div className="aiz-pagination">
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
export default UserPoints