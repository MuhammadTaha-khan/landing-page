import { useState } from "react";
import { Calendar } from "./Calendar";
import { useContent } from "@/providers";

export const Consultation = ({ submitEmail }: { submitEmail: (email: string, fullName: string, phoneNumber: string) => void }) => {
    const [email, setEmail] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const { content } = useContent();
    return (
        <section className="bg-white">
            <div className="max-w-screen-xl px-4 py-[5rem] mx-auto rounded-full">
                <h1 className="mb-2 text-3xl md:text-4xl text-center custom-heading" dangerouslySetInnerHTML={{ __html: content.consultation.title }}></h1>
                <div className="w-28 mx-auto h-1 mb-8 rounded-full" style={{ backgroundImage: 'linear-gradient(90deg, #589142 0%, #AEE77E 100%)', }}></div>
                <div className="grid grid-cols-12 gap-4 shadow-custom ">
                    {/* Calendar Section */}
                    <div className="col-span-12 md:col-span-5 bg-gray-100">
                        {/* Replace Calendar with your Calendar component */}
                        <Calendar />
                    </div>
                    {/* Form Section */}
                    <div className="col-span-12 md:col-span-7 bg-white p-6">
                        <div className="flex items-center mb-4">
                            {/* Profile Picture */}
                            <div className="h-12 w-12 rounded-full overflow-hidden">
                                <img src={content.consultation.authorImage} alt="Profile Picture" className="object-cover h-full w-full" />
                            </div>
                            {/* Name */}
                            <span className="ml-3 text-lg font-medium text-gray-800" dangerouslySetInnerHTML={{ __html: content.consultation.authorName }}></span>
                        </div>

                        <h2 className="text-xl md-3xl lg:text-5xl font-semibold mb-4" dangerouslySetInnerHTML={{ __html: content.consultation.text }}></h2>

                        <div className="flex gap-3">
                            <input type="search" id="default-search" className="w-full rounded-full py-4 px-4 text-sm focus:outline-none border" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e?.target?.value)} />
                            <input type="search" id="default-search" className="w-full rounded-full py-4 px-4 text-sm focus:outline-none border" placeholder="Email" value={email} onChange={(e) => setEmail(e?.target?.value)} />
                        </div>
                        {/* <div className="mt-4">
                            <input type="search" id="default-search" className="w-full rounded-full py-4 px-4 text-sm focus:outline-none border" placeholder="Phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e?.target?.value)} />
                        </div> */}
                        <button className="w-full text-white py-3 px-6 rounded-full mt-4" style={{ "background": "linear-gradient(59.46deg, #589142 21.2%, #AEE77E 78.8%)" }} onClick={() => {
                            submitEmail(email, fullName, phoneNumber);
                        }}>
                            Get a Free Consultation
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}