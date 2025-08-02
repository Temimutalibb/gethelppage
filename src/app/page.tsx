import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#73e6c1ff",
        height: "auto",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
          color: "#0C694C",
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "10px",
        }}
      >
        <h1 style={{ fontSize: "50px", fontWeight: "900" }}>Get Help APP</h1>
        <h2 style={{ fontWeight: "700" }}>
          Track family and friends, Alert users around incase of emergency
        </h2>
      </div>
      <main
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "3px",
          marginLeft: "50px",
          marginRight: "50px",
        }}
      >
        <div className="bg-[#0C694C] text-white rounded-[25px] border border-white/80 h-[13rem] w-[24rem] text-center px-5 py-10 shadow-sm transition-transform duration-200 cursor-pointer">
          <div>
            <div className="flex  flex-col sm:flex-row justify-center items-center gap-[18px] mb-2 sm:mb-10">
              <div>
                <Image
                  src="/free.png"
                  width={55}
                  height={55}
                  alt="free forever"
                />
              </div>
              <div className="text-[20px] font-bold">Free forever</div>
            </div>
            <div className="text-[15px] font-normal font-sans text-white/70">
              Option to use the app for free forever, with no hidden costs or
              fees
            </div>
          </div>
        </div>

        <div className="bg-[#0C694C] text-white rounded-[25px] border border-white/80 h-[13rem] w-[24rem] text-center px-5 py-10 shadow-sm transition-transform duration-200 cursor-pointer">
          <div>
            <div className="flex  flex-col sm:flex-row justify-center items-center gap-[18px] mb-2 sm:mb-10">
              <div>
                <Image
                  src="/help.png"
                  width={55}
                  height={55}
                  alt="free forever"
                />
              </div>
              <div className="text-[20px] font-bold"> Get help nearby </div>
            </div>
            <div className="text-[15px] font-normal font-sans text-white/70">
              Alert nearby users in case of an emergency, so they can help you.
            </div>
          </div>
        </div>

        <div className="bg-[#0C694C] text-white rounded-[25px] border border-white/80 h-[13rem] w-[24rem] text-center px-5 py-10 shadow-sm transition-transform duration-200 cursor-pointer">
          <div>
            <div className="flex  flex-col sm:flex-row justify-center items-center gap-[18px] mb-2 sm:mb-10">
              <div>
                <Image
                  src="/update.png"
                  width={55}
                  height={55}
                  alt="free forever"
                />
              </div>
              <div className="text-[20px] font-bold">Real-time updates</div>
            </div>
            <div className="text-[15px] font-normal font-sans text-white/70">
              Get updates of the devices youre trackining real-time, so you
              never miss a beat
            </div>
          </div>
        </div>

        <div className="bg-[#0C694C] text-white rounded-[25px] border border-white/80 h-[13rem] w-[24rem] text-center px-5 py-10 shadow-sm transition-transform duration-200 cursor-pointer">
          <div>
            <div className="flex  flex-col sm:flex-row justify-center items-center gap-[18px] mb-2 sm:mb-10">
              <div>
                <Image
                  src="/secure.png"
                  width={55}
                  height={55}
                  alt="free forever"
                />
              </div>
              <div className="text-[20px] font-bold"> Protected data</div>
            </div>
            <div className="text-[15px] font-normal font-sans text-white/70">
              Your data is encrypted and protected, ensuring your privacy and
              security
            </div>
          </div>
        </div>

        <div className="bg-[#0C694C] text-white rounded-[25px] border border-white/80 h-[13rem] w-[24rem] text-center px-5 py-10 shadow-sm transition-transform duration-200 cursor-pointer">
          <div>
            <div className="flex  flex-col sm:flex-row justify-center items-center gap-[18px] mb-2 sm:mb-10">
              <div>
                <Image
                  src="/fastline.png"
                  width={55}
                  height={55}
                  alt="free forever"
                />
              </div>
              <div className="text-[20px] font-bold">Fast line</div>
            </div>
            <div className="text-[15px] font-normal font-sans text-white/70">
              Our fast line help you call or get the nearby location of
              emergency services.
            </div>
          </div>
        </div>

        <div className="bg-[#0C694C] text-white rounded-[25px] border border-white/80 h-[13rem] w-[24rem] text-center px-5 py-10 shadow-sm transition-transform duration-200 cursor-pointer">
          <div>
            <div className="flex  flex-col sm:flex-row justify-center items-center gap-[18px] mb-2 sm:mb-10">
              <div>
                <Image
                  src="/alert.png"
                  width={55}
                  height={55}
                  alt="free forever"
                />
              </div>
              <div className="text-[20px] font-bold">
                Easy tap to Alert Family
              </div>
            </div>
            <div className="text-[15px] font-normal font-sans text-white/70">
              Our pals option let you alert your family with one click, so they
              can help you
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
