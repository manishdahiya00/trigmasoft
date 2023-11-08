import React from "react";

function Services() {
  return (
    <section
      className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-gray-900"
      id="services"
    >
      <hr className="mx-4 py-4" />
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                Discover Our Offerings
              </h2>
              <p className="text-white text-base dark:text-dark-6">
                At Trigmasoft, we&apos;re dedicated to delivering a wide array
                of high-impact services designed to meet your unique needs. Our
                commitment is unwavering, and our solutions are tailored to
                perfection.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap bg-gray-900 text-white">
          <Card
            title={"Web Development and Design Services"}
            desc={
              " Trigmasoft offers a suite of services to create and enhance youronline presence. We specialize in responsive website design,e-commerce website development, and custom web application development, ensuring your digital footprint is both engaging and functional."
            }
          />

          <Card
            title={"  Digital Marketing Strategies"}
            desc={
              " Trigmasoft is a digital marketing powerhouse. We provide comprehensive services in Search Engine Optimization (SEO),Pay-Per-Click (PPC) advertising, social media marketing, email marketing, and content marketing. Let us help you reach your target audience effectively and drive results."
            }
          />

          <Card
            title={"Graphic Design and Branding"}
            desc={
              "Our graphic design and branding services cover everything from crafting memorable logos to creating brand identity materials, and both print and digital marketing collateral. We ensure your brand stands out and leaves a lasting impression."
            }
          />
          <Card
            title={" Cloud Solutions and Management"}
            desc={
              " The cloud is the future, and we are here to help you navigate it. Our cloud services cover migration, implementation, and ongoing management of cloud infrastructure. Enhance scalability, flexibility, and efficiency with our expert guidance."
            }
          />
          <Card
            title={"Custom Software Development"}
            desc={
              "When your business needs a unique software solution, Trigmasoftdelivers. We offer custom software development to meet yourspecific needs, from initial concept to ongoing support and updates."
            }
          />
          <Card
            title={"Cybersecurity and Data Protection"}
            desc={
              "Protect your digital assets with our cybersecurity services. We provide security assessments, audits, and comprehensive security strategies to safeguard your data and systems from potential threats."
            }
          />
          <Card
            title={"  Managed IT Services"}
            desc={
              " Ensure your IT infrastructure runs smoothly with our managed ITservices. We offer 24/7 support, network management, and backup and disaster recovery solutions to keep your business operationsuninterrupted."
            }
          />
          <Card
            title={"  IT Consulting and Strategy"}
            desc={
              "Trigmasoft is your trusted IT consultant. Our services include  IT infrastructure assessments, systems and software analysis,and the development of IT strategies that align with yourbusiness objectives."
            }
          />
          <Card
            title={"  Business Consulting Services"}
            desc={
              " Trigmasoft offers business consulting services to improve your  processes, adopt technology efficiently, and drive growth. Our consulting expertise helps you make informed business decisions."
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Services;

const Card = ({ title, desc }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-9 rounded-[20px] bg-gray-700 p-10 shadow-md hover:shadow-lg hover:shadow-white md:px-7 xl:px-10">
        <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0375 1.2374C11.8125 -0.393851 2.92503 5.7374 1.29378 14.9624C0.450029 19.4061 1.46253 23.9624 4.05003 27.6749C6.63753 31.4436 10.5188 33.9186 14.9625 34.7624C15.975 34.9311 16.9875 35.0436 18 35.0436C26.0438 35.0436 33.2438 29.2499 34.7625 21.0374C36.3938 11.8124 30.2625 2.9249 21.0375 1.2374ZM32.2313 20.5874C32.175 21.0374 32.0625 21.4874 31.95 21.8811L19.2375 17.0999V3.5999C19.6875 3.65615 20.1375 3.7124 20.5313 3.76865C28.4063 5.1749 33.6375 12.7124 32.2313 20.5874ZM16.7063 3.5999V16.7624H3.60003C3.65628 16.3124 3.71253 15.8624 3.76878 15.4124C4.95003 8.83115 10.4063 4.10615 16.7063 3.5999ZM15.4125 32.2311C11.5875 31.5561 8.32503 29.4186 6.13128 26.2124C4.66878 24.1311 3.82503 21.7124 3.60003 19.2374H17.775L31.05 24.2436C28.2938 29.9811 21.9375 33.4686 15.4125 32.2311Z"
              fill="white"
            />
          </svg>
        </div>
        <h4 className=":text-white mb-[14px] text-2xl font-semibold">
          {title}
        </h4>
        <p className="text-body-color dark:text-dark-6">{desc}</p>
      </div>
    </div>
  );
};
