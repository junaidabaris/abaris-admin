import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { useAddNewLanguageMutation, useGetLanguagesQuery } from "../all-products/allproductsApi/allProductsApi";

function AddNewLanguage() {
    const [inputval, setInputVal] = useState({ code: '', app_lang_code: '' });

    const { data } = useGetLanguagesQuery();
    const [addNewLanguage, response] = useAddNewLanguageMutation();

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    };

    const addNewLanguageData = (e) => {
        e.preventDefault();
        addNewLanguage(inputval)
        console.log(inputval)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Language added Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('!Language not added')
    }


    console.log(response)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Language Information</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" id="create-course-form" onSubmit={addNewLanguageData}>
                                        <input type="hidden" name="_token" defaultValue="OlhMycqXuIcjZ16H1v7gFG49f12SloCusJTFh8sM" />
                                        <div className="form-group row">
                                            <div className="col-lg-3">
                                                <label className="col-from-label">Name</label>
                                            </div>
                                            <div className="col-lg-9">
                                                <input type="text" className="form-control" name="name" placeholder="Name" required fdprocessedid="ev1co6" onChange={onChangeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-3">
                                                <label className="col-from-label">Code</label>
                                            </div>
                                            <div className="col-lg-9">
                                                <div >
                                                    <select className="form-select" aria-label="Default select example" name="code" onChange={onChangeHandler}>
                                                        {data && data.map((item, i) => {
                                                            return <option value={item._id} key={item._id}>{item.code}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-3">
                                                <label className="control-label">Flutter App Lang Code</label>
                                                {/* <code>
                                                    <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">Links for ISO 639-1 codes</a>
                                                </code> */}
                                            </div>
                                            <div className="col-lg-9">
                                                <input type="text" className="form-control" name="app_lang_code" placeholder="Put ISO 639-1 code for your language" required fdprocessedid="e9v45f" onChange={onChangeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="rqkmdv">Save</button>
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
export default AddNewLanguage;