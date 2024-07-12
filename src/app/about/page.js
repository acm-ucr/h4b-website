import Image from "next/image";
import Fall231 from "@/public/images/fall/fall23_1.webp";

const Page = () => {
  return (
    <div className="bg-biscuits-pink bg-blobs1 md:bg-cover bg-contain bg-repeat-y">
      <Image src={Fall231} width={500} height={500} />
    </div>
  );
};

export default Page;
