

import { useContent } from '@/providers';
import 'swiper/css';

export default function Features() {
    const { content } = useContent();
    return (
        <>
            {/* <section className="bg-[#F6F6F6]">
                <div className="max-w-screen-xl px-4 py-[5rem] mx-auto">
                    <h1 className="mb-2 text-3xl md:text-4xl text-center custom-heading" dangerouslySetInnerHTML={{ __html: content.features.title }}></h1>
                    <div className="w-28 mx-auto h-1 mb-8 rounded-full" style={{ backgroundImage: 'linear-gradient(90deg, #589142 0%, #AEE77E 100%)', }}></div>


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-screen-lg mx-auto">
                        {
                            content.features.list.map((x, i) => {
                                return (
                                    <div className="bg-white rounded-lg shadow-md overflow-hidden relative" key={i}>
                                        <div className="p-6">
                                            <div className="flex justify-between items-center mb-8">
                                                <h2 className="text-3xl font-normal" dangerouslySetInnerHTML={{ __html: x.title }}></h2>
                                                <img src={x.logo} alt="Icon 1" className="w-14 h-14" />
                                            </div>
                                            <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: x.text }}></p>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-20 h-20">
                                            <div className="bg-cover bg-no-repeat bg-center w-full h-full" style={{ backgroundImage: `url(${x.backgroundImage})` }}></div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>
            </section> */}
        </>
    );
}
