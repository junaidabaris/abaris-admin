

function ClubPointConfiguration() {
    return (
        <>
        <div className="aiz-main-content">
  <div className="px-15px px-lg-25px">
    <div className="row">
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Convert Point To Wallet</h5>
          </div>
          <div className="card-body">
            <form className="form-horizontal" action="https://mmslfashions.in/admin/club-point-convert-rate/store" method="POST">
              <input type="hidden" name="_token" defaultValue="LwRZQCacDzn2aZFv5jfGWojC2QylIvk4UKQlK1tT" />                        <input type="hidden" name="type" defaultValue="club_point_convert_rate" />
              <div className="form-group row">
                <div className="col-lg-4">
                  <label className="col-from-label">Set Point For ZK1.00</label>
                </div>
                <div className="col-lg-5">
                  <input type="number" min={0} step="0.01" className="form-control" name="value" defaultValue={10} placeholder={100} required fdprocessedid="z97e4q" />
                </div>
                <div className="col-lg-3">
                  <label className="col-from-label">Points</label>
                </div>
              </div>
              <div className="form-group mb-3 text-right">
                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="m3ae2r">Save</button>
              </div>
            </form>
            <i className="fs-12"><b>Note: You need to activate wallet option first before using club point addon.</b></i>
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
export default ClubPointConfiguration