import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
    try {
        const fakeContact = createFakeContact();
        const contactsList = await readContacts();
        contactsList.push(fakeContact);
        await writeContacts(contactsList);
    }
    catch(error) {
        console.log("An error occured: " + error.message);
    }
};

addOneContact();
