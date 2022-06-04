export function AboutMe() {
  return (
    <div className="pt-10 sm:pt-12 md:14 lg:pt-16 pb-20 font-medium leading-8 text-slate-500">
        <div
          className="clear-both mx-auto table items-stretch px-6 leading-8"
          style={{
            maxWidth: "1248px",
            content: '" "',
            gridArea: "1 / 1 / 2 / 2",
          }}
        >
          <div className="flex-col-reverse lg:flex-row flex gap-12 justify-between items-center text-slate-500">
            <div
              className="lg:w-1/2 overflow-hidden opacity-100"
            >
              <img
                src="/images/home-about-personal-x-template.jpg"
                srcSet="
          /images/home-about-personal-x-template-p-500.jpeg   500w,
          /images/home-about-personal-x-template-p-800.jpeg   800w,
          /images/home-about-personal-x-template-p-1080.jpeg 1080w,
          /images/home-about-personal-x-template.jpg         1194w
        "
                sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 47vw, 589.46875px"
                alt=""
                className="rounded-3xl box-border inline-block max-w-full border-0 align-middle"
              />
            </div>
            <div
              className="ml-0 w-full opacity-100"
            >
              <h2 className="mt-0 mb-6 text-4xl font-bold leading-6 text-slate-900">
                About me
              </h2>
              <p className="mt-0 mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                mattis nunc aliquam tincidunt est non. Viverra nec eu, in
                ridiculus egestas mi. Vulputate tristique porttitor enim aliquam
                ullamcorper. Velit dui laoreet in{" "}
                <span className="box-border whitespace-nowrap">et mus.</span>
              </p>
              <a
                href="about.html"
                className="inline-block cursor-pointer border-0 border-none bg-slate-900 py-6 px-16 text-center text-lg font-bold text-white hover:bg-white hover:text-slate-900"
                style={{
                  transition:
                    "color 300ms ease 0s, transform 300ms ease 0s, box-shadow 300ms ease 0s, background-color 300ms ease 0s, -webkit-transform 300ms ease 0s",
                  textDecoration: "none",
                  borderRadius: "80px",
                }}
              >
                More about me
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}
