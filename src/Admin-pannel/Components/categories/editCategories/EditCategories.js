import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../all-products/allproductsApi/allProductsApi';
function EditCategories() {
  const [editData, setEditData] = useState(null)
  const [inputval, setInputVal] = useState({
    name: "",
    parent_category: "",
    ordering_number: "",
    type: "",
    banner: "",
    icon: "",
    meta_title: "",
    meta_description: "",
    commision_rate: "",
    filtering_attribute: "",

  });

  const onChangeHandler = (e) => {
    const inpName = e.target.name;
    const inpVal = e.target.value;
    const clonedObj = { ...inputval }
    clonedObj[inpName] = inpVal
    // setInputVal(clonedObj)
  };

  const submitEditCategoryData = () => {
    // console.log(inputval)
    document.getElementById("create-course-form").reset();
  }

  const params = useParams()
  const { data } = useGetCategoriesQuery()
  // console.log(params.id)
  // console.log(data)

  const filterCategory = () => {
    const filteredData = data && data.filter((item) => {
      if (item._id === params.id) {
        return true
      }
    })
    setEditData(filteredData)
    // console.log(filteredData)
  }
  // console.log(editData[0].name)

  useEffect(() => {
    filterCategory();
  }, [params.id])

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Category Information</h5>
                </div>
                <div className="card-body">

                  <form className="form-horizontal" id="create-course-form">
                    <input type="hidden" name="_token" defaultValue="JX7Efxc0fWnjgSTDtnGEP5Yd23Vk7icCfLqqxizf" />

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Name</label>
                      <div className="col-md-9">
                        <input type="text" placeholder={'name'} id="name" name="name" className="form-control" required onChange={onChangeHandler} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Parent Category</label>
                      <div className="col-md-9">
                        <Form.Select aria-label="Default select example" className='form-control' name='parent_category' onChange={onChangeHandler}>
                          <option>Open this select menu</option>
                          <option value="1">-- Straight Fertilizer</option>
                          <option value="2">Specialty Fertilizer</option>
                          <option value="3">-- Foliar Fertilizer</option>
                          <option value="4">-- Water Soluble Fertilizer</option>
                          <option value="5">-- Blended Fartilizer</option>
                          <option value="6">-- Enhanced Granular Blends</option>
                        </Form.Select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">
                        Ordering Number
                      </label>
                      <div className="col-md-9">
                        <input type="number" name="ordering_number" className="form-control" id="order_level" placeholder="Order Level" onChange={onChangeHandler} />
                        <small>Higher number has high priority</small>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Type</label>
                      <div className="col-md-9">
                        <Form.Select aria-label="Default select example" className='form-control' name='type' onChange={onChangeHandler}>
                          <option value={0}>Physical</option>
                          <option value={1}>Digital</option>
                        </Form.Select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Banner <small>(200x200)</small></label>
                      <div className="col-md-9">
                        <div className="input-group" data-type="image">
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                          </div>
                          <div className="form-control file-amount">
                            <input type="file" name="banner" className="selected-files" onChange={onChangeHandler} />
                          </div>
                        </div>
                        <div className="file-preview box sm">
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Icon <small>(32x32)</small></label>
                      <div className="col-md-9">
                        <div className="input-group" data-toggle="aizuploader" data-type="image">
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                          </div>
                          <div className="form-control file-amount">
                            <input type="file" name="icon" className="selected-files" onChange={onChangeHandler} />
                          </div>
                        </div>
                        <div className="file-preview box sm">
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Meta Title</label>
                      <div className="col-md-9">
                        <input type="text" className="form-control" name="meta_title" placeholder="Meta Title" onChange={onChangeHandler} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Meta description</label>
                      <div className="col-md-9">
                        <textarea name="meta_description" rows={5} className="form-control" defaultValue={""} onChange={onChangeHandler} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Commission Rate</label>
                      <div className="col-md-9 input-group">
                        <input type="number" lang="en" min={0} step="0.01" placeholder="Commission Rate" id="commision_rate" name="commision_rate" className="form-control" onChange={onChangeHandler} />
                        <div className="input-group-append">
                          <span className="input-group-text">%</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Filtering Attributes</label>
                      <div className="col-md-9">

                        <Form.Select aria-label="Default select example" className='form-control' name='filtering_attribute' onChange={onChangeHandler}>
                          <option>Fertilizer</option>
                          <option value="1">-- Straight Fertilizer</option>
                          <option value="2">Specialty Fertilizer</option>
                          <option value="3">-- Foliar Fertilizer</option>
                          <option value="4">-- Water Soluble Fertilizer</option>
                          <option value="5">-- Blended Fartilizer</option>
                          <option value="6">-- Enhanced Granular Blends</option>
                        </Form.Select>
                      </div>
                    </div>

                    <div className="form-group mb-0 text-right">
                      <button type="button" onClick={submitEditCategoryData} className="btn btn-primary">Save</button>
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
export default EditCategories