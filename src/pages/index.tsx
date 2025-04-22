//import Image from "next/image";
//import { Geist, Geist_Mono } from "next/font/google";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import Topo from "@/components/Topo";

export default function Home() {
  return (
    <div>
      <Topo/>
      <DotLottieReact
      src="https://lottie.host/74abd099-80e3-49e1-b5bc-7ef8c6dc8cf4/eM7wlOgqru.lottie"
      loop
      autoplay
      style={{width: '80%', margin:'auto'}}
    />   
    </div>
  );
}
