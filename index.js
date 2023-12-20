const { Command } = require("commander");

const contacts = require("./contacts");

const program = new Command();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

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

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();
invokeAction(options);

// invokeAction({ action: "list" });
// invokeAction({ action: "getContact", id: "2" });
// invokeAction({
//   action: "addContact",
//   name: "XXXXXX",
//   email: "xxxxx@xxx",
//   phone: "123456",
// });
// invokeAction({ action: "removeContact", id: "ieL6-sECD69Fm9s0hCeHi" });
// invokeAction({
//   action: "updateContact",
//   id: "5",
//   name: "Update - Cyrus Jackson",
//   email: "Update -nibh@semsempererat.com@net3",
//   phone: "472-5218",
// });
