function AffiliateConfiguration() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h6 className="mb-0 h6">Basic Affiliate</h6>
                </div>
                <div className="card-body">
                  <form
                    className="form-horizontal"
                    action="https://mmslfashions.in/admin/affiliate/affiliate_option_store"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="G4bUXBNF3wIuVAGVelAixJHRc1jUI9aDURGaNALg"
                    />{" "}
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="type"
                        defaultValue="user_registration_first_purchase"
                      />
                      <div className="col-lg-4">
                        <label className="control-label">
                          User Registration &amp; First Purchase
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          max={100}
                          className="form-control"
                          name="percentage"
                          defaultValue={20}
                          placeholder="Percentage of Order Amount"
                          required
                          fdprocessedid="k81gnb"
                        />
                      </div>
                      <div className="col-lg-2">
                        <label className="control-label">%</label>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-4">
                        <label className="control-label">Status</label>
                      </div>
                      <div className="col-lg-8">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            defaultValue={1}
                            name="status"
                            type="checkbox"
                            defaultChecked
                          />
                          <span className="slider round" />
                        </label>
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        fdprocessedid="6fh7eo"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="mb-0 h6">Product Sharing Affiliate</h3>
                </div>
                <div className="card-body">
                  <form
                    action="https://mmslfashions.in/admin/affiliate/affiliate_option_store"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="G4bUXBNF3wIuVAGVelAixJHRc1jUI9aDURGaNALg"
                    />{" "}
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="type"
                        defaultValue="product_sharing"
                      />
                      <label className="col-lg-3 col-from-label">
                        Product Sharing and Purchasing
                      </label>
                      <div className="col-lg-6">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          max={100}
                          className="form-control"
                          name="amount"
                          defaultValue
                          placeholder="Percentage of Order Amount"
                          required
                          fdprocessedid="c1mx8"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="amount_type"
                            tabIndex={-98}
                          >
                            <option value="amount">$</option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-1"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="5tcx9b"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-1"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-4">
                        <label className="control-label">Status</label>
                      </div>
                      <div className="col-lg-8">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            defaultValue={1}
                            name="status"
                            type="checkbox"
                            defaultChecked
                          />
                          <span className="slider round" />
                        </label>
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        fdprocessedid="x08ay"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="mb-0 h6">
                    Product Sharing Affiliate (Category Wise)
                  </h3>
                </div>
                <div className="card-body">
                  <form
                    className="form-horizontal"
                    action="https://mmslfashions.in/admin/affiliate/affiliate_option_store"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="G4bUXBNF3wIuVAGVelAixJHRc1jUI9aDURGaNALg"
                    />{" "}
                    <div className="form-group row">
                      <div className="col-lg-4">
                        <label className="control-label">Status</label>
                      </div>
                      <div className="col-lg-8">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            defaultValue={1}
                            name="status"
                            type="checkbox"
                            defaultChecked
                          />
                          <span className="slider round" />
                        </label>
                      </div>
                    </div>
                    <input
                      type="hidden"
                      name="type"
                      defaultValue="category_wise_affiliate"
                    />
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_1"
                          defaultValue={1}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Fertilizer"
                          readOnly
                          fdprocessedid="ruq1sb"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_1"
                          defaultValue={0}
                          fdprocessedid="oex06f"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_1"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-2"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="8mzbih"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-2"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_2"
                          defaultValue={2}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Specialty Fertilizer"
                          readOnly
                          fdprocessedid="paoj7j"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_2"
                          defaultValue={0}
                          fdprocessedid="uesgjo"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_2"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-3"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="2xps9a"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-3"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_3"
                          defaultValue={3}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Agro Chemicals"
                          readOnly
                          fdprocessedid="t2x6c5"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_3"
                          defaultValue={0}
                          fdprocessedid="qf5vc"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_3"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-4"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="6in0ut"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-4"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_4"
                          defaultValue={4}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Tools & Equipments"
                          readOnly
                          fdprocessedid="qvszk"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_4"
                          defaultValue={0}
                          fdprocessedid="oikrbpe"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_4"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-5"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="vnx2c"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-5"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_5"
                          defaultValue={5}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Seeds"
                          readOnly
                          fdprocessedid="kxh8xb"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_5"
                          defaultValue={0}
                          fdprocessedid="inyp0a"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_5"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-6"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="peumq4"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-6"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_6"
                          defaultValue={6}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Polymer Polyolefin"
                          readOnly
                          fdprocessedid="m9gvb"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_6"
                          defaultValue={0}
                          fdprocessedid="2pa0hj"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_6"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-7"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="kf7nas"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-7"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_7"
                          defaultValue={7}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Insecticide"
                          readOnly
                          fdprocessedid="hctdj1h"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_7"
                          defaultValue={0}
                          fdprocessedid="kplmpg"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_7"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-8"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="izwc6l"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-8"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_8"
                          defaultValue={8}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Straight Fertilizer"
                          readOnly
                          fdprocessedid="zmqv4"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_8"
                          defaultValue={0}
                          fdprocessedid="kh9uw8"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_8"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-9"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="h8xmsk"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-9"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}<select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_9"
                          defaultValue={9}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Foliar Fertilizer"
                          readOnly
                          fdprocessedid="n8xene"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_9"
                          defaultValue={0}
                          fdprocessedid="098f3g"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_9"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-10"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="jkppcd"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-10"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_10"
                          defaultValue={10}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Water Soluble Fertilizer"
                          readOnly
                          fdprocessedid="est5g8"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_10"
                          defaultValue={0}
                          fdprocessedid="x288z"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_10"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-11"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="mz3sls"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-11"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_11"
                          defaultValue={11}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Blended Fartilizer"
                          readOnly
                          fdprocessedid="96be5"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_11"
                          defaultValue={0}
                          fdprocessedid="6fkpa9"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_11"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-12"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="kn2g2f"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-12"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_12"
                          defaultValue={12}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Enhanced Granular Blends"
                          readOnly
                          fdprocessedid="66lx9"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_12"
                          defaultValue={0}
                          fdprocessedid="mgwmqze"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_12"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-13"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="63wpff"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-13"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_13"
                          defaultValue={13}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Herbicide"
                          readOnly
                          fdprocessedid="4cxklm"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_13"
                          defaultValue={0}
                          fdprocessedid="9a5v1"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_13"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-14"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="md59q5"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-14"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_14"
                          defaultValue={14}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Animal DIP"
                          readOnly
                          fdprocessedid="66eku"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_14"
                          defaultValue={0}
                          fdprocessedid="6j69u"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_14"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-15"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="m1uzz"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-15"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_15"
                          defaultValue={15}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Fumigant"
                          readOnly
                          fdprocessedid="j1fprd"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_15"
                          defaultValue={0}
                          fdprocessedid="5iowa4"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_15"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-16"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="h763r5"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-16"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_16"
                          defaultValue={16}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Fungicide"
                          readOnly
                          fdprocessedid="9onose"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_16"
                          defaultValue={0}
                          fdprocessedid="zu4bi"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_16"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-17"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="sgmxco"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-17"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_17"
                          defaultValue={17}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Nematode"
                          readOnly
                          fdprocessedid="9h40hb"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_17"
                          defaultValue={0}
                          fdprocessedid="jb2e0g"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_17"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-18"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="je2gj7"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-18"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_18"
                          defaultValue={18}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Plant Regulator"
                          readOnly
                          fdprocessedid="az3sue"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_18"
                          defaultValue={0}
                          fdprocessedid="1go3ir"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_18"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-19"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="jxb1y9"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-19"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}

