import { useContent } from "@/providers";

export const Footer = () => {
    const { content } = useContent();
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
                <div className="flex items-center space-x-2 mb-4 lg:mb-0">
                    <span dangerouslySetInnerHTML={{ __html: content.footer.copyWrights }}></span>
                </div>
                <div className="w-12 hidden lg:block flex items-center justify-center">
                    <img src="/images/k12_logo_footer.png" alt="K12 Chemical Management Support" className="hidden lg:block" />
                </div>
                <div className="">
                    <span dangerouslySetInnerHTML={{ __html: content.footer.contactUs }}></span>
                    <span className="ml-4" dangerouslySetInnerHTML={{ __html: content.footer.contactNumber }}></span>
                </div>
            </div>
        </footer>
    );
}
