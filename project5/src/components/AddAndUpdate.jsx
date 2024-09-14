import { Formik, Form, Field, ErrorMessage } from "formik";
import Modal from "./Modal";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as yup from "yup";






const ContactsSchemaValidation=yup.object().shape({
  name:yup.string().required("Name is Required"),
  email:yup.string().email("Invalid Email").required("Email is Required")

})
const AddAndUpdate = ({ open, onClose, isUpdate, contacts }) => {

  const AddContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      toast.success("Contact Added Successfully");


      onclose();

    } catch (error) {
      console.log("Error adding contact:", error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id); // Corrected here
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");

    } catch (error) {
      console.log("Error updating contact:", error);
    }
  };

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Formik
         validationSchema={ContactsSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contacts.name || "",
                  email: contacts.email || "",
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={async (values) => {
            console.log(values);
            if (isUpdate) {
              await updateContact(values, contacts.id); // Ensure the ID is passed
            } else {
              await AddContact(values);
            }
            onClose()
          }}
        >
          <Form className="flex flex-col gap-4 p-3">
            <div className="flex flex-col gap-1 mx-4 ">
              <label htmlFor="name">Name</label>
              <Field name="name" className="border-2 border-black h-10 " />
              <div className="text-red-500">

                <ErrorMessage name="name"/>

              </div>
            </div>

            <div className="flex flex-col gap-1 mx-4">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="border-2 border-black h-10" />
            </div>

            <div className="text-red-500 mx-4">

                <ErrorMessage name="email"/>

              </div>

            <button className="bg-[#b10fc3ee] px-3 py-1.5 border self-end">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdate;
