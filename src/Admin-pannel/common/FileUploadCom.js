import axios from "axios";
import { useState } from "react";

const FileUploadCom = ({ url }) => {

    const [file, setFile] = useState(null);

    const handleFile = (event) => {
        setFile(event.target.files[0])
    }
    const handleUpload = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('product', file);
        console.log(formData?.get('product'))
        try {
            const res = await axios.post(url, formData);
            alert('Bulk Import Successfully')
        } catch (error) {
            alert('Bulk Import Failed.')
        }
    };


    return (
        <form className="form-horizontal" onSubmit={handleUpload} encType="multipart/form-data">
            <div className="form-group row">
                <div className="col-sm-9">
                    <div className="custom-file">
                        <label className="custom-file-label">
                            <input type="file" name="file" className="selected-files" required onChange={handleFile} />
                            {/* <span className="custom-file-name">Choose File</span> */}
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-group mb-0">
                <button type="submit" className="btn btn-info">Upload CSV</button>
            </div>
        </form>
    )
}
export default FileUploadCom;