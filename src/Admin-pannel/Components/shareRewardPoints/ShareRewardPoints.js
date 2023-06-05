
function ShareRewardPoints({data}) {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">

            <div className="col-lg-8">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">{data.title}</h5>
                </div>
                <div className="card-body">
                  <form className="form-horizontal" action="https://mmslfashions.in/admin/set-club-points-for-all_products/store" method="POST">
                    <input type="hidden" name="_token" defaultValue="zOLI6djQgPLRjb1g5xZX9s8SLgoSf4ceCRw6vO88" />                      <div className="form-group row">
                      <div className="col-lg-4">
                        <label className="col-from-label">{data.facebook}</label>
                      </div>
                      <div className="col-lg-6">
                        <input type="number" className="form-control" name="point" defaultValue={10} required />
                      </div>
                      <div className="col-lg-2">
                        <label className="col-from-label">Points</label>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-4">
                        <label className="col-from-label">{data.twitter}</label>
                      </div>
                      <div className="col-lg-6">
                        <input type="number" className="form-control" name="point" defaultValue={10} required />
                      </div>
                      <div className="col-lg-2">
                        <label className="col-from-label">Points</label>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-4">
                        <label className="col-from-label">{data.linkedin}</label>
                      </div>
                      <div className="col-lg-6">
                        <input type="number" className="form-control" name="point" defaultValue={10} required />
                      </div>
                      <div className="col-lg-2">
                        <label className="col-from-label">Points</label>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-4">
                        <label className="col-from-label">{data.instagram}</label>
                      </div>
                      <div className="col-lg-6">
                        <input type="number" className="form-control" name="point" defaultValue={10} required />
                      </div>
                      <div className="col-lg-2">
                        <label className="col-from-label">Points</label>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-4">
                        <label className="col-from-label">{data.youtube}</label>
                      </div>
                      <div className="col-lg-6">
                        <input type="number" className="form-control" name="point" defaultValue={10} required />
                      </div>
                      <div className="col-lg-2">
                        <label className="col-from-label">Points</label>
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button type="button" className="btn btn-sm btn-primary">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
      </div>
    </>
  )
}
export default ShareRewardPoints;