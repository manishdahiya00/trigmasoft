import React from "react";

function About() {
  return (
    <div
      className="relative isolate overflow-hidden bg-gray-900 text-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <hr className="mx-4 py-4" />
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-purple-400">
                ABOUT US
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What is Trigmasoft?
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-400">
                In the ever-evolving landscape of Information Technology,
                finding a reliable partner who can meet your IT needs with
                excellence and dedication is crucial. Trigmasoft, established in
                2005, has been at the forefront of providing premium IT
                solutions to customers across North America, Europe, Asia, and
                Australia. With a track record of over a decade, Trigmasoft has
                built a reputation as a trusted IT partner, offering
                world-className services to businesses and organizations of all
                sizes.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/about.png"
            height={100}
            width={200}
            sizes="auto"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-purple-400">
                Our Team : Passionate and Highly Skilled
              </p>
              <p className=" text-gray-400">
                At the heart of Trigmasoft's success is its team of passionate
                and highly skilled professionals. These experts are not just
                employees but enthusiasts who genuinely love what they do. They
                are dedicated to delivering the best solutions and services, and
                this commitment shines through in every project they undertake.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className=" text-gray-400">
                    <strong className="font-semibold text-white">
                      Client-Centric Approach.
                    </strong>
                    We prioritize understanding our clients' unique needs and
                    challenges. This client-centric approach allows us to tailor
                    solutions that perfectly align with their goals and
                    objectives.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className=" text-gray-400">
                    <strong className="font-semibold text-white">
                      Customization.
                    </strong>
                    One size does not fit all. We believe in customizing our
                    services to match the specific requirements of each client,
                    ensuring that they receive the most relevant and effective
                    solutions.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                    <path
                      fillRule="evenodd"
                      d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className=" text-gray-400">
                    <strong className="font-semibold text-white">
                      Global Reach:
                    </strong>
                    With a presence in multiple continents, we have a deep
                    understanding of the global IT landscape. This enables us to
                    offer international businesses valuable insights and
                    solutions.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className=" text-gray-400">
                    <strong className="font-semibold text-white">
                      Proven Track Record.
                    </strong>
                    Over the years, we've successfully completed numerous
                    projects across a wide range of industries. Our portfolio of
                    satisfied clients serves as a testament to our expertise.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className=" text-gray-400">
                    <strong className="font-semibold text-white">
                      Cutting-Edge Technology.
                    </strong>
                    We remain at the forefront of technological advancements,
                    making use of the latest tools and methodologies to provide
                    state-of-the-art IT solutions.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                    <path
                      fillRule="evenodd"
                      d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className=" text-gray-400">
                    <strong className="font-semibold text-white">
                      Passion for Excellence.
                    </strong>
                    At Trigmasoft, we believe in continuous improvement. Our
                    team's passion for excellence drives us to consistently
                    deliver outstanding result
                  </span>
                </li>
              </ul>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-purple-400">
                Join Hands with Trigmasoft
              </h2>
              <p className="mt-6 text-gray-200 hite">
                Trigmasoft is more than just an IT service provider. We are your
                dedicated partner in harnessing the power of technology to
                achieve your business goals. Whether you are a small startup or
                a large multinational corporation, we are ready to assist you in
                your journey towards digital excellence. With a passionate team,
                a commitment to excellence, and a track record of success,
                Trigmasoft is your trusted IT solutions partner. Contact us
                today to explore how we can work together to transform your IT
                landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
