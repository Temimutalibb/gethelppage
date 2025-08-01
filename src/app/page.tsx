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
        <div
          style={{
            backgroundColor: "#0C694C",
            color: "white",
            borderRadius: "25px",
            border: "1px solid #ffffffc9",
            height: "13rem",
            width: "24rem",
            textAlign: "center",
            padding: "20px",
            paddingTop: "40px",
            paddingBottom: "40px",
            boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s",
            cursor: "pointer",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "25px",
              }}
            >
              <div>
                <Image
                  src="/free.png"
                  width={55}
                  height={55}
                  alt="free forever"
                />
              </div>
              <div>Free forever</div>
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "sans-serif",
                color: "#ffffffb0",
              }}
            >
              Option to use the app for free forever, with no hidden costs or
              fees
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#0C694C",
            color: "white",
            borderRadius: "25px",
            border: "1px solid #ffffffc9",
            height: "13rem",
            width: "24rem",
            textAlign: "center",
            padding: "20px",
            paddingTop: "40px",
            paddingBottom: "40px",
            boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s",
            cursor: "pointer",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "25px",
              }}
            >
              <div>
                <Image
                  src="/help.png"
                  width={55}
                  height={55}
                  alt="free forever"
                />
              </div>
              <div> Get help nearby </div>
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "sans-serif",
                color: "#ffffffb0",
              }}
            >
              Alert nearby users in case of an emergency, so they can help you.
              Options to share real-time location, one time location ot to
              include message.
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#0C694C",
            color: "white",
            borderRadius: "25px",
            border: "1px solid #ffffffc9",
            height: "13rem",
            width: "24rem",
            textAlign: "center",
            padding: "20px",
            paddingTop: "40px",
            paddingBottom: "40px",
            boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s",
            cursor: "pointer",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "25px",
              }}
            >
              <div>
                <Image
                  src="/update.png"
                  width={55}
                  height={55}
                  alt="free forever"
                />
              </div>
              <div>Real-time updates</div>
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "sans-serif",
                color: "#ffffffb0",
              }}
            >
              Get updates of the devices youre trackining real-time, so you
              never miss a beat
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#0C694C",
            color: "white",
            borderRadius: "25px",
            border: "1px solid #ffffffc9",
            height: "13rem",
            width: "24rem",
            textAlign: "center",
            padding: "20px",
            paddingTop: "40px",
            paddingBottom: "40px",
            boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s",
            cursor: "pointer",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "25px",
              }}
            >
              <div>
                <Image
                  src="/secure.png"
                  width={55}
                  height={55}
                  alt="free forever"
                />
              </div>
              <div> Protected data</div>
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "sans-serif",
                color: "#ffffffb0",
              }}
            >
              Your data is encrypted and protected, ensuring your privacy and
              security
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#0C694C",
            color: "white",
            borderRadius: "25px",
            border: "1px solid #ffffffc9",
            height: "13rem",
            width: "24rem",
            textAlign: "center",
            padding: "20px",
            paddingTop: "40px",
            paddingBottom: "40px",
            boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s",
            cursor: "pointer",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "25px",
              }}
            >
              <div>
                <Image
                  src="/fastline.png"
                  width={55}
                  height={55}
                  alt="free forever"
                />
              </div>
              <div>Fast line</div>
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "sans-serif",
                color: "#ffffffb0",
              }}
            >
              Our fast line help you call or get the nearby location of
              emergency services, so you can get help quickly
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#0C694C",
            color: "white",
            borderRadius: "25px",
            border: "1px solid #ffffffc9",
            height: "13rem",
            width: "24rem",
            textAlign: "center",
            padding: "20px",
            paddingTop: "40px",
            paddingBottom: "40px",
            boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s",
            cursor: "pointer",
          }}
        >
          <div></div>
          <div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "25px",
              }}
            >
              <div>
                <Image
                  src="/alert.png"
                  width={55}
                  height={55}
                  alt="free forever"
                />
              </div>
              <div>Easy tap to Alert Family</div>
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "sans-serif",
                color: "#ffffffb0",
              }}
            >
              Our pals option let you alert your family with one click, so they
              can help you
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
