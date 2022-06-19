import * as React from 'react'
import { PreviousButton, NextButton } from '~/components';

const SLIDER_ID = 'portfolio-slider'

export function Portfolio() {
  const [currentPortfolioSlide, setCurrentPortfolioSlide] = React.useState(0)

  return (
    <div className="overflow-hidden pt-10 sm:pt-12 md:14 lg:pt-16 pb-20 font-medium leading-8 text-slate-500">
        <div
          className="mx-auto flex-col items-stretch px-6 leading-8"
          style={{
            maxWidth: "1248px",
            content: '" "',
            gridArea: "1 / 1 / 2 / 2",
          }}
        >
          <div
            
            style={{
              
              maxWidth: "325px",
            }}
            className="mb-36 md:mb-20 flex flex-wrap items-center justify-between opacity-100"
          >
            <div className="relative box-border" style={{ maxWidth: "465px" }}>
              <h2 className="my-0 text-4xl font-bold text-dh-dark">
                Take a look at my design portfolio
              </h2>
              <img
                src="/images/portfolio-underline-personal-x-template.svg"
                alt=""
                className="absolute box-border inline-block max-w-full border-0 align-middle"
                style={{ inset: "auto 0px -20px", zIndex: -1 }}
              />
            </div>
          </div>
          <div
            className="box-border opacity-100"
          >
            <div
              data-delay={4000}
              data-animation="slide"
              className="relative clear-both mb-0 h-full min-h-full w-full bg-transparent text-center"
              data-autoplay="false"
              data-easing="ease"
              data-hide-arrows="false"
              data-disable-swipe="false"
              data-autoplay-limit={0}
              data-nav-spacing={3}
              data-duration={500}
              data-infinite="true"
              role="region"
              aria-label="carousel"
            >
              <div
                className="relative inset-x-0 box-border block h-full overflow-visible whitespace-nowrap"
                id={SLIDER_ID}
                style={{ zIndex: 1, maxWidth: "575px" }}
              >
                <div
                  className="relative mr-8 box-border inline-block h-full w-full whitespace-normal text-left align-top opacity-100"
                  aria-label="1 of 4"
                  role="group"
                  style={{ transform: "translateX(0px)", opacity: 1, transition: 'transform 500ms ease 0s' }}
                >
                  <div className="box-border">
                    <div role="list" className="box-border">
                      <div role="listitem" className="box-border">
                        {/* <a
                          href="#"
                          className="box-border inline-block max-w-full cursor-pointer overflow-visible rounded-none bg-white hover:text-slate-500"
                          style={{
                            transition: "color 300ms ease 0s",
                            textDecoration: "none",
                          }}
                        >
                          <div
                            className="relative mb-12 h-auto overflow-hidden rounded-3xl"
                            style={{ transform: "translate(0px, 0px)" }}
                          >
                            <img
                              src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/6112cd9d5b27385cbcd7218d_portfolio-1-featured-image-personal-x-template.jpg"
                              alt=""
                              className="box-border inline-block h-full w-full max-w-full border-0 object-cover align-middle"
                            />
                          </div>
                          <div className="box-border">
                            <h3 className="mt-0 mb-4 text-2xl font-bold leading-5 text-dh-dark">
                              My last app redesign project
                            </h3>
                            <p className="mt-0 mb-8 box-border">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Lectus mattis nunc aliquam tincidunt est non
                              dolor sit consectuetur do.
                            </p>
                            <div className="box-border flex items-center font-bold leading-4 text-dh-dark">
                              <div className="box-border">Read case study</div>
                              <img
                                src="/images/arrow-personal-x-template.svg"
                                loading="eager"
                                alt=""
                                className="mt-px ml-2 box-border inline-block w-4 max-w-full border-0 align-middle"
                              />
                            </div>
                          </div>
                        </a> */}
                      </div>
                    </div>
                    {/* <div className="flex-col p-5 my-5 text-gray-600 bg-white border border-solid border-zinc-200" style={{borderRadius: '18px'}}>
                      <div className="box-border">No items found.</div>
                    </div> */}
                  </div>
                </div>
                <div
                  className="relative mr-8 box-border inline-block h-full w-full whitespace-normal text-left align-top opacity-100"
                  aria-label="2 of 4"
                  role="group"
                  aria-hidden="true"
                  style={{ transform: "translateX(0px)", opacity: 1, transition: 'transform 500ms ease 0s' }}
                >
                  <div className="box-border" aria-hidden="true">
                    <div role="list" className="box-border" aria-hidden="true">
                      <div
                        role="listitem"
                        className="box-border"
                        aria-hidden="true"
                      >
                        {/* <a
                          href="#"
                          className="box-border inline-block max-w-full cursor-pointer overflow-visible rounded-none bg-white hover:text-slate-500"
                          tabIndex={-1}
                          aria-hidden="true"
                          style={{
                            transition: "color 300ms ease 0s",
                            textDecoration: "none",
                          }}
                        >
                          <div
                            className="relative mb-12 h-auto overflow-hidden rounded-3xl"
                            aria-hidden="true"
                            style={{ transform: "translate(0px, 0px)" }}
                          >
                            <img
                              src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/6112cc8b235a8e05a257f734_portfolio-3-featured-image-personal-x-template.jpg"
                              alt=""
                              className="box-border inline-block h-full w-full max-w-full border-0 object-cover align-middle"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="box-border" aria-hidden="true">
                            <h3 className="mt-0 mb-4 text-2xl font-bold leading-5 text-dh-dark">
                              My last app redesign project
                            </h3>
                            <p className="mt-0 mb-8 box-border">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Lectus mattis nunc aliquam tincidunt est non
                              dolor sit consectuetur do.
                            </p>
                            <div
                              className="box-border flex items-center font-bold leading-4 text-dh-dark"
                              aria-hidden="true"
                            >
                              <div aria-hidden="true" className="box-border">
                                Read case study
                              </div>
                              <img
                                src="/images/arrow-personal-x-template.svg"
                                loading="eager"
                                alt=""
                                className="mt-px ml-2 box-border inline-block w-4 max-w-full border-0 align-middle"
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative mr-8 box-border inline-block h-full w-full whitespace-normal text-left align-top opacity-100"
                  aria-label="3 of 4"
                  role="group"
                  aria-hidden="true"
                  style={{ transform: "translateX(0px)", opacity: 1, transition: 'transform 500ms ease 0s' }}
                >
                  <div className="box-border" aria-hidden="true">
                    <div role="list" className="box-border" aria-hidden="true">
                      <div
                        role="listitem"
                        className="box-border"
                        aria-hidden="true"
                      >
                        {/* <a
                          href="#"
                          className="box-border inline-block max-w-full cursor-pointer overflow-visible rounded-none bg-white hover:text-slate-500"
                          tabIndex={-1}
                          aria-hidden="true"
                          style={{
                            transition: "color 300ms ease 0s",
                            textDecoration: "none",
                          }}
                        >
                          <div
                            className="relative mb-12 h-auto overflow-hidden rounded-3xl"
                            aria-hidden="true"
                            style={{ transform: "translate(0px, 0px)" }}
                          >
                            <img
                              src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/6112cca34f769f7534c0c044_portfolio-2-featured-image-personal-x-template.jpg"
                              alt=""
                              className="box-border inline-block h-full w-full max-w-full border-0 object-cover align-middle"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="box-border" aria-hidden="true">
                            <h3 className="mt-0 mb-4 text-2xl font-bold leading-5 text-dh-dark">
                              My last app redesign project
                            </h3>
                            <p className="mt-0 mb-8 box-border">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Lectus mattis nunc aliquam tincidunt est non
                              dolor sit consectuetur do.
                            </p>
                            <div
                              className="box-border flex items-center font-bold leading-4 text-dh-dark"
                              aria-hidden="true"
                            >
                              <div aria-hidden="true" className="box-border">
                                Read case study
                              </div>
                              <img
                                src="/images/arrow-personal-x-template.svg"
                                loading="eager"
                                alt=""
                                className="mt-px ml-2 box-border inline-block w-4 max-w-full border-0 align-middle"
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                        </a> */}
                      </div>
                    </div>
                    <div
                      className="my-5 flex-col border border-solid border-zinc-200 bg-white p-5 text-gray-600"
                      aria-hidden="true"
                      style={{ borderRadius: "18px" }}
                    >
                      <div aria-hidden="true" className="box-border">
                        No items found.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative mr-8 box-border inline-block h-full w-full whitespace-normal text-left align-top opacity-100"
                  aria-label="4 of 4"
                  role="group"
                  aria-hidden="true"
                  style={{ transform: "translateX(0px)", opacity: 1, transition: 'transform 500ms ease 0s' }}
                >
                  <div className="box-border" aria-hidden="true">
                    <div role="list" className="box-border" aria-hidden="true">
                      <div
                        role="listitem"
                        className="box-border"
                        aria-hidden="true"
                      >
                        {/* <a
                          href="#"
                          className="box-border inline-block max-w-full cursor-pointer overflow-visible rounded-none bg-white hover:text-slate-500"
                          tabIndex={-1}
                          aria-hidden="true"
                          style={{
                            transition: "color 300ms ease 0s",
                            textDecoration: "none",
                          }}
                        >
                          <div
                            className="relative mb-12 h-auto overflow-hidden rounded-3xl"
                            aria-hidden="true"
                            style={{ transform: "translate(0px, 0px)" }}
                          >
                            <img
                              src=""
                              alt=""
                              className="box-border inline-block h-full w-full max-w-full border-0 object-cover align-middle"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="box-border" aria-hidden="true">
                            <h3
                              className="mt-0 mb-4 text-2xl font-bold leading-5 text-dh-dark"
                              aria-hidden="true"
                            />
                            <p
                              className="mt-0 mb-8 box-border"
                              aria-hidden="true"
                            />
                            <div
                              className="box-border flex items-center font-bold leading-4 text-dh-dark"
                              aria-hidden="true"
                            >
                              <div aria-hidden="true" className="box-border">
                                Read case study
                              </div>
                              <img
                                src="/images/arrow-personal-x-template.svg"
                                loading="eager"
                                alt=""
                                className="mt-px ml-2 box-border inline-block w-4 max-w-full border-0 align-middle"
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                        </a> */}
                      </div>
                    </div>
                    <div
                      className="my-5 flex-col border border-solid border-zinc-200 bg-white p-5 text-gray-600"
                      aria-hidden="true"
                      style={{ borderRadius: "18px" }}
                    >
                      <div aria-hidden="true" className="box-border">
                        No items found.
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <PreviousButton
                className="m-0 left-0 md:left-auto -top-[110px] md:-top-[180px] md:bottom-auto md:right-[96px]"
                onClick={() => {
                  let slides = document.querySelectorAll(`#${SLIDER_ID} > div`)
                  let margin = Number(window.getComputedStyle(slides[0]).marginRight.replace('px', ''))
                  let slideWidth = (slides[0] as HTMLElement).offsetWidth
                  let currentSlide = currentPortfolioSlide

                  function prev() {
                    setCurrentPortfolioSlide(--currentSlide)
                  
                    if (currentSlide < 0) {
                      currentSlide = slides.length - 1
                      setCurrentPortfolioSlide(currentSlide)
                    }
                  
                    slides.forEach((slide) => {
                      (slide as HTMLElement).style.transform = `translateX(-${(slideWidth + margin) * currentSlide}px)`;
                    });
                  }

                  prev()
                }}
              />
              <NextButton
                className="m-0 left-[96px] md:left-auto -top-[110px] md:-top-[180px] right-auto md:right-0 md:bottom-auto"
                onClick={() => {
                  let slides = document.querySelectorAll(`#${SLIDER_ID} > div`)
                  let margin = Number(window.getComputedStyle(slides[0]).marginRight.replace('px', ''))
                  let slideWidth = (slides[0] as HTMLElement).offsetWidth
                  let currentSlide = currentPortfolioSlide

                  function next() {
                    setCurrentPortfolioSlide(++currentSlide)
                  
                    if (currentSlide === slides.length) {
                      currentSlide = 0
                      setCurrentPortfolioSlide(currentSlide)
                    }
                  
                    slides.forEach((slide, indx) => {
                      (slide as HTMLElement).style.transform = `translateX(-${(slideWidth + margin) * currentSlide}px)`;
                    });
                  }

                  next()
                }}
              />
          </div>
          </div>
        </div>
      </div>
  )
}
