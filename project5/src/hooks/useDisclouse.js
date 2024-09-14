import { useState } from "react";

const useDisclouse = () => {

  const [contacts, setContacts] = useState([]);
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return {onClose,onOpen,open}
}

export default useDisclouse