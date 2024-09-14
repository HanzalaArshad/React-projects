import { FaCircleUser } from "react-icons/fa6";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdate from "./AddAndUpdate";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({ contacts }) => {

  const {open,onClose,onOpen} = useDisclouse();


  const DeleteContact = async (id) => {
    try {
      const contactDocRef = doc(db, "contacts", id);
      await deleteDoc(contactDocRef);
      toast.success("Contact Deleted Successfully")
      
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <>
      <div key={contacts.id} className="bg-[#b10fc3ee] flex justify-between items-center p-2 rounded-lg">
        <div className="flex gap-3">
          <FaCircleUser className="text-violet-300 text-3xl" />
          <div className="text-black">
            <h2 className="font-medium">{contacts.name}</h2>
            <p className="text-sm">{contacts.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine onClick={onOpen}  className="cursor-pointer"/>
          <IoMdTrash onClick={() => DeleteContact(contacts.id)} className="text-[#1e0122ee]" />
        </div> 
      </div>
      <AddAndUpdate contacts={contacts} isUpdate open={open} onClose={onClose} />
    </>
  );
};

export default ContactCard;
