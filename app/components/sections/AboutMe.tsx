import { Cta } from "~/components";

export function AboutMe() {
  return (
    <div className="pt-10 sm:pt-12 md:14 lg:pt-16 pb-20 font-medium leading-8 text-dh-dark-light">
        <div
          className="clear-both mx-auto table items-stretch px-6 leading-8"
          style={{
            maxWidth: "1248px",
            content: '" "',
            gridArea: "1 / 1 / 2 / 2",
          }}
        >
          <div className="flex-col-reverse lg:flex-row flex gap-12 justify-between items-center text-dh-dark-light">
            <div
              className="lg:w-1/2 overflow-hidden opacity-100"
            >
              <img
                src="/images/david_hargitai_krumpensee.jpeg"
                alt="David Hargitai at hiking – Krumpensee"
                className="rounded-3xl box-border inline-block max-w-full border-0 align-middle"
              />
            </div>
            <div
              className="ml-0 w-full opacity-100"
            >
              <h2 className="mt-0 mb-6 text-4xl font-bold leading-6 text-dh-dark">
                About me
              </h2>
              <p className="mt-0 mb-12">
              Basically, I'm a positive and cheerful person. How could I be anything else, as I'm healthy and surrounded by loving, fantastic family and friends. I'm thankful for them every day!
              <br />
              Also, as everyone else, I've also lived some harder times too, but now I can be grateful for those for helping me to become the person I am today.
              </p>
              <Cta link="/about-me">More about me</Cta>
            </div>
          </div>
        </div>
      </div>
  )
}
