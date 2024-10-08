import React, { useEffect, useState } from 'react';
const RenderHTML = ({ html }: { html: string }) => (<span dangerouslySetInnerHTML={{ __html: html }}></span>);

const AccordionItem = ({ title, content, defaultOpen, disable }: { title: string; content: React.ReactNode, defaultOpen?: boolean, disable?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen ?? false);

    const toggleAccordion = () => {
        if (disable) return;
        setIsOpen(!isOpen);
    };

    return (
        <div className={`px-1 md:px-8`}>
            <h1 className="text-2xl font-semibold flex items-center mb-4 justify-between cursor-pointer wow animate__animated animate__bounce animate__slower" onClick={toggleAccordion}>
                <RenderHTML html={title} />
                <div className="flex items-center">
                    <svg data-accordion-icon className={`w-3 h-3 ${isOpen ? 'rotate-180' : 'rotate-90'} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </div>
            </h1>

            <div className='border-b border-gray-300 mb-4'></div>
            {isOpen && (
                <>{content}</>
            )}
        </div>
    );
};

export default AccordionItem;
