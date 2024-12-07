import { Carousel } from "@material-tailwind/react";
 
export function HeroSection() {
  return (
    <Carousel className="rounded-none" 
    loop={true}
    navigation={false}
    transition={{transition : "tween", duration : 2}}
    autoplay={true}
    autoplayDelay={5000}
    >
      <img
      src="../banner1.png"
        alt="image 1"
        className="h-[33em] w-full"
      />
      <img
            src="../banner1.png"
        alt="image 2"
        className="h-[33em] w-full"
      />
    </Carousel>
  );
}