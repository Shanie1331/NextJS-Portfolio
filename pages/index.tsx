import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../types";

const About: NextPage = () => {
  // console.log(services);

  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <h6 className="my-3 text-base font-medium">
        Lead Developer/Architect with over 8 years of experience, with a proven
        track record in both product and service-based organizations. I
        specialize in React, React Native, and JavaScript, with expertise in
        project management methodologies like Agile and Scrum. My experience
        includes optimizing app performance, implementing CI/CD pipelines, and
        maintaining a 99.5% crash-free session rate. <br />
        <br />I also have extensive knowledge in UI/UX optimization, A/B
        testing, and SEO enhancements. I’ve successfully led teams across
        industries such as Finance (Trading Systems), E-commerce, Healthcare,
        Agriculture, and Sports, consistently delivering stable, efficient, and
        user-centric applications.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-300 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <div className="grid gap-6 my-3 md:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-gray-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

//!called every time  the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }

export default About;
