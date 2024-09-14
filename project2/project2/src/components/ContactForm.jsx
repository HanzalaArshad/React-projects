import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "../contactForm.module.css";
import Button from "./Button";
import { useState } from "react";
const ContactForm = () => {
  const [name ,setName]=useState("Hanzala Arhsad");
  const [email ,setEmail]=useState("hanzalaarshad338@gmail.com");
  const [text ,setText]=useState("making projects in reacts");


  const onSubmit=(event)=>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value)


    

  }
  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.topBtn}>     
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>} />
        <Button 
        
      
        text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
</div>

<Button isOutline={true} text="VIA EMAIL FORM " icon={<MdEmail fontSize="24px"/>}/>
  

  <form onSubmit={onSubmit}>
    <div className={styles.formController}>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" />

    </div>
    <div className={styles.formController}>
    <label htmlFor="email">Email</label>
    <input type="text" name="email" />

    </div>
    <div className={styles.formController}>
    <label htmlFor="text">Text</label>
    <textarea name="text"  rows="10" />

    </div>
    <div style={{display:"flex", justifyContent:"end"}}>    
      
      <Button text="SUBMIT"/>
    </div>


  </form>

      </div>

      <div className={styles.contactImage}>
        <img src="/images/contact1.webp" alt="" />
      </div>


      <div>
        {
          name + " "+ email+ " "+text }
      </div>

    </section>

  )
}

export default ContactForm;