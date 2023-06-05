import { Link } from "react-router-dom";

function AllPost() {
  return (
    <>
      <div className="aiz-main-content" style={{ backgroundColor:"#F2F3F8",marginTop:"0px"}}>
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-auto">
                <h1 className="h3">All Posts</h1>
              </div>
              <div className="col text-right">
                <Link to="create" className="btn btn-circle btn-info">
                  <span>Add New Post</span>
                </Link>
              </div>
            </div>
          </div>
          <br />
          <div className="card">
            <form className id="sort_blogs" action method="GET">
              <div className="card-header row gutters-5">
                <div className="col text-center text-md-left">
                  <h5 className="mb-md-0 h6">All blog posts</h5>
                </div>
                <div className="col-md-2">
                  <div className="form-group mb-0">
                    <input type="text" className="form-control form-control-sm" id="search" name="search" placeholder="Type & Enter" />
                  </div>
                </div>
              </div>
            </form>
            <div className="card-body">
              <table className="table mb-0 aiz-table footable footable-1 breakpoint breakpoint-lg" style={{}}>
                <thead>
                  <tr className="footable-header">
                    <th style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Title</th><th data-breakpoints="lg" style={{ display: 'none' }}>Category</th><th data-breakpoints="lg" style={{ display: 'none' }}>Short Description</th><th data-breakpoints="lg" style={{ display: 'none' }}>Status</th><th className="text-right" style={{ display: 'table-cell' }}>Options</th></tr>
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
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>

    </>
  )
}
export default AllPost;