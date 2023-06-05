import { Link } from "react-router-dom";

function BlogCategories() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3 " id="bg_categories">All Blog Categories</h1>
              </div>
              <div className="col-md-6 text-md-right">
                <Link to="create" className="btn btn-primary add_categories">
                  <span className="text_categories">Add New category</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header d-block d-md-flex">
              <h5 className="mb-0 h6">Blog Categories</h5>
              <form className id="sort_categories" action method="GET">
                <div className="box-inline pad-rgt pull-left">
                  <div className style={{ minWidth: 200 }}>
                    <input type="text" className="form-control" id="search" name="search" placeholder="Type name & Enter" />
                  </div>
                </div>
              </form>
            </div>
            <div className="card-body">
              <table className="table aiz-table mb-0 footable footable-1 breakpoint-lg">
                <thead>
                  <tr className="footable-header">
                    <th width="5%" style={{ display: 'table-cell' }}>#</th>
                    <th style={{ display: 'table-cell' }}>Name</th>
                    <th width="10%" className="text-right" style={{ display: 'table-cell' }}>Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="footable-empty"><td colSpan={3}>Nothing found</td></tr></tbody>
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
export default BlogCategories;