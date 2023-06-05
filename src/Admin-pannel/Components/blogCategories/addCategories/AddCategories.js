
function AddCategories() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Blog Category Information</h5>
                </div>
                <div className="card-body">
                  <form className="form-horizontal" method="POST" action="https://mmslfashions.in/admin/blog-category">
                    <input type="hidden" name="_token" defaultValue="rRBTDvBDDxDPFQUsYxC4w0Y2kUjP3Ojr7STfSH1l" />                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Name</label>
                      <div className="col-md-9">
                        <input type="text" placeholder="Name" id="category_name" name="category_name" className="form-control" required />
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </form>
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
export default AddCategories;