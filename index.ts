import{submitButton,showContactsButton} from "./src/importer.js";
import {showContactsButtonHandeler,closeDrawerButtonHandeler,handleCreateContact} from"./src/events.js";




showContactsButton?.addEventListener("click",showContactsButtonHandeler);
showContactsButton?.addEventListener("click",closeDrawerButtonHandeler);
submitButton?.addEventListener("click", handleCreateContact);