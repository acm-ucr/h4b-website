import springPicture from "@/public/images/spring/spring24_9.webp"; 
import { ABOUT } from "@/data/aboutPage";
import Title from "@/components/Title";
import Picture from "@/components/Picture";

const Page = () => {
  return (
    <div className="bg-biscuits-green-100 flex flex-col items-center gap-y-10 p-4 md:p-10">
      <Title text="About Us" color="red" />
      <Picture
        classname="flex justify-center"
        x={10}
        y={10}
        image={springPicture}
        alt="Spring 24 Picture"
      />
      {ABOUT.map((section, index) => (
        <div key={index} className="mb-8 text-center">
          <div className="italic text-biscuits-green-200 font-shrikhand text-4xl mb-4">
            {section.subtitle}
          </div>
          <div className="text-2xl font-inika w-2/3 mx-auto">
            {section.paragraph}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
