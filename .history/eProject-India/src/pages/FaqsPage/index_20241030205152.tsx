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
              'url("https://duruthemes.com/demo/html/bycamp/img/blog/01.jpg")',
          }}
        >
          <div className="bg-black bg-opacity-30 w-full h-full flex justify-center items-center">
            <h3 className="text-5xl text-white text-center md:text-6xl">
              FAQs
            </h3>
          </div>
        </div>
      </section>
      <section className="p-5 md:p-28">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center">
            <div className="lg:w-[30rem] md:w-4/5 flex flex-col gap-4">
              <ToogleContent title="Are meals provided at the camp?" />
              <ToogleContent title="Do you have waiting lists for cancellations?" />
              <ToogleContent title="What should my child bring to the camp?" />
              <ToogleContent title="Can I bring my own firewood?" />
            </div>
            <div className="lg:w-[30rem] md:w-4/5 flex flex-col gap-4 md:mt-0 mt-5">
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
