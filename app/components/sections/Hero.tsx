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
              <h3 className="mt-0 mb-5 text-xl sm:text-2xl font-bold leading-5 text-gray-600">
                Hey, I’m John Carter
              </h3>
              <h1 className="mx-0 mt-0 mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
                I enjoy designing tech websites and digital products
              </h1>
              <img
                src="/images/hero-underline-personal-x-template.svg"
                loading="eager"
                alt=""
                className="relative inline-block max-w-full border-0 align-middle"
                style={{ top: "-38px", zIndex: -1 }}
              />
              <div className="box-border">
                <a
                  href="contact.html"
                  className="inline-block cursor-pointer border-0 border-none bg-slate-900 py-6 px-16 text-lg font-bold text-white hover:bg-white hover:text-slate-900"
                  style={{
                    transition:
                      "color 300ms ease 0s, transform 300ms ease 0s, box-shadow 300ms ease 0s, background-color 300ms ease 0s, -webkit-transform 300ms ease 0s",
                    textDecoration: "none",
                    borderRadius: "80px",
                  }}
                >
                  Get in touch
                </a>
              </div>
            </div>
            <div
              className="w-full overflow-hidden opacity-100"
            >
              <img
                src="/images/hero-image-personal-x-template.png"
                srcSet="
          /images/hero-image-personal-x-template-p-500.png  500w,
          /images/hero-image-personal-x-template.png       1184w
        "
                sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, (max-width: 991px) 472px, (max-width: 1439px) 47vw, 588px"
                alt=""
                className="mx-auto inline-block w-full max-w-full sm:max-w-md border-0 align-middle"
              />
            </div>
          </div>
        </div>
      </div>
  )
}
