import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try
    {
        await writeContacts([]);
    }
    catch(error)
    {
        console.log("An error occured: " + error.message);
    }
};

removeAllContacts();
