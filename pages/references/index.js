import { Footer, Header } from "..";
import { useState } from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from "@fortawesome/free-solid-svg-icons";
import data from "../../public/data.json"
import Head from "next/head";

export async function getStaticProps(context) {
    return {
      props: { data },
    }
}

export default function References({ data }) {
    return(
        <>
            <Head>
                <title>References | Jannis Milz</title>
            </Head>
            <Header />
            <div className='min-h-screen pt-24 dark:bg-darkgray'>
                <div className='grid grid-cols-autofill gap-6 p-6' >
                    {data.references.map(item => {
                        return(
                            <div key={item.name} className='max-w-xs shadow-reference bg-white dark:bg-gray text-darkgray p-4 rounded-xl w-max h-min' >
                                <div className='grid mb-6 grid-cols-3' >
                                    <img src={item.logo} alt='Logo' className='h-24 w-24' />
                                    <span className='text-[26px] font-bold text-center my-auto mx-auto col-span-2 dark:text-white' >{item.name}</span>
                                </div>
                                <div className='flex flex-col gap-3' >
                                    <a href={item.link} target='_blank' className={`bg-lightblue hover:opacity-80 duration-200 shadow-2xl grid text-md italic font-semibold py-1.5 px-4 rounded-xl text-white grid-cols-5 items-center`} >
                                        <div className='text-2xl text-lightgray' >
                                            <FontAwesomeIcon icon={faLink} />
                                        </div>
                                        <div className='col-span-4 -ml-3 overflow-hidden overflow-ellipsis' >
                                            {item.link}
                                        </div>
                                    </a>
                                    <a href={item.github} target='_blank' className={`bg-[#333333] hover:opacity-80 duration-200 shadow-2xl grid text-md italic font-semibold py-1.5 px-4 rounded-xl text-white grid-cols-5 items-center`} >
                                        <div className='text-2xl text-lightgray' >
                                            <FontAwesomeIcon icon={faGithub} />
                                        </div>
                                        <div className='col-span-4 -ml-3  overflow-hidden overflow-ellipsis' >
                                            {item.github
                                                ?
                                                item.github
                                                :
                                                'Unavailable...'
                                            }
                                        </div>
                                    </a>    
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
            <Footer />
        </>
    )
}