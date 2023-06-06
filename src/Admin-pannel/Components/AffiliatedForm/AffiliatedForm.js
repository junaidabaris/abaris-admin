
function AffiliateForm() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 h6">Affiliate Registration Form</h5>
              </div>
              <div className="card-body">
                <form action="https://mmslfashions.in/admin/affiliate/configs/store" method="post" encType="multipart/form-data">
                  <input type="hidden" name="_token" defaultValue="Gg4ztVuENA5SRVWobfiTqHZoeE8KcHxjx34dmZDw" />
                  <div className="row">
                    <div className="col-lg-8 form-horizontal" id="form">
                      <div className="form-group row" style={{ background: 'rgba(0,0,0,0.1)', padding: '10px 0' }}>
                        <input type="hidden" name="type[]" defaultValue="text" />
                        <div className="col-lg-3">
                          <label className="control-label">Text</label>
                        </div>
                        <div className="col-lg-7">
                          <input className="form-control" type="text" name="label[]" defaultValue="Your name" placeholder="Label" fdprocessedid="van8ic" />
                        </div>
                        <div className="col-lg-2"><span className="btn btn-icon btn-circle" onclick="delete_choice_clearfix(this)"><i className="las la-times" /></span></div>
                      </div>
                      <div className="form-group row" style={{ background: 'rgba(0,0,0,0.1)', padding: '10px 0' }}>
                        <input type="hidden" name="type[]" defaultValue="text" />
                        <div className="col-lg-3">
                          <label className="control-label">Text</label>
                        </div>
                        <div className="col-lg-7">
                          <input className="form-control" type="text" name="label[]" defaultValue="Email" placeholder="Label" fdprocessedid="c50cy" />
                        </div>
                        <div className="col-lg-2"><span className="btn btn-icon btn-circle" onclick="delete_choice_clearfix(this)"><i className="las la-times" /></span></div>
                      </div>
                      <div className="form-group row" style={{ background: 'rgba(0,0,0,0.1)', padding: '10px 0' }}>
                        <input type="hidden" name="type[]" defaultValue="text" />
                        <div className="col-lg-3">
                          <label className="control-label">Text</label>
                        </div>
                        <div className="col-lg-7">
                          <input className="form-control" type="text" name="label[]" defaultValue="Full Address" placeholder="Label" fdprocessedid="3kv2vt" />
                        </div>
                        <div className="col-lg-2"><span className="btn btn-icon btn-circle" onclick="delete_choice_clearfix(this)"><i className="las la-times" /></span></div>
                      </div>
                      <div className="form-group row" style={{ background: 'rgba(0,0,0,0.1)', padding: '10px 0' }}>
                        <input type="hidden" name="type[]" defaultValue="text" />
                        <div className="col-lg-3">
                          <label className="control-label">Text</label>
                        </div>
                        <div className="col-lg-7">
                          <input className="form-control" type="text" name="label[]" defaultValue="Phone Number" placeholder="Label" fdprocessedid="yoocur" />
                        </div>
                        <div className="col-lg-2"><span className="btn btn-icon btn-circle" onclick="delete_choice_clearfix(this)"><i className="las la-times" /></span></div>
                      </div>
                      <div className="form-group row" style={{ background: 'rgba(0,0,0,0.1)', padding: '10px 0' }}>
                        <input type="hidden" name="type[]" defaultValue="text" />
                        <div className="col-lg-3">
                          <label className="control-label">Text</label>
                        </div>
                        <div className="col-lg-7">
                          <input className="form-control" type="text" name="label[]" defaultValue="How will you affiliate?" placeholder="Label" fdprocessedid="41b0ey" />
                        </div>
                        <div className="col-lg-2"><span className="btn btn-icon btn-circle" onclick="delete_choice_clearfix(this)"><i className="las la-times" /></span></div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <ul className="list-group">
                        <li className="list-group-item btn" style={{ textAlign: 'left' }} onclick="appenddToForm('text')">Text Input</li>
                        <li className="list-group-item btn" style={{ textAlign: 'left' }} onclick="appenddToForm('select')">Select</li>
                        <li className="list-group-item btn" style={{ textAlign: 'left' }} onclick="appenddToForm('multi-select')">Multiple Select</li>
                        <li className="list-group-item btn" style={{ textAlign: 'left' }} onclick="appenddToForm('radio')">Radio</li>
                        <li className="list-group-item btn" style={{ textAlign: 'left' }} onclick="appenddToForm('file')">File</li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-group mb-0 text-right">
                    <button type="submit" className="btn btn-primary" fdprocessedid="7xd65k">Save</button>
                  </div>
                </form>
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
export default AffiliateForm