const contacts = require("./db/contacts");

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    //     case "get":
    //       const contact = await contacts.getContactById(id);
    //       return console.log(contact);

    //     case "add":
    //       const addContact = await contacts.addContact({ name, email, phone });
    //       return console.log("addContact: ", addContact);

    //     case "remove":
    //       const deleteContact = await contacts.deleteContact(id);
    //       return console.log("deleteContact: ", deleteContact);

    //     default:
    //       console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction({ action: "list" });
