import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function App() {
  const [count, setCount] = useState(0);
  const [load, setload] = useState(false);
  const whtsapp = () => {
    const url = `https://wa.me/9210024461?text=Hi%2C%20I%20came%20from%20your%20portfolio%20and%20would%20like%20to%20work%20with%20you.`;
    window.open(url);
  };
  const onsubmit = async (data) => {
    const msg = `
        name:${data.name}
        email:${data.email}
        phone no.:${data.tel}
       
        message:${data.msg}`;
    const url = `https://wa.me/9210024461?text=${encodeURIComponent(msg)}`;
    window.open(url);

    reset();
  };
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    setTimeout(() => {
      setload(true);
    }, 2000);
  }, []);

  return (
    <>
      <div>
        <div
          className="fixed -z-10 inset-0  h-screen w-screen 
bg-[#f7eaff]
bg-[radial-gradient(ellipse_80%_60%_at_5%_40%,rgba(175,109,255,0.48),transparent_67%),radial-gradient(ellipse_70%_60%_at_45%_45%,rgba(255,100,180,0.41),transparent_67%),radial-gradient(ellipse_62%_52%_at_83%_76%,rgba(255,235,170,0.44),transparent_63%),radial-gradient(ellipse_60%_48%_at_75%_20%,rgba(120,190,255,0.36),transparent_66%),linear-gradient(45deg,#f7eaff_0%,#fde2ea_100%)]
bg-no-repeat bg-cover"
        ></div>
        <div
          className={` fixed top-0 z-60  inset-0   w-full 
bg-[#f7eaff]
bg-[radial-gradient(ellipse_80%_60%_at_5%_40%,rgba(175,109,255,0.48),transparent_67%),radial-gradient(ellipse_70%_60%_at_45%_45%,rgba(255,100,180,0.41),transparent_67%),radial-gradient(ellipse_62%_52%_at_83%_76%,rgba(255,235,170,0.44),transparent_63%),radial-gradient(ellipse_60%_48%_at_75%_20%,rgba(120,190,255,0.36),transparent_66%),linear-gradient(45deg,#f7eaff_0%,#fde2ea_100%)]
bg-no-repeat bg-cover h-screen ${load ? "hidden" : "flex"}  justify-center items-center`}
        >
          <div className="loader"></div>
        </div>
        <nav className="fixed fo  top-0 z-50 w-screen    bg-pink-200  backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-xl px-2 font-bold text-black/80 w-screen md:w-fit">
              RIYA BANSAL
            </h2>
            <div className="flex w-screen md:w-fit  px-2  justify-around space-x-4">
              <a href="#home" className="text-black/80 hover:text-pink-500">
                Home
              </a>
              <a href="#about" className="text-black/80 hover:text-pink-500">
                About
              </a>
              <a href="#projects" className="text-black/80 hover:text-pink-500">
                Projects
              </a>

              <a href="#contact" className="text-black/80 hover:text-pink-500">
                Contact
              </a>
            </div>
          </div>
        </nav>
        <section id="home" className="w-screen pt-[4vh]  overflow-hidden  h-[99vh]">
          \
          <div className="w-full h-full flex flex-col md:flex-row   md:gap-10  ">
            <div className=" md:h-full h-[120vh] mt-7   md:w-160    m-2 relative shadow-2xl rounded-3xl overflow-hidden">
              <img
                className="h-full  absolute w-full m:dw-110  -z-10 rounded-3xl   object-cover shadow-2xl "
                src="img/riya1.jpeg"
                alt=""
              />
              <div className=" h-full bg-pink-700/20 top-0 z-30 "></div>
            </div>
            <div className="flex justify-center  items-center p-0  h-full w-full m:dw-3/5">
              <div className=" op w-4/5 sm:w-fit ">
                <h3 className=" sm:text-5xl text-[18px] text-black/80 font-semibold fo ">
                  RIYA BANSAL
                </h3>
                <h1 className=" text-black/80 font-semibold text-4xl sm:text-6xl fo">
                  Professional Video Editor
                </h1>
                <div className=" flex flex-col sm:flex-row w-full sm:w-fit gap-4 sm:gap-10 items-center pt-2 sm:pt-4">
                  <button
                    onClick={() => {
                      whtsapp();
                    }}
                    type="button"
                    className="text-black/80  fo rounded-2xl cursor-pointer w-full  sm:w-50 bg-gradient-to-r from-cyan-500 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
                  >
                    Let’s Talk on WhatsApp
                  </button>
                  <a className=" w-full sm:w-50" href="#projects">
                    <button
                      type="button"
                      className="text-black/80 fo rounded-2xl cursor-pointer w-full sm:w-50 bg-gradient-to-br from-purple-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
                    >
                      View My Projects
                    </button>
                  </a>
                </div>

                <div className="mt-10 flex justify-around ">
                  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  viewBox="0 0 24 24"
  fill="none"
  className="drop-shadow-[0_0_8px_rgba(236,72,153,0.6)] transition-all duration-300 hover:scale-110"
>
  <defs>
    <linearGradient id="fcpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ec4899" />
      <stop offset="100%" stopColor="#f9a8d4" />
    </linearGradient>
  </defs>

  {/* Clapperboard */}
  <rect
    x="3"
    y="6"
    width="18"
    height="14"
    rx="3"
    fill="url(#fcpGradient)"
  />

  {/* Top stripes */}
  <path
    d="M3 9h18"
    stroke="#fff"
    strokeWidth="1.5"
  />

  <path
    d="M7 6l-2 3"
    stroke="#fff"
    strokeWidth="1.5"
  />

  <path
    d="M12 6l-2 3"
    stroke="#fff"
    strokeWidth="1.5"
  />

  <path
    d="M17 6l-2 3"
    stroke="#fff"
    strokeWidth="1.5"
  />

  {/* Play icon */}
  <path
    d="M10 12.5l5 2.5-5 2.5v-5z"
    fill="#fff"
  />
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  viewBox="0 0 24 24"
  fill="none"
  className="drop-shadow-[0_0_8px_rgba(236,72,153,0.6)] transition-all duration-300 hover:scale-110"
>
  <defs>
    <linearGradient id="premiereGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ec4899" />
      <stop offset="100%" stopColor="#f9a8d4" />
    </linearGradient>
  </defs>

  {/* Background */}
  <rect
    x="3"
    y="3"
    width="18"
    height="18"
    rx="4"
    fill="url(#premiereGradient)"
  />

  {/* PR Text */}
  <text
    x="7"
    y="16"
    fill="#fff"
    fontSize="7"
    fontWeight="bold"
    fontFamily="Arial, sans-serif"
  >
    Pr
  </text>
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  viewBox="0 0 24 24"
  fill="none"
  className="drop-shadow-[0_0_8px_rgba(236,72,153,0.6)] transition-all duration-300 hover:scale-110"
>
  <defs>
    <linearGradient id="photoshopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ec4899" />
      <stop offset="100%" stopColor="#f9a8d4" />
    </linearGradient>
  </defs>

  {/* Background */}
  <rect
    x="3"
    y="3"
    width="18"
    height="18"
    rx="4"
    fill="url(#photoshopGradient)"
  />

  {/* PS Text */}
  <text
    x="6.5"
    y="16"
    fill="#fff"
    fontSize="7"
    fontWeight="bold"
    fontFamily="Arial, sans-serif"
  >
    Ps
  </text>
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  viewBox="0 0 24 24"
  fill="none"
  className="drop-shadow-[0_0_8px_rgba(236,72,153,0.6)] transition-all duration-300 hover:scale-110"
>
  <defs>
    <linearGradient id="lightroomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ec4899" />
      <stop offset="100%" stopColor="#f9a8d4" />
    </linearGradient>
  </defs>

  {/* Background */}
  <rect
    x="3"
    y="3"
    width="18"
    height="18"
    rx="4"
    fill="url(#lightroomGradient)"
  />

  {/* Lr Text */}
  <text
    x="6.5"
    y="16"
    fill="#fff"
    fontSize="7"
    fontWeight="bold"
    fontFamily="Arial, sans-serif"
  >
    Lr
  </text>
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  viewBox="0 0 24 24"
  fill="none"
  className="drop-shadow-[0_0_8px_rgba(236,72,153,0.6)] transition-all duration-300 hover:scale-110"
>
  <defs>
    <linearGradient id="afterEffectsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ec4899" />
      <stop offset="100%" stopColor="#f9a8d4" />
    </linearGradient>
  </defs>

  {/* Background */}
  <rect
    x="3"
    y="3"
    width="18"
    height="18"
    rx="4"
    fill="url(#afterEffectsGradient)"
  />

  {/* Ae Text */}
  <text
    x="6"
    y="16"
    fill="#fff"
    fontSize="7"
    fontWeight="bold"
    fontFamily="Arial, sans-serif"
  >
    Ae
  </text>
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  viewBox="0 0 24 24"
  fill="none"
  className="drop-shadow-[0_0_8px_rgba(236,72,153,0.6)] transition-all duration-300 hover:scale-110"
>
  <defs>
    <linearGradient id="illustratorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ec4899" />
      <stop offset="100%" stopColor="#f9a8d4" />
    </linearGradient>
  </defs>

  {/* Background */}
  <rect
    x="3"
    y="3"
    width="18"
    height="18"
    rx="4"
    fill="url(#illustratorGradient)"
  />

  {/* Ai Text */}
  <text
    x="6.5"
    y="16"
    fill="#fff"
    fontSize="7"
    fontWeight="bold"
    fontFamily="Arial, sans-serif"
  >
    Ai
  </text>
</svg>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section id="about" className=" w-screen">
          <div className=" h-100">
            <h1 className="  text-center w-3/5 sm:w-4/5 md:w-2/5 px-2 mx-auto p-2  text-4xl sm:text-5xl text-black/80 pt-10 font-semibold">
              About Me
            </h1>
            <div className="w-3/5 sm:w-4/5 md:w-2/5 bg-gradient-to-br mx-auto h-1 from-purple-600 to-pink-500 "></div>
            <div className=" flex flex-col justify-center items-center pt-10 text-[16px] sm:text-2xl">
              <div className="sm:w-4/5 text-black/80 w-[95vw] fo flex flex-col font-semibold gap-3 sm:gap-5">
                <p>
                  Hi, I’m Riya Bansal — a creative Graphic Designer and Video
                  Editor passionate about storytelling through visuals. With
                  experience at Ombre Media Pvt Ltd and internship training at
                  SpringBox Films Pvt. Ltd., I specialize in editing podcasts,
                  interviews, advertisements, reels, and social media creatives.
                </p>
                <p>
                  Skilled in Adobe Premiere Pro, Final Cut Pro, Lightroom ,Adobe
                  After Effects ,Adobe Illustrator and Adobe Photoshop, I focus
                  on creating visually engaging and impactful content with a
                  strong sense of design, detail, and creativity.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="relative  z-40 w-screen min-h-screen">
          <div>
            <h1 className="  w-3/5 text-center  sm:w-4/5 md:w-2/5 px-2 mx-auto p-2  text-4xl sm:text-5xl text-black/80 pt-10 ">
              Projects
            </h1>
            <div className="w-3/5 sm:w-4/5 md:w-2/5 bg-gradient-to-br mx-auto h-1 from-purple-600 to-pink-500 "></div>
          </div>

          <div className="sm:w-3/5 lg:w-2/5 w-4/5 text-black/80 fo text-2xl sm:text-4xl mt-10 ">
            <h1 className="border-b-4 sm:p-2 px-2  border-b-pink-800">
              YouTube Video Edits
            </h1>
          </div>
          <div className="mt-10 w-screen  overflow-x-scroll sco ">
            <div className="flex gap-5 w-fit ">
              <div
                className="p-5 w-75 h-45 sm:w-120 sm:h-76 xl:w-100 xl:h-70 md:w-80 md:h-60
border border-pink-500/40
bg-gradient-to-br from-pink-700/30 via-fuchsia-700/20 to-rose-400/30
backdrop-blur-md
shadow-[0_0_20px_rgba(236,72,153,0.35)]
hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
hover:scale-105
transition-all duration-300 ease-in-out
rounded-3xl
flex justify-center items-center"
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/-JTo0i0Jfdg?si=3dAYtSqEayZjers8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                className="p-5 w-75 h-45 sm:w-120 sm:h-76 xl:w-100 xl:h-70 md:w-80 md:h-60
border border-pink-500/40
bg-gradient-to-br from-pink-700/30 via-fuchsia-700/20 to-rose-400/30
backdrop-blur-md
shadow-[0_0_20px_rgba(236,72,153,0.35)]
hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
hover:scale-105
transition-all duration-300 ease-in-out
rounded-3xl
flex justify-center items-center"
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/swdcCq9h9PI?si=jqmuCh3HraEFe0X5"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                className="p-5 w-75 h-45 sm:w-120 sm:h-76 xl:w-100 xl:h-70 md:w-80 md:h-60
border border-pink-500/40
bg-gradient-to-br from-pink-700/30 via-fuchsia-700/20 to-rose-400/30
backdrop-blur-md
shadow-[0_0_20px_rgba(236,72,153,0.35)]
hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
hover:scale-105
transition-all duration-300 ease-in-out
rounded-3xl
flex justify-center items-center"
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/21mWAJZLH4M?si=-DbBjXT5tAUm6UPs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                className="p-5 w-75 h-45 sm:w-120 sm:h-76 xl:w-100 xl:h-70 md:w-80 md:h-60
border border-pink-500/40
bg-gradient-to-br from-pink-700/30 via-fuchsia-700/20 to-rose-400/30
backdrop-blur-md
shadow-[0_0_20px_rgba(236,72,153,0.35)]
hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
hover:scale-105
transition-all duration-300 ease-in-out
rounded-3xl
flex justify-center items-center"
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/6dpvBqY9IZY?si=KOOnODA3sh3mAL5c"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                className="p-5 w-75 h-45 sm:w-120 sm:h-76 xl:w-100 xl:h-70 md:w-80 md:h-60
border border-pink-500/40
bg-gradient-to-br from-pink-700/30 via-fuchsia-700/20 to-rose-400/30
backdrop-blur-md
shadow-[0_0_20px_rgba(236,72,153,0.35)]
hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
hover:scale-105
transition-all duration-300 ease-in-out
rounded-3xl
flex justify-center items-center"
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/o-WeKRh2nsk?si=KjhyR2ObPtwXLA-M"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="sm:w-3/5 lg:w-2/5 w-4/5 text-black/80 fo text-2xl sm:text-4xl mt-10 ">
            <h1 className="border-b-4 sm:p-2 px-2  border-b-pink-800">
              Reels Edits
            </h1>
          </div>

          <div className="mt-10 overflow-x-scroll flex items-center sco py-10 ">
            <div className="flex gap-10 px-3">
              <div
                className=" p-5 border border-pink-500/40
bg-gradient-to-br from-pink-700/30 via-fuchsia-700/20 to-rose-400/30
backdrop-blur-md
shadow-[0_0_20px_rgba(236,72,153,0.35)]
hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
hover:scale-105
transition-all duration-300 ease-in-out
rounded-3xl
flex justify-center items-center "
              >
                <iframe
                  width="200"
                  height="350"
                  src="https://youtube.com/embed/Rq5eiP4wIpg?si=JY-ZRZQD44Ym2OiG"
                  title="YouTube Shorts video"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                className=" p-5 border border-pink-500/40
bg-gradient-to-br from-pink-700/30 via-fuchsia-700/20 to-rose-400/30
backdrop-blur-md
shadow-[0_0_20px_rgba(236,72,153,0.35)]
hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
hover:scale-105
transition-all duration-300 ease-in-out
rounded-3xl
flex justify-center items-center "
              >
                <iframe
                  width="200"
                  height="350"
                  src="https://youtube.com/embed/SbBW-3ZiJXk?si=pIl4ItbqLkOUFxi_"
                  title="YouTube Shorts video"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                className=" p-5 border border-pink-500/40
bg-gradient-to-br from-pink-700/30 via-fuchsia-700/20 to-rose-400/30
backdrop-blur-md
shadow-[0_0_20px_rgba(236,72,153,0.35)]
hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
hover:scale-105
transition-all duration-300 ease-in-out
rounded-3xl
flex justify-center items-center "
              >
                <iframe
                  width="200"
                  height="350"
                  src="https://youtube.com/embed/dT9UDBM9l3c?si=IeYmV42vv_0f_ojj"
                  title="YouTube Shorts video"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                className=" p-5 border border-pink-500/40
bg-gradient-to-br from-pink-700/30 via-fuchsia-700/20 to-rose-400/30
backdrop-blur-md
shadow-[0_0_20px_rgba(236,72,153,0.35)]
hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
hover:scale-105
transition-all duration-300 ease-in-out
rounded-3xl
flex justify-center items-center "
              >
                <iframe
                  width="200"
                  height="350"
                  src="https://youtube.com/embed/j8_2dLMZol8?si=qQ_pmtFBzoAfHULa"
                  title="YouTube Shorts video"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                className=" p-5 border border-pink-500/40
bg-gradient-to-br from-pink-700/30 via-fuchsia-700/20 to-rose-400/30
backdrop-blur-md
shadow-[0_0_20px_rgba(236,72,153,0.35)]
hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
hover:scale-105
transition-all duration-300 ease-in-out
rounded-3xl
flex justify-center items-center "
              >
                <iframe
                  width="200"
                  height="350"
                  src="https://youtube.com/embed/onyDVZ8Zl84?si=Rvnva9CZ_BL9jBrG"
                  title="YouTube Shorts video"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                className=" p-5 border border-pink-500/40
bg-gradient-to-br from-pink-700/30 via-fuchsia-700/20 to-rose-400/30
backdrop-blur-md
shadow-[0_0_20px_rgba(236,72,153,0.35)]
hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
hover:scale-105
transition-all duration-300 ease-in-out
rounded-3xl
flex justify-center items-center "
              >
                <iframe
                  width="200"
                  height="350"
                  src="https://youtube.com/embed/qSPtaFSX7Mo?si=19e-x0xojt7nmB1W"
                  title="YouTube Shorts video"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                className=" p-5 border border-pink-500/40
bg-gradient-to-br from-pink-700/30 via-fuchsia-700/20 to-rose-400/30
backdrop-blur-md
shadow-[0_0_20px_rgba(236,72,153,0.35)]
hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
hover:scale-105
transition-all duration-300 ease-in-out
rounded-3xl
flex justify-center items-center "
              >
                <iframe
                  width="200"
                  height="350"
                  src="https://youtube.com/embed/cpFh0vVZOr0?si=kCjfOaTqzt0CizXp"
                  title="YouTube Shorts video"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <div   className="border w-50 p-5  border-pink-500/40
bg-gradient-to-br from-pink-700/30 via-fuchsia-700/20 to-rose-400/30
backdrop-blur-md
shadow-[0_0_20px_rgba(236,72,153,0.35)]
hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
hover:scale-105
transition-all duration-300 ease-in-out
rounded-3xl
flex justify-center items-center  ">
  <a href="https://www.instagram.com/reel/C4zar_GSlYK/"><img className="w-full h-90 object-cover" src="img/ig1.jpg" alt="" /></a>

              </div>
                </div>
          </div>
          <div className="sm:w-3/5 lg:w-2/5 w-4/5 text-black/80 fo text-2xl sm:text-4xl mt-10 ">
            <h1 className="border-b-4 sm:p-2 px-2  border-b-pink-800">
              Huskify Advertisement
            </h1>
          </div>

          <div className="mt-10">
            <div className="border  w-70 h-fit mx-auto sm:w-120  sm:h-70  md:w-180 md:h-100  p-5  border-pink-500/40
bg-gradient-to-br from-pink-700/30 via-fuchsia-700/20 to-rose-400/30
backdrop-blur-md
shadow-[0_0_20px_rgba(236,72,153,0.35)]
hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
hover:scale-105
transition-all duration-300 ease-in-out
rounded-3xl
flex justify-center items-center "><iframe className="h-full w-full" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FHuskPowerSystemsIndia%2Fvideos%2F1397214217884820%2F&show_text=false&width=560&t=0" width="560" height="314"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true} ></iframe></div>
          </div>
        </section>
        <section
          id="contact"
          className="w-screen  min-h-screen relative z-40 "
        >
          <div className=" pb-15 h-full  flex flex-col gap-10 pt-50 justify-center items-center w-screen  text-black/80">
            <div className="md:w-2/5 w-4/5 text-center  flex flex-col justify-center items-center ">
              <h1 className="md:text-5xl fo text-4xl w-4/5 sm:w-full   sm:p-2  ">
                Get In Touch
              </h1>
              <div className="w-4/5 sm:w-full bg-gradient-to-br h-1 from-purple-600 to-pink-500 "></div>
            </div>
            <div className="w-full  flex flex-col md:flex-row h-fit ">
              <div className="md:w-2/5 w-full  justify-center flex  items-center flex-col ">
                <div className=" w-4/5 text-2xl md:w-3/5 flex justify-center  items-center md:text-3xl">
                  <h1>Contact Information</h1>
                </div>
                <div className=" w-4/5 md:w-3/5  items-center flex gap-10 mt-6">
                  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#ec4899" // pink-500
  strokeWidth="1.5"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="drop-shadow-[0_0_6px_rgba(236,72,153,0.7)]"
>
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.11a2 2 0 0 1 2.11-.45c.84.27 1.72.47 2.62.59A2 2 0 0 1 22 16.92z"></path>
</svg>
                  <div>
                    <h1 className="md:text-3xl text-[20px] ">Phone</h1>
                    <p className="text-blborder-black/70 text-[16px]">+91-9210024461</p>
                  </div>
                </div>
                <div className=" w-4/5 md:w-3/5 flex     items-center gap-10 mt-6">
                  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#ec4899" // pink-500
  strokeWidth="1.5"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="drop-shadow-[0_0_6px_rgba(236,72,153,0.7)] transition-all duration-300 hover:scale-110"
>
  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
  <path d="M3 7l9 6 9-6"></path>
</svg>
                  <div>
                    <h1 className="md:text-3xl text-[20px] ">Email</h1>
                    <p className="text-blborder-black/70    w-full  text-[16px]">
                      riyabansalofficial13@gmail.com
                    </p>
                  </div>
                </div>

                <div className=" w-4/5 md:w-3/5 flex    items-center gap-8 mt-6">
                  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="36"
  height="36"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#ec4899" // pink-500
  strokeWidth="1.5"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="drop-shadow-[0_0_6px_rgba(236,72,153,0.7)] transition-all duration-300 hover:scale-110"
>
  <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z"></path>
  <circle cx="12" cy="11" r="2.5"></circle>
</svg>
                  <div>
                    <h1 className="md:text-3xl text-[20px]">Location</h1>
                    <p className="text-blborder-black/70    w-full  text-[16px]">
                      New Delhi, India
                    </p>
                  </div>
                </div>
                <div className="w-full mt-5 gap-10 flex justify-center ">
                  <div>
                    <a href="https://www.instagram.com/riya_bansal13?igsh=c2ExbXBsZWIycXpw">
                      <svg
  xmlns="http://www.w3.org/2000/svg"
  width="36"
  height="36"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#ec4899" // pink-500
  strokeWidth="1.5"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="drop-shadow-[0_0_6px_rgba(236,72,153,0.7)] transition-all duration-300 hover:scale-110"
>
  <rect
    x="3"
    y="3"
    width="18"
    height="18"
    rx="5"
    ry="5"
  ></rect>

  <circle cx="12" cy="12" r="4"></circle>

  <circle cx="17" cy="7" r="1"></circle>
</svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" w-full md:w-3/5 ">
                <form
                  className=" flex-col fo flex justify-center items-center gap-5 mt-10"
                  action=""
                  onSubmit={handleSubmit(onsubmit)}
                >
                  <div className=" w-4/5 ">
                    <h1 className="text-[16px] md:text-2xl">Full Name</h1>
                    <input
                      placeholder="Enter Your Full name"
                      className="border-black border h-10 w-full"
                      type="text"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className=" w-4/5 ">
                    <h1 className="text-[16px] md:text-2xl">Email Address </h1>
                    <input
                      placeholder="Enter Your Email"
                      className="border-black border h-10 w-full"
                      type="email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className=" w-4/5 ">
                    <h1 className="text-[16px] md:text-2xl">Phone Number</h1>
                    <input
                      placeholder="Enter Your Phone Number"
                      className="border-black border h-10 w-full"
                      type="tel"
                      {...register("tel", { required: true })}
                    />
                  </div>
                  <div className=" w-4/5 ">
                    <h1 className="text-[16px] md:text-2xl">Message</h1>
                    <textarea
                      placeholder="Write Your Message"
                      className="border-black w-full border"
                      name=""
                      id=""
                      {...register("msg", { required: true })}
                    ></textarea>
                  </div>

                  <input
                    className=" text-blborder-black fo rounded-2xl cursor-pointer w-70  bg-gradient-to-br from-purple-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
                    disabled={isSubmitting}
                    type="submit"
                    value="Send Message via WhatsApp "
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
