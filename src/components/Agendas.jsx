import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import AgendasServices from "../Services/AgendasServices";
import ContactCard from "./ContactCard";



const Agendas = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {

        if (!store.agendas) {
            AgendasServices.getAgendasWithContacts().then((data) =>
                dispatch({ type: "saveAgendasWithContacts", payload: { agendasWithContacts: data } })
            );
        }
    }, []);


    return (

        <div className="container text-center mt-4">

            {store.agendas?.map((agenda) => (
                <div key={agenda.slug}>
                    
                    {agenda.contacts.map((contact) => (
                        <ContactCard key={contact.id} {...contact} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Agendas