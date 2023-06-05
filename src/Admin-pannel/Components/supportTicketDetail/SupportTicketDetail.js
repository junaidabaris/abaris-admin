import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';

function SupportTicketDetail() {
    const params = useParams()
    const [data, setData] = useState(null)
    
    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/ticketList/user/`)
            setData(res.data)
        } catch (error) {
            alert('Faild To load Ticket Detail')
        }
    }

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="col-lg-10 mx-auto">
                        <div className="card">
                            <div className="card-header row gutters-5">
                                <div className="text-center text-md-left">
                                    <h5 className="mb-md-0 h5">Good evening, top urgently send my item to home delivery address. Thanks. #1000003631</h5>
                                    <div className="mt-2">
                                        <span> Azharuddin Shamim </span>
                                        <span className="ml-2"> 2023-02-07 09:13:22 </span>
                                        <span className="badge badge-inline badge-secondary ml-2 text-capitalize">
                                            Pending
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <form action="https://mmslfashions.in/admin/support_ticket/reply" method="post" id="ticket-reply-form" encType="multipart/form-data">
                                    <input type="hidden" name="_token" defaultValue="iBYZn0yUYtaUjAFRti5rGbbxBIt6hBfgN5hhrs59" />                    <input type="hidden" name="ticket_id" defaultValue={2} required />
                                    <input type="hidden" name="status" defaultValue="pending" required />

                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                placeholder="Reply"
                                                name="reply"
                                                required
                                            />
                                        </div>

                                    </div>
                                    <div className="form-group mb-0 text-right">
                                        <button type="submit" className="btn btn-sm btn-dark" onclick="submit_reply('pending')" fdprocessedid="1dsypw">
                                            Submit

                                        </button>
                                        {/* <button type="submit" className="btn btn-icon btn-sm btn-dark" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" fdprocessedid="s51xc"><i className="las la-angle-down" /></button> */}
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#" onclick="submit_reply('open')">Submit as <strong>Open</strong></a>
                                            <a className="dropdown-item" href="#" onclick="submit_reply('solved')">Submit as <strong>Solved</strong></a>
                                        </div>
                                    </div>
                                </form>
                                <div className="pad-top">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            <div className="media">
                                                <a className="media-left" href="#">
                                                    <span className="avatar avatar-sm mr-3"><img src="https://mmslfashions.in/public/assets/img/avatar-place.png" /></span>
                                                </a>
                                                <div className="media-body">
                                                    <div className>
                                                        <span className="text-bold h6">Azharuddin Shamim</span>
                                                        <p className="text-muted text-sm fs-11">2023-01-22 11:13:01</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className>
                                                <p>Hi, plz delivery my item to home delivery address. Thanks.<br /></p>
                                                <div className="mt-3">
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item px-0">
                                            <div className="media">
                                                <a className="media-left" href="#">
                                                    <span className="avatar avatar-sm m-3"><img src="https://mmslfashions.in/public/assets/img/avatar-place.png" /></span>
                                                </a>
                                                <div className="media-body">
                                                    <div className="comment-header">
                                                        <span className="text-bold h6 text-muted">Azharuddin Shamim</span>
                                                        <p className="text-muted text-sm fs-11">2023-02-07 09:13:22</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                Good evening, top urgently send my item to home delivery address. Thanks.                            <br />
                                            </div>
                                        </li>
                                    </ul>
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
export default SupportTicketDetail;