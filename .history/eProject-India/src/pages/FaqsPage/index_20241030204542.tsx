import "./index.css";
import ToogleContent from "./ToogleContent";
const Faqs = () => {
  return (
    <>
      <section className="relative bg-cover pt-0">
        <div
          className="relative h-60 md:h-96 bg-fixed bg-center bg-cover flex justify-center items-center"
          style={{
            backgroundImage:
              'url("	https://duruthemes.com/demo/html/bycamp/img/blog/01.jpg")',
          }}
        >
          <div className="bg-black bg-opacity-30 w-full h-full flex justify-center items-center">
            <h3 className="text-5xl text-white">FAQs</h3>
          </div>
        </div>
      </section>
      <section className="p-28">
        <div className="container">
          <div className="flex justify-around lg:flex-row md:flex-col sm:flex-col max-[640px]:flex-col">
            <div className="lg:w-[30rem] md:w-4/5 md:mx-auto sm:col-12 sm:mx-auto flex flex-col gap-4 items-center">
              <ToogleContent title="Are meals provided at the camp?" />
              <ToogleContent title="Do you have waiting lists for cancellations?" />
              <ToogleContent title="What should my child bring to the camp?" />
              <ToogleContent title="Can I bring my own firewood?" />
            </div>
            <div className="lg:w-[30rem] md:w-4/5 md:mx-auto sm:col-12 sm:mx-auto lg:pt-0 md:pt-5 sm:pt-5 max-[640px]:pt-5 flex flex-col gap-4 ">
              <ToogleContent title="What should I bring during my stay?" />
              <ToogleContent title="Can I bring my dog?" />
              <ToogleContent title="Can I make a fire?" />
              <ToogleContent title="What is the camper-to-staff ratio?" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
