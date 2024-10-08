import { useContent } from "@/providers";
import React from "react";
import AccordionItem from "./AccordionItem";

const RenderHTML = ({ html }: { html: string }) => (<span dangerouslySetInnerHTML={{ __html: html }}></span>);

export const HowToDo = () => {
    const { content } = useContent();
    return (
        <section className='bg-[#F6F6F6] mt-4'>
            <div className='max-w-screen-xl px-4 mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='lg:w-1/4 overflow-y-auto steps'>
                        {
                            content.stepsImages.map((x, i) => <img src={x} key={i} />)
                        }
                    </div>
                    <div className='lg:w-2/3 p-4'>

                        {content.steps.map((x, i) => {
                            return (
                                <AccordionItem key={i} defaultOpen={i <= 2} disable={i <= 2} title={x.title} content={
                                    <>
                                        {x.header.length > 0 && (<><p className='font-medium text-[#353740E5]'><RenderHTML html={x.header} /></p><br /></>)}
                                        <ol className='list-decimal pl-4'>
                                            {
                                                x.list.map((y, i) => {
                                                    return (
                                                        <React.Fragment key={i}>
                                                            <li className='font-bold text-[#353740E5]'>
                                                                {
                                                                    y.list.length === 0 ? <span><RenderHTML html={y.heading} /></span> : <p className='font-bold'><RenderHTML html={y.heading} /></p>
                                                                }
                                                                {y.list.length > 0 && (
                                                                    <ul className='list-disc pl-4'>
                                                                        {
                                                                            y.list.map((z, i) => {
                                                                                return (
                                                                                    <li className='font-medium' key={i}><RenderHTML html={z} /></li>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ul>
                                                                )}
                                                            </li>
                                                            <br />
                                                        </React.Fragment>
                                                    );
                                                })
                                            }
                                        </ol>
                                        {x.additionalInfo && (
                                            <>
                                                <p className='font-medium text-[#353740E5]' dangerouslySetInnerHTML={{ __html: x.additionalInfo.header }}></p>
                                                <ul className="list-disc pl-4 mb-4">
                                                    {
                                                        x.additionalInfo.list.map((a: string[], i: number) => {
                                                            return <li className='font-bold text-[#353740E5]' key={i}>{a}</li>;
                                                        })
                                                    }
                                                </ul>
                                            </>
                                        )}
                                        {x.footer.length > 0 && <p className='font-medium text-[#353740E5] mb-4' dangerouslySetInnerHTML={{ __html: x.footer }}></p>}
                                    </>
                                } />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}