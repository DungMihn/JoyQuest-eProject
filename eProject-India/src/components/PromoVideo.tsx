import IconVideo from "./IconVideo";

const PromoVideo = () => {
  return (
    <>
      <div
        className="relative h-60 md:h-96 bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://duruthemes.com/demo/html/bycamp/img/slider/01.jpg")',
        }}
      >
        <div className="flex absolute w-full h-full justify-center text-center text-white items-center bg-black bg-opacity-50 ">
          <h1 className="md:text-4xl text-2xl font-bold">
            JoyQuest Promo <p>Video</p>
            <div className="flex justify-center items-center pt-4">
              <IconVideo />
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

export default PromoVideo;
