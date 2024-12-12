import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Experience = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-1">
        <h5 className="my-3 text-2xl font-bold">8+ Years of Experience</h5>
        <div className="">
          <p className="my-2 text-xl font-medium">
            Lead Developer @{" "}
            <span className="font-light">
              Freelance Consultant{" "}
              <span className="text-xs font-thin"> ( Present )</span>{" "}
            </span>
          </p>
        </div>
        <div className="">
          <p className="my-2 text-xl font-medium">
            Technology Lead @{" "}
            <span className="font-light">
              Orange Health Labs{" "}
              <span className="text-xs font-thin">
                {" "}
                ( Sept 2022 - Sept 2023 )
              </span>{" "}
            </span>
          </p>
        </div>
        <div className="">
          <p className="my-2 text-xl font-medium">
            Senior Software Engineer @{" "}
            <span className="font-light">
              Yara International{" "}
              <span className="text-xs font-thin">
                {" "}
                ( Feb 2020 - Sept 2022 )
              </span>{" "}
            </span>
          </p>
        </div>
        <div className="">
          <p className="my-2 text-xl font-medium">
            React Native / React Engineer @{" "}
            <span className="font-light">
              Sportz Interactive{" "}
              <span className="text-xs font-thin"> ( July 18 - Feb 2020 )</span>{" "}
            </span>
          </p>
        </div>
        <div className="">
          <p className="my-2 text-xl font-medium">
            UI Developer @{" "}
            <span className="font-light">
              Mindtree{" "}
              <span className="text-xs font-thin"> ( June 17 - July 18 )</span>{" "}
            </span>
          </p>
        </div>
        <div className="">
          <p className="my-2 text-xl font-medium">
            Front end Developer @{" "}
            <span className="font-light">
              Crunk Private Ltd{" "}
              <span className="text-xs font-thin"> ( Aug 16 - June 17 )</span>{" "}
            </span>
          </p>
        </div>
        {/* <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">Academy of Technology (2017-2021)</p>
            <p className="my-3">
              I am currently pursuing B.tech in Computer Science Engineering
              from Academy of Technology
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
