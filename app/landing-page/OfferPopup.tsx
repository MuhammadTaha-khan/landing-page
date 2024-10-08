import { useContent } from "@/providers";
import { useEffect, useState } from "react";

export const OfferPopup = ({ submitEmail }: { submitEmail: (email: string, fullName: string, subject: string, phoneNumber: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [email, setEmail] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [subject, setSubject] = useState<string>("");

    const { content } = useContent();

    useEffect(() => {
        const timeout = setTimeout(() => {
            openModal();
        }, 5000); // Show the popup after 5 seconds

        return () => clearTimeout(timeout); // Clear the timeout on unmount
    }, []);


    return (
        <>
            {isOpen && (
                <div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative w-full max-w-2xl">
                        <div className="relative bg-white rounded-lg shadow-lg w-full">

                            <button type="button" className="absolute top-0 right-0 m-3 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 inline-flex justify-center items-center" onClick={closeModal}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="space-y-4 flex flex-col md:flex-row items-center">
                                <img src="/images/swetter@2x 1.png" alt="" className="w-1/2 hidden md:block rounded" />
                                <div className="flex-grow md:ml-4 p-2">
                                    <h1 className="text-md font-medium md:text-lg xl:text:xl mb-4 text-center md:text-left">
                                        <img src="/images/tada.png" alt="" className="w-6 h-6" />
                                        Get a chance to download the 10 steps to do annual chemical inventory
                                    </h1>
                                    <input className="w-full rounded-full py-4 px-8 text-sm focus:outline-none border mb-1" placeholder="Name" value={fullName} onChange={(e) => setFullName(e?.target?.value)} />
                                    <input className="w-full rounded-full py-4 px-8 text-sm focus:outline-none border mb-1" placeholder="Email" value={email} onChange={(e) => setEmail(e?.target?.value)} />
                                    <button className="w-full text-white py-3 px-6 rounded-full" style={{ "background": "linear-gradient(59.46deg, #589142 21.2%, #AEE77E 78.8%)" }} onClick={() => {
                                        submitEmail(email, fullName, subject, phoneNumber);
                                        closeModal();
                                    }}>
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}