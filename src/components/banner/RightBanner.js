import { bannerImg } from "../../assets";

const RightBanner = () => {
  return (
    <div className="hidden w-full lgl:w-1/2 flex justify-end items-end mb-10 lg:flex">
      <img className="relative w-[400px] z-10 lgl:ml-10" src={bannerImg} alt="" />
    </div>
  );
};

export default RightBanner;
