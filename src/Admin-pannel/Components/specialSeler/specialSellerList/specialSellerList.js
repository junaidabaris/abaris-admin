import axios from "axios"
import { useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { base_Url } from "../../../../server"
import { useEffect } from "react"
import { GrView } from 'react-icons/gr'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Multiselect from "multiselect-react-dropdown"
import { AiOutlineDownload } from "react-icons/ai"
import html2pdf from 'html2pdf.js';
import { useGetDistrictQuery, useGetDivitionQuery } from "../../all-products/allproductsApi/allProductsApi"
import ImgShowModal from "../ImgShowModal"
import { Button, Form } from "react-bootstrap"
import { ToastContainer, toast } from "react-toastify"
import { FcApproval, FcApprove, FcDisapprove } from "react-icons/fc"
import { MdPending } from "react-icons/md"
import { VscFilePdf } from "react-icons/vsc"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import ModalSelected from "./ModalSelected"
import { Pagination } from "antd"
// import Pagination from 'react-bootstrap/Pagination';
function SpecialSellerList() {
    const [count, setCount] = useState(20);
    const [showExcelTable, setShowExcelTable] = useState(false);
    const token = window.localStorage.getItem('token')

    const [listSeller, setListSeller] = useState(null)
    const [statusList, setStatusList] = useState(null)
    const [categoryy, setCategoryy] = useState(null)
    const [pageIndex, setPageIndex] = useState(0)
    // console.log(statusList);

    const [searchList, setSearchList] = useState({
        start_date: null,
        end_date: null,
        firstname: null,
        lastname: null,
        email: null,
        mobile: null,
        application: null,
        udid: null,
        adharnumber: null,
        status: null,
        minDOB: null,
        maxDOB: null,
        category: null,
        state: null,
        severe_disability: null,
        Division: null,
        District: null,
        disability: null,
        minAge: null,
        maxAge: null,
        page: 0,
        count: 5
    })
    const { data: divisionData } = useGetDivitionQuery(token);
    const [finalCatD2, setFinalCatD2] = useState();
    const [finalCatD3, setFinalCatD3] = useState();
    const [spinn, setspinn] = useState();
    const [districtData, setdistrictData] = useState();
    const getDistrictDivsion = async () => {
        try {
            const res = await axios.post(`${base_Url}district/division`, { Division: finalCatD2 }, {
                withCredentials: true,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setdistrictData(res.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        if (finalCatD2?.length) {
            getDistrictDivsion()
        }
    }, [finalCatD2])

    const handleChangeSearch = (e) => {
        const clone = { ...searchList }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setSearchList(clone)

    }
    const [categ, setCateg] = useState([
        { name: 'null', id: 0 },
        { name: 'Below 10k', id: 1 },
        { name: '10k to 1 lakhs', id: 2 },
        { name: '1 lakhs to 2.5 lakhs', id: 3 },
        { name: '2.5 lakhs and more', id: 4 },
    ]);
    const [finalCatD, setFinalCatD] = useState();

    const statusSelect = async () => {
        try {
            const res = await axios.get(`${base_Url}specialSeller/statusList`, {
                withCredentials: true,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setStatusList(res?.data.status)
        } catch (error) {

        }
    }
    const [apedFilter, setapedFilter] = useState(false)
    const postSearchList = async () => {
        setapedFilter(true)
        setspinn(true)
        const clone = {
            ...searchList, income: finalCatD, disability: +searchList.disability, Division: finalCatD2, District: finalCatD3, page: pageIndex,
            count: 10
        }
        try {
            const res = await axios.post(`${base_Url}specialSeller/filter`, clone, {
                withCredentials: true,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setListSeller(res.data)
            if (res.data?.status == 500) {
                alert(res.data.message)
            }
            setspinn(false)

        } catch (error) {
            setspinn(false)
        }
    }

    const getSpecialSeller = async (str) => {
        setspinn(true)
        setapedFilter(false)
        // setPageIndex(pageIndex + 1)
        try {
            const res = await axios.get(`${base_Url}specialSeller/page/${str}&10`, {
                withCredentials: true,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setListSeller(res?.data)
            setspinn(false)
        } catch (error) {
            setspinn(false)
        }
    };

    const changeLoad = () => {
        setCount(count + 50)
    }

    const getCategory = async () => {
        try {
            const res = await axios.get(`${base_Url}category/admin/child/${25}`, {
                withCredentials: true,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setCategoryy(res?.data);
        } catch (error) {

        }
    }
    const handleDelete = async (id) => {
        const res = await axios.delete(`${base_Url}specialSeller/delete_seller/${id}`, {
            withCredentials: true,
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        getSpecialSeller()
    }
    const params = useParams()
    useEffect(() => {
        if (!params?.id) {
            getSpecialSeller(0)
        }
        statusSelect()
        getCategory()
    }, [])
    const handleDownloadClick1 = async (url, imagname, forceDownload = false) => {
        if (!forceDownload) {
            const link = document.createElement("a")
            link.href = url
            link.download = imagname
            document.body.appendChild(link)
            link.click()
            document.removeChild(link)
        }
        const imagblob = await fetch(url)
            .then((response) => response.arrayBuffer())
            .then((buffer) => new Blob([buffer], { type: 'image/png' }))
        console.log(imagblob, URL.createObjectURL(imagblob));

        const link = document.createElement("a")
        link.href = URL.createObjectURL(imagblob)
        link.download = imagname
        document.body.appendChild(link)
        link.click()
        document.removeChild(link)
    };

    useEffect(() => {
        if (params?.id) {
            setSearchList({ ...searchList, status: params.id })
            const getParam = async () => {
                setapedFilter(true)
                setspinn(true)
                const clone = { ...searchList, income: finalCatD, disability: +searchList.disability, Division: finalCatD2, District: finalCatD3, status: params.id }
                try {
                    const res = await axios.post(`${base_Url}specialSeller/filter`, clone, {
                        withCredentials: true,
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    setListSeller(res.data)
                    if (res.data?.status == 500) {
                        alert(res.data.message)
                    }
                    setspinn(false)

                } catch (error) {
                    setspinn(false)
                }
            }
            getParam()
        }
    }, [params?.id])
    const [modalShow, setModalShow] = useState(false);
    const [imgurl, setimgurl] = useState(null)
    const [imghead, imgimghead] = useState(null)
    const openModal = (url, str) => {
        if (!url) {
            return
        }
        setModalShow(true)
        setimgurl(url)
        imgimghead(str)
    }

    const [filterState, setfilterState] = useState({ sellers: [], status: '', comment: 'No Comments' })
    const seperatechanger = (e) => {
        const clone = { ...filterState }
        clone[e.target.name] = e.target.value
        setfilterState(clone)
    }

    const changeBulkSelect = async (id) => {
        const clone = { ...filterState }
        const arrCat = [...clone.sellers]
        let flag = false
        let indexflag = false
        let index;
        // debugger
        if (arrCat.length == 0) {
            arrCat.push(id)
            clone.sellers = arrCat
            setfilterState(clone)
        } else {
            for (let i = 0; i <= arrCat.length; i++) {
                if (arrCat[i] == id) {
                    flag = true
                    indexflag = true
                    index = i
                }
            }
            if (indexflag) {
                arrCat.splice(index, 1)
                clone.sellers = arrCat
                setfilterState(clone)
                index = undefined
                return
            }
            if (!flag) {
                arrCat.push(id)
                clone.sellers = arrCat
                setfilterState(clone)
            }
        }
    }


    const toastSuccessMessage = () => {
        toast.success("Status Update Successfully", {
            position: "top-center"
        })
    };


    const toastErrorMessage = () => {
        toast.error("Statue not Update", {
            position: "top-center"
        })
    };
    const [modalShow3, setModalShow3] = useState(false);
    const sendBulksStatus = async () => {
        // setModalShow3(true)
        setspinn(true)
        try {
            const res = await axios.post(`${base_Url}specialSeller/multiStatus`, filterState, {
                withCredentials: true,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setspinn(false)
            getSpecialSeller()
            toastSuccessMessage()
        } catch (error) {
            toastErrorMessage()
            setspinn(false)
        }
    }

    const statusChangeOnPage = async (id, ite) => {
        setspinn(true)
        try {
            const res = await axios.post(`${base_Url}specialSeller/status`, { seller_id: ite, status: id }, {
                withCredentials: true,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setspinn(false)
            getSpecialSeller()
            toastSuccessMessage()
        } catch (error) {
            toastErrorMessage()
            setspinn(false)
        }
    }

    const [pdfPrinting, setPdfprinting] = useState()
    const printNow = async () => {
        const capchare = document.querySelector('.table-to-pdf')
        html2canvas(capchare).then((canvas) => {
            const image = canvas.toDataURL('img/png')
            const doc = new jsPDF('p', 'mm', 'a4')
            const compowith = doc.internal.pageSize.getWidth()
            const compohigth = doc.internal.pageSize.getHeight()
            doc.addImage(image, 'PNG', 0, 0, compowith, compohigth)
            doc.save('MSHFDC.pdf')
        })
    }

    const [loader, setLoader] = useState(false)
    const handleGenerateExcel = async (item) => {
        setLoader(true)
        setPdfprinting(item)
        setTimeout(() => {
            printNow()
            setLoader(false)
        }, 1000);
    };



    const [pdfData, setPdfData] = useState(null)



    const [imgPhoto, setImgPhoto] = useState('')
    const [imgSign, setImgSign] = useState('')


    const func111 = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();

            reader.onloadend = function () {
                // console.log(reader.result);
                setImgPhoto(reader.result.toString())

            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }
    const func222 = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();

            reader.onloadend = function () {
                // console.log(reader.result);
                setImgSign(reader.result.toString())

            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }

    const managePdfData = (item) => {
        setLoader(true)

        func111(item?.seller?.userPhoto?.url)
        func222(item?.seller?.signPhoto?.url)
        // userphoto
        // toDataURL(item?.seller?.signPhoto?.url)
        // toDataURL(item?.seller?.userPhoto?.url)

        setPdfData(item)

        setTimeout(() => {
            setLoader(false)
        }, 6000);
        handleConvertToPdf()
    }


    const pdfContainerRef = useRef();


    const handleConvertToPdf = async () => {

        const pdfContainer = pdfContainerRef.current;

        // Ensure the PDF container is not empty
        if (pdfContainer) {

            // Configuration for html2pdf
            const options = {
                margin: 10,
                filename: 'generated-pdf.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            };




            // // Generate PDF from HTML content
            html2pdf(pdfContainer, options).outputPdf().then(async (outputData) => {
                // debugger
                // // Convert the Uint8Array to a Blob
                // const pdfBlob = new Blob([outputData], { type: 'application/pdf' });

                // // Read the Blob as ArrayBuffer
                // const arrayBuffer = await pdfBlob.arrayBuffer();

                // // Convert ArrayBuffer to Uint8Array
                // const uint8Array = new Uint8Array(arrayBuffer);

                // // Send the PDF data to the API

                // const file = new File([outputData])


            });

        }
    };

    const [counts, setcounts] = useState(1)
    const getPaginationD = (pageNo) => {
        setcounts(pageNo)
        setPageIndex(pageNo)
        getSpecialSeller(pageNo)
    }

    const getPaginationDExtra = (str) => {
        setcounts(str)
        if (str === 'next') {
            getSpecialSeller(pageIndex + 1)
            setPageIndex(pageIndex + 1)
        } else {
            if (pageIndex == 0) {
                return
            }
            getSpecialSeller(pageIndex - 1)
            setPageIndex(pageIndex - 1)
        }
    }

    const [pagesCount, setPagesCount] = useState()

    const getPages = async () => {
        try {
            const res = await axios.get(`${base_Url}specialSeller/totalPage/${10}`, {
                withCredentials: true,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            const da = []
            // for (let i = 1; i < res.data.page; i++) {
            //     da.push(i)
            // }
            const roundedValue = Math.round(res.data.page);
            setPagesCount(roundedValue)
        } catch (error) {

        }
    }
    useEffect(() => {

        getPages()
    }, [])

    const onChangeVal = (e) => {
        console.log(e);
        getSpecialSeller(e - 1)
        setPageIndex(e - 1)
    }
    return (
        <>
            {loader && <div className="preloaderCount">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            <ToastContainer />
            {modalShow && <ImgShowModal show={modalShow}
                onHide={() => setModalShow(false)} imgurl={imgurl} imghead={imghead} />}

            {modalShow3 && <ModalSelected show={modalShow3}
                onHide={() => setModalShow3(false)} data={[]} />}
            <div className="aiz-main-content">

                {spinn && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}

                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <h1 className="h2">Beneficiary List </h1>
                                <h3 className="h6">Self-Employment To Divyangjan Through Various Businesses on Environmentally Friendly E-Vehicles / E-Cart
                                    \ पर्यावरणपूरक ई-वाहने/ई-कार्टवर विविध व्यवसायांद्वारे दिव्यांगजनांना स्वयंरोजगार
                                </h3>
                            </div>
                            {/* <div className="col-md-6 text-md-right">
                                <Link to="/admin/roles/create" className="btn btn-circle btn-info">
                                    <span>Add New Role</span>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            {/* <h5 className="mb-0 h6">Special Seller List</h5> */}
                            {/* <div className="col-md-6 text-md-right">
                                <Link to="/admin/category-type/add" className="btn btn-circle btn-info">
                                    <span>Add Category</span>
                                </Link>
                            </div> */}
                        </div>
                        <div className="card-body">
                            <section className="form-section">
                                <div className="row">
                                    {/* <form action=""> */}
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Start Date</label>
                                            <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" name='start_date' value={searchList.start_date} onChange={handleChangeSearch} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">End Date</label>
                                            <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" name='end_date' value={searchList.end_date} onChange={handleChangeSearch} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">First Name</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" name='firstname' value={searchList.firstname} onChange={handleChangeSearch} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Last Name</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" name='lastname' value={searchList.lastname} onChange={handleChangeSearch} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Adhar Number</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Adhar Number" name='adharnumber' value={searchList.adharnumber} onChange={handleChangeSearch} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Email</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name='email' value={searchList.email} onChange={handleChangeSearch} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Mobile</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mobile" name='mobile' value={searchList.mobile} onChange={handleChangeSearch} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Application No</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Application No" name='application' value={searchList.application} onChange={handleChangeSearch} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">UDID Number</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="UDID Number" name='udid' value={searchList.udid} onChange={handleChangeSearch} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Minimum DOB</label>
                                            <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="UDID Number" name='minDOB' value={searchList.minDOB} onChange={handleChangeSearch} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Maximum DOB</label>
                                            <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="UDID Number" name='maxDOB' value={searchList.maxDOB} onChange={handleChangeSearch} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Category</label>
                                        <select className="form-select" aria-label="Default select example" name="categoryy" onChange={handleChangeSearch}>
                                            <option selected value={null}>Open this select menu</option>
                                            {categoryy && categoryy?.map((item, i) => {
                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Status</label>
                                        <select className="form-select" aria-label="Default select example" value={searchList.status} name="status" onChange={handleChangeSearch}>
                                            <option selected value={null}>Open this select menu</option>
                                            {statusList && statusList?.map((item, i) => {
                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Income</label>
                                        <Multiselect
                                            isObject={true}
                                            displayValue="name"
                                            options={categ}
                                            showCheckbox
                                            selectedValues={[]}
                                            onRemove={(selectedCat) => {
                                                const selectedIds = selectedCat.map((cat) => {
                                                    return cat.name
                                                })
                                                setFinalCatD(selectedIds)
                                            }}
                                            onSelect={(selectedCat) => {
                                                const selectedIds = selectedCat.map((cat) => {
                                                    return cat.name
                                                })
                                                setFinalCatD(selectedIds)
                                            }}
                                        />
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Disability</label>
                                            <input type="number" className="form-control" id="exampleInputEmail1" name='disability' value={searchList.disability} onChange={handleChangeSearch} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Severe Disability</label>
                                            <select className="form-select" aria-label="Default select example" name="severe_disability" value={searchList.severe_disability} onChange={handleChangeSearch}>
                                                <option selected value={null}>Open this select menu</option>
                                                <option value={true}>Yes</option>
                                                <option value={false}>No</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">In Maharashtra </label>
                                            <select className="form-select" aria-label="Default select example" name="state" onChange={handleChangeSearch}>
                                                <option selected value={null}>Open this select menu</option>
                                                <option value={1}>Permanent address state (in maharashtra)</option>
                                                <option value={2}>Residental address state (in maharashtra)</option>
                                                <option value={3}>Both (in maharashtra)</option>
                                                <option value={4}>None of them in maharashtra</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Division </label>
                                            <Multiselect
                                                isObject={true}
                                                displayValue="title"

                                                options={divisionData}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalCatD2(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalCatD2(selectedIds)
                                                }}
                                            />

                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">District</label>
                                            <Multiselect
                                                isObject={true}
                                                displayValue="title"

                                                options={districtData}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalCatD3(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalCatD3(selectedIds)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Minimum Age</label>
                                            <input type="number" placeholder="Enter number greater than 0" className="form-control" id="exampleInputEmail1" name='minAge' value={searchList.minAge} onChange={handleChangeSearch} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Maximum Age</label>
                                            <input type="number" placeholder="Enter number less than 100" className="form-control" id="exampleInputEmail1" name='maxAge' value={searchList.maxAge} onChange={handleChangeSearch} />
                                        </div>
                                    </div>

                                    <div className="col-lg-3 mt-3">
                                        <button type="button" className="btn btn-primary mr-3 mt-2" onClick={postSearchList}>Search</button>

                                    </div>
                                    {/* </form> */}
                                </div>
                            </section>

                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                {apedFilter && <button type="button" className="btn btn-primary mr-3 mt-2" onClick={() => { getSpecialSeller(0) }}>Reset List</button>}
                                <ReactHTMLTableToExcel
                                    id="test-table-xls-button"
                                    className="download-table-xls-button cusxel"
                                    table="table-to-xls"
                                    filename="tablexls"
                                    sheet="tablexls"
                                    buttonText="Export to Excel sheet" />
                            </div>

                            <div style={{ width: "700px", margin: "10px 0", display: 'flex' }}>
                                <input placeholder="Comment" disabled={filterState?.sellers?.length == 0} onChange={seperatechanger} name="comment" className="form-control" value={filterState?.comment} />
                                <select className="form-select" style={{ margin: "0 10px" }} disabled={filterState?.sellers?.length == 0} aria-label="Default select example" value={filterState.status} name="status" onChange={seperatechanger}>
                                    <option selected value={null}>Open this select menu</option>
                                    {statusList && statusList?.map((item, i) => {
                                        return <option value={item?._id} key={i}>{item?.name}</option>
                                    })}
                                </select>
                                <button style={{ width: "364px" }} type="button" className="btn btn-primary mr-3 mt-2" disabled={filterState?.sellers?.length == 0} onClick={sendBulksStatus}>Status Change</button>
                            </div>
                            <div style={{ fontSize: '20px' }}>
                                <span> <MdPending />:Pending</span>
                                <span style={{ margin: "0 15px" }}>  <FcApproval />:Approved</span>

                                <FcDisapprove />:Rejected
                            </div>





                            <div className="mainsel" style={{ overflow: "auto" }}>
                                <table className="table table-3" id="">
                                    <thead>
                                        <tr>
                                            <th className="table-secondary" scope="col">#</th>
                                            <th className="table-secondary" scope="col">#</th>
                                            <th className="table-secondary" scope="col">Status</th>
                                            <th className="table-secondary" scope="col">Registration No</th>
                                            <th className="table-secondary" scope="col">Registration Date</th>
                                            <th className="table-secondary" scope="col">First Name</th>
                                            <th className="table-secondary" scope="col">Last Name</th>
                                            <th className="table-secondary" scope="col">D O B</th>
                                            <th className="table-secondary" scope="col">Age</th>
                                            <th className="table-secondary" scope="col">Gender</th>
                                            <th className="table-secondary" scope="col">Phone No</th>
                                            <th className="table-secondary" scope="col">Email</th>
                                            <th className="table-secondary" scope="col">UDID No</th>
                                            <th className="table-secondary" scope="col">Disability</th>
                                            <th className="table-secondary" scope="col">Annual Income</th>
                                            <th className="table-secondary" scope="col">BPL/APL</th>
                                            <th className="table-secondary" scope="col">Resident Of</th>
                                            <th className="table-secondary" scope="col">Aadhar  Card</th>
                                            {/* <th className="table-secondary" scope="col">Blood Group</th> */}
                                            <th className="table-secondary" scope="col">Category </th>
                                            <th className="table-secondary" scope="col">Marital Status</th>
                                            {/* <th className="table-secondary" scope="col">Educational Details</th>
                                        <th className="table-secondary" scope="col">Resident of Maharashtralagate</th>
                                        <th className="table-secondary" scope="col">Types Of Disability</th>
                                        <th className="table-secondary" scope="col">Area of Disability</th> */}
                                            <th className="table-secondary" scope="col">Business Category</th>
                                            <th className="table-secondary" scope="col">UDID type</th>
                                            <th className="table-secondary" scope="col">Disability by birth ?</th>
                                            <th className="table-secondary" scope="col">identify Upload</th>
                                            <th className="table-secondary" scope="col">User Photo</th>
                                            <th className="table-secondary" scope="col">Sign Photo </th>
                                            <th className="table-secondary" scope="col">Identity Proof</th>
                                            <th className="table-secondary" scope="col">Address Proof</th>
                                            <th className="table-secondary" scope="col">Caste Certificate Proof</th>
                                            <th className="table-secondary" scope="col">Disability Certificate Proof</th>
                                            <th className="table-secondary" scope="col">UDID Proof </th>
                                            <th className="table-secondary" scope="col">Front Of Bank PassBook </th>
                                            <th className="table-secondary" scope="col">Affidavit </th>
                                            <th className="table-secondary" scope="col">Comment </th>
                                            <th className="table-secondary" scope="col">Status Change</th>
                                            <th className="table-secondary" scope="col" style={{ display: 'none' }}>Identity Proof</th>
                                            <th className="table-secondary" scope="col" style={{ display: 'none' }}>Affidavith</th>
                                            <th className="table-secondary" scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listSeller && listSeller?.map((item, i) => {
                                            // console.log('listSellerMOIN----', listSeller)
                                            return <tr key={item._id} className="table-to-xls">
                                                <td>{(pageIndex * 10) + i + 1}</td>
                                                <td className="bulkkk">
                                                    <Form.Check
                                                        onClick={() => { changeBulkSelect(item.seller._id) }}
                                                        type={'checkbox'}
                                                        id={`default-checkbox`}
                                                    />
                                                </td>
                                                {/* <td style={{ fontSize: '27px' }}>
                                                    {item?.status[0]?.name == 'Rejected' && <FcDisapprove />}
                                                    {item?.status[0]?.name == 'Pending' && <MdPending />}
                                                    {item?.status[0]?.name == 'Approved' && <FcApproval />}

                                                    {item?.status[0]?.name == 'Rejected' && <span style={{ border: '1px solid black', height: '15px', width: '15px', borderRadius: '100%', backgroundColor: 'red' }}>0</span>}
                                                    {item?.status[0]?.name == 'Pending' && <span style={{ border: '1px solid black', height: '15px', width: '15px', borderRadius: '100%', backgroundColor: 'yellow' }}>0</span>}
                                                    {item?.status[0]?.name == 'Approved' && <span style={{ border: '1px solid black', height: '15px', width: '15px', borderRadius: '100%', backgroundColor: 'green' }}>0</span>}
                                                </td> */}

                                                <td style={{ display: 'table-cell' }}>
                                                    {/* <span className="badge badge-inline badge-danger">{item.status}</span> */}
                                                    <span class="badge badge-inline badge-danger" style={{ color: "black", fontSize: '14px', fontWeight: 'bold', backgroundColor: item?.status[0]?.name === "Rejected" ? "red" : item?.status[0]?.name === 'Pending' ? 'yellow' : item?.status[0]?.name === 'Approved' ? 'green' : item?.status[0]?.name === 'Waiting' ? 'blue' : item?.status[0]?.name === 'Next Slot' ? 'purple' : '' }}>{item?.status[0]?.name}</span>
                                                </td>


                                                <td>{item?.seller?.applicationNo}</td>
                                                <td>{item?.seller?.applicationDate}</td>
                                                <td>{item?.seller?.bene_firstname}</td>
                                                <td>{item?.seller?.bene_lastname}</td>
                                                <td>{item?.seller?.dob}</td>
                                                <td>{item?.seller?.age}</td>
                                                <td>{item?.seller?.gender}</td>
                                                <td>{item?.seller?.mobile}</td>
                                                <td>{item?.seller?.email}</td>
                                                <td>{item?.seller?.udId_No}</td>
                                                <td>{item?.seller?.PerOfDis}%</td>
                                                <td>{item?.seller?.employmentDetail?.annualIncom}</td>
                                                <td>{item?.seller?.employmentDetail?.bpl}</td>
                                                <td>{item?.seller?.residentOf}</td>
                                                <td>{item?.seller?.adhaarCard}</td>

                                                {/* <td>{item?.seller?.bloodGroup}</td> */}
                                                <td>{item?.seller?.castCategory}</td>
                                                <td>{item?.seller?.maritalStatus}</td>
                                                <td>{item?.seller?.businessCategory?.name}</td>
                                                <td>{item?.seller?.udidType}</td>
                                                <td>{item?.seller?.disabltyByBirth ? "Yes" : 'No'}</td>
                                                <td>{item?.seller?.idProof}</td>
                                                <td id="image-container" onClick={() => openModal(item?.seller?.userPhoto?.url, 'User Photo ')}>
                                                    <img src={item?.seller?.userPhoto?.url} alt="" style={{ width: '40px' }} />
                                                </td>
                                                <td id="image-container2" onClick={() => openModal(item?.seller?.signPhoto?.url, 'Sign Photo')}>
                                                    <img src={item?.seller?.signPhoto?.url} alt="" style={{ width: '40px' }} />

                                                </td>
                                                <td id="image-container" onClick={() => openModal(item?.seller?.idProofFile?.url, 'Identity Proof')}>
                                                    {/* <img src={item?.seller?.idProofFile?.url} alt="" style={{ width: '40px' }} /> */}
                                                    <button type="button" onClick={() => openModal(item?.seller?.idProofFile?.url, 'Identity Proof')}>Show</button>
                                                </td>
                                                <td id="image-container" onClick={() => openModal(item?.seller?.addressProof[0]?.url, 'Address Proof')}>
                                                    {/* <img src={item?.seller?.addressProof[0].url} alt="" style={{ width: '40px' }} /> */}
                                                    <button type="button" onClick={() => openModal(item?.seller?.addressProof[0]?.url, 'Address Proof')}>Show</button>
                                                </td>
                                                <td id="image-container" onClick={() => openModal(item?.seller?.castCertificate?.url, 'Cast Certificate Proof')}>
                                                    {/* <img src={item?.seller?.castCertificate.url} alt="" style={{ width: '40px' }} /> */}
                                                    <button type="button" onClick={() => openModal(item?.seller?.castCertificate?.url, 'Cast Certificate Proof')}>Show</button>
                                                </td>
                                                {/* <td id="image-container" onClick={() => openModal(item?.seller?.castCertificate?.url, 'cast Certificate Proof')}>
                                                    <img src={item?.seller?.castCertificate.url} alt="" style={{ width: '40px' }} />
                                                </td> */}
                                                <td id="image-container2" onClick={() => openModal(item?.seller?.disabilityCertImage?.url, 'Disability Cert Image')}>
                                                    {/* <img src={item?.seller?.disabilityCertImage?.url} alt="" style={{ width: '40px' }} /> */}
                                                    <button type="button" onClick={() => openModal(item?.seller?.disabilityCertImage?.url, 'Disability Cert Image')}>Show</button>
                                                </td>
                                                <td id="image-container2" onClick={() => openModal(item?.seller?.udId_File?.url, 'UDID Proof')}>
                                                    {/* <img src={item?.seller?.udId_File?.url} alt="" style={{ width: '40px' }} /> */}
                                                    <button type="button" onClick={() => openModal(item?.seller?.udId_File?.url, 'UDID Proof')}>Show</button>
                                                </td>
                                                <td id="image-container2" onClick={() => openModal(item?.seller?.frontOfBankPassBook?.url, 'Front Of Bank PassBook')}>
                                                    {/* <img src={item?.seller?.frontOfBankPassBook?.url} alt="" style={{ width: '40px' }} /> */}
                                                    <button type="button" onClick={() => openModal(item?.seller?.frontOfBankPassBook?.url, 'Front Of Bank PassBook')}>Show</button>
                                                </td>
                                                <td id="image-container2" onClick={() => openModal(item?.seller?.affidavith?.url, 'Affidavith')}>
                                                    {/* <img src={item?.seller?.affidavith?.url} alt="" style={{ width: '40px' }} /> */}
                                                    <button type="button" onClick={() => openModal(item?.seller?.affidavith?.url, 'Affidavith')}>Show</button>
                                                </td>

                                                <td style={{ display: 'none' }}>{item?.seller?.idProofFile?.url}</td>
                                                <td style={{ display: 'none' }}>{item?.seller?.affidavith?.url}</td>
                                                <td >{item?.seller?.status[item?.seller?.status?.length - 1]?.comment}</td>
                                                <td>
                                                    <select className="form-select" style={{ width: "120px" }} aria-label="Default select example" value={item?.seller?.status[item?.seller?.status?.length - 1]?.status
                                                    } name="status" onChange={(e) => { statusChangeOnPage(e.target.value, item?.seller?._id) }}>
                                                        <option selected value={null}>Open this select menu</option>
                                                        {statusList && statusList?.map((item, i) => {
                                                            return <option value={item?._id} key={i}>{item?.name}</option>
                                                        })}
                                                    </select></td>
                                                <td className="d-flex">
                                                    <button onClick={() => { managePdfData(item) }} className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" type="button">
                                                        <VscFilePdf />
                                                    </button>
                                                    {/* <button onClick={() => { handleGenerateExcel(item) }} className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" type="button">
                                                        <VscFilePdf />
                                                    </button> */}

                                                    <button type="button" onClick={() => handleDelete(item?.seller?._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                                        <i className="las la-trash icon-icon">
                                                        </i>
                                                    </button>
                                                    <Link className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to={`/admin/special-seller/details/${item?.seller?._id}`}>
                                                        {/* <i className="las la-eye">
                                    </i> */}
                                                        <GrView />
                                                    </Link>
                                                </td>


                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>



                            {/* <div className="aiz-pagination">
                                <div style={{ display: "flex", justifyContent: "center", margin: '8px' }}>
                                    <button type="button" onClick={changeLoad} className="btn btn-info">load more...</button>
                                </div>
                            </div> */}
                            {/* <h3>{pageIndex}</h3> */}


                            {pagesCount && <Pagination onChange={onChangeVal} total={pagesCount} />}

                            {/* <div className="aiz-pagination">
                                <ul className="pagination" style={{justifyContent:"center"}}>
                                    <li className="page-item" style={{ cursor: "pointer" }} onClick={() => getPaginationDExtra('previous')}><a className="page-link">Previous</a></li>


                                    {pagesCount && pagesCount?.slice(0, 10).map((o) => {
                                        return <li style={{cursor:"pointer"}} className={`page-item ${pageIndex == o && 'active'}`} onClick={() => getPaginationD(o)}><a className="page-link">{o}</a></li>
                                    })}
                                   
                                    <li className="page-item" style={{ cursor: "pointer" }} onClick={() => getPaginationDExtra('next')}><a className="page-link">Next</a></li>
                                </ul>
                            </div> */}

                        </div>


                        {false && <div className="table-to-pdf">
                            <div className="headerpdf">
                                <div>
                                    {/* <div className="imgpdf">
                                        <img style={{ width: "170px" }}
                                            src='https://res.cloudinary.com/ddk7r5yth/image/upload/v1700134795/owbjkxwcukld63odusm8.jpg'
                                            alt="Login" className="img-fluid" />
                                    </div> */}
                                    <div className="d-flex" style={{ justifyContent: "center", borderBottom: "1px solid black" }}>
                                        <h5>Registration No : {pdfPrinting?.seller?.applicationNo}</h5>
                                        <h5 style={{ margin: "0 15px" }}>UDID No : {pdfPrinting?.seller?.udId_No}</h5>
                                        <h5>Status :{pdfPrinting?.status[0]?.name}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="bodypdf container">
                                <div className="row">
                                    <div className="col-6">First Name :</div>
                                    <div className="col-6">{pdfPrinting?.seller?.bene_firstname}</div>
                                    <div className="col-6">Last Name :</div>
                                    <div className="col-6">{pdfPrinting?.seller?.bene_lastname}</div>
                                    <div className="col-6">DOB :</div>
                                    <div className="col-6">{pdfPrinting?.seller?.dob}</div>
                                    <div className="col-6">Age :</div>
                                    <div className="col-6">{pdfPrinting?.seller?.declareAge}</div>
                                    <div className="col-6">Gender :</div>
                                    <div className="col-6">{pdfPrinting?.seller?.gender}</div>
                                    <div className="col-6">Phone No :</div>
                                    <div className="col-6">{pdfPrinting?.seller?.mobile}</div>
                                    <div className="col-6">Email :</div>
                                    <div className="col-6">{pdfPrinting?.seller?.email}</div>
                                    <div className="col-6">Registration Date :</div>
                                    <div className="col-6">{pdfPrinting?.seller?.applicationDate}</div>
                                    <div className="col-6">Blood Group :</div>
                                    <div className="col-6">{pdfPrinting?.seller?.bloodGroup}</div>
                                    <div className="col-6">Resident Of :</div>
                                    <div className="col-6">{pdfPrinting?.seller?.residentOf}</div>
                                    <div className="col-6">Disability :</div>
                                    <div className="col-6">{pdfPrinting?.seller?.PerOfDis}%</div>

                                    <div className="col-6">Category : </div>
                                    <div className="col-6">{pdfPrinting?.seller?.castCategory}</div>
                                    <div className="col-6">Marital Status :</div>
                                    <div className="col-6">{pdfPrinting?.seller?.maritalStatus}</div>
                                    <div className="col-6">BPL/APL :</div>
                                    <div className="col-6">{pdfPrinting?.seller?.employmentDetail?.bpl}</div>
                                    <div className="col-6">Annual Income :</div>
                                    <div className="col-6">{pdfPrinting?.seller?.employmentDetail?.annualIncom}</div>
                                </div>
                            </div>
                        </div>}











                        {pdfData && <div ref={pdfContainerRef} style={{ zIndex: "-2" }}>



                            <div className={`border border-primary border-primaryy-2`}>

                                <div className="col-md-12 text-center mt-2">
                                    <p className="fs-6 fw-bold">महाराष्ट्र राज्य दिव्यांग वित्त व विकास महामंडळ मर्या. मुंबई</p>
                                    <p className="fs-6 fw-bold">(ISO 9001 : 2008  Certified Organisation)</p>
                                    <span className="fs-6 fw-bold">
                                        Person with Disabilities Welfare Department, Government of Maharashtra
                                    </span>{" "}
                                    <br />
                                    <span>दिव्यांग कल्याण विभाग, महाराष्ट्र शासन </span>
                                </div>

                            </div>
                            {/* <hr className='border border-1 border-secondary' /> */}
                            <div className="border border-primary">
                                <div className="col-md-12 text-center mt-2">
                                    <span className="fs-6 ">
                                        Application form for Environmentally Friendly e-Vehicles/E-cart for Divyangjan to become self-reliant{" "}
                                    </span>{" "}
                                    <br />
                                    <span>दिव्यांग व्यक्तींना स्वावलंबी होण्याच्या दृष्टीने हरित उर्जेवर चालणाऱ्या पर्यावरण स्नेही फिरत्या वाहनावरील दुकान योजने
                                        अंतर्गत अर्ज करण्यासाठीचा  अर्ज</span>
                                </div>
                            </div>
                            <div className="container border border-primary" style={{ width: 800 }}>
                                <div className="col-md-12 mt-4">
                                    <h6>Personal Details/</h6>
                                    <hr className="border border-1 border-primary m-0 p-0" />
                                </div>
                                <div className="row m-0 p-0">
                                    <div className="col-md-10 mt-3 m-0 p-0">
                                        <ul style={{ display: "flex" }}>
                                            <li>
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Applicant Photo <sup>*</sup>
                                                </label>
                                                <div>

                                                    <img style={{ width: "200px", height: "200px" }} src={imgPhoto} />
                                                </div>
                                            </li>
                                            <li>
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Applicant Signature <sup>*</sup>
                                                </label>
                                                <div>

                                                    <img style={{ width: "200px", height: "60px" }} src={imgSign} />
                                                </div>
                                            </li>


                                        </ul>
                                        <ul type="disc " style={{ listStyle: "unset" }}>
                                            <li>
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Name of Applicant/अर्जदाराचे नाव <sup>*</sup>
                                                </label>
                                                <div>

                                                    <input
                                                        type="text"
                                                        placeholder="First Name"
                                                        className="pl-2"
                                                        value={pdfData?.seller?.bene_firstname}
                                                    />{" "}
                                                    <input
                                                        type="text"
                                                        className="pl-2"
                                                        placeholder="Middle Name"
                                                        value={pdfData?.seller?.bene_middlename}
                                                    />
                                                    <input
                                                        type="text"
                                                        className="pl-2"
                                                        placeholder="Last Name"
                                                        value={pdfData?.seller?.bene_lastname}
                                                    />
                                                </div>
                                            </li>

                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Mother’s Name/आईचे नाव  <sup>*</sup>
                                                </label>
                                                <div>

                                                    <input
                                                        type="text"
                                                        placeholder="First Name"
                                                        className="pl-2"
                                                        value={pdfData?.seller?.mother_firstname}
                                                    />{" "}
                                                    <input
                                                        type="text"
                                                        className="pl-2"
                                                        placeholder="Middle Name"
                                                        value={pdfData?.seller?.mother_middlename}
                                                    />
                                                    <input
                                                        type="text"
                                                        className="pl-2"
                                                        placeholder="Middle Name"
                                                        value={pdfData?.seller?.mother_lastname}
                                                    />
                                                </div>
                                            </li>

                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Date of Birth/जन्मतारीख <sup>*</sup>
                                                </label>
                                                <div>
                                                    <input type="text" value={pdfData?.seller?.dob} className="pl-2" />{" "}
                                                    {/* <input
                                                        type="text"
                                                        placeholder="Age(Min 18 to Max 55)"
                                                        className="ml-5 pl-2"
                                                        style={{ width: 250 }}
                                                    /> */}
                                                </div>
                                            </li>

                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Mobile No./भ्रमणध्वनी क्र. +९१<sup>*</sup>
                                                </label>
                                                <div>
                                                    <input type="number " value={pdfData?.seller?.mobile} placeholder="+91" className="pl-2" />{" "}

                                                </div>
                                            </li>
                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Email<sup>*</sup>
                                                </label>
                                                <div>
                                                    <input type="number " style={{ width: "300px" }} value={pdfData?.seller?.email} placeholder="+91" className="pl-2" />{" "}

                                                </div>
                                            </li>

                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Gender/लिंग<sup>*</sup>
                                                </label>
                                                <div>
                                                    <input type="checkbox" checked={pdfData?.seller.gender == 'Male'} className="seller-checkbox " />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Male/पु
                                                    </label>
                                                    <input type="checkbox" checked={pdfData?.seller.gender == 'Female'} className="ml-3 seller-checkbox" />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Female/स्त्री
                                                    </label>
                                                    <input type="checkbox" checked={pdfData?.seller.gender == 'Trans'} className="ml-3 seller-checkbox" />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Transgender/ट्रान्सजेडर
                                                    </label>
                                                    <input type="checkbox" checked={pdfData?.seller.gender == 'Other'} className="ml-3 seller-checkbox" />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Other/इतर
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-2 mt-4">
                                        {/* <img alt="nizam" className="border border-primary" /> */}
                                        {/* <input type="file" className='mt-1 ' name="uploadfile" id="img" style={{ display: 'none' }} />
                        <label for="img">Upload Certificate</label> */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul type="disc " style={{ listStyle: "unset" }}>
                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Blood Group/रक्त गट
                                                </label>
                                                <div className="Blood-Group d-flex">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" name="bloodGroup" checked={pdfData?.seller.bloodGroup == 'O+'} id="flexRadioDefault5" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault5">
                                                            O+
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" name="bloodGroup" checked={pdfData?.seller.bloodGroup == 'O-'} id="flexRadioDefault6" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault6">
                                                            O-
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" name="bloodGroup" checked={pdfData?.seller.bloodGroup == 'A+'} id="flexRadioDefault8" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault8">
                                                            A+
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" name="bloodGroup" checked={pdfData?.seller.bloodGroup == 'A-'} id="flexRadioDefault9" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault9">
                                                            A-
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" name="bloodGroup" checked={pdfData?.seller.bloodGroup == 'B+'} id="flexRadioDefault10" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault10">
                                                            B+
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" name="bloodGroup" checked={pdfData?.seller.bloodGroup == 'B-'} id="flexRadioDefault11" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault11">
                                                            B-
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" name="bloodGroup" checked={pdfData?.seller.bloodGroup == 'AB+'} id="flexRadioDefault12" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault12">
                                                            AB+
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" name="bloodGroup" checked={pdfData?.seller.bloodGroup == 'AB-'} id="flexRadioDefault13" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault13">
                                                            AB-
                                                        </label>
                                                    </div>

                                                </div>
                                            </li>
                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Category <sup>*</sup>
                                                </label>
                                                <div className="Category-1 d-flex">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" name="castCategory" checked={pdfData?.seller.castCategory == 'General'} id="flexRadioDefault14" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault14">
                                                            General
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" name="castCategory" checked={pdfData?.seller.castCategory == 'OBC'} id="flexRadioDefault16" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault16">
                                                            OBC
                                                        </label>
                                                    </div>

                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" name="castCategory" checked={pdfData?.seller.castCategory == 'SC'} id="flexRadioDefault17" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault17">
                                                            SC
                                                        </label>
                                                    </div>

                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" name="castCategory" checked={pdfData?.seller.castCategory == 'ST'} id="flexRadioDefault18" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault18">
                                                            ST
                                                        </label>
                                                    </div>

                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" name="castCategory" checked={pdfData?.seller.castCategory == 'VJNT'} id="flexRadioDefault19" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault19">
                                                            VJNT
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" name="castCategory" checked={pdfData?.seller.castCategory == 'NT-B'} id="flexRadioDefault20" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault20">
                                                            NT-B
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" name="castCategory" checked={pdfData?.seller.castCategory == 'NT-C'} id="flexRadioDefault21" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault21">
                                                            NT-C
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" name="castCategory" checked={pdfData?.seller.castCategory == 'NT-D'} id="flexRadioDefault22" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault22">
                                                            NT-D
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" name="castCategory" checked={pdfData?.seller.castCategory == 'SBC'} id="flexRadioDefault22" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault22">
                                                            SBC
                                                        </label>
                                                    </div>

                                                </div>
                                                <span>
                                                    (Atteched Caste Certificate and Non-Creamy Layer Certificate
                                                    for OBC/SC/ST/VJNT/NT-B/NT-C/NT-D/SBC){" "}
                                                </span>
                                            </li>
                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Caste Certificate / जातीचा दाखला<sup>*</sup>
                                                </label>

                                                {pdfData?.seller?.castCertificate?.url ? <p className="success-message" style={{ color: 'green' }}>Documents Uploaded  </p> : <p className="success-message" style={{ color: 'red' }}>Not Upload </p>}




                                            </li>


                                            <li className="mt-3" >
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Business Category/व्यवसाय श्रेणी <sup>*</sup>
                                                </label>
                                                {pdfData?.seller?.businessCategory?.name ? <p className="success-message" style={{ color: 'green' }}>({pdfData?.seller?.businessCategory?.name}) , Documents Uploaded   </p> : <p className="success-message" style={{ color: 'red' }}>Not Upload </p>}



                                            </li>

                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Marital Status/वैवाहिक स्थिती <sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    <input type="checkbox" checked={pdfData?.seller.maritalStatus == 'Unmarried'} className="seller-checkbox " />
                                                    <label htmlFor="" className="ml-1  ">
                                                        Unmarried
                                                    </label>
                                                    <input type="checkbox" className="ml-3 seller-checkbox  " checked={pdfData?.seller.maritalStatus == 'Married'} />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Married
                                                    </label>
                                                    <input type="checkbox" className="ml-3 seller-checkbox " checked={pdfData?.seller.maritalStatus == 'Widow'} />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Widow
                                                    </label>
                                                    <input type="checkbox" className="ml-3 seller-checkbox " checked={pdfData?.seller.maritalStatus == 'Divorced'} />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Divorced
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    If you are married, then please provide name of the Spouse/विवाहित असल्यास पतिचे/पत्नीचे संपूर्ण नाव
                                                    <sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    <input type="text" className="pl-2" name="spouse_name" value={pdfData?.seller.spouse_name} />

                                                </div>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul style={{ listStyle: "unset" }}>
                                            <li className="">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Name of Guardian of the beneficiary<sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    <input type="text" className="pl-2" value={pdfData?.seller?.guardian_name} />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul style={{ listStyle: "unset" }}>
                                            <li className="">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    His/her Contact No<sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    <input type="number" className="pl-2" value={pdfData?.seller?.guardian_contact} placeholder="+91" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul style={{ listStyle: "unset" }}>

                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Relationship of Guardian with the beneficiary<sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    <input type="checkbox" checked={pdfData?.seller?.relatedToGuardian == 'Father'} className="seller-checkbox " />
                                                    <label htmlFor="" className="ml-1  ">
                                                        Father
                                                    </label>
                                                    <input type="checkbox" className="ml-3 seller-checkbox  " checked={pdfData?.seller?.relatedToGuardian == 'Mother'} />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Mother{" "}
                                                    </label>
                                                    <input type="checkbox" className="ml-3 seller-checkbox " checked={pdfData?.seller?.relatedToGuardian == 'Wife'} />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Wife
                                                    </label>
                                                    <input type="checkbox" className="ml-3 seller-checkbox " checked={pdfData?.seller?.relatedToGuardian == 'Husband'} />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Husband
                                                    </label>
                                                    <input type="checkbox" className="ml-3 seller-checkbox " checked={pdfData?.seller?.relatedToGuardian == 'Other'} />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Other
                                                    </label>
                                                </div>
                                            </li>

                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Educational Details<sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    <input type="checkbox" className="seller-checkbox " checked={pdfData?.seller?.educationDetails.primary} />
                                                    <label htmlFor="" className="ml-1  ">
                                                        Primary
                                                    </label>
                                                    <input type="checkbox" className="ml-3 seller-checkbox  " checked={pdfData?.seller?.educationDetails.secondary} />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Secondary{" "}
                                                    </label>
                                                    <input type="checkbox" className="ml-3 seller-checkbox " checked={pdfData?.seller?.educationDetails.higher_secondary} />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Higher Secondary
                                                    </label>
                                                    <input type="checkbox" className="ml-3 seller-checkbox " checked={pdfData?.seller?.educationDetails.diploma} />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Diploma
                                                    </label>
                                                    <input type="checkbox" className="ml-3 seller-checkbox " checked={pdfData?.seller?.educationDetails.graduate} />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Graduate
                                                    </label>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <input type="checkbox" className=" seller-checkbox " checked={pdfData?.seller?.educationDetails.post_graduate} />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Postgraduate
                                                    </label>
                                                    <input type="checkbox" className="ml-3 seller-checkbox " checked={pdfData?.seller?.educationDetails.unGraduate} />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Uneducated
                                                    </label>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <h6>Address Details/अर्जदाराचे निवासाचे तपशिल</h6>
                                    <hr className="border border-1 border-primary m-0 p-0" />
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul style={{ listStyle: "unset" }}>
                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Are you being resident of Maharashtralagate?
                                                </label>
                                                <div className="d-flex">
                                                    <input type="checkbox" className="seller-checkbox " checked={pdfData?.seller?.residentOf == 'Yes'} />
                                                    <label htmlFor="" className="ml-1  " >
                                                        Yes
                                                    </label>
                                                    <input type="checkbox" className="ml-3 seller-checkbox  " checked={pdfData?.seller?.residentOf == 'No'} />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        No
                                                    </label>
                                                    <span className="ml-3">
                                                        (If Yes Please Upload Domicile Certificate)
                                                    </span>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul style={{ listStyle: "unset" }}>
                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Domacile Certificate/अधिवास प्रमाणपत्र<sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    {pdfData?.seller?.domacileCert?.url ? <p className="success-message" style={{ color: 'green' }}> Documents Uploaded   </p> : <p className="success-message" style={{ color: 'red' }}>Not Upload </p>}
                                                </div>
                                            </li>
                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Corespondence Address / सध्याचा पत्ता<sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    <textarea
                                                        name=""
                                                        id=""
                                                        cols="80"
                                                        rows="2"
                                                        value={pdfData?.seller?.coresAddress}
                                                        className="pl-2"></textarea>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="Village-sec ml-5 Village-sec-2">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <li className="mt-1" style={{ listStyleType: 'none' }}>
                                                        {" "}
                                                        <label htmlFor="" className="fw-bold mr-2">
                                                            Post / पोस्ट<sup>*</sup>
                                                        </label>
                                                        <div className="d-flex">
                                                            <input type="text" className="pl-2" name="post" value={pdfData?.seller?.post} />
                                                        </div>

                                                    </li>
                                                </div>
                                                <div className="col-md-3">
                                                    <li className="mt-1" style={{ listStyleType: 'none' }}>
                                                        {" "}
                                                        <label htmlFor="" className="fw-bold mr-2">
                                                            State / राज्य<sup>*</sup>
                                                        </label>
                                                        <div className="d-flex">
                                                            <input type="text" className="pl-2" name="state" value={pdfData?.seller.state} />
                                                        </div>

                                                    </li>
                                                </div>
                                                <div className="col-md-3">
                                                    <li className="" style={{ listStyleType: 'none' }}>
                                                        {" "}
                                                        <label htmlFor="" className="fw-bold mr-2">
                                                            Division/विभाग<sup>*</sup>
                                                        </label>
                                                        <div className="d-flex">
                                                            <input type="text" className="pl-1" name="state" value={pdfData?.seller.division[0]?.title} />
                                                        </div>
                                                        {/* <select className="form-select" aria-label="Default select example" value={vlueDistric} onChange={divisonChange}>
                                                                    <option selected>Open this select menu</option>
                                                                    {divisonn && divisonn?.map((item) => {
                                                                        return <option value={item?.uid}>{item?.title}</option>
                                                                    })}
                                                                </select> */}
                                                        {/* {errors.divisonn && <p style={{ color: 'red' }}>{errors.divisonn}</p>} */}
                                                        {/* <div className="d-flex">
                                                            <input type="text" className="pl-2" name="district" value={pdfData?.seller?.district}  />
                                                        </div> */}
                                                    </li>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <li className="" style={{ listStyleType: 'none' }}>
                                                            {" "}
                                                            <label htmlFor="" className="fw-bold mr-2">
                                                                District/जिल्हा<sup>*</sup>
                                                            </label>
                                                            <div className="d-flex">
                                                                <input type="text" className="pl-2" name="state" value={pdfData?.seller.district[0]?.title} />
                                                            </div>
                                                            {/* <select className="form-select" aria-label="Default select example" value={addSeller.district} name="district" >
                                                                    <option selected>Open this select menu</option>
                                                                    {districMaha && districMaha?.map((item) => {
                                                                        return <option value={item?.uid}>{item?.title}</option>
                                                                    })}
                                                                </select> */}

                                                            {/* <div className="d-flex">
                                                            <input type="text" className="pl-2" name="district" value={addSeller.district}  />
                                                        </div> */}
                                                        </li>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <li className="" style={{ listStyleType: 'none' }}>
                                                            {" "}
                                                            <label htmlFor="" className="fw-bold mr-2">
                                                                Block/तालुका<sup>*</sup>
                                                            </label>
                                                            <div className="d-flex">
                                                                <input type="text" className="pl-2" name="block" value={pdfData?.seller?.block} />
                                                            </div>

                                                        </li>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <li className="" style={{ listStyleType: 'none' }}>
                                                            {" "}
                                                            <label htmlFor="" className="fw-bold mr-2">
                                                                Village/गांव<sup>*</sup>
                                                            </label>
                                                            <div className="Village">
                                                                <input type="text" className="pl-2" name="village" value={pdfData?.seller?.village} />
                                                            </div>

                                                        </li>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <li className="" style={{ listStyleType: 'none' }}>
                                                            {" "}
                                                            <label htmlFor="" className="fw-bold">
                                                                Pincode / पिनकोड<sup>*</sup>
                                                            </label>
                                                            <div className="d-flex">
                                                                <input type="number" className="" name="pincode" value={pdfData?.seller?.pincode} />
                                                            </div>

                                                        </li>
                                                    </div>
                                                </div>

                                                {/* <ul style={{ listStyle: "unset" }}>
                                                    <li className="mt-3" style={{ listStyleType: 'none' }}>
                                                        {" "}
                                                        <label htmlFor="" className="fw-bold mr-2">
                                                            Permanent Address / कायमचा पत्ता<sup>*</sup>
                                                        </label>
                                                        <div className="Permanent">
                                                            <textarea
                                                                name="permanentAddress"
                                                                id=""
                                                                cols="80"
                                                                rows="2"
                                                                className="pl-2" value={pdfData?.seller?.permanentAddress} ></textarea>
                                                        </div>

                                                    </li>
                                                </ul> */}
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        Permanent Address / कायमचा पत्ता<sup>*</sup>
                                                    </label>
                                                    <div className="Permanent">
                                                        <textarea
                                                            name="permanentAddress"
                                                            id=""
                                                            cols="80"
                                                            rows="2"
                                                            className="pl-2" value={pdfData?.seller?.permanentAddress} ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul style={{ listStyle: "unset" }}>
                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Documents of Address Proof <sup>*</sup>
                                                </label>
                                                <div className="Muscular-1 Muscular-2 d-flex">
                                                    <input type="checkbox" className="seller-checkbox " id="Driving License" name="driveLicen" checked={pdfData?.seller?.docOfAddProof.driveLicen} />
                                                    <label htmlFor="Driving License" className="ml-1 seller-label" >
                                                        Driving License
                                                    </label>
                                                    <input type="checkbox" className="ml-3 seller-checkbox  " id="Ration Card" name="rationCard" checked={pdfData?.seller?.docOfAddProof.rationCard} />
                                                    <label htmlFor="Ration Card" className="ml-1 seller-label">
                                                        Ration Card
                                                    </label>
                                                    <input type="checkbox" className=" ml-3 seller-checkbox " id="Voter Id" name="voterId" checked={pdfData?.seller?.docOfAddProof.voterId} />
                                                    <label htmlFor="Voter Id" className="ml-1  ">
                                                        Voter Id
                                                    </label>
                                                    <input type="checkbox" className="ml-3 seller-checkbox  " id="Passport" name="passport" checked={pdfData?.seller?.docOfAddProof.passport} />
                                                    <label htmlFor="Passport" className="ml-1 seller-label">
                                                        Passport{" "}
                                                    </label>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <input type="checkbox" className=" seller-checkbox " checked={pdfData?.seller?.docOfAddProof.electricBill} />
                                                    <label htmlFor="" className="ml-1  ">
                                                        Electricity Bill
                                                    </label>
                                                    <input type="checkbox" className="ml-3 seller-checkbox  " checked={pdfData?.seller?.docOfAddProof.properTaxRec} />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        Property Tax Receipt
                                                    </label>
                                                </div>
                                            </li>

                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Address proof / पत्त्याचा पुरावा<sup>*</sup>
                                                </label>
                                                {pdfData?.seller?.addressProof[0]?.url ? <p className="success-message" style={{ color: 'green' }}>Documents Uploaded   </p> : <p className="success-message" style={{ color: 'red' }}>Not Upload </p>}
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-12 mt-5">
                                    <h6>Disability Certificate/ दिव्यांगत्व प्रमाणपत्र</h6>
                                    <hr className="border border-1 border-primary m-0 p-0" />
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul style={{ listStyle: "unset" }}>
                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Do You have Disability Certificate
                                                </label>
                                                <div className="d-flex">
                                                    <input type="checkbox" className="seller-checkbox " checked={pdfData?.seller?.disabilityCert == true} />
                                                    <label htmlFor="" className="ml-1  ">
                                                        Yes
                                                    </label>
                                                    <input type="checkbox" className="ml-3 seller-checkbox  " checked={pdfData?.seller?.disabilityCert == false} />
                                                    <label htmlFor="" className="ml-1 seller-label">
                                                        No
                                                    </label>
                                                    <span className="ml-3">
                                                        {" "}
                                                        (If Yes, Please fill in the following Details & attach
                                                        disability certificate)
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Disability Certificate/दिव्यांगत्वाचे प्रमाणपत्र<sup>*</sup>


                                                    {pdfData?.seller?.disabilityCertImage?.url ? <p className="success-message" style={{ color: 'green' }}> Documents Uploaded   </p> : <p className="success-message" style={{ color: 'red' }}>Not Upload </p>}
                                                </label>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul style={{ listStyle: "unset" }}>
                                            <li className="">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    UDID Certificate No<sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" id="flex8" name="udidType" checked={pdfData?.seller?.udidType == 'Permanent UDID'} />
                                                        <label className="form-check-label" htmlFor="flex8">
                                                            Permanent UDID /कायमस्वरूपी UDID
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" id="flex6" name="udidType" checked={pdfData?.seller?.udidType == 'Temporary UDID'} />
                                                        <label className="form-check-label" htmlFor="flex6">
                                                            Temporary UDID /तात्पुरता UDID
                                                        </label>
                                                    </div>

                                                </div>
                                            </li>
                                        </ul>
                                    </div>


                                </div>
                                <div className="col-md-6">
                                    <ul style={{ listStyle: "unset", listStyleType: 'none' }}>
                                        <li className="">
                                            {" "}
                                            <label htmlFor="" className="fw-bold mr-2">
                                                UDID Certificate No/UDID प्रमाणपत्र क्र <sup>*</sup>

                                            </label>
                                            <div className="d-flex">
                                                <input type="text" className="pl-2" name="udId_No" value={pdfData?.seller?.udId_No} />
                                            </div>

                                        </li>

                                        <li className="">
                                            {" "}
                                            <label htmlFor="" className="fw-bold mr-2">
                                                UDID Certificate/UDID प्रमाणपत्र <sup>*</sup>

                                                {pdfData?.seller?.udId_File?.url ? <p className="success-message" style={{ color: 'green' }}> Documents Uploaded   </p> : <p className="success-message" style={{ color: 'red' }}>Not Upload </p>}
                                            </label>


                                        </li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul style={{ listStyle: "unset" }}>
                                            <li className="">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Percentage of disability (40% or more than 40%)<sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    <input type="text" className="pl-2" value={pdfData?.seller?.PerOfDis} />
                                                </div>
                                            </li>

                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Types Of Disability/दिव्यांगत्वाचा प्रकार<sup>*</sup>
                                                </label>

                                                <div className="Disability">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="locoMotor" id="Locomotors Disability" checked={pdfData?.seller?.typesOfDisability.locoMotor} />
                                                        <label className="form-check-label" htmlFor="Locomotors Disability">
                                                            Locomotors Disability/अस्थिव्यंग
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="leprosy" id="Leprosy Cured persons" checked={pdfData?.seller?.typesOfDisability.leprosy} />
                                                        <label className="form-check-label" htmlFor="Leprosy Cured persons">
                                                            Leprosy Cured persons/कुष्ठरोग निवारीत मुक्त
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="cerebralPal" id="Cerebral Palsy" checked={pdfData?.seller?.typesOfDisability.cerebralPal} />
                                                        <label className="form-check-label" htmlFor="Cerebral Palsy">
                                                            Cerebral Palsy/मेंदूचा पक्षाघात
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="dwarfism" id="Dwarfism" checked={pdfData?.seller?.typesOfDisability.dwarfism} />
                                                        <label className="form-check-label" htmlFor="Dwarfism">
                                                            Dwarfism{" "}/शारीरिक वाढ खुंटणे
                                                        </label>
                                                    </div>
                                                </div>


                                                {/* <div className="Muscular-1 d-flex mt-3">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="muscular_dy" id="Muscular Dystrophy" checked={pdfData?.seller?.typesOfDisability.muscular_dy} />
                                                        <label className="form-check-label" htmlFor="Muscular Dystrophy">
                                                            Muscular Dystrophy/स्नायुंची विकृती
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="acidAttactVic" id="Acid Attack victim" checked={pdfData?.seller?.typesOfDisability.acidAttactVic} />
                                                        <label className="form-check-label" htmlFor="Acid Attack victim">
                                                            Acid Attack victim/आम्ल हल्ला पीडित
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="blindness" id="Blindness" checked={pdfData?.seller?.typesOfDisability.blindness} />
                                                        <label className="form-check-label" htmlFor="Blindness">
                                                            Blindness/पुर्णतः अंध
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="lowVision" id="Low-vision" checked={pdfData?.seller?.typesOfDisability.lowVision} />
                                                        <label className="form-check-label" htmlFor="Low-vision">
                                                            Low-vision/अंशतः अंध (दृष्टिदोष)
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="Muscular-1 d-flex mt-3">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="hearingImp" id="Hearing Impairment" checked={pdfData?.seller?.typesOfDisability.hearingImp} />
                                                        <label className="form-check-label" htmlFor="Hearing Impairment">
                                                            Hearing Impairment (Deaf and hard of Hearing)/कर्णबधीर / ऐकू कमी येणे
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="speechNlang" id="Speech" checked={pdfData?.seller?.typesOfDisability.speechNlang} />
                                                        <label className="form-check-label" htmlFor="Speech">
                                                            Speech and Language disability/वाचा / भाषा दोष
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="Muscular-1 d-flex mt-3">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="intellect" id="Intellectual Disability" checked={pdfData?.seller?.typesOfDisability.intellect} />
                                                        <label className="form-check-label" htmlFor="Intellectual Disability">
                                                            Intellectual Disability/बौद्धिक अक्षम
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="specific_learn" id="Specific" checked={pdfData?.seller?.typesOfDisability.specific_learn} />
                                                        <label className="form-check-label" htmlFor="Specific">
                                                            Specific Learning Disabilities/विशिष्ट अध्ययन अक्षम
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="autism" id="Autism" checked={pdfData?.seller?.typesOfDisability.autism} />
                                                        <label className="form-check-label" htmlFor="Autism">
                                                            Autism Spectrum Disorder/स्वमग्न
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="Muscular-1 d-flex mt-3">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="mentalBehave" id="Mental" checked={pdfData?.seller?.typesOfDisability.mentalBehave} />
                                                        <label className="form-check-label" htmlFor="Mental">
                                                            Mental Behavior/Mental illness/मानसिक वर्तन / मानसिक आधार
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="multiScler" id="Multiple" checked={pdfData?.seller?.typesOfDisability.multiScler} />
                                                        <label className="form-check-label" htmlFor="Multiple">
                                                            Multiple Sclerosis/हातापायातील स्नायू कमजोर / शिथिल होणे
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="parkinson" id="Parkinson" checked={pdfData?.seller?.typesOfDisability.parkinson} />
                                                        <label className="form-check-label" htmlFor="Parkinson">
                                                            Parkinson's disease/कंपावात
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="Muscular-1 d-flex mt-3">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="hemoPhilia" id="Hemophilia" checked={pdfData?.seller?.typesOfDisability.hemoPhilia} />
                                                        <label className="form-check-label" htmlFor="Hemophilia">
                                                            Hemophilia/अधिक रक्तस्त्राव
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="thalassemia" id="Thalassemia" checked={pdfData?.seller?.typesOfDisability.thalassemia} />
                                                        <label className="form-check-label" htmlFor="Thalassemia">
                                                            Thalassemia/रक्ताची कमतरता
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="sickieCell" id="Sickle" checked={pdfData?.seller?.typesOfDisability.sickieCell} />
                                                        <label className="form-check-label" htmlFor="Sickle">
                                                            Sickle Cell disease/रक्ताचे हिमोग्लोबीनचे प्रमाण कमी होणे
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="Muscular-1 d-flex mt-3">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="chronicNeu" id="Chronic" checked={pdfData?.seller?.typesOfDisability.chronicNeu} />
                                                        <label className="form-check-label" htmlFor="Chronic">
                                                            Chronic Neurological conditions/मज्जासंस्थेचे तीव्र आजार
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="multipleDisab" id="Multiple" checked={pdfData?.seller?.typesOfDisability.multipleDisab} />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault56">
                                                            Multiple Disabilities/बहुविकलांग
                                                        </label>
                                                    </div>
                                                </div> */}

                                            </li>

                                            <div className="row mt-5">
                                                <div className="col-lg-3 col-md-3">
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="checkbox" name="muscular_dy" id="Muscular Dystrophy" checked={pdfData?.seller?.typesOfDisability.muscular_dy} />
                                                        <label className="form-check-label" htmlFor="Muscular Dystrophy">
                                                            Muscular Dystrophy/स्नायुंची विकृती
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3">
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="checkbox" name="acidAttactVic" id="Acid Attack victim" checked={pdfData?.seller?.typesOfDisability.acidAttactVic} />
                                                        <label className="form-check-label" htmlFor="Acid Attack victim">
                                                            Acid Attack victim/आम्ल हल्ला पीडित
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3">
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="checkbox" name="blindness" id="Blindness" checked={pdfData?.seller?.typesOfDisability.blindness} />
                                                        <label className="form-check-label" htmlFor="Blindness">
                                                            Blindness/पुर्णतः अंध
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-5 col-md-6">
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="checkbox" name="lowVision" id="Low-vision" checked={pdfData?.seller?.typesOfDisability.lowVision} />
                                                        <label className="form-check-label" htmlFor="Low-vision">
                                                            Low-vision/अंशतः अंध (दृष्टिदोष)
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-md-6">
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="checkbox" name="hearingImp" id="Hearing Impairment" checked={pdfData?.seller?.typesOfDisability.hearingImp} />
                                                        <label className="form-check-label" htmlFor="Hearing Impairment">
                                                            Hearing Impairment (Deaf and hard of Hearing)/कर्णबधीर / ऐकू कमी येणे
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="checkbox" name="speechNlang" id="Speech" checked={pdfData?.seller?.typesOfDisability.speechNlang} />
                                                        <label className="form-check-label" htmlFor="Speech">
                                                            Speech and Language disability/वाचा / भाषा दोष
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="checkbox" name="intellect" id="Intellectual Disability" checked={pdfData?.seller?.typesOfDisability.intellect} />
                                                        <label className="form-check-label" htmlFor="Intellectual Disability">
                                                            Intellectual Disability/बौद्धिक अक्षम
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="checkbox" name="specific_learn" id="Specific" checked={pdfData?.seller?.typesOfDisability.specific_learn} />
                                                        <label className="form-check-label" htmlFor="Specific">
                                                            Specific Learning Disabilities/विशिष्ट अध्ययन अक्षम
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="checkbox" name="autism" id="Autism" checked={pdfData?.seller?.typesOfDisability.autism} />
                                                        <label className="form-check-label" htmlFor="Autism">
                                                            Autism Spectrum Disorder/स्वमग्न
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-5 col-md-6">
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="checkbox" name="mentalBehave" id="Mental" checked={pdfData?.seller?.typesOfDisability.mentalBehave} />
                                                        <label className="form-check-label" htmlFor="Mental">
                                                            Mental Behavior/Mental illness/मानसिक वर्तन / मानसिक आधार
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-md-6">
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="checkbox" name="multiScler" id="Multiple" checked={pdfData?.seller?.typesOfDisability.multiScler} />
                                                        <label className="form-check-label" htmlFor="Multiple">
                                                            Multiple Sclerosis/हातापायातील स्नायू कमजोर / शिथिल होणे
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="checkbox" name="parkinson" id="Parkinson" checked={pdfData?.seller?.typesOfDisability.parkinson} />
                                                        <label className="form-check-label" htmlFor="Parkinson">
                                                            Parkinson's disease/कंपावात
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="checkbox" name="hemoPhilia" id="Hemophilia" checked={pdfData?.seller?.typesOfDisability.hemoPhilia} />
                                                        <label className="form-check-label" htmlFor="Hemophilia">
                                                            Hemophilia/अधिक रक्तस्त्राव
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-5 col-md-6">
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="checkbox" name="thalassemia" id="Thalassemia" checked={pdfData?.seller?.typesOfDisability.thalassemia} />
                                                        <label className="form-check-label" htmlFor="Thalassemia">
                                                            Thalassemia/रक्ताची कमतरता
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-md-6">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="sickieCell" id="Sickle" checked={pdfData?.seller?.typesOfDisability.sickieCell} />
                                                        <label className="form-check-label" htmlFor="Sickle">
                                                            Sickle Cell disease/रक्ताचे हिमोग्लोबीनचे प्रमाण कमी होणे
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="checkbox" name="chronicNeu" id="Chronic" checked={pdfData?.seller?.typesOfDisability.chronicNeu} />
                                                        <label className="form-check-label" htmlFor="Chronic">
                                                            Chronic Neurological conditions/मज्जासंस्थेचे तीव्र आजार
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="checkbox" name="multipleDisab" id="Multiple" checked={pdfData?.seller?.typesOfDisability.multipleDisab} />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault56">
                                                            Multiple Disabilities/बहुविकलांग
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>



                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Do you have Disability by Birth<sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" id="flexRadioDefault57" checked={pdfData?.seller?.disabltyByBirth == true} name="disabilitiesBirth" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault57">
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" id="flexRadioDefault58" checked={pdfData?.seller?.disabilitiesBirth == false} name="disabilitiesBirth" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault58">
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Area of Disability<sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    <textarea name="areaOfDisable" id="" value={pdfData?.seller?.areaOfDisable} cols="80" rows="3" ></textarea>
                                                </div>

                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <h6>Employment Details /रोजगाराची सद्दस्थिती</h6>
                                    <hr className="border border-1 border-primary m-0 p-0" />
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul style={{ listStyle: "unset" }}>
                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Employement Status<sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" id="Employed" name="status" checked={pdfData?.seller.employmentDetail.status == 'Employed'} />
                                                        <label className="form-check-label" htmlFor="Employed">
                                                            Employed
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" id="Unemployed" name="status" checked={pdfData?.seller.employmentDetail.status == 'Unemployed'} />
                                                        <label className="form-check-label" htmlFor="Unemployed">
                                                            Unemployed
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-1">
                                                    Are you employed by the Government, Semi Government, or any Government body/Corporation. /आपण शासकीय/निमशासकीय/मंडळे/महामंडळे यांचे कर्मचारी आहात का?<sup>*</sup>
                                                </label>

                                                <div className="d-flex">
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="radio" id="employeeByGov" name="employeeByGov" checked={pdfData?.seller.employmentDetail.employeeByGov == 'Yes'} />
                                                        <label className="form-check-label" htmlFor="employeeByGov">
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-1">
                                                        <input className="form-check-input" type="radio" id="employeeByGov" name="employeeByGov" checked={pdfData?.seller.employmentDetail.employeeByGov == 'No'} />
                                                        <label className="form-check-label" htmlFor="employeeByGov">
                                                            No
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="Semi-Government-2 mt-2">
                                                    <textarea name="employeeGovInDepart" id="" cols="70" rows="2" disabled={pdfData?.seller.employeeByGov == 'No'} value={pdfData?.seller.employeeGovInDepart} ></textarea>
                                                </div>

                                            </li>

                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    BPL/APL<sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" id="flexRadioDefault62" name="bpl" checked={pdfData?.seller.employmentDetail.bpl == 'N/A'} />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault62">
                                                            N/A
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" id="flexRadioDefault63" name="bpl" checked={pdfData?.seller.employmentDetail.bpl == 'APL'} />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault63">
                                                            APL{" "}
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" id="flexRadioDefault64" name="bpl" checked={pdfData?.seller.employmentDetail.bpl == 'BPL'} />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault64">
                                                            BPL{" "}
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" id="flexRadioDefault65" name="bpl" checked={pdfData?.seller.employmentDetail.bpl == 'Antoday'} />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault65">
                                                            Antyoday{" "}
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Annual Income of the beneficiary<sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" id="flexRadioDefault66" name="annualIncom" checked={pdfData?.seller.employmentDetail.annualIncom == 'Below 10k'} />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault66">
                                                            Below 10k{" "}
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" id="flexRadioDefault67" name="annualIncom" checked={pdfData?.seller.employmentDetail.annualIncom == '10k to 1 lakhs'} />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault67">
                                                            10k to 1 lakhs{" "}
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" id="flexRadioDefault68" name="annualIncom" checked={pdfData?.seller.employmentDetail.annualIncom == '1 lakhs to 2.5 lakhs'} />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault68">
                                                            01 lakhs to 2.5 lakhs{" "}
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="radio" id="flexRadioDefault69" name="annualIncom" checked={pdfData?.seller.employmentDetail.annualIncom == '2.5 lakhs and more'} />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault69">
                                                            Above 2.5 lakhs{" "}
                                                        </label>
                                                    </div>

                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <h6>Identity Details (Min-1)/ओळखीचा पुरावा (किमान - १ )</h6>
                                    <hr className="border border-1 border-primary m-0 p-0" />
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul style={{ listStyle: "unset" }}>
                                            <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Identity Proof<sup>*</sup>
                                                </label>
                                                <div className="Identity-proof Identity-proof-2">
                                                    <input type="radio" className="seller-checkbox " id="Driving License1" name="idProof" checked={pdfData?.seller.idProof == 'Driving License'} />
                                                    <label htmlFor="Driving License1" className="ml-1 seller-label">
                                                        Driving License
                                                    </label>
                                                    <input type="radio" className="ml-3 seller-checkbox" id="PAN Card1" name="idProof" checked={pdfData?.seller.idProof == 'PAN Card'} />
                                                    <label htmlFor="PAN Card1" className="ml-1 seller-label">
                                                        PAN Card
                                                    </label>
                                                    <input type="radio" className="ml-3 seller-checkbox  " id="Ration Card1" name="idProof" checked={pdfData?.seller.idProof == 'Ration Card'} />
                                                    <label htmlFor="Ration Card1" className="ml-1 seller-label">
                                                        Ration Card
                                                    </label>
                                                    <input type="radio" className="ml-3 seller-checkbox  " id="Voter ID1" name="idProof" checked={pdfData?.seller.idProof == 'Voter ID'} />
                                                    <label htmlFor="Voter ID1" className="ml-1 seller-label">
                                                        Voter ID
                                                    </label>
                                                    <input type="radio" className="ml-3 seller-checkbox  " id="Aadhar Card1" name="idProof" checked={pdfData?.seller.idProof == 'Aadhar Card'} />
                                                    <label htmlFor="Aadhar Card1" className="ml-1 seller-label">
                                                        Aadhar Card
                                                    </label>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <input type="radio" className="seller-checkbox " id="Passport1" name="idProof" checked={pdfData?.seller.idProof == 'Passport'} />
                                                    <label htmlFor="Passport1" className="ml-1 seller-label">
                                                        Passport
                                                    </label>
                                                    <input type="radio" className="ml-3 seller-checkbox  " id="MGNERGA Job Card1" name="idProof" checked={pdfData?.seller.idProof == 'MGNERGA Job Card'} />
                                                    <label htmlFor="MGNERGA Job Card1" className="ml-1 seller-label">
                                                        MGNERGA Job Card
                                                    </label>
                                                </div>
                                            </li>

                                            <div className="row mt-5">
                                                <div className="col-md-4">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        Identity Proof No.<sup>*</sup>
                                                    </label>
                                                    <div className="d-flex">
                                                        <input type="text" className="pl-2" value={pdfData?.seller?.idProofNo} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="" className="fw-bold">
                                                        Aadhar Card<sup>*</sup>
                                                    </label>
                                                    <div className="d-flex">
                                                        <input type="text" className="pl-2" value={pdfData?.seller?.adhaarCard} />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Identity Proof No.<sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    <input type="text" className="pl-2" value={pdfData?.seller?.idProofNo} />
                                                </div>
                                            </li> */}

                                            {/* <li className="mt-3">
                                                <div className="d-flex">
                                                    <div className="col-md-6">
                                                        <label htmlFor="" className="fw-bold">
                                                            Aadhar Card<sup>*</sup>
                                                        </label>
                                                        <div className="d-flex">
                                                            <input type="text" className="pl-2" value={pdfData?.seller?.adhaarCard} />
                                                        </div>
                                                    </div>

                                                </div>
                                            </li> */}

                                            {/* <li className="mt-3">
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Bank Details of the Applicant/अर्जदाराचे बँक तपशील*<sup>*</sup>
                                                </label>
                                                <div className=" col-md-12">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        Account Holder's Name /खातेधारकाचे नाव
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "300px" }}
                                                            name="accHolderName" value={pdfData?.seller.accHolderName}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        Account Number/खाते क्रमांक
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "300px" }}
                                                            name="accNo" value={pdfData?.seller.accNo}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        Bank Name/बँकेचे नाव
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "300px" }}
                                                            name="bankName" value={pdfData?.seller.bankName}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        IFSC Code/IFSC कोड
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "300px" }}
                                                            name="ifscCode" value={pdfData?.seller.ifscCode}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        Branch Name/शाखेचे नाव
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "300px" }}
                                                            name="branchName" value={pdfData?.seller.branchName}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        Branch Code/शाखा कोड
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "300px" }}
                                                            name="branchCode" value={pdfData?.seller.branchCode}
                                                        />
                                                    </div>

                                                </div>
                                            </li> */}

                                            <div>
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Bank Details of the Applicant/अर्जदाराचे बँक तपशील*<sup>*</sup>
                                                </label>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <label htmlFor="" className="fw-bold">
                                                        Account Holder's Name /खातेधारकाचे नाव
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "300px" }}
                                                            name="accHolderName" value={pdfData?.seller.accHolderName}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-5">
                                                    <label htmlFor="" className="fw-bold">
                                                        Account Number/खाते क्रमांक
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "270px" }}
                                                            name="accNo" value={pdfData?.seller.accNo}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        Bank Name/बँकेचे नाव
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "300px" }}
                                                            name="bankName" value={pdfData?.seller.bankName}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-5">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        IFSC Code/IFSC कोड
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "270px" }}
                                                            name="ifscCode" value={pdfData?.seller.ifscCode}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        Branch Name/शाखेचे नाव
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "300px" }}
                                                            name="branchName" value={pdfData?.seller.branchName}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-5">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        Branch Code/शाखा कोड
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "270px" }}
                                                            name="branchCode" value={pdfData?.seller.branchCode}
                                                        />
                                                    </div>
                                                </div>
                                            </div>



                                            <li className="mt-3">
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Please upload Front Page of Bank Passbook<sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    {pdfData?.seller?.frontOfBankPassBook?.url ? <p className="success-message" style={{ color: 'green' }}> Documents Uploaded   </p> : <p className="success-message" style={{ color: 'red' }}>Not Upload </p>}
                                                </div>
                                            </li>

                                            <li className="mt-3">
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Beneficiary's Affidavith<sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    {pdfData?.seller?.frontOfBankPassBook?.url ? <p className="success-message" style={{ color: 'green' }}>Documents Uploaded   </p> : <p className="success-message" style={{ color: 'red' }}>Not Upload </p>}
                                                </div>
                                            </li>

                                            <li className="mt-3">
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    What Business would you like to do?<sup>*</sup>
                                                </label>
                                                <div className="col-md-6 border border-2 border-secondary ">
                                                    <div className="mt-2 ">
                                                        <div className="form-check mr-2">
                                                            <input className="form-check-input" type="checkbox" id="flexRadioDefault70" name="foodItem" checked={pdfData?.seller?.businessYouLikeToDo?.foodItem} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault70">
                                                                Food item / खादयपदार्थ{" "}
                                                            </label>
                                                        </div>

                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" id="flexRadioDefault71" name="minor" checked={pdfData?.seller?.businessYouLikeToDo?.minor} />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault71">
                                                            Minor/किरकोळ{" "}
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" id="flexRadioDefault72" name="independentBus" checked={pdfData?.seller?.businessYouLikeToDo?.independentBus} />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault72">
                                                            Independent Business/स्वतंत्र व्यवसाय
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" id="flexRadioDefault73" name="transport" checked={pdfData?.seller?.businessYouLikeToDo?.transport} />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault73">
                                                            Transport business/वाहतूक{" "}
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" id="flexRadioDefault74" name="other" checked={pdfData?.seller?.businessYouLikeToDo?.other} />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault74">
                                                            Others{" "}
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <li className="mt-3">
                                <label htmlFor="" className="fw-bold mr-2">
                                    Declaration<sup>*</sup>
                                </label>
                                <div className="col-md-12">
                                    <span style={{ lineHeight: "normal", lineBreak: "auto" }}>
                                        1. Mr./Mrs./{" "}
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                            }}
                                        />
                                        Son/Daughter/Wife of{" "}
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                            }}
                                        />
                                        Age{" "}
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                                width: "50px",
                                            }}
                                        />{" "}
                                        Cast{" "}
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                            }}
                                        />{" "}
                                        (SC/ST/OBC/NT/SEBC/VINT) ,Resident of{" "}
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                            }}
                                        />{" "}
                                        , Post{" "}
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                            }}
                                        />
                                        ,Block
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                            }}
                                        />
                                        ,District{" "}
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                            }}
                                        />
                                        ,State Maharashtra, Pin code{" "}
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                            }}
                                        />
                                        do hereby declare that, the Information given above and in
                                        the enclosed documents is true to the best of my biowledge
                                        and belief, and nothing has been concealed therein. I am
                                        well aware of the fact that if the information given by me
                                        is provided false/not true, then I will be liable for
                                        disqualifying the application as per the law. Also, if any
                                        benefits availed by me shall be summarily withdrawn. I will
                                        use the grant/e-vehicle/e-cart for the same purpose as per
                                        the scheme guidelines dated 10 June 2019
                                    </span>
                                </div>
                            </li>
                            <li className="mt-3 d-flex">
                                <label htmlFor="" className="fw-bold mr-2">
                                    Accept (All terms & Condition)<sup>*</sup>
                                </label>
                                <div className="col-md-6 border border-2 border-secondary ">
                                    <div className="d-flex mt-2 mb-2 ">
                                        <input type="checkbox" className="seller-checkbox " />
                                        <label htmlFor="" className="ml-1 seller-label">
                                            Yes
                                        </label>
                                        <input type="checkbox" className="ml-3 seller-checkbox  " />
                                        <label htmlFor="" className="ml-1 seller-label">
                                            No
                                        </label>
                                    </div>


                                </div>
                            </li> */}


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }

                        <div style={{ display: 'none' }}>
                            <div className="mainsel" style={{ overflow: "auto" }}>
                                <table className="table table-3" id="table-to-xls">
                                    <thead>
                                        <tr>
                                            <th className="table-secondary" scope="col">#</th>
                                            <th className="table-secondary" scope="col">#</th>
                                            <th className="table-secondary" scope="col">Status</th>
                                            <th className="table-secondary" scope="col">Registration No</th>
                                            <th className="table-secondary" scope="col">Registration Date</th>
                                            <th className="table-secondary" scope="col">First Name</th>
                                            <th className="table-secondary" scope="col">Last Name</th>
                                            <th className="table-secondary" scope="col">D O B</th>
                                            <th className="table-secondary" scope="col">Age</th>
                                            <th className="table-secondary" scope="col">Gender</th>
                                            <th className="table-secondary" scope="col">Phone No</th>
                                            <th className="table-secondary" scope="col">Email</th>
                                            <th className="table-secondary" scope="col">UDID No</th>
                                            <th className="table-secondary" scope="col">Disability</th>
                                            <th className="table-secondary" scope="col">Annual Income</th>
                                            <th className="table-secondary" scope="col">BPL/APL</th>
                                            <th className="table-secondary" scope="col">Resident Of</th>
                                            <th className="table-secondary" scope="col">Aadhar  Card</th>
                                            {/* <th className="table-secondary" scope="col">Blood Group</th> */}
                                            <th className="table-secondary" scope="col">Category </th>
                                            <th className="table-secondary" scope="col">Marital Status</th>
                                            {/* <th className="table-secondary" scope="col">Educational Details</th>
                                        <th className="table-secondary" scope="col">Resident of Maharashtralagate</th>
                                        <th className="table-secondary" scope="col">Types Of Disability</th>
                                        <th className="table-secondary" scope="col">Area of Disability</th> */}
                                            <th className="table-secondary" scope="col">Business Category</th>
                                            <th className="table-secondary" scope="col">UDID type</th>
                                            <th className="table-secondary" scope="col">Disability by birth ?</th>
                                            <th className="table-secondary" scope="col">identify Upload</th>

                                            <th className="table-secondary" scope="col">Identity Proof</th>
                                            <th className="table-secondary" scope="col">Address Proof</th>
                                            <th className="table-secondary" scope="col">Caste Certificate Proof</th>
                                            <th className="table-secondary" scope="col">Disability Certificate Proof</th>
                                            <th className="table-secondary" scope="col">UDID Proof </th>
                                            <th className="table-secondary" scope="col">Front Of Bank PassBook </th>
                                            <th className="table-secondary" scope="col">Affidavit </th>
                                            <th className="table-secondary" scope="col">Comment </th>
                                            <th className="table-secondary" scope="col">Status Change</th>
                                            <th className="table-secondary" scope="col" style={{ display: 'none' }}>Identity Proof</th>
                                            <th className="table-secondary" scope="col" style={{ display: 'none' }}>Affidavith</th>
                                            <th className="table-secondary" scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listSeller && listSeller?.map((item, i) => {
                                            return <tr key={item._id} className="table-to-xls">
                                                <td>{i + 1}</td>
                                                <td className="bulkkk">
                                                    <Form.Check
                                                        onClick={() => { changeBulkSelect(item.seller._id) }}
                                                        type={'checkbox'}
                                                        id={`default-checkbox`}
                                                    />
                                                </td>
                                                {/* <td style={{ fontSize: '27px' }}>
                                                    {item?.status[0]?.name == 'Rejected' && <FcDisapprove />}
                                                    {item?.status[0]?.name == 'Pending' && <MdPending />}
                                                    {item?.status[0]?.name == 'Approved' && <FcApproval />}
                                                </td> */}
                                                <td style={{ display: 'table-cell' }}>
                                                    {/* <span className="badge badge-inline badge-danger">{item.status}</span> */}
                                                    <span class="badge badge-inline badge-danger" style={{ color: "black", fontSize: '14px', fontWeight: 'bold', backgroundColor: item?.status[0]?.name === "Rejected" ? "red" : item?.status[0]?.name === 'Pending' ? 'yellow' : item?.status[0]?.name === 'Approved' ? 'green' : item?.status[0]?.name === 'Waiting' ? 'blue' : item?.status[0]?.name === 'Next Slot' ? 'purple' : '' }}>{item?.status[0]?.name}</span>
                                                </td>
                                                <td>{item?.seller?.applicationNo}</td>
                                                <td>{item?.seller?.applicationDate}</td>
                                                <td>{item?.seller?.bene_firstname}</td>
                                                <td>{item?.seller?.bene_lastname}</td>
                                                <td>{item?.seller?.dob}</td>
                                                <td>{item?.seller?.age}</td>
                                                <td>{item?.seller?.gender}</td>
                                                <td>{item?.seller?.mobile}</td>
                                                <td>{item?.seller?.email}</td>
                                                <td>{item?.seller?.udId_No}</td>
                                                <td>{item?.seller?.PerOfDis}%</td>
                                                <td>{item?.seller?.employmentDetail?.annualIncom}</td>
                                                <td>{item?.seller?.employmentDetail?.bpl}</td>
                                                <td>{item?.seller?.residentOf}</td>
                                                <td>{item?.seller?.adhaarCard}</td>

                                                {/* <td>{item?.seller?.bloodGroup}</td> */}
                                                <td>{item?.seller?.castCategory}</td>
                                                <td>{item?.seller?.maritalStatus}</td>
                                                <td>{item?.seller?.businessCategory?.name}</td>
                                                <td>{item?.seller?.udidType}</td>
                                                <td>{item?.seller?.disabltyByBirth ? "Yes" : 'No'}</td>
                                                <td>{item?.seller?.idProof}</td>

                                                <td id="image-container" onClick={() => openModal(item?.seller?.idProofFile?.url, 'Identity Proof')}>
                                                    {/* <img src={item?.seller?.idProofFile?.url} alt="" style={{ width: '40px' }} /> */}
                                                    <button type="button" onClick={() => openModal(item?.seller?.idProofFile?.url, 'Identity Proof')}>Show</button>
                                                </td>
                                                <td id="image-container" onClick={() => openModal(item?.seller?.addressProof[0]?.url, 'Address Proof')}>
                                                    {/* <img src={item?.seller?.addressProof[0].url} alt="" style={{ width: '40px' }} /> */}
                                                    <button type="button" onClick={() => openModal(item?.seller?.addressProof[0]?.url, 'Address Proof')}>Show</button>
                                                </td>
                                                <td id="image-container" onClick={() => openModal(item?.seller?.castCertificate?.url, 'Cast Certificate Proof')}>
                                                    {/* <img src={item?.seller?.castCertificate.url} alt="" style={{ width: '40px' }} /> */}
                                                    <button type="button" onClick={() => openModal(item?.seller?.castCertificate?.url, 'Cast Certificate Proof')}>Show</button>
                                                </td>
                                                {/* <td id="image-container" onClick={() => openModal(item?.seller?.castCertificate?.url, 'cast Certificate Proof')}>
                                                    <img src={item?.seller?.castCertificate.url} alt="" style={{ width: '40px' }} />
                                                </td> */}
                                                <td id="image-container2" onClick={() => openModal(item?.seller?.disabilityCertImage?.url, 'Disability Cert Image')}>
                                                    {/* <img src={item?.seller?.disabilityCertImage?.url} alt="" style={{ width: '40px' }} /> */}
                                                    <button type="button" onClick={() => openModal(item?.seller?.disabilityCertImage?.url, 'Disability Cert Image')}>Show</button>
                                                </td>
                                                <td id="image-container2" onClick={() => openModal(item?.seller?.udId_File?.url, 'UDID Proof')}>
                                                    {/* <img src={item?.seller?.udId_File?.url} alt="" style={{ width: '40px' }} /> */}
                                                    <button type="button" onClick={() => openModal(item?.seller?.udId_File?.url, 'UDID Proof')}>Show</button>
                                                </td>
                                                <td id="image-container2" onClick={() => openModal(item?.seller?.frontOfBankPassBook?.url, 'Front Of Bank PassBook')}>
                                                    {/* <img src={item?.seller?.frontOfBankPassBook?.url} alt="" style={{ width: '40px' }} /> */}
                                                    <button type="button" onClick={() => openModal(item?.seller?.frontOfBankPassBook?.url, 'Front Of Bank PassBook')}>Show</button>
                                                </td>
                                                <td id="image-container2" onClick={() => openModal(item?.seller?.affidavith?.url, 'Affidavith')}>
                                                    {/* <img src={item?.seller?.affidavith?.url} alt="" style={{ width: '40px' }} /> */}
                                                    <button type="button" onClick={() => openModal(item?.seller?.affidavith?.url, 'Affidavith')}>Show</button>
                                                </td>

                                                <td style={{ display: 'none' }}>{item?.seller?.idProofFile?.url}</td>
                                                <td style={{ display: 'none' }}>{item?.seller?.affidavith?.url}</td>
                                                <td >{item?.seller?.status[item?.seller?.status?.length - 1]?.comment}</td>
                                                <td>
                                                    <select className="form-select" style={{ width: "120px" }} aria-label="Default select example" value={item?.seller?.status[item?.seller?.status?.length - 1]?.status
                                                    } name="status" onChange={(e) => { statusChangeOnPage(e.target.value, item?.seller?._id) }}>
                                                        <option selected value={null}>Open this select menu</option>
                                                        {statusList && statusList?.map((item, i) => {
                                                            return <option value={item?._id} key={i}>{item?.name}</option>
                                                        })}
                                                    </select></td>
                                                <td className="d-flex">
                                                    <button onClick={() => { managePdfData(item) }} className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" type="button">
                                                        <VscFilePdf />
                                                    </button>
                                                    {/* <button onClick={() => { handleGenerateExcel(item) }} className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" type="button">
                                                        <VscFilePdf />
                                                    </button> */}

                                                    <button type="button" onClick={() => handleDelete(item?.seller?._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                                        <i className="las la-trash icon-icon">
                                                        </i>
                                                    </button>
                                                    <Link className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to={`/admin/special-seller/details/${item?.seller?._id}`}>
                                                        {/* <i className="las la-eye">
                                    </i> */}
                                                        <GrView />
                                                    </Link>
                                                </td>


                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>
        </>
    )
}
export default SpecialSellerList