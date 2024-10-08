
import { useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { useContent } from "@/providers";

export const TenSteps = ({ imageUrl, submitEmail }: { imageUrl: string, submitEmail: (email: string) => void }) => {
    const [email, setEmail] = useState<string>();
    const { content } = useContent();
    return (
        <>
            <section className="bg-white">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
                    <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-12">
                        <div className="col-span-12 lg:col-span-5 lg:order-2 flex items-center justify-center">
                            <img src={imageUrl} alt="mockup" className="max-w-full h-auto" />
                        </div>
                        <div className="col-span-12 lg:col-span-7 lg:order-1 flex flex-col justify-center text-center lg:text-left">
                            <div className="max-w-xl mx-auto lg:mx-0">
                                <h1 className="text-2xl font-medium md:text-3xl xl:text-4xl mb-4" dangerouslySetInnerHTML={{ __html: content.tenSteps.heading }}></h1>
                                <p className="font-light text-gray-500 dark:text-gray-400 mb-6" dangerouslySetInnerHTML={{ __html: content.tenSteps.subheading }}></p>
                                <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-start">
                                    <input type="search" id="default-search" className="w-full lg:w-7/12 rounded-full py-4 px-9 text-sm focus:outline-none border mb-4 lg:mb-0 lg:mr-4" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-8 rounded-full" style={{ background: 'linear-gradient(59.46deg, #589142 21.2%, #AEE77E 78.8%)' }} onClick={() => {
                                        submitEmail(email ?? "");
                                    }}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
