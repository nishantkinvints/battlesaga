import React, { useRef } from 'react'

const EmailSubscribe = () => {
    const emailref = useRef('');

    const submitform = (event) => {
        event.preventDefault()
        const emailtext = emailref.current.value;

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

        if(res){
            emailref.current.value = '';
        }
    }

    return (
        <div className="email_subscribe_wrap">
            <div className="email_subscribe_inner">
                <p> Subscribe to </p>
                <form action="" onSubmit={submitform}>
                    <input type="email" name="email" placeholder="Email*" ref={emailref}/>
                    <button type="submit" className="submit_btn">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default EmailSubscribe
