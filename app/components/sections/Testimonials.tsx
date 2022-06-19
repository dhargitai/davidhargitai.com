import * as React from 'react'
import { PreviousButton, NextButton } from '~/components';

const SLIDER_ID = 'testimonial-slider'

export function Testimonials() {
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = React.useState(0)

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
              
              maxWidth: "838px",
            }}
            className="mx-auto mb-16 px-6 text-center opacity-100"
          >
            <h2 className="mx-auto mt-0 mb-6 text-4xl font-bold text-dh-dark">
              What my clients say about my work
            </h2>
            <p
              className="my-0 mx-auto box-border"
              style={{ maxWidth: "572px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              mattis nunc aliquam tincidunt est non. Viverra
              <span className="box-border whitespace-nowrap">nec eu.</span>
            </p>
          </div>
          <div
            className="relative box-border flex items-center justify-center opacity-100"
          >
            <div
              data-delay={4000}
              data-animation="cross"
              className="relative clear-both mb-8 h-full w-full bg-white text-center"
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
                className="relative inset-x-0 mx-auto block h-full w-full overflow-hidden whitespace-nowrap"
                id={SLIDER_ID}
                style={{ maxWidth: "998px", zIndex: 1 }}
              >
                <div
                  className="relative inline-block h-full w-full whitespace-normal md:px-8 text-center lg:text-left align-top opacity-100"
                  aria-label="1 of 3"
                  role="group"
                  style={{
                    transform: "translateX(0px)",
                    opacity: 1,
                    marginRight: "20%",
                    transition: 'transform 500ms ease 0s'
                  }}
                >
                  <div className="flex flex-col-reverse lg:flex-row items-center justify-between rounded-3xl pt-6 pr-10 pb-16 pl-10">
                    <div
                      className="mt-5 md:mt-8 lg:mt-16 mr-0 lg:mr-10 text-slate-500"
                      style={{ maxWidth: "478px" }}
                    >
                      <p className="mt-0 mb-10 text-lg sm:text-xl md:text-2xl">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Lectus mattis nunc aliquam tincidunt est non.
                        Viverra nec eu, in ridicus”
                      </p>
                      <div className="box-border">
                        <div className="mb-3 font-bold leading-4 text-dh-dark">
                          Matt Canon
                        </div>
                        <div className="box-border">VP of Design at Google</div>
                      </div>
                    </div>
                    <div
                      className="box-border overflow-hidden"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <img
                        src="/images/testimonial-client-matt-cannon-personal-x-template.png"
                        alt=""
                        className="inline-block lg:w-full w-60 max-w-2xl border-0 align-middle"
                        style={{ minWidth: "238px" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="relative inline-block h-full w-full whitespace-normal md:px-8 text-center lg:text-left align-top opacity-100"
                  aria-label="2 of 3"
                  role="group"
                  style={{
                    transform: "translateX(0px)",
                    opacity: 1,
                    marginRight: "20%",
                    transition: 'transform 500ms ease 0s'
                  }}
                >
                  <div className="flex flex-col-reverse lg:flex-row items-center justify-between rounded-3xl pt-6 pr-10 pb-16 pl-10">
                    <div
                      className="mt-5 md:mt-8 lg:mt-16 mr-0 lg:mr-10 text-slate-500"
                      style={{ maxWidth: "478px" }}
                    >
                      <p className="mt-0 mb-10 text-lg sm:text-xl md:text-2xl">
                        “Masodik Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Lectus mattis nunc aliquam tincidunt est non.
                        Viverra nec eu, in ridicus”
                      </p>
                      <div className="box-border">
                        <div className="mb-3 font-bold leading-4 text-dh-dark">
                          Matt Canon
                        </div>
                        <div className="box-border">VP of Design at Google</div>
                      </div>
                    </div>
                    <div
                      className="box-border overflow-hidden"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <img
                        src="/images/testimonial-client-matt-cannon-personal-x-template.png"
                        alt=""
                        className="inline-block lg:w-full w-60 max-w-2xl border-0 align-middle"
                        style={{ minWidth: "238px" }}
                      />
                    </div>
                  </div>
                </div>
                
                
                <div
                  className="relative inline-block h-full w-full whitespace-normal md:px-8 text-center lg:text-left align-top opacity-100"
                  aria-label="3 of 3"
                  role="group"
                  style={{
                    transform: "translateX(0px)",
                    opacity: 1,
                    marginRight: "20%",
                    transition: 'transform 500ms ease 0s'
                  }}
                >
                  <div className="flex flex-col-reverse lg:flex-row items-center justify-between rounded-3xl pt-6 pr-10 pb-16 pl-10">
                    <div
                      className="mt-5 md:mt-8 lg:mt-16 mr-0 lg:mr-10 text-slate-500"
                      style={{ maxWidth: "478px" }}
                    >
                      <p className="mt-0 mb-10 text-lg sm:text-xl md:text-2xl">
                        "Harmadik Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Lectus mattis nunc aliquam tincidunt est non.
                        Viverra nec eu, in ridicus”
                      </p>
                      <div className="box-border">
                        <div className="mb-3 font-bold leading-4 text-dh-dark">
                          Matt Canon
                        </div>
                        <div className="box-border">VP of Design at Google</div>
                      </div>
                    </div>
                    <div
                      className="box-border overflow-hidden"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <img
                        src="/images/testimonial-client-matt-cannon-personal-x-template.png"
                        alt=""
                        className="inline-block lg:w-full w-60 max-w-2xl border-0 align-middle"
                        style={{ minWidth: "238px" }}
                      />
                    </div>
                  </div>
                </div>
                
                
              </div>

              <PreviousButton
                className="m-auto"
                onClick={() => {
                  let slides = document.querySelectorAll(`#${SLIDER_ID} > div`)
                  let margin = Number(window.getComputedStyle(slides[0]).marginRight.replace('px', ''))
                  let slideWidth = (slides[0] as HTMLElement).offsetWidth
                  let currentSlide = currentTestimonialSlide

                  function prev() {
                    setCurrentTestimonialSlide(--currentSlide)
                  
                    if (currentSlide < 0) {
                      currentSlide = slides.length - 1
                      setCurrentTestimonialSlide(currentSlide)
                    }
                  
                    slides.forEach((slide) => {
                      (slide as HTMLElement).style.transform = `translateX(-${(slideWidth + margin) * currentSlide}px)`;
                    });
                  }

                  prev()
                }}
              />
              <NextButton
                className="m-auto"
                onClick={() => {
                  let slides = document.querySelectorAll(`#${SLIDER_ID} > div`)
                  let margin = Number(window.getComputedStyle(slides[0]).marginRight.replace('px', ''))
                  let slideWidth = (slides[0] as HTMLElement).offsetWidth
                  let currentSlide = currentTestimonialSlide

                  function next() {
                    setCurrentTestimonialSlide(++currentSlide)
                  
                    if (currentSlide === slides.length) {
                      currentSlide = 0
                      setCurrentTestimonialSlide(currentSlide)
                    }
                  
                    slides.forEach((slide, indx) => {
                      (slide as HTMLElement).style.transform = `translateX(-${(slideWidth + margin) * currentSlide}px)`;
                    });
                  }

                  next()
                }}
              />
              
              <div
                className="absolute m-auto box-border hidden h-10 pt-2"
                style={{ zIndex: 2, inset: "auto 0px 0px" }}
              >
                <div
                  className="relative mx-1 mt-0 mb-2 box-border inline-block h-4 w-4 cursor-pointer bg-white"
                  data-wf-ignore
                  aria-label="Show slide 1 of 3"
                  aria-pressed="true"
                  role="button"
                  tabIndex={0}
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    transition:
                      "background-color 100ms ease 0s, color 100ms ease 0s",
                    borderRadius: "100%",
                  }}
                />
                <div
                  className="relative mx-1 mt-0 mb-2 box-border inline-block h-4 w-4 cursor-pointer bg-white"
                  data-wf-ignore
                  aria-label="Show slide 2 of 3"
                  aria-pressed="false"
                  role="button"
                  tabIndex={-1}
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    transition:
                      "background-color 100ms ease 0s, color 100ms ease 0s",
                    borderRadius: "100%",
                  }}
                />
                <div
                  className="relative mx-1 mt-0 mb-2 box-border inline-block h-4 w-4 cursor-pointer bg-white"
                  data-wf-ignore
                  aria-label="Show slide 3 of 3"
                  aria-pressed="false"
                  role="button"
                  tabIndex={-1}
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    transition:
                      "background-color 100ms ease 0s, color 100ms ease 0s",
                    borderRadius: "100%",
                  }}
                />
              </div>
            </div>
            <div
              className="absolute left-auto right-auto top-0 bottom-0 -z-[1] -mt-7 w-full max-w-[80vw] md:max-w-4xl rounded-3xl bg-dh-sky-lighter"
              style={{ inset: "0% auto" }}
            />
          </div>
        </div>
      </div>
  )
}
