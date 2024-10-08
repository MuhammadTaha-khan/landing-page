import { useContent } from "@/providers";

export const Intro = () => {
    const { content } = useContent();
    return (
        <section className="bg-white intro">
            <div className="max-w-screen-xl px-4 py-8 mx-auto">
                <h1 className="mt-2 mb-2 text-2xl md:text-3xl custom-heading text-center" dangerouslySetInnerHTML={{ __html: content.intro.heading }}></h1>
                <h2 className="mb-4 text-lg font-semibold text-center text-gray-700" dangerouslySetInnerHTML={{ __html: content.intro.subheading }}></h2>
                <video className="w-full shadow-lg rounded-lg" controls controlsList="nofullscreen nodownload noremoteplayback noplaybackrate">
                    <source src="/videos/K12chemicalhygi.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <div className="lg:col-span-5 lg:flex lg:items-center lg:justify-end">
                    <img src="/images/dentist_image.png" alt="mockup" className="rounded-bl-[6rem] rounded-tr-[6rem] w-full lg:max-w-none" />
                </div>
                <div className="lg:col-span-7 lg:flex lg:items-center lg:justify-center">
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <h1 className="mt-2 mb-2 text-2xl md:text-3xl text-center lg:text-left custom-heading" dangerouslySetInnerHTML={{ __html: content.intro.heading }}></h1>

                        <h2 className="mb-4 text-lg font-semibold text-center lg:text-left text-gray-700" dangerouslySetInnerHTML={{ __html: content.intro.subheading }}></h2>
                        <p className="mb-6 text-base text-gray-500 dark:text-gray-400 text-left" dangerouslySetInnerHTML={{ __html: content.intro.text }}></p>
                        <a href="#" className="underline font-bold text-center lg:text-left">Show More</a>
                    </div>
                </div> */}
            </div>
            {/* <img src="/images/utils/multi_dots_2.png" className="multi_dots_3" /> */}
            <img src="/images/utils/tube_3.png" className="tube_3" />
        </section>
    );
}
