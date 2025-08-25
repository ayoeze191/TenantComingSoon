import Waitlist from "./components/Waitlist";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div>
      <Toaster richColors />
      <div className="relative">
        <video
          src="/ComingSoonBackgroundVideo.webm"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          muted
          loop
          playsInline
          type="video/webm"
        ></video>
        <div className=" w-full text-white z-10  font-Fira-Mono">
          <div className="flex header text-[12px] flex-col md:flex-row font-[400] leading-[27px]  container  py-[40px] h-fit mx-auto  items-center justify-between ">
            <a href="#go">10ANTS</a>
            <a href="#go">A-CUBE</a>
            <a href="#go">CREATIVE PATH</a>
          </div>
        </div>
        {/* <!-- end header -->
   <!-- Hero --> */}
        <div className="relative h-screen flex justify-center flex-col items-center ">
          <div className="heroTitle px-[10px] text-[#FFFFFF] z-[999999999] text-center text-[50px] sm:text-[85px] lg:text-[200px] xl:text-[278px]">
            REENATO
          </div>
          <p className="text-center mt-[257px] text-[12px]  text-[#FFFFFF] leading-[14px]">
            Empowering <br /> Businesses Through
            <br /> Technology
          </p>
        </div>
      </div>
      {/* <!-- End Hero -->

   <!-- Waitlist --> */}
      <div
        className="w-full bg-black waitlist"
        style={{ fontFamily: "akatab" }}
      >
        <div className="w-[100%] text-white py-[107px] md:py-[200px] lg:py-[336px]">
          <p className="mx-auto md:text-center max-w-[927px] px-[20px] text-[24px] md:text-[40px] leading-[51.9px] waitlist">
            We&apos;re building something revolutionary at the intersection of
            Social Responsibility, Finance, Entertainment and AI
          </p>
          <p className="text-[#9A9A9A] px-[20px] text-[24px] md:text-[40px] leading-[51.9px]  md:text-center font-medium mx-auto max-w-[927px] mt-[24px]">
            Sign up now for exclusive early access and be the first to
            experience the future when we launch
          </p>
          <Waitlist />
        </div>
      </div>
      {/* <!-- End waitlist -->

   <!-- Footer --> */}
      <div className="bg-[#000000] footer" id="go">
        <div className="footer px-[35px] sm:px-[50px] md:px-[80px] lg:px-[95px] xl:px-[118px] text-[12px]  mx-auto text-[#858585] flex gap-[100px] md:gap-[7rem] lg:gap-[15rem] ">
          {/* <p className="leading-[12px] ">REENATO</p> */}
          <div className="flex justify-between md:gap-[40px] lg:gap-0 flex-col md:flex-row flex-1 ">
            <div className="lg:w-[189px]">
              <h2 className="footerTitle">10NANTS</h2>
              <p className="mt-[31px]">
                Creating social responsibility agents in Housing to enable you
                do more!{" "}
              </p>
            </div>
            <div className="lg:w-[216px]">
              <h2 className="footerTitle">A-CUBE</h2>
              <p className="lg-[31px]">Your Pathway to Home Ownership</p>
            </div>
            <div className="lg:w-[216px]">
              <h2 className="footerTitle">CREATIVE PATH</h2>
              <p className="mt-[31px]">
                Finding your clan irrespective of where you are originally from.
                In the Creative Space or Music Scene or digital transformation
                world
              </p>
            </div>
          </div>
        </div>
        <p className="font-normal text-[12px] leading-[16.9px] text-[#444343] w-fit mx-auto mt-[294px] copyright ">
          Copyright © 2024 REENATO - All Rights Reserved
        </p>
      </div>
      {/* <!-- End Footer -->

   <!--  --> */}
      <div className=" relative">
        <h1 className="reenato font-bold text-[48px] sm:text-[72px] md:text-[120px] lg:text-[200px] xl:text-[280px] 2xl:text-[320px] -mb-[100px]  tracking-[-0.25px] text-[#181818] mx-auto bg-black mb-0 w-full flex items-center justify-center">
          REENATO
        </h1>
      </div>
    </div>
  );
}
