const contacts = require("./db/contacts");

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    case "getContact":
      const contact = await contacts.getContactById(id);
      return console.log(contact);

    case "addContact":
      const addContact = await contacts.addContact({ name, email, phone });
      return console.log("addContact: ", addContact);

    case "removeContact":
      const deleteContact = await contacts.removeContact(id);
      return console.log("deleteContact: ", deleteContact);

    case "updateContact":
      const updateContact = await contacts.updateContact(id, {
        name,
        email,
        phone,
      });
      return console.log("newContact: ", updateContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "getContact", id: "2" });
// invokeAction({
//   action: "addContact",
//   name: "Petro",
//   email: "petro@net",
//   phone: "123456",
// });
// invokeAction({ action: "removeContact", id: "3" });
invokeAction({
  action: "updateContact",
  id: "3GFQ4C2mS0PAFDakhAfID",
  name: "Oleg",
  email: "petro@net3",
  phone: "3333",
});
