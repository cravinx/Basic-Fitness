import React, {useState} from 'react';
import axios from 'axios';
import { Clipboard } from 'lucide-react';
import { toast } from 'react-toastify';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false)

    const sendMail = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            const {data} = await axios.post(
                'http://127.0.0.1:8000/contact/',
                {
                    name:name,
                    email:email,
                    message:message,
                },
                {
                    withCredentials: false,
                    headers: {"Content-Type": "application/json"}
                }
            );
            setName("");
            setEmail("");
            setMessage("");
            toast.success(data.message);
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
            toast.error("Something went wrong. Please try again");
        }
    }; 

  return (
    <section className="contact">
        <form onSubmit={sendMail}>
            <h1>CONTACT US</h1>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Message</label>
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button
            type='submit'
            disabled={loading}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
            }} 
            >
                {loading && <clipLoader size={20} color="white"/>}
                Send Message
            </button>
        </form>
    </section>
  )
}

export default Contact