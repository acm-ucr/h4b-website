import Demo from "@/components/Demo";
import { STUDENTS } from "@/data/Student";

const Home = () => {
  return (
    <div className="bg-biscuits-red-100 w-screen h-fit">
      <div className=" grid grid-cols-3 w-3/4">
        {STUDENTS.map((student, index) => (
          <Demo
            key={index}
            name={student.name}
            major={student.major}
            pic={student.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
