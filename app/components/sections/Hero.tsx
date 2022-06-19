import { Cta } from "~/components";

export function Hero() {
  return (
    <div className="pt-10 sm:pt-12 md:14 lg:pt-16 pb-20 font-medium leading-8 text-slate-500">
        <div
          className="text-center lg:text-left container-xl mx-auto flex-col items-stretch px-6 leading-8"
          style={{
            maxWidth: "1248px",
          }}
        >
          <div className="flex-column lg:flex items-center justify-between text-slate-500">
            <div
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                opacity: 1,
                transformStyle: "preserve-3d",
                maxWidth: "880px",
                minWidth: "auto",
              }}
              className="mx-auto mb-6 opacity-100"
            >
              <h3 className="mt-0 mb-5 text-xl sm:text-2xl font-bold text-dh-dark-light">
                Hey, I’m David
              </h3>
              <h1 className="mx-0 mt-0 mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-dh-dark">
                Currently I'm building up the components of my ideal life as a web developer
              </h1>
              <h3 className="mt-0 mb-5 text-xl sm:text-2xl font-bold text-dh-dark-light">
              (or solopreneur? indie hacker? digital artist? whatever)
              </h3>
              <img
                src="/images/hero-underline-personal-x-template.svg"
                loading="eager"
                alt=""
                className="relative inline-block max-w-full border-0 align-middle"
                style={{ top: "-38px", zIndex: -1 }}
              />
              <div className="box-border">
                <Cta link="https://twitter.com/hargitaidavid">Get in touch</Cta>
              </div>
            </div>
            <div
              className="w-full overflow-hidden opacity-100"
            >
              <img
                src="/images/david_hargitai.png"
                alt="David Hargitai"
                className="mx-auto inline-block w-full max-w-full sm:max-w-md border-0 align-middle"
              />
            </div>
          </div>
        </div>
      </div>
  )
}
