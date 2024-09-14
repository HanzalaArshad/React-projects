import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FaSearch } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdate from "./components/AddAndUpdate";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./components/NotFound";


function App() {
  const [contacts, setContacts] = useState([]);  // Initialize as an empty array
  const { open, onClose, onOpen } = useDisclouse();

  

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);

        onSnapshot(contactsRef,(snapshot)=>{
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
  
          setContacts(contactList);
          return contactList;
  
        })
              } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    getContacts();
  }, []);

  const filterContact = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };
  

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex gap-4">
          <div className="flex relative items-center flex-grow">
            <FaSearch className="text-white text-2xl absolute ml-2" />
            <input
            onChange={filterContact}
              type="text"
              className="flex-grow bg-[#2c2b2bc5] border-2 border-white rounded-md h-[40px] text-white pl-10"
            />
          </div>
          <div>
            <CiCirclePlus className="text-white text-5xl cursor-pointer" onClick={onOpen} />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          {contacts.length <= 0?<NotFound/>: contacts.map((contact) => (
            <ContactCard key={contact.id} contacts={contact} />
          ))}
        </div>
      </div>

      <AddAndUpdate open={open} onClose={onClose} />
      <ToastContainer/>
    </>
  );
}

export default App;
