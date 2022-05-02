import Head from "next/head";
import { Footer, Header } from "..";
import data from "../../public/data.json"

export async function getStaticProps(context) {
    return {
      props: { data },
    }
}


const categories = [...new Set(data.skills.map(skill => skill.type))]

export default function Skills({ data }) {
    return(
        <>
            <Head>
                <title>Skills | Jannis Milz</title>
                <meta
                    name="description"
                    content="Meta description for the About page"
                />
            </Head>
            <Header />
            <div className='min-h-screen pt-24 px-8 lg:px-16 dark:bg-darkgray'>
                {categories.map((category, index) => {
                    return (
                        <>
                            <div className={`${index + 1 === categories.length ? 'mb-12' : ''}`}>
                                <div className={`text-6xl text-center lg:text-9xl font-semibold italic text-lightgray lg:absolute ${index % 2 !== 0 ? 'lg:right-0 lg:mr-24' : 'lg:ml-12'}`} >
                                    {category}
                                </div>
                                <div 
                                    className='pt-[88px] relative z-20 lg:mx-6 gap-x-20 gap-y-16 grid grid-cols-autofillSkills col-end-1' 
                                    dir={`${index % 2 !== 0 ? 'rtl' : 'ltr'}`}
                                >                     
                                    {data.skills.map((skill, index) => {
                                        if(skill.type == category) {
                                            return(
                                                <div key={index} className='bg-white dark:bg-gray dark:text-white shadow-reference min-w-[144px] text-center rounded-lg p-4 flex flex-col justify-between' >
                                                    <img src={skill.logo} className='max-w-[112px] max-h-28 mb-5 m-auto' />
                                                    <p className='font-semibold text-xl' >{skill.name}</p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            {index + 1 === categories.length ? '' : <hr className='my-12 text-lightgray' />}
                        </>
                    )
                })}
            </div>
            <div className='dark:-mt-12 dark:pt-8 dark:bg-darkgray' >
                <Footer />
            </div>
        </>
    )
}