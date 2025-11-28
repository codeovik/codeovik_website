import Button from "../components/Button"
import Social from "../components/Social";

export default function Contact() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        await fetch("https://script.google.com/macros/s/AKfycbxQbPUSh4ql8f-BBceWDnV56myT3SzB3gQtxdKEzPP3gpFqPiTH1E39SCc9sphFWX6G/exec", {
            method: "POST",
            mode: "no-cors",
            body: formData,   // <-- এখানে JSON নয়, FormData যাবে
        });

        alert("Message sent!");
    };


    return (
        <>
            <h1 className="flex sm:text-8xl font-semibold max-w-250 mx-auto text-4xl flex-wrap justify-center items-center gap-3 md:gap-6 mb-25">
                <span>Let's</span>
                <span>talk</span>
                <img src="/robot.jpg" alt="" className="h-10 sm:h-24 rounded-full aspect-auto" />
                <span>about</span>
                <span>your</span>
                <span>project</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="bg-[#101010] p-10 rounded-2xl">
                    <h2 className="text-3xl font-bold">Send a mail</h2>
                    <p className="my-5 text-sm">If you have inquiries or suggestions, please do not hesitate to reach out to us using the form below</p>
                    <form onSubmit={handleSubmit} className="flex flex-col text-lg">
                        <label htmlFor="name">Your name</label>
                        <input name="name" className="mb-3 rounded-lg py-4 px-4 focus:outline-none border-[#303030] border-2 focus:border-primary" id="name" type="text" placeholder="Give your name" />
                        <label htmlFor="subject">Your subject</label>
                        <input name="subject" className="mb-3 rounded-lg py-4 px-4 focus:outline-none border-[#303030] border-2 focus:border-primary" id="subject" type="text" placeholder="Give your subject" />
                        <label htmlFor="email">Your email</label>
                        <input name="email" className="mb-3 rounded-lg py-4 px-4 focus:outline-none border-[#303030] border-2 focus:border-primary" id="email" type="email" placeholder="Give your email" />
                        <label htmlFor="message">Your message</label>
                        <textarea name="message" className="mb-3 rounded-lg py-4 px-4 focus:outline-none border-[#303030] border-2 focus:border-primary [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#20202000] [&::-webkit-scrollbar-thumb]:bg-white resize-none [&::-webkit-scrollbar-thumb]:rounded-full" id="message" rows={3} placeholder="Give your message"></textarea>
                        <div className="">
                            <Button>
                                Send now
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col gap-2 bg-[#101010] p-7 rounded-xl">
                    <h2 className="text-3xl font-bold">Other ways to contact</h2>
                    <p className="my-5 text-sm">You can also reach us through the following methods:</p>
                    <div className="">
                        <div className="flex flex-col gap-2 bg-[#202020] p-5 rounded-xl mb-5">
                            <div className="flex gap-4">
                                <svg class="fill-white scale-150" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" /></svg>
                                <h3 className="font-bold text-2xl">Email</h3>
                            </div>
                            <a href="mailto:codeovik@gmail.com" className="after:w-0 after:h-px after:bg-white after:absolute relative after:rounded-full after:left-0 after:bottom-0 hover:after:w-full after:transition-all w-max">codeovik@gmail.com</a>
                        </div>
                        <div className="flex flex-col gap-2 bg-[#202020] p-5 rounded-xl mb-5">
                            <div className="flex gap-4">
                                <svg class="fill-white scale-150" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M360-440h80v-110h80v110h80v-190l-120-80-120 80v190Zm120 254q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
                                <h3 className="font-bold text-2xl">Address</h3>
                            </div>
                            <a target="_blank" href="http://maps.google.com/" className="after:w-0 after:h-px after:bg-white after:absolute relative after:rounded-full after:left-0 after:bottom-0 hover:after:w-full after:transition-all w-max">Faridpur, Bangladesh</a>
                        </div>
                        <Social />
                    </div>
                </div>
            </div>
        </>
    );
}