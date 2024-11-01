"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Image from "next/image";

const LottieAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const loadAnimationData = async () => {
      const response = await fetch("/animation.json");
      const data = await response.json();
      setAnimationData(data);
    };

    loadAnimationData();
  }, []);

  if (!animationData) {
    return (
      <Image src={"/animation.png"} width={650} height={650} alt="animation" />
    );
  }

  return (
    <div style={{ width: "650px", height: "650px", margin: "auto" }}>
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
};

export default LottieAnimation;
