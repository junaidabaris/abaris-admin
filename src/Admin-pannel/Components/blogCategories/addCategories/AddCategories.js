import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { useAddBlogCategoryMutation } from "../../all-products/allproductsApi/allProductsApi";

function AddCategories() {

  const [inputval, setInputval] = useState({
    name: '',
  });

  const onChangeHandler = (e) => {
    const inpName = e.target.name;
    const inpval = e.target.value;
    const clonedObj = { ...inputval };
    clonedObj[inpName] = inpval;
    setInputval(clonedObj)
  };

  const [AddBlogCat, response] = useAddBlogCategoryMutation();

  const addBlogCategoryData = (e) => {
    e.preventDefault();
    AddBlogCat(inputval)
    console.log(inputval)
    document.getElementById("create-course-form").reset();
  };

  const toastSuccessMessage = () => {
    toast.success("BlogsCategory added Successfully", {
      position: "top-center"
    })
  };

  if (response.isSuccess === true) {
    toastSuccessMessage()
  };
  if (response.isError === true) {
    alert('!Error BlogsCategory not added')
  };


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

                  <form className="form-horizontal" id="create-course-form" onSubmit={addBlogCategoryData}>
                    <input type="hidden" name="_token" defaultValue="rRBTDvBDDxDPFQUsYxC4w0Y2kUjP3Ojr7STfSH1l" />
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Name</label>
                      <div className="col-md-9">
                        <input type="text" placeholder="Name" id="category_name" name="name" className="form-control" required onChange={onChangeHandler} />
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
        <ToastContainer />
      </div>

    </>
  )
}
export default AddCategories;