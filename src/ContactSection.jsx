
export default function ContactSection()
{
    return(
        <div className="contact-section">
            <div className="contact-title">Contact Me</div>

            <div className="contact-subtitle">Send me an email or a message and I will get back to you!</div>

            <form action="">
                <table>
                    <tbody>
                    <tr>
                        <td><input type="text" placeholder="Name.."/></td>
                    </tr>
                    <tr>
                        <td><input type="email" placeholder="Email.."/></td>
                    </tr>
                    <tr>
                        <td><textarea name="" id="" cols="90" rows="10" placeholder="Message"></textarea></td>
                    </tr>
                    <tr>
                        <td><input type="submit" /></td>
                    </tr>
                    </tbody>
                   
                </table>
            </form>
            
            
        </div>
    )
}