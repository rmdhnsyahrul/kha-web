import React from "react";
import SectionTitle from "../typography/SectionTitle";
import Image from "next/image";

export default function OurTechnology() {
  return (
    <section
      className="flex flex-col p-5 sm:py-[64px] sm:px-[80px] bg-[#F6F6F6]"
      id="our-technology"
    >
      <SectionTitle>Our Technology</SectionTitle>
      <section>
        <div className="mt-4">
          {[
            [
              "GPS Monitoring and Tracking",
              "We provide cutting-edge GPS monitoring and tracking features within our mine management platform to revolutionize your mining operations. Our advanced system offers real-time mapping of the mine pit, overburden removal locations, and the routes connecting these critical areas. With precise tracking of equipment and personnel movements, you can ensure all activities are seamlessly recorded and monitored. Our platform's comprehensive mapping capabilities enable optimal route planning and resource allocation, minimizing operational delays and reducing fuel consumption.",
              "/images/gps-tracking.jpg",
            ],
            [
              "Fleet Management System",
              "We provide a state-of-the-art fleet management system that revolutionizes how you monitor and optimize your mining operations. Our cutting-edge solution tracks the performance of trucks, excavators, and other mining equipment throughout the entire mining supply chain. By leveraging advanced GPS technology and real-time data analytics, our system ensures that every piece of equipment is operating at peak efficiency. Monitor fuel consumption, equipment utilization, and maintenance schedules to reduce downtime and increase productivity. Our comprehensive tracking and reporting features empower you with the insights needed to make informed decisions, streamline operations, and enhance overall safety.",
              "/images/monitoring.jpg",
            ],
            [
              "Integrated Dashboard for Benchmarking",
              "We provide an integrated dashboard for benchmarking mining activities, allowing you to seamlessly compare actual mining results with the planning activities listed in the Rencana Kerja dan Anggaran Belanja (RKAB). Our sophisticated system gathers data from various mining operations and compiles it into a user-friendly interface. This enables you to track progress, identify discrepancies, and ensure adherence to planned schedules and budgets. By offering real-time insights and comprehensive analytics, our dashboard empowers you to make data-driven decisions, optimize resource allocation, and enhance overall operational efficiency.",
              "/images/integrated.jpg",
            ],
            [
              "Fuel Monitoring",
              "We provide an advanced fuel monitoring system designed to track and optimize fuel usage across various mining equipment used in overburden removals and hauling. Our system offers real-time monitoring and detailed analytics for a range of machinery, including trucks, excavators, bulldozers, and loaders. By leveraging cutting-edge technology, our fuel monitoring system enables you to identify inefficiencies, reduce fuel consumption, and minimize costs. With comprehensive reporting and data visualization, you gain valuable insights into fuel usage patterns, allowing for more informed decision-making and improved operational efficiency.",
              "/images/monitoring.jpg",
            ],
          ].map(([title, description, imageUrl], index) => (
            <div
              className="grid grid-flow-row sm:grid-cols-4 gap-[30px] mb-[48px]"
              key={title}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="col-span-3 sm:col-1">
                    <div className="relative">
                      <Image
                        src={imageUrl}
                        width={323}
                        height={323}
                        className="rounded-[32px] w-full h-auto"
                        alt="gps monitoring and tracking"
                      />
                      <div className="image-bg-tech left" />
                    </div>
                  </div>
                  <div className="col-span-3 ">
                    <h3 className="text-lg/8 sm:text-[40px]/[72px] font-bold pb-2 text-primary-blue">
                      {title}
                    </h3>
                    <p className="sm:text-[18px]/[32px] text-[#0A0A0A] !text-justify">
                      {description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-span-3 sm:hidden">
                    <div className="relative">
                      <Image
                        src={imageUrl}
                        width={323}
                        height={323}
                        className="rounded-[32px] w-full h-auto"
                        alt="gps monitoring and tracking"
                      />
                      <div className="image-bg-tech left" />
                    </div>
                  </div>
                  <div className="col-span-3 ">
                    <h3 className="text-lg/8 sm:text-[40px]/[72px] font-bold pb-2 text-primary-blue">
                      {title}
                    </h3>
                    <p className="sm:text-[18px]/[32px] text-[#0A0A0A] !text-justify">
                      {description}
                    </p>
                  </div>
                  <div className="hidden sm:col-1">
                    <div className="relative">
                      <Image
                        src={imageUrl}
                        width={323}
                        height={323}
                        className="rounded-[32px] w-full h-auto"
                        alt="gps monitoring and tracking"
                      />
                      <div className="image-bg-tech left" />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="mt-4 grid grid-flow-row sm:grid-cols-3 gap-[58px]">
          {[
            [
              "Smart Data Analysis",
              "We provide intelligent and detailed data analysis services to ensure optimal and efficient mine performance.",
              "/images/gps-tracking.jpg",
            ],
            [
              "Mine Digitalization",
              "Our services include access to our proprietary cloud computing software where clients would have access to their operations-related data anytime, anywhere, and from any device.",
              "/images/monitoring.jpg",
            ],
            [
              "Around-the-Clock Service",
              "We provide fast and responsive service, so you can get the support you need easily and without a hitch.",
              "/images/gps-tracking.jpg",
            ],
            [
              "Effective Monitoring",
              "Our services provide effective end-to-end mine monitoring to ensure that all operations run smoothly and without interruption.",
              "/images/monitoring.jpg",
            ],
            [
              "Expert IT Support",
              "With a team of reliable and experienced IT experts, we offer the latest technology solutions that are appropriate and effective for all mine monitoring problems.",
              "/images/integrated.jpg",
            ],
          ].map(([title, description, url]) => (
            <div className="col-1 rounded-[32px] relative" key={title}>
              <Image
                width={412}
                height={416}
                src={url}
                className="h-auto w-full object-cover rounded-[32px] relative"
                alt={title}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#323b6080] to-[#323B60] z-1 rounded-[32px] flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-justify text-lg text-white font-extralight">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
