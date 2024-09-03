import QuestionMark from "../assets/question-mark.png";
import Boxes from "../assets/boxes.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { cn } from "@/lib/utils";

const initialImages = [
  "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1516750484197-6b28d10c91ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNhdHN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhdHN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1522856339183-9a8b06b05937?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNhdHN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1577544060849-3fc4e4a5ba01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGNhdHN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1526673945462-bbebcd9f24f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGNhdHN8ZW58MHx8MHx8fDA%3D",
];

const CarouselCard = () => {
  const [images, setImages] = useState(initialImages);
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const img = URL.createObjectURL(files[0]);
    setImages([img, ...images]);
  };
  return (
    <div className="relative flex flex-col gap-6 w-full h-[315px] px-[56px] py-4 bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_#00000066] rounded-[18px]">
      <div className="absolute top-5 left-3 flex flex-col gap-[104px]">
        <img src={QuestionMark} alt="Question Mark Icon" />
        <img src={Boxes} alt="Boxes Icon" />
      </div>

      <Carousel className="flex flex-col h-full w-full gap-2">
        <div className="w-full flex items-center justify-between">
          <div className="h-16 text-white text-xl font-medium py-4 px-10 rounded-[20px] bg-[#171717] shadow-[0px_4px_10px_2px_#00000040_inset]">
            Gallery
          </div>
          <div className="flex items-center gap-5">
            <label htmlFor="image">
              <input
                accept="image/*"
                onChange={handleImageUpload}
                type="file"
                name="image"
                id="image"
                className="sr-only"
              />
              <div className="cursor-pointer uppercase rounded-full font-medium bg-[#FFFFFF08] button-shadow px-6 py-4 text-white text-sm">
                + Add Image
              </div>
            </label>
            <CarouselPrevious className="bg-[linear-gradient(139.14deg,_#303439_12.4%,_#161718_94.96%)] shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7]" />
            <CarouselNext className="bg-[linear-gradient(139.14deg,_#303439_12.4%,_#161718_94.96%)] shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7]" />
          </div>
        </div>
        <CarouselContent className="flex-1 p-4">
          {images.map((img, i) => (
            <CarouselItem className="basis-1/3" key={img}>
              <div
                className={cn(
                  `group aspect-square rounded-3xl overflow-hidden transition-all duration-500 hover:-rotate-3 hover:scale-110 hover:shadow-[-9.15px_-18.5px_54.89px_-142px_#617892,12px_13px_39.2px_9.15px_#0A0A0A9E]`,
                  {
                    "mr-2": i === img.length - 1,
                  }
                )}
              >
                <img
                  src={img}
                  alt="Image"
                  className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselCard;
