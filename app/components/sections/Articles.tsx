export function Articles() {
  return (
    <div className="pt-10 sm:pt-12 md:14 lg:pt-16 pb-20 font-medium leading-8 text-dh-dark-light">
        <div
          className="mx-auto flex-col items-stretch px-6 leading-8"
          style={{
            maxWidth: "1248px",
            content: '" "',
            gridArea: "1 / 1 / 2 / 2",
          }}
        >
          <div
            className="mb-8 lg:mb-16 flex flex-col lg:flex-row gap-8 text-center items-center lg:text-left justify-between opacity-100"
          >
            <h2 className="my-0 text-4xl font-bold leading-6 text-dh-dark">
              Articles &amp; News
            </h2>
            <a
              href="blog.html"
              className="mb-6 cursor-pointer border-0 border-none bg-dh-blue py-6 px-16 text-center text-lg font-bold text-white hover:bg-white hover:text-dh-dark"
              style={{
                textDecoration: "none",
                borderRadius: "80px",
                transition:
                  "color 300ms ease 0s, transform 300ms ease 0s, box-shadow 300ms ease 0s, background-color 300ms ease 0s, -webkit-transform 300ms ease 0s",
              }}
            >
              Browse articles
            </a>
          </div>
          <div
            className="box-border opacity-100"
          >
            <div
              role="list"
              className="mx-auto max-w-2xl lg:max-w-full flex flex-col lg:grid auto-cols-[1fr] grid-cols-3 gap-7 text-dh-dark-light"
            >
              <div role="listitem" className="box-border">
                {/* <a
                  href="#"
                  className="box-border flex min-h-full max-w-full cursor-pointer flex-col overflow-hidden border border-solid border-zinc-200 bg-white hover:text-dh-dark-light"
                  style={{
                    transition: "color 300ms ease 0s",
                    textDecoration: "none",
                    borderRadius: "20px",
                  }}
                >
                  <div className="flex flex-col justify-center">
                    <img
                      src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/611418e277292729f8324d1c_post-01-featured-image-personal-x-template.jpg"
                      alt=""
                      className="box-border inline-block h-full w-full max-w-full border-0 object-cover align-middle"
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </div>
                  <div className="px-6 pt-6 pb-12">
                    <h3 className="mt-0 mb-5 text-2xl font-bold text-dh-dark">
                      What is the right design tool to choose in 2022?
                    </h3>
                    <div className="box-border flex flex-wrap items-center">
                      <div className="box-border">UI/UX</div>
                      <div
                        className="mx-3 max-h-px w-6 bg-zinc-200"
                        style={{ minHeight: "1px" }}
                      />
                      <div className="box-border">August 26, 2021</div>
                    </div>
                  </div>
                </a> */}
              </div>

              <div role="listitem" className="box-border">
                {/* <a
                  href="#"
                  className="box-border flex min-h-full max-w-full cursor-pointer flex-col overflow-hidden border border-solid border-zinc-200 bg-white hover:text-dh-dark-light"
                  style={{
                    transition: "color 300ms ease 0s",
                    textDecoration: "none",
                    borderRadius: "20px",
                  }}
                >
                  <div className="flex flex-col justify-center">
                    <img
                      src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/611418854f62aac0a4e703c7_post-02-featured-image-personal-x-template.jpg"
                      alt=""
                      className="box-border inline-block h-full w-full max-w-full border-0 object-cover align-middle"
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </div>
                  <div className="px-6 pt-6 pb-12">
                    <h3 className="mt-0 mb-5 text-2xl font-bold text-dh-dark">
                      Font sizes definitive guide
                    </h3>
                    <div className="box-border flex flex-wrap items-center">
                      <div className="box-border">UI/UX</div>
                      <div
                        className="mx-3 max-h-px w-6 bg-zinc-200"
                        style={{ minHeight: "1px" }}
                      />
                      <div className="box-border">August 27, 2021</div>
                    </div>
                  </div>
                </a> */}
              </div>
              <div role="listitem" className="box-border">
                {/* <a
                  href="#"
                  className="box-border flex min-h-full max-w-full cursor-pointer flex-col overflow-hidden border border-solid border-zinc-200 bg-white hover:text-dh-dark-light"
                  style={{
                    transition: "color 300ms ease 0s",
                    textDecoration: "none",
                    borderRadius: "20px",
                  }}
                >
                  <div className="flex flex-col justify-center">
                    <img
                      src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/61141875f2025117a96d5d32_post-03-featured-image-personal-x-template.jpg"
                      alt=""
                      className="box-border inline-block h-full w-full max-w-full border-0 object-cover align-middle"
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </div>
                  <div className="px-6 pt-6 pb-12">
                    <h3 className="mt-0 mb-5 text-2xl font-bold text-dh-dark">
                      WFT is happening in the industry?
                    </h3>
                    <div className="box-border flex flex-wrap items-center">
                      <div className="box-border">UI/UX</div>
                      <div
                        className="mx-3 max-h-px w-6 bg-zinc-200"
                        style={{ minHeight: "1px" }}
                      />
                      <div className="box-border">August 28, 2021</div>
                    </div>
                  </div>
                </a> */}
              </div>

              <div
                className="my-5 flex-col border border-solid border-zinc-200 bg-white p-5 text-center text-dh-dark-light"
                style={{ borderRadius: "18px" }}
              >
                <div className="box-border">No items found.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
