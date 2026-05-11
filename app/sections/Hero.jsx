import Image from 'next/image'

export default function Hero() {
  return (
    <section id='hero' className="h-dvh w-dvw hero-bg flex justify-center items-center flex-row max-[700px]:flex-col relative">
      {/* Grouping the text-bubble and logo */}
      <div className='relative flex justify-center items-center'>
        <div className="flex absolute left-[-3rem] top-[-1rem] desktop:left-[-10rem] -rotate-[15deg] z-9 animate-bounce">
        {/* TEXT-BUBBLE */}
          <Image className="w-[100px] h-auto desktop:w-[200px]"
            src="https://i.ibb.co/N2h5M6Qn/image-removebg-preview-1.png"
            alt="text-bubble for feedback form"
            width={300}
            height={300}
          />
        </div>
        {/*LOGO*/}
        <div className="z-2 ">
          <Image
            src="/svgs/logo.svg"
            alt="SharkByte Logo"
            width={100}
            height={100}
            priority
            className="w-[300px] h-[300px] tablet:w-[350px] tablet:h-[350px] laptop:w-[400px] laptop:w-[400px] desktop:w-full desktop:h-full"
          />
        </div>

      </div>
    </section>
  )
}