import herbIcon from '../../media/icon-herb.png'

const Contact = () => {
    return(
        <section className='contact-back'>
            <div className='contact-container'>
                <h2 className='contact-header'>We're here for you <img src={ herbIcon } alt="Herb Icon" width='30px' /></h2> 
                <br />
                <h5 className='contact-info'>For urgent inquiries and store-specific questions, <br />
                    please contact the store directly at <span className="contact-phone">636 947 4035</span>.</h5>
                <br />
                <h5 className='contact-info'>All other inquiries, please complete the form below.</h5>
<br />
                <div>
                <form
    action="https://formspree.io/f/mnqrjvly"
    method="POST">

<input type="hidden" name="_language" value="" />

<div className='contact-form'>
    <input type="email" className='text-input' name="email" placeholder="Full name" required=""/>
</div>

<div className='contact-form'>
    
    <input type="email" className='text-input'  name="email" placeholder="Email" required=""/>
</div>

<div className='contact-form'>
    <textarea className='text-input message'  name="message" placeholder="Message" required=""></textarea>
</div>

<br/>

<div className='contact-form'>
    <button className='btn-form' type="submit">Submit</button>
</div>

</form>
                </div>
            </div>
        </section>
    )
}

export default Contact;