
function RefundRequest({ data }) {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">

          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">{data.title}</h5>
            </div>
            <div className="card-body">
              <table className="table aiz-table footable footable-1 breakpoint breakpoint-lg" style={{}}>
                <thead>
                  <tr className="footable-header">
                    <th style={{ display: 'table-cell' }}>#</th>
                    <th style={{ display: 'table-cell' }}>Order Code:</th>
                    <th data-breakpoints="lg" style={{ display: 'none' }}>Seller Name</th>
                    <th data-breakpoints="lg" style={{ display: 'none' }}>Product</th>
                    <th data-breakpoints="lg" style={{ display: 'none' }}>Price</th>
                    <th data-breakpoints="lg" style={{ display: 'none' }}>Seller Approval</th>
                    <th style={{ display: 'table-cell' }}>{data.status}</th>
                    <th data-breakpoints="lg" width="15%" className="text-right" style={{ display: 'none' }}>Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="footable-empty"><td colSpan={3}>Nothing found</td></tr></tbody>
              </table>
              <div className="clearfix">
                <div className="pull-right">
                </div>
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
export default RefundRequest;