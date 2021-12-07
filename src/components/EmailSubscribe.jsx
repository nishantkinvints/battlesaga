import React, { useRef, useState } from 'react'
import Sectiontitle from './Sectiontitle'
import ScrollAnimation from 'react-animate-on-scroll';

const EmailSubscribe = () => {

    const emailref = useRef('');
    const [thanksmessage, setthanksmessage] = useState(false)

    const mesageHide = () => {
        setthanksmessage(false)
    }

    const submitform = (event) => {
        event.preventDefault()
        const emailtext = emailref.current.value;


        if(emailtext.length > 0){
            const res = fetch("https://battlesaga-2fdc7-default-rtdb.firebaseio.com/email-from.json", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: emailtext,
                }),
            })
            setthanksmessage(true)
            if(res){
                emailref.current.value = '';
            }
        }
        
    }

    return (
        <div className="email_subscribe_wrap" id="subscribe">
            <div className="email_subscribe_inner">
                <ScrollAnimation animateIn='animate__fadeInUp' animateOnce={true}>
                    <Sectiontitle title="Subscribe"/>
                </ScrollAnimation>
                <div className="form_both_wrap">
                    <p> Subscribe to </p>
                    <form action="" onSubmit={submitform}>
                        <input type="email" name="email" placeholder="Email*" ref={emailref} onChange={mesageHide} onClick={mesageHide}/>
                        <button type="submit" className="submit_btn">Subscribe</button>
                    </form>
                    {thanksmessage && <span className="thanks_message">Thank you, you've subscribed successfully!</span>}
                </div>
            </div>
        </div>
    )
}

export default EmailSubscribe;
