const AgendasServices = {};
const url = "https://playground.4geeks.com/contact";

AgendasServices.getAgendasWithContacts = async () => {

    try {
        const resp = await fetch(url + '/agendas')
        if (!resp.ok) throw new Error("Error fetching agendas");
        const data = await resp.json();


        const agendasWithContacts = await Promise.all(
            data.agendas.map(async (agenda) => {
                const resp = await fetch(url + `/agendas/${agenda.slug}/contacts`);
                if (!resp.ok) throw new Error('Error fetching contacts');
                const result = await resp.json();

                return {
                    slug: agenda.slug,
                    contacts: result.contacts
                };
            })
        );
        return agendasWithContacts;
    } catch (error) {
        console.error(error);
        return [];
    }
}


export default AgendasServices
