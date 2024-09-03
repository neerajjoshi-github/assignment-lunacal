import TabsCard from "./components/TabsCard";
import CarouselCard from "./components/CarouselCard";

const App = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 xl:px-16 py-10 xl:py-20">
      <div className="flex max-xl:flex-col items-center gap-10 w-full max-w-[1920px]">
        <div className="flex-1 p-5 font-mono max-h-[800px] h-[90vh] border border-[#96BEE7] bg-[#616161D1] rounded-3xl text-white text-3xl font-semibold flex items-center justify-center">
          Hello 👋
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-[720px] items-center">
          {/* Tabs Card */}
          <TabsCard />
          {/* Seperator */}
          <div className="seprator h-1 w-[85%] rounded-full"></div>
          {/* Carousel */}
          <CarouselCard />
          {/* Seperator */}
          <div className="seprator h-1 w-[85%] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
