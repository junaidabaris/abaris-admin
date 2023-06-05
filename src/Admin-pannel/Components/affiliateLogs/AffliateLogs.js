
function AffiliateLogs() {
    return (
        <>
        <div className="aiz-main-content">
  <div className="px-15px px-lg-25px">
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0 h6">Affiliate Logs</h5>
      </div>
      <div className="card-body">
        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
          <thead>
            <tr className="footable-header">
              <th style={{display: 'table-cell'}}>#</th><th data-breakpoints="lg" style={{display: 'table-cell'}}>Referred By</th><th style={{display: 'table-cell'}}>Referral User</th><th style={{display: 'table-cell'}}>Amount</th><th data-breakpoints="lg" style={{display: 'table-cell'}}>Order Id</th><th data-breakpoints="lg" style={{display: 'table-cell'}}>Referral Type</th><th data-breakpoints="lg" style={{display: 'table-cell'}}>Product</th><th data-breakpoints="lg" style={{display: 'table-cell'}}>Date</th></tr></thead>
          <tbody>
            <tr className="footable-empty"><td colSpan={8}>Nothing found</td></tr></tbody>
        </table>
        <div className="aiz-pagination">
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
export default AffiliateLogs