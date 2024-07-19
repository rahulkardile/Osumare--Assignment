
const Connect = () => {
    return (
        <section className='text-center flex flex-col gap-1 pb-9 mt-16 pt-12 bg-gradient-to-r from-indigo-50 via-transparent to-orange-50'>
            <div className="">
                <h3 className='font-semibold text-xl'>Connect with Our Digital Marketing Experts</h3>
                <p className='text-xs my-1'>Reach Out for Tailored Strategies and Results-Driven Solutions. Let's Elevate Your Online Presence Together</p>
            </div>

            <form className='flex flex-row w-[60%] mt-10 p-4 m-auto rounded-lg bg-white border items-center '>
                
                <section className='w-full'>

                    <div className="flex flex-col items-start gap-1 my-2 m-auto">
                        <span className='text-xs font-semibold'>Name</span>
                        <input type="text" className='p-2 w-[95%] rounded-md border bg-slate-50' placeholder='Name' />
                    </div>

                    <div className="flex flex-col items-start gap-1 my-2 m-auto">
                        <span className='text-xs font-semibold'>Phone Number</span>
                        <input className='p-2 w-[95%] rounded-md border bg-slate-50' placeholder='Phone Number' type="text" />
                    </div>

                    <div className="flex flex-col items-start gap-1 my-2 m-auto">
                        <span  className='text-xs font-semibold' >Email</span>
                        <input className='p-2 w-[95%] rounded-md border bg-slate-50' type="email" placeholder='Email' />
                    </div>

                </section>

                <section className='flex flex-col gap-1 text-start'>
                    <span className='text-xs font-semibold'>Message</span>
                    <textarea className='p-2 rounded-md border bg-slate-50' rows={7} placeholder='Enter Your Massage'></textarea>
                </section>

            </form>

            <button className='bg-blue-500 my-5 w-[20%] text-white font-semibold rounded-full m-auto px-11 p-2'>Send Message</button>

        </section>
    )
}

export default Connect