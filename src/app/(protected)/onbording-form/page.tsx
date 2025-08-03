"use client"
import dynamic from "next/dynamic";
import Image from "next/image";


const BackdropGradient = dynamic(() => import("@/components/global/backdrop-gradient"), {
    ssr: false
});

const GlassCard = dynamic(() => import("@/components/global/glass-card"), {
    ssr: false
});

const ExhibitorInfoForm = dynamic(() => import("./_components/exhibitor-info"), {
    ssr: false
});

const OnbordingForm = () => {
  return (
    <div className="container min-h-dvh w-full flex justify-center items-center bg-black">
      <div className="flex flex-col w-full items-center">
        <div
          className="animate-fade-in"
        >
        <Image
          src="/images/opexn_logo.png"
          alt="opexn logo"
          width={200}
          height={50}
        />
        </div>
         <BackdropGradient
          className="w-4/12 h-2/6 opacity-80 "
          container="flex flex-col items-center"
        >
          <GlassCard className="xs:w-full max-sm:w-full max-sm:px-5 md:w-[50vw] lg:w-5/12 p-7 mb-5">
            <h1 className="w-full text-center font-semibold text-xl md:text-2xl text-white">
              Exhibitor Onbording Form
            </h1>
            <ExhibitorInfoForm />
          </GlassCard>
        </BackdropGradient>
      </div>
    </div>
  );
};

export default OnbordingForm;