<select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_19"
                          defaultValue={19}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Inoculant"
                          readOnly
                          fdprocessedid="zhf3fe"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_19"
                          defaultValue={0}
                          fdprocessedid="to9bdf"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_19"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-20"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="irik1p"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-20"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_20"
                          defaultValue={20}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Maize Seed"
                          readOnly
                          fdprocessedid="1ofaon"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_20"
                          defaultValue={0}
                          fdprocessedid="wqvd9g"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_20"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-21"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="k9zly8"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-21"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_21"
                          defaultValue={21}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Vegetable Seed"
                          readOnly
                          fdprocessedid="ww3yil"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_21"
                          defaultValue={0}
                          fdprocessedid="pl308"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_21"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-22"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="8xmqz"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-22"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_22"
                          defaultValue={22}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Soybean Seeds"
                          readOnly
                          fdprocessedid="1axss"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_22"
                          defaultValue={0}
                          fdprocessedid="7kptd"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_22"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-23"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="rpj3jf"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-23"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_23"
                          defaultValue={23}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="EIHL Others"
                          readOnly
                          fdprocessedid="drs92p"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_23"
                          defaultValue={0}
                          fdprocessedid="yy7nf9"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_23"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-24"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="n90cxp"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-24"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-5">
                        <input
                          type="hidden"
                          name="categories_id_24"
                          defaultValue={24}
                        />
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Animal Feed"
                          readOnly
                          fdprocessedid="nlbme"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          className="form-control"
                          name="commison_amounts_24"
                          defaultValue={0}
                          fdprocessedid="yq3k8q"
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="commison_types_24"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              $
                            </option>
                            <option value="percent">%</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-25"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="$"
                            fdprocessedid="bn9obs"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  $
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-25"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                        <select className="form-select  form-control aiz-" aria-label="Default select example">
  <option selected>$</option>
  <option value="1">%</option>
</select>
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        fdprocessedid="x1d8me"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-gray-light">
                <div className="card-header">
                  <h5 className="mb-0 h6">
                    <i>
                      N:B: You can not enable Single Product Sharing Affiliate
                      and Category Wise Affiliate at a time.
                    </i>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-gray-light">
                <div className="card-header">
                  <h3 className="mb-0 h6">
                    Affiliate Link Validatin Time (Days)
                  </h3>
                </div>
                <div className="card-body">
                  <form
                    className="form-horizontal"
                    action="https://mmslfashions.in/admin/affiliate/configs/store"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="G4bUXBNF3wIuVAGVelAixJHRc1jUI9aDURGaNALg"
                    />{" "}
                    <div className="form-group row">
                      <div className="col-lg-4">
                        <input
                          type="hidden"
                          className="form-control"
                          name="type"
                          defaultValue="validation_time"
                        />
                        <label className="control-label">Validation Time</label>
                      </div>
                      <div className="col-lg-8">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="No of Days"
                            name="validation_time"
                            defaultValue
                            fdprocessedid="8ymtui"
                          />
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              Days
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        fdprocessedid="59jdlm"
                      >
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
  );
}
export default AffiliateConfiguration;
