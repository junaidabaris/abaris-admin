function FlashDeals() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Flash deals</h5>
                    <div className="pull-right clearfix">
                        <form className id="sort_flash_deals" action method="GET">
                            <div className="box-inline pad-rgt pull-left">
                                <div className style={{ minWidth: 200 }}>
                                    <input type="text" className="form-control" id="search" name="search" placeholder="Type name & Enter" fdprocessedid="y5oro" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                        <thead>
                            <tr className="footable-header">
                                <th data-breakpoints="lg" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Title</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Banner</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Start Date</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>End Date</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Status</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Featured</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Page Link</th><th className="text-right" style={{ display: 'table-cell' }}>Options</th></tr>
                        </thead>
                        <tbody>
                            <tr className="footable-empty"><td colSpan={9}>Nothing found</td></tr></tbody>
                    </table>
                    <div className="clearfix">
                        <div className="pull-right">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FlashDeals;