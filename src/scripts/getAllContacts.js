import { readContacts } from "../utils/readContacts.js";
export const getAllContacts = async () => {
    try {
        const contacts = await readContacts();
        const readableContactsList = contacts.map(c => {
            return `${c.name}\r\n\tPhone: ${c.phone}\r\n\tEmail: ${c.email}\r\n\tJob: ${c.job}`;
        });
        return readableContactsList.join("\r\n");
    }
    catch(error)
    {
        return "An error occured: " + error.message;
    }
};

console.log(await getAllContacts());
