//Build a contacts manager (array of objects): add, search by name (filter and includes), sort, delete by index and show with console.table.

let contacts = [
    { id: 1, name: "Arun", phone: "9876543210", city: "Chennai" },
    { id: 2, name: "Priya", phone: "9876543211", city: "Madurai" },
    { id: 3, name: "Kavin", phone: "9876543212", city: "Chennai" },
    { id: 4, name: "Divya", phone: "9876543213", city: "Coimbatore" }
];


// add contact
function addContact(contact){
    contacts.push(contact);
    console.log("Your contact added successfully");
}


// call addContact

addContact({
    id: 5,
    name: "Rahul",
    phone: "9876543214",
    city: "Ramanathapuram"
});

// Search contact by name

function searchContact(name) {
    const result = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(name.toLowerCase());
    });
    if (result.length > 0) {
        console.table(result);
    } else {
        console.log("No matching contacts found");
    }
    return result;
}
searchContact("ar");

//sort
function sortContacts(){
    contacts.sort((a,b)=>{
        return a.name.localeCompare(b.name);
    });

    console.table(contacts);
}
sortContacts();

// delete
function deleteContact(index) {
    if (index >= 0 && index < contacts.length) {
        const removed = contacts.splice(index, 1);
        console.log(`${removed[0].name} deleted successfully`);
    } else {
        console.log("Invalid index");
    }
}

deleteContact(1);
deleteContact(10);

// Show all contacts
console.table(contacts);