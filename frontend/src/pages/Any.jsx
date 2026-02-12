import { useState } from "react";
//import {  Loader2 } from "lucide-react"

function Any() {
    const [message, setMessage] = useState("");
    const [reply, setReply] = useState("");
    const [isLoading , setIsLoading] = useState(false);

    const sendMessage = async () => {
        try {
            setIsLoading(true)
            const res = await fetch("http://localhost:4000/qr/assistant", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
            });

            const data = await res.json();
            console.log("Backend response:", data); // 🔹 debug
            if (data.success) setReply(data.reply);
            else alert(data.message);
        } catch (err) {
            console.error("Error calling backend:", err);
        }setIsLoading(false)
    };


    return (
        <div className="justify-items-center  " >
        <div className=" w-full max-w-md space-y-4 bg-white-400 rounded-2xl shadow-xl shadow-gray-700 p-5">
            <h6 className="  hover:bg-gray-700   bg-green-500 mb-40 p-8 rounded-xl shadow-lg w-full max-w-md text-center bg-center" >Personal AI Assistant</h6>
              <a className="top-10 ml-1.5 bg-transparent rounded-lg " href="/ci"><u><i><b>CI</b></i></u></a>
              <h2><p className="text-purple-700 text-center "><u><b><i>Express some thing what in your mind</i></b></u> </p></h2>
              <a className="top-10 ml-1.5 bg-transparent rounded-lg " href="/">🔙</a>
               
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type something..."
               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-700 outline-none"
            />

            <button 
            onClick={sendMessage} 
            style={{ marginLeft: "10px" }} 
            className="w-full bg-blue-600   text-white py-2 rounded-lg hover:bg-yellow-700 transition disabled:opacity-50" 
            disabled = {isLoading}
            >
                {isLoading ? (
                    <>
                     {/*<Loader2 className="h-5 w-5 animate-spin text-white" /> */}
                    <span>SendingMessage</span></>
                ) : (
                    "Send"
                )}
            </button>

            {reply && <p><strong>AI:</strong> {reply}</p>}
        </div>
        </div>
    );
}

export default Any;
