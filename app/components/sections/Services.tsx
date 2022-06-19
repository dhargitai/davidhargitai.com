import { Cta } from "~/components";

export function Services() {
  return (
    <div className="pt-10 sm:pt-12 md:14 lg:pt-16 pb-20 font-medium leading-8 text-slate-500">
        <div
          className="clear-both mx-auto table flex-col items-stretch px-6 leading-8"
          style={{
            maxWidth: "1248px",
          }}
        >
          <div
            
            style={{
              maxWidth: "592px",
            }}
            className="relative mx-auto px-6 text-center opacity-100"
          >
            <h2 className="mt-0 mb-4 text-4xl font-bold leading-6 text-dh-dark">
              What am I up to now?
            </h2>
            <p className="mt-0 mb-5 box-border">
            I'd like to bring a lot of value to the world by doing what I love and helping others. Here are my current interests and learning paths:
            </p>
          </div>
          <div className="relative mt-16 flex items-center justify-center text-slate-500">
            <div
              className="md:grid"
              style={{
                gap: "40px 48px",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto",
                gridAutoColumns: "1fr",
              }}
            >
              <div
                
                style={{
                  borderRadius: "20px",
                }}
                className="mb-6 md:mb-0 flex flex-col items-start overflow-hidden bg-white py-12 pr-12 pl-10 opacity-100"
              >
                <img
                  src="/images/service-4-personal-x-template.svg"
                  alt=""
                  className="mr-6 mb-6 inline-block max-w-full border-0 align-middle"
                  style={{ borderRadius: "20px" }}
                />
                <div className="box-border">
                  <h3 className="mt-0 mb-3 text-2xl font-bold leading-5 text-dh-dark">
                    Web development
                  </h3>
                  <p className="my-0 box-border">
                    My favorite tool for implementing things on the internet is Javascript, precisely the Remix framework and the React library.
                  </p>
                </div>
              </div>
              <div
                style={{
                  borderRadius: "20px",
                }}
                className="mb-6 md:mb-0 flex flex-col items-start overflow-hidden bg-white py-12 pr-12 pl-10 opacity-100"
              >
                <img
                  src="/images/service-2-personal-x-template.svg"
                  alt=""
                  className="mr-6 mb-6 inline-block max-w-full border-0 align-middle"
                  style={{ borderRadius: "20px" }}
                />
                <div className="box-border">
                  <h3 className="mt-0 mb-3 text-2xl font-bold leading-5 text-dh-dark">
                    Building online businesses
                  </h3>
                  <p className="my-0 box-border">
                    This requires many skills to make it right, but the rewards are the highest here. This is the way to provide tons of value and set myself free at the same time.
                  </p>
                </div>
              </div>
              <div
                style={{
                  borderRadius: "20px",
                }}
                className="mb-6 md:mb-0 flex flex-col items-start overflow-hidden bg-white py-12 pr-12 pl-10 opacity-100"
              >
                <img
                  src="/images/service-1-personal-x-template.svg"
                  alt=""
                  className="mr-6 mb-6 inline-block max-w-full border-0 align-middle"
                  style={{ borderRadius: "20px" }}
                />
                <div className="box-border">
                  <h3 className="mt-0 mb-3 text-2xl font-bold leading-5 text-dh-dark">
                  Digital drawing
                  </h3>
                  <p className="my-0 box-border">
                  
I was always amazed how beautiful and cool graphics can be made with the proper digital tools and drawing/painting skills. Finally I started to learn this too.
                  </p>
                </div>
              </div>
              <div
                
                style={{
                  borderRadius: "20px",
                }}
                className="mb-6 md:mb-0 flex flex-col items-start overflow-hidden bg-white py-12 pr-12 pl-10 opacity-100"
              >
                <img
                  src="/images/service-3-personal-x-template.svg"
                  alt=""
                  className="mr-6 mb-6 inline-block max-w-full border-0 align-middle"
                  style={{ borderRadius: "20px" }}
                />
                <div className="box-border">
                  <h3 className="mt-0 mb-3 text-2xl font-bold leading-5 text-dh-dark">
                  Audience building
                  </h3>
                  <p className="my-0 box-border">
                  
This is the most important skill of all. I want to meet and connect like-minded people, learn from them and grow with them.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="absolute left-auto right-auto top-0 bottom-0 -z-[1] -mt-9 w-full max-w-4xl rounded-3xl bg-violet-50"
              style={{ minHeight: "116%", inset: "0% auto" }}
            />
          </div>

          <div className="mt-20 flex justify-center opacity-100">
            <Cta link="https://twitter.com/hargitaidavid">Get in touch</Cta>
          </div>
        </div>
      </div>
  )
}
