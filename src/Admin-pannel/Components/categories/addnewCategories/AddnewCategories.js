import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';
import { useAddNewCategoryMutation, useGetCategoriesQuery } from '../../all-products/allproductsApi/allProductsApi';


function AddnewCategories() {
  const [inputval, setInputVal] = useState({ name: '', parent_id: '', order_level: '', type: '', banner: '', icon: '', meta_title: '', meta_description: '', commision_rate: '', filtering_attributes: '', });

  const { data } = useGetCategoriesQuery();
  const [addCategory, response] = useAddNewCategoryMutation();

  const onChangeHandler = (e) => {
    const inpName = e.target.name;
    const inpVal = e.target.value;
    const clonedObj = { ...inputval };
    clonedObj[inpName] = inpVal;
    setInputVal(clonedObj)
  };

  const addNewCategory = (e) => {
    e.preventDefault();
    addCategory(inputval);
    document.getElementById("create-course-form").reset();
    console.log(inputval)
  };


  const toastSuccessMessage = () => {
    toast.success("Category added Successfully", {
      position: "top-center"
    })
  };

  console.log(response)

  if (response.isSuccess === true) {
    toastSuccessMessage()
  };
  if (response.isError === true) {
    alert('!Category not added')
  };

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
                  <form className="form-horizontal" encType="multipart/form-data" id="create-course-form" onSubmit={addNewCategory}>
                    <input type="hidden" name="_token" defaultValue="JX7Efxc0fWnjgSTDtnGEP5Yd23Vk7icCfLqqxizf" />

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Name</label>
                      <div className="col-md-9">
                        <input type="text" placeholder="Name" id="name" name="name" className="form-control" onChange={onChangeHandler} required />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Parent Category</label>

                      <div className="col-md-9">
                        <select className="form-select" name='parent_id' onChange={onChangeHandler} required>
                          {data && data.map((item, i) => {
                            return <option key={item._id} value={item._id}>{item.name}</option>
                          })}
                        </select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">
                        Ordering Number
                      </label>
                      <div className="col-md-9">
                        <input type="number" name="order_level" className="form-control" id="order_level" placeholder="Order Level" onChange={onChangeHandler} required />
                        <small>Higher number has high priority</small>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Type</label>
                      <div className="col-md-9">
                        <div>
                          <select className="form-select form-control aiz-selectpicker mb-2 mb-md-0" aria-label="Default select example" name='type' onChange={onChangeHandler} required>
                            <option value={0}>Physical</option>
                            <option value={1}>Digital</option>
                          </select>
                        </div>
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
                            {/* Choose File */}
                            <input type="file" name="banner" className="selected-files" onChange={onChangeHandler} required />
                          </div>
                        </div>
                        <div className="file-preview box sm">
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Icon <small>(32x32)</small></label>
                      <div className="col-md-9">
                        <div className="input-group" data-type="image">
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                          </div>
                          <div className="form-control file-amount">
                            <input type="file" name="icon" className="selected-files" onChange={onChangeHandler} required />
                          </div>
                        </div>
                        <div className="file-preview box sm">
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Meta Title</label>
                      <div className="col-md-9">
                        <input type="text" className="form-control" name="meta_title" placeholder="Meta Title" onChange={onChangeHandler} required />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Meta description</label>
                      <div className="col-md-9">
                        <textarea name="meta_description" rows={5} className="form-control" onChange={onChangeHandler} required />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Commission Rate</label>
                      <div className="col-md-9 input-group">
                        <input type="number" lang="en" min={0} step="0.01" placeholder="Commission Rate" id="commision_rate" name="commision_rate" className="form-control" onChange={onChangeHandler} required />
                        <div className="input-group-append">
                          <span className="input-group-text">%</span>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Filtering Attributes</label>
                      <div className="col-md-9">
                        <Form.Select aria-label="Default select example" name='filtering_attributes' className='form-control' onChange={onChangeHandler} required>
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </div>
                    </div>

                    <div className="form-group mb-0 text-right">
                      <button type="submit" className="btn btn-primary">Save</button>
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
      <ToastContainer />
    </>
  )
}
export default AddnewCategories