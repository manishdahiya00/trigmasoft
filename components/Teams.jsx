import React from "react";

function Teams() {
  return (
    <section
      className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-gray-900"
      id="team"
    >
      <hr className="mx-4 py-4" />

      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className=" mb-2 block text-5xl font-semibold text-white">
                Our Team
              </span>

              <p className="text-body-color text-base text-white">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <Card
            name="Anil Kumar"
            post={"Chief Executive Officer"}
            src={"/image-04.webp"}
          />
          <Card
            name="Sandeep Kumar"
            post={"Product Manager"}
            src={"/image-03.webp"}
          />
          <Card name="Rohit Singh" post={"CTO"} src={"/image-02.webp"} />
          <Card
            name="Ashish Singh"
            post={"Accountant"}
            src={"/image-04.webp"}
          />
        </div>
      </div>
    </section>
  );
}

export default Teams;

const Card = ({ name, post, src }) => {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/4">
      <div className="mx-auto mb-10 w-full max-w-[370px]">
        <div className="relative overflow-hidden rounded-lg">
          <img src={src} alt="image" sizes="auto" className="w-full" />
          <div className="absolute bottom-5 left-0 w-full text-center">
            <div className="relative mx-5 overflow-hidden rounded-lg bg-white dark:bg-dark-2 py-5 px-3">
              <h3 className="text-black text-base font-semibold">{name}</h3>
              <p className="text-body-color dark:text-dark-6 text-xs">{post}</p>
              <div>
                <span className="absolute left-0 bottom-0">
                  <svg
                    width="61"
                    height="30"
                    viewBox="0 0 61 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="16"
                      cy="45"
                      r="45"
                      fill="#13C296"
                      fillOpacity="0.11"
                    />
                  </svg>
                </span>
                <span className="absolute top-0 right-0">
                  <svg
                    width="20"
                    height="25"
                    viewBox="0 0 20 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="0.706257"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 0.706257 24.3533)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="6.39669"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 6.39669 24.3533)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="12.0881"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 12.0881 24.3533)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="17.7785"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 17.7785 24.3533)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="0.706257"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 0.706257 18.6624)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="6.39669"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 6.39669 18.6624)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="12.0881"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 12.0881 18.6624)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="17.7785"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 17.7785 18.6624)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="0.706257"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 0.706257 12.9717)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="6.39669"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 6.39669 12.9717)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="12.0881"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 12.0881 12.9717)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="17.7785"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 17.7785 12.9717)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="0.706257"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 0.706257 7.28077)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="6.39669"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 6.39669 7.28077)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="12.0881"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 12.0881 7.28077)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="17.7785"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 17.7785 7.28077)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="0.706257"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 0.706257 1.58989)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="6.39669"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 6.39669 1.58989)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="12.0881"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 12.0881 1.58989)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="17.7785"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 17.7785 1.58989)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
