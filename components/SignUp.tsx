import Image from "next/image";

const SignUp = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-10 overflow-hidden bg-[#495567] bg-[url('/patterns/semi-circles.svg')] bg-position-[calc(100%+174px)_100%] bg-no-repeat px-7 py-24 text-center md:justify-between md:bg-position-[calc(100%+174px)_100%] md:px-10 lg:flex-row lg:px-16 lg:text-left">
      <h2 className="font-space-mono w-[311px] text-[2rem] leading-8 font-bold tracking-[-1.43px] text-white md:w-[457px] md:text-5xl md:leading-12 md:tracking-[-2.14px]">
        Sign up and Scoot off today
      </h2>
      <div className="flex items-center justify-center gap-3.5">
        <Image
          src="/icons/google-play.svg"
          alt="Google Play"
          width={130}
          height={40}
          className=""
        />
        <Image
          src="/icons/app-store.svg"
          alt="App store"
          width={114}
          height={40}
          className=""
        />
      </div>
    </section>
  );
};
export default SignUp;
