import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const ContactCard = ({ id, name, phone, email, address }) => {

    const [showModal, setShowModal] = useState(false);


    return (

        <div className="card mx-auto my-3 p-3">
            <div className="row align-items-center">
                <div className="col-md-2 text-center">
                    <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5v-b7X2ApZmEbt4ePhfeV5P_T1QcqEHUKb1zlhkGUA9JtpXRzzlmEEvcQs6PhHIko1h0&usqp=CAU"
                        alt=""
                    />
                </div>

                <div className="col-md-7 text-start">
                    <h5>{name}</h5>
                    <p className="mb-1 fw-light"><i class="fa-solid fa-location-dot" style={{ color: "gray" }}></i> {address}</p>
                    <p className="mb-1 fw-light"><i class="fa-solid fa-phone-flip" style={{ color: "gray" }}></i> {phone}</p>
                    <p className="mb-1 fw-light"><i class="fa-solid fa-envelope" style={{ color: "gray" }}></i> {email}</p>

                </div>

                <div className="col-md-3 text-end">
                    <Link to={`/edit/${id}`} className="btn btn">
                        <i className="fa-solid fa-pen"></i>
                    </Link>
                    <button className="btn btn" onClick={() => setShowModal(true)}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>

            {showModal && <Modal onClose={() => setShowModal(false)} />}
        </div>
    )
}


export default ContactCard