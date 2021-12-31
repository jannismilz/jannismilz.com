import { Footer, Header } from "..";
import { fas as icons } from '@fortawesome/free-solid-svg-icons'
import { fab as brands } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Head from "next/head";

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    function ContactLink(props) {
		let { href, bg, icon, name } = props
		return (
			<a href={href} target='_blank' className={`${bg} hover:opacity-70 duration-200 shadow-2xl grid text-xl font-semibold py-3 px-3 w-1/5 min-w-[300px] rounded-xl text-white grid-cols-5 items-center`} >
                <div className='absolute text-2xl' >
                    {icons[icon]
                        ?
                        <FontAwesomeIcon icon={icons[icon]} />
                        :
                        <FontAwesomeIcon icon={brands[icon]} />
                    }
                </div>
                <div className='col-span-5 text-center' >
                    {name}
                </div>
            </a>
		)
	}

    const handleSubmit = (e) => {
        e.preventDefault()
        
        let data = {
            name,
            email,
            message
        }
        
        if(name && email && message) {
            console.log('Sending')

            fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            }).then((res) => {
                console.log('Response received')
                if (res.status === 200) {
                    console.log('Response succeeded!')
                    setSubmitted(true)
                    setName('')
                    setEmail('')
                    setMessage('')
                }
            })
        } else {
            setError(true)
        }
      }

    return(
        <>
            <Head>
                <title>Contact | Jannis Milz</title>
            </Head>
            <Header />
            <div className='flex flex-col-reverse lg:grid lg:grid-cols-2 max-w-8xl m-auto mt-10 lg:mt-0 dark:bg-darkgray' >
                <div className='lg:h-screen flex flex-col gap-10 justify-center items-center mb-16 lg:mb-0' >
                    <ContactLink href="https://github.com/JannisMilz" bg="bg-[#333333]" icon="faGithub" name="@JannisMilz" />
                    <ContactLink href="https://www.linkedin.com/in/jannis-milz-700031207/" bg="bg-[#0A66C2]" icon="faLinkedin" name="@Jannis Milz" />
                    <ContactLink href="https://discordapp.com/users/532515511863476226" bg="bg-[#7289DA]" icon="faDiscord" name="@AquaDev#8112" />
                </div>
                <div className='h-screen flex flex-col gap-10 justify-center items-center max-w-[80%] m-auto -mt-12 lg:mt-0' >
                    <div className='text-xl italic text-center' >
                        I’m always interested in project ideas and oportunities. Feel free to reach out to me with your amazing ideas or just say hi.👋
                    </div>
                    <hr className='text-[#D4D4D4] w-3/4 -mb-4' />
                    <div className='w-full' >
                        <form>
                            <formGroup id='contactForm' >
                                <div className='flex flex-col lg:w-4/6 m-auto' >
                                    <label 
                                        htmlFor='name' 
                                        className="flex uppercase tracking-wide text-brightgray text-xs font-bold my-2"
                                    >
                                        <span className="mr-1.5">Name</span>
                                    </label>
                                    <input 
                                        type='text'
                                        name='name'
                                        value={name}
                                        placeholder='Name'
                                        className={`shadow-md appearance-none block bg-white dark:bg-gray dark:text-white text-darkgray border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${!name ? 'border-red-400 focus:border-red-400' : 'border-green-500 focus:border-lightblue'}`} 
                                        onChange={(e)=>{setName(e.target.value), setSubmitted(false), setError(false)}} 
                                    />
                                </div>
                            </formGroup>
                            <formGroup>
                                <div className='flex flex-col lg:w-4/6 m-auto' >
                                    <label 
                                        htmlFor='email' 
                                        className="flex uppercase tracking-wide text-brightgray text-xs font-bold my-2"
                                    >
                                        <span className="mr-1.5">Email</span>
                                    </label>
                                    <input 
                                        type='email'
                                        name='email'
                                        value={email}
                                        placeholder='Email'
                                        className={`shadow-md appearance-none block bg-white dark:bg-gray dark:text-white text-darkgray border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${!email ? 'border-red-400 focus:border-red-400' : 'border-green-500 focus:border-lightblue'}`} 
                                        onChange={(e)=>{setEmail(e.target.value), setSubmitted(false), setError(false)}} 
                                    />
                                </div>
                            </formGroup>
                            <formGroup>
                                <div className='flex flex-col lg:w-4/6 m-auto' >
                                    <label 
                                        htmlFor='message' 
                                        className="flex uppercase tracking-wide text-brightgray text-xs font-bold my-2"
                                    >
                                        <span className="mr-1.5">Message</span>
                                    </label>
                                    <textarea 
                                        type='text'
                                        name='message'
                                        placeholder='Message'
                                        value={message}
                                        spellCheck='false'
                                        className={`shadow-md appearance-none block bg-white dark:bg-gray dark:text-white text-darkgray h-28 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${!message ? 'border-red-400 focus:border-red-400' : 'border-green-500 focus:border-lightblue'}`} 
                                        onChange={(e)=>{setMessage(e.target.value), setSubmitted(false), setError(false)}} 
                                    />
                                </div>
                            </formGroup>
                            {submitted ? <p className='text-green-500 font-bold text-center my-4 text-xl' >Message successfully sent!</p> : ''}
                            {error ? <p className='text-red-500 font-bold text-center my-4 text-xl' >Please fill in all fields</p> : ''}
                            <input
                                className={`flex bg-lightblue text-white font-bold rounded-md py-2 px-12 m-auto duration-300  hover:bg-opacity-70 ${submitted ? '' : 'mt-8'} ${name && email && message ? 'hover:bg-green-500' : 'hover:bg-red-500'}`}
                                value='Send'
                                type='submit' 
                                onClick={(e)=>{handleSubmit(e)}}
                            />
                        </form >
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}