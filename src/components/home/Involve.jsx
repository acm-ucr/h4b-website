import Title from "../Title";
import Button from "../Button";

const Involve = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Title text="Get Involved" />
      <div className="flex font-light justify-center text-center text-2xl pb-4">
        Our food & information tabling occurs every <br />
        Wednesday from 9 AM to 3 PM around the Bell Tower <br />
        All that is needed to participate is fill the <br />
        Food Tabling Sign-Up Sheet to choose your <br />
        preferred time slot <br />
      </div>
      <Button text="SIGN UP" />
    </div>
  );
};

export default Involve;
