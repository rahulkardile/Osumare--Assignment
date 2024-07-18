import logo from '../assets/details-logo.png'

const Details = () => {
  return (
    <div className='w-screen my-20'>
      <h3 className='m-auto text-3xl font-bold my-8 text-center'>Real Estate-Focused Digital Mastery</h3>
      <div className="flex flex-row m-auto gap-3 w-[80vw]">
        <img className='w-[37vw]' src={logo} alt="img" />
        <div className="p-4">
          <h3 className='text-2xl font-semibold my-2'>Unlock the Potential of Digital Real Estate Excellence</h3>
          <p className='text-sm'>At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.</p>
          <button className='text-white bg-blue-500 px-12 p-2 my-4 rounded-full font-semibold'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Details