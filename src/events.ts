import {contactsListDrawer,
        contactNameInput,
        phoneNumberInput,
        SIMStorageInput,
        DeviceStorageInput,
        contactsListElement,
        closeDrawerButton} from'./importer.js';
        import{contactProps} from "./type";
        import{contactsList} from "./state.js";

export const showContactsButtonHandeler =() =>{
    contactsListDrawer?.classList.remove("hidden");
}


export const closeDrawerButtonHandeler =() =>{
    closeDrawerButton?.classList.add("hidden");
}

export const handleCreateContact =() =>{
   
    const newContact:contactProps={
        id:crypto.randomUUID(),
        contactName:contactNameInput?.value ??'',
        phoneNumber:phoneNumberInput?.value ??'',
        avatar:null,
        storage:DeviceStorageInput?.checked?"Device":"SIM",
    };
    contactsList.push(newContact);

    const listItem = document.createElement("li");
    listItem.className ="py-4 px-1";
    const contactNameElement = document.createElement("h2");
    contactNameElement.className = "text-slate-700";
    contactNameElement.innerText = newContact.contactName;
    const contactPhoneNumberElement = document.createElement("p");
    contactPhoneNumberElement.className = "text-slate-700";
    contactPhoneNumberElement.innerText = newContact.phoneNumber.toString();
    listItem.appendChild(contactNameElement);
    listItem.appendChild(contactPhoneNumberElement);
    contactsListElement?.appendChild(listItem);
}