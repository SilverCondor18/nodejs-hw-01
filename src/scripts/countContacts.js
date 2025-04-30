import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        return contacts.length;
    }
    catch(error)
    {
        console.log("An error occured: " + error.message);
    }
};

console.log(await countContacts());
