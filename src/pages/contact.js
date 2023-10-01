
const Contact = () => {
    return (
        <div className="h-screen bg-indigo-950">
            <form className="flex-1 flex flex-col gap-6 w-full mx-auto">
                <center className="text-5xl font-bold text-white pt-14">Let's <span className="text-red-500">Connect</span></center>
                <div className="pt-10 flex gap-x-6 w-full justify-center">
                    <input type="text" placeholder="Your Name" className="border-3 bg-indigo-950 rounded-lg w-96 h-10 p-4  ring-2 "></input>
                    <input type="email" placeholder="Your Email" className="border-3 bg-indigo-950 rounded-lg w-96 h-10 p-4 ring-2"></input>

                </div>
                <div class="flex justify-center pb-3">
                    <textarea type="text" placeholder="Write Message Here..."
                        class="bg-indigo-950 h-60 w-96 p-2 text-lg text-white border-3 border-blue-800 rounded-lg ring-2"></textarea>
                </div>
                <div className="flex justify-center ">
                <button className="text-red-500 text-xl  font-bold bg-indigo-950 ring-2 border-blue-800 px-3 py-1 rounded-xl hover:bg-red-500">Send</button></div>
            </form>
        </div>
    );
}

export default Contact;