import { useContent } from "@/providers";
import { useState } from "react";
// import _ from "lodash";

export const Navbar = ({ submitEmail }: { submitEmail: (email: string, fullName: string, subject: string, phoneNumber: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const [email, setEmail] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [subject, setSubject] = useState<string>("");

    const { content, setSearchTerm: setSearch } = useContent();

    const [searchTerm, setSearchTerm] = useState<string>("");
    const debouncedSearch = _.debounce((term: string) => {
        setSearch(term);
    }, 1000);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTerm(value);
        debouncedSearch(value);
    };

    return (
        <>
            <nav className="bg-white border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/images/k12_logo.png" className="h-9" alt="K12 Chemical Management Support" />
                        <span className="self-center text-sm md:text-2xl font-bold whitespace-nowrap logo-text" dangerouslySetInnerHTML={{ __html: content.site.title }}></span>
                    </a>
                    <button
                        aria-expanded={isNavbarOpen ? 'true' : 'false'}
                        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-[#589142] focus:outline-none hover:text-white"
                        aria-controls="navbar-default"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`w-full lg:flex lg:items-center lg:w-auto ${isNavbarOpen ? 'block' : 'hidden'}`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white">
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block rounded-full w-full py-4 px-6 ps-10 text-sm focus:outline-none shadow-custom" placeholder="Search" value={searchTerm} onChange={handleInputChange} />
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full mt-4 lg:mt-0" style={{ "background": "linear-gradient(59.46deg, #589142 21.2%, #AEE77E 78.8%)" }} onClick={openModal}>
                                Contact us
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Modal container */}
            {isOpen && (
                <div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-2xl">
                        <div className="relative bg-white rounded-lg shadow-lg w-full">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Contact Us                                </h3>
                                <button type="button" className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 inline-flex justify-center items-center" data-modal-hide="static-modal" onClick={closeModal}>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>

                            <div className="p-4 md:p-5 space-y-4">
                                <input className="w-full rounded-full py-4 px-4 text-sm focus:outline-none border" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e?.target?.value)} />
                                <input className="w-full rounded-full py-4 px-4 text-sm focus:outline-none border" placeholder="Subject" value={subject} onChange={(e) => setSubject(e?.target?.value)} />
                                <input className="w-full rounded-full py-4 px-4 text-sm focus:outline-none border" placeholder="Email" value={email} onChange={(e) => setEmail(e?.target?.value)} />
                                {/* <input className="w-full rounded-full py-4 px-4 text-sm focus:outline-none border" placeholder="Phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e?.target?.value)} /> */}
                                <button className="w-full text-white py-3 px-6 rounded-full mt-4" style={{ "background": "linear-gradient(59.46deg, #589142 21.2%, #AEE77E 78.8%)" }} onClick={() => {
                                    submitEmail(email, fullName, subject, phoneNumber);
                                }}>
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}