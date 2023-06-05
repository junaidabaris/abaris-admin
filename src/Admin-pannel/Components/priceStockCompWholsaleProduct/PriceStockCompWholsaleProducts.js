function PriceStocCompkWholsaleProducts() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Product price + stock</h5>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Unit price <span className="text-danger">*</span></label>
                        <div className="col-md-6">
                            <input type="number" lang="en" min={0} defaultValue={0} step="0.01" placeholder="Unit price" name="unit_price" className="form-control" required fdprocessedid="jjt0ap" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">
                            Set Point
                        </label>
                        <div className="col-md-6">
                            <input type="number" lang="en" min={0} defaultValue={0} step={1} placeholder={1} name="earn_point" className="form-control" fdprocessedid="i4cfrb" />
                        </div>
                    </div>
                    <div>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Quantity <span className="text-danger">*</span></label>
                            <div className="col-md-6">
                                <input type="number" lang="en" min={0} defaultValue={0} step={1} placeholder="Quantity" name="current_stock" className="form-control" required fdprocessedid="f90buo" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">
                                SKU
                            </label>
                            <div className="col-md-6">
                                <input type="text" placeholder="SKU" name="sku" className="form-control" fdprocessedid="jlbx79" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">
                            Wholesale Prices
                        </label>
                        <div className="col-md-6">
                            <div className="qunatity-price">
                                <div className="row gutters-5">
                                    <div className="col-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Min QTY" name="wholesale_min_qty[]" required fdprocessedid="qotckq" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Max QTY" name="wholesale_max_qty[]" required fdprocessedid="h58k6x" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Price per piece" name="wholesale_price[]" required fdprocessedid="sw6gj4" />
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="wypyj">
                                            <i className="las la-times" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn btn-soft-secondary btn-sm" data-toggle="add-more" data-content="<div class=&quot;row gutters-5&quot;>
                                  <div class=&quot;col-3&quot;>
                                      <div class=&quot;form-group&quot;>
                                          <input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Min QTY&quot; name=&quot;wholesale_min_qty[]&quot; required>
                                      </div>
                                  </div>
                                  <div class=&quot;col-3&quot;>
                                      <div class=&quot;form-group&quot;>
                                          <input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Max QTY&quot; name=&quot;wholesale_max_qty[]&quot; required>
                                      </div>
                                  </div>
                                  <div class=&quot;col&quot;>
                                      <div class=&quot;form-group&quot;>
                                          <input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Price per piece&quot; name=&quot;wholesale_price[]&quot; required>
                                      </div>
                                  </div>
                                  <div class=&quot;col-auto&quot;>
                                      <button type=&quot;button&quot; class=&quot;mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger&quot; data-toggle=&quot;remove-parent&quot; data-parent=&quot;.row&quot;>
                                          <i class=&quot;las la-times&quot;></i>
                                      </button>
                                  </div>
                              </div>" data-target=".qunatity-price" fdprocessedid="422mc">
                                Add More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default PriceStocCompkWholsaleProducts;