import { useContent } from "@/providers";

export const Testimonials = () => {
    const { content } = useContent();
    return (
        <section className="bg-white py-16">
            <div className="max-w-screen-xl mx-auto px-4">
                <h1 className="mb-4 text-3xl md:text-4xl text-center custom-heading">Testimonials</h1>
                <div className="w-28 mx-auto h-1 mb-8 rounded-full" style={{ backgroundImage: 'linear-gradient(90deg, #589142 0%, #AEE77E 100%)', }}></div>
                {/* <img className="testimonial-image" src="/images/testimonials_desktop.png" style={{ 'width': '100%' }} /> */}
                {
                    content.testimonials.map((x, i) => {
                        return (
                            <section className="bg-white" key={i}>
                                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                                    <figure className="max-w-screen-md mx-auto">
                                        <svg className="h-12 mx-auto mb-3 text-gray-400 " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                        </svg>
                                        <blockquote>
                                            <p className="text-2xl font-medium" dangerouslySetInnerHTML={{ __html: x.text }}></p>
                                        </blockquote>
                                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                            <img className="w-8 h-8 rounded-full" src={x.authorImage} alt="profile picture" />
                                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                                <div className="pr-3 font-medium" dangerouslySetInnerHTML={{ __html: x.authorName }}></div>
                                                <div className="pl-3 text-sm font-light text-gray-500" dangerouslySetInnerHTML={{ __html: x.position }}></div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </section>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Testimonials;
