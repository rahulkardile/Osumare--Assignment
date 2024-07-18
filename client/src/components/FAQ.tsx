import React from 'react'
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
    return (

        <section className='m-auto w-screen text-center mt-14'>
            <h2 className='text-xl font-semibold'>Frequently Asked Questions</h2>
            <p className='text-xs'>Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.</p>

            <section className='p-1 w-[50%] px-10 m-auto my-11'>

                <div className="mx-auto grid max-w-xl divide-y divide-neutral-200">
                    <div className="">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center group-open:bg-blue-500 p-2 rounded-xl group-open:text-white justify-between  font-medium">
                                <span>1. How does Osumare measure campaign success?</span>
                                <span className="transition group-open:rotate-180">
                                    <FaChevronDown />
                                </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Springerdata offers a variety of
                                billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                                pricing for certain services. Payment is typically made through a credit card or other
                                secure online payment method.
                            </p>
                        </details>
                    </div>
                </div>

                <div className="mx-auto grid max-w-xl divide-y divide-neutral-200">
                    <div className="">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center group-open:bg-blue-500 p-2 rounded-xl group-open:text-white justify-between font-medium">
                                <span>2. How does Osumare measure campaign success?</span>
                                <span className="transition group-open:rotate-180">
                                    <FaChevronDown />
                                </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Springerdata offers a variety of
                                billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                                pricing for certain services. Payment is typically made through a credit card or other
                                secure online payment method.
                            </p>
                        </details>
                    </div>
                </div>

                <div className="mx-auto grid max-w-xl divide-y divide-neutral-200">
                    <div className="">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center group-open:bg-blue-500 p-2 rounded-xl group-open:text-white justify-between font-medium">
                                <span>3. How does Osumare measure campaign success?</span>
                                <span className="transition group-open:rotate-180">
                                    <FaChevronDown />
                                </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Springerdata offers a variety of
                                billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                                pricing for certain services. Payment is typically made through a credit card or other
                                secure online payment method.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

        </section>

    )
}

export default FAQ