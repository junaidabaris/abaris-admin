
function StaffInformation() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Staff Information</h5>
                </div>
                <form className="form-horizontal" action="https://mmslfashions.in/admin/staffs" method="POST" encType="multipart/form-data">
                  <input type="hidden" name="_token" defaultValue="S0f7vDDtqJ5NbxPupX86gbiFGZumqx0Q8PyryILc" />                <div className="card-body">
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label" htmlFor="name">Name</label>
                      <div className="col-sm-9">
                        <input type="text" placeholder="Name" id="name" name="name" className="form-control" required />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label" htmlFor="email">Email</label>
                      <div className="col-sm-9">
                        <input type="text" placeholder="Email" id="email" name="email" className="form-control" required />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label" htmlFor="mobile">Phone</label>
                      <div className="col-sm-9">
                        <input type="text" placeholder="Phone" id="mobile" name="mobile" className="form-control" required />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label" htmlFor="password">Password</label>
                      <div className="col-sm-9">
                        <input type="password" placeholder="Password" id="password" name="password" className="form-control" required />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label" htmlFor="name">Role</label>
                      <div className="col-sm-9">
                        <div className="dropdown bootstrap-select form-control aiz-"><select name="role_id" required className="form-control aiz-selectpicker" tabIndex={-98}>
                        </select><button type="button" className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Nothing selected"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Nothing selected</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button type="submit" className="btn btn-sm btn-primary">Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
      </div>

    </>
  )
}
export default StaffInformation;