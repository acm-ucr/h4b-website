import Fall231 from "@/public/images/fall/fall23_1.webp"; // thisp picture was laready here when i opened file idk if this is what im supposed to put
import { ABOUT } from "@/data/aboutPage";
import Title from "@/components/Title";
import Picture from "@/components/Picture";

const Page = () => {
  return (
    <div className="bg-biscuits-green-100 grid grid-cols-1 gap-y-10 p-4 md:p-10">
      <Title text="About Us" color="red" />
      <div className="flex justify-center">
        <Picture x={10} y={10} image={Fall231} alt="Fall 23" />
      </div>
      {ABOUT.map((section, index) => (
        <div key={index} className="mb-8 text-center">
          <h2 className="italic text-biscuits-green-200 font-shrikhand text-4xl mb-4">
            {section.subtitle}
          </h2>
          <p className="text-base font-inika">{section.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
