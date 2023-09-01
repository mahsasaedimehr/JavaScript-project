import {contactsListDrawer,
        contactNameInput,
        phoneNumberInput,
        SIMStorageInput,
        DeviceStorageInput,
        contactsListElement,
        closeDrawerButton} from'./importer.js';
        import{ContactInfoType, contactProps} from "./type";
        import{contactsList} from "./state.js";
        import { createListItem, validateFields } from './function.js';

export const showContactsButtonHandeler =() =>{
    contactsListDrawer?.classList.remove("hidden");
};


export const closeDrawerButtonHandeler =() =>{
    closeDrawerButton?.classList.add("hidden");
};

const validateCreateContact = (contactInfo: ContactInfoType) =>{
    if (!validateFields(contactInfo.contactName, contactInfo.phoneNumber + "")){
        alert("fill all fields!");
        throw Error ("fill all fields!");
    }
};

export const handleCreateContact = () =>{

   validateCreateContact({
    contactName:contactNameInput!.value,
    phoneNumber:phoneNumberInput!.value,
   });

    const newContact:contactProps={
        id:crypto.randomUUID(),
        contactName:contactNameInput?.value ??'',
        phoneNumber:phoneNumberInput?.value ??'',
        avatar:null,
        storage:DeviceStorageInput?.checked?"Device":"SIM",
    };
    contactsList.push(newContact);

    const listItem = createListItem({
        contactName:newContact.contactName,
        phoneNumber:newContact.phoneNumber,
    });

    contactsListElement?.appendChild(listItem);
}