import { useContent } from "@/providers";
import { useState } from "react";

export const Banner = ({ submitEmail }: { submitEmail: (email: string) => void }) => {
    const [email, setEmail] = useState<string>();
    const { content } = useContent();
    return (
        <section className="bg-white banner">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
                <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-12">
                    <div className="col-span-12 lg:col-span-5 lg:order-2 flex items-center justify-center">
                        <img src="/images/image gallery.png" alt="mockup" className="max-w-full h-auto hero-image animate__animated animate__bounceInRight" />
                    </div>
                    <div className="col-span-12 lg:col-span-7 lg:order-1 flex flex-col justify-center text-center lg:text-left">
                        <div className="max-w-xl mx-auto lg:mx-0">
                            <h1 className="text-2xl font-medium md:text-3xl xl:text-4xl mb-4 animate__animated animate__bounceInLeft" dangerouslySetInnerHTML={{ __html: content.banner.heading }}></h1>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/images/utils/multi_dots.png" className="multi_dots" />
            <img src="/images/utils/multi_dots_2.png" className="multi_dots_2" />
            <img src="/images/utils/highlight.png" className="highlight" />
            <img src="/images/utils/highlight_2.png" className="highlight_2" />
            <img src="/images/utils/tube.png" className="tube" />
            <img src="/images/utils/tube_2.png" className="tube_2" />
        </section>
    );
}
