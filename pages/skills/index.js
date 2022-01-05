import Head from "next/head";
import { Footer, Header } from "..";
import data from "../../public/data.json"

export async function getStaticProps(context) {
    return {
      props: { data },
    }
}

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
                <div>
                    <div className='text-6xl text-center lg:text-9xl font-semibold italic text-lightgray lg:absolute lg:ml-12' >
                        Languages
                    </div>
                    <div className='pt-[88px] relative z-20 lg:mx-6 lg:flex lg:justify-start gap-16 grid grid-cols-autofillSkills' >                        
                    {data.skills.map((skill, index) => {
                            if(skill.type == 'language') {
                                return(
                                    <div key={index} className='bg-white dark:bg-gray dark:text-white shadow-reference min-w-[144px] text-center rounded-lg p-4' >
                                        <img src={skill.logo} className='h-28 mb-5 m-auto' />
                                        <p className='font-semibold text-xl' >{skill.name}</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <hr className='my-12 text-lightgray' />
                <div className='mb-12' >
                    <div className='text-6xl text-center lg:text-9xl font-semibold italic text-lightgray lg:absolute lg:right-0 lg:mr-12' >
                        Frameworks
                    </div>
                    <div className='pt-[88px] relative z-20 lg:text-centermx-6 lg:flex lg:justify-end gap-16 grid grid-cols-autofillSkills' >
                        {data.skills.map((skill, index) => {
                            if(skill.type == 'framework') {
                                return(
                                    <div key={index} className='bg-white dark:bg-gray dark:text-white shadow-reference min-w-[144px] text-center rounded-lg p-4' >
                                        <img src={skill.logo} className='h-28 mb-5 m-auto' />
                                        <p className='font-semibold text-xl' >{skill.name}</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
            <div className='dark:-mt-12 dark:pt-8 dark:bg-darkgray' >
                <Footer />
            </div>
        </>
    )
}