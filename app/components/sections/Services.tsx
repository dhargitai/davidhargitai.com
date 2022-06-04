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
            <h2 className="mt-0 mb-4 text-4xl font-bold leading-6 text-slate-900">
              My services
            </h2>
            <p className="mt-0 mb-5 box-border">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              mattis nunc aliquam tincidunt est non. Viverra
              <span className="box-border whitespace-nowrap">nec eu.</span>
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
                  src="/images/service-1-personal-x-template.svg"
                  alt=""
                  className="mr-6 mb-6 inline-block max-w-full border-0 align-middle"
                  style={{ borderRadius: "20px" }}
                />
                <div className="box-border">
                  <h3 className="mt-0 mb-3 text-2xl font-bold leading-5 text-slate-900">
                    Web Design
                  </h3>
                  <p className="my-0 box-border">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    iaculis viverra mollis nisl dole dolorili tincidunt. Integer
                    eget vitae id tortor.
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
                  <h3 className="mt-0 mb-3 text-2xl font-bold leading-5 text-slate-900">
                    UI / UX Design
                  </h3>
                  <p className="my-0 box-border">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    iaculis viverra mollis nisl dole dolorili tincidunt. Integer
                    eget vitae id tortor.
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
                  <h3 className="mt-0 mb-3 text-2xl font-bold leading-5 text-slate-900">
                    Product Design
                  </h3>
                  <p className="my-0 box-border">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    iaculis viverra mollis nisl dole dolorili tincidunt. Integer
                    eget vitae id tortor.
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
                  src="/images/service-4-personal-x-template.svg"
                  alt=""
                  className="mr-6 mb-6 inline-block max-w-full border-0 align-middle"
                  style={{ borderRadius: "20px" }}
                />
                <div className="box-border">
                  <h3 className="mt-0 mb-3 text-2xl font-bold leading-5 text-slate-900">
                    Web Development
                  </h3>
                  <p className="my-0 box-border">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    iaculis viverra mollis nisl dole dolorili tincidunt. Integer
                    eget vitae id tortor.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="absolute left-auto right-auto top-0 bottom-0 -z-[1] -mt-9 w-full max-w-4xl rounded-3xl bg-violet-50"
              style={{ minHeight: "116%", inset: "0% auto" }}
            />
          </div>

          <div
            
            style={{
              
            }}
            className="mt-20 flex justify-center opacity-100"
          >
            <a
              href="contact.html"
              className="inline-block cursor-pointer border-0 border-none bg-slate-900 py-6 px-16 text-center text-lg font-bold text-white hover:bg-white hover:text-slate-900"
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
      </div>
  )
}
