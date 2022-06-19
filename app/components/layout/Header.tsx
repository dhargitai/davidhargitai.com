// import * as React from 'react'
import { Link } from "@remix-run/react";
// import { MenuButton } from '~/components';

export function Header() {
  // const [expanded, setExpanded] = React.useState(false)

  return (
    <div role="banner" className="relative py-8 font-medium leading-8 bg-white opacity-100 text-slate-500" style={{opacity: 1, zIndex: 1000, content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
    <div className="container-xl flex-col items-stretch px-6 mx-auto leading-8" style={{maxWidth: '1248px', content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
      <div className="text-lg flex justify-between items-center text-slate-500" style={{zIndex: 99}}>
        <div className="relative" style={{zIndex: 99}}>
          <Link to="/" className="float-left relative p-0 bg-transparent cursor-pointer text-zinc-800 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}>
            <img src="/david-hargitai-logo.svg" alt="David Hargitai logo" className="inline-block w-24 max-w-full align-middle border-0" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} />
          </Link>
        </div>
        {/* <div className="flex justify-between items-center ml-5">
          <nav role="navigation" className="pt-0 w-full hidden sm:block">
            <ul role="list" className="flex justify-end items-center pl-0 my-0 list-none" style={{listStyle: 'outside none none'}}>
              <li className="py-2 mr-10 text-left">
                <Link to="/" className="leading-4 bg-transparent cursor-pointer text-dh-dark hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>
                  Home
                </Link>
              </li>
              <li className="py-2 mr-10 text-left">
                <a href="portfolio.html" className="leading-4 bg-transparent cursor-pointer text-dh-dark hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Portfolio</a>
              </li>
              <li className="py-2 mr-10 text-left">
                <div data-hover="false" data-delay={0}  className="inline-block relative mx-auto box-border" style={{maxWidth: '1248px', zIndex: 900, listStyle: 'outside none none'}}>
                  <div className="flex relative items-center p-0 mx-auto leading-4 align-top whitespace-nowrap cursor-pointer select-none text-neutral-800 hover:opacity-60" id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex={0} style={{textDecoration: 'none', transition: 'opacity 300ms ease 0s', listStyle: 'outside none none'}}>
                    <div className="box-border" style={{listStyle: 'outside none none'}}>
                      Pages
                    </div>
                    <img src="/images/icon-dropdown-personal-x-template.svg" loading="eager" alt="" className="block relative ml-2 w-3 max-w-full align-middle border-0" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', top: '2px', listStyle: 'outside none none'}} />
                  </div>
                  <nav className="hidden overflow-hidden absolute left-0 mt-8 min-w-full bg-white rounded-3xl border border-solid opacity-0 border-zinc-200" style={{display: 'none', opacity: 0, transform: 'translate3d(0px, -20px, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', right: '-267px', zIndex: 9999, boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px', listStyle: 'outside none none'}} id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0">
                    <div className="flex flex-col justify-between p-10" style={{listStyle: 'outside none none'}}>
                      <div className="box-border" style={{listStyle: 'outside none none'}}>
                        <div className="mb-8 font-bold text-dh-dark" style={{listStyle: 'outside none none'}}>
                          Pages
                        </div>
                        <div className="flex-col" style={{listStyle: 'outside none none'}}>
                          <ul role="list" className="pl-0 my-0 mr-16 box-border" style={{listStyle: 'none'}}>
                            <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                              <a href="index.html" aria-current="page" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Home</a>
                            </li>
                            <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                              <a href="about.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>About</a>
                            </li>
                            <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                              <a href="contact.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Contact</a>
                            </li>
                            <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                              <a href="portfolio.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Portfolio</a>
                            </li>
                            <li className="mb-0" style={{listStyle: 'outside none none'}}>
                              <a href="https://youtemplate.webflow.io/portfolio-project/todo-list-mobile-app-redesign" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Single Project</a>
                            </li>
                          </ul>
                          <ul role="list" className="pl-0 my-0 mr-16 box-border" style={{listStyle: 'none'}}>
                            <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                              <a href="shop.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Shop</a>
                            </li>
                            <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                              <a href="https://youtemplate.webflow.io/product/iphone-12-pro-max-mockups" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Single Product</a>
                            </li>
                            <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                              <a href="blog.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Blog</a>
                            </li>
                            <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                              <a href="https://youtemplate.webflow.io/blog/what-did-i-learn-from-doing-50-design-sprints" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Blog Post</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="box-border" style={{listStyle: 'outside none none'}}>
                        <div className="mb-8 font-bold text-dh-dark" style={{listStyle: 'outside none none'}}>
                          Utility Pages
                        </div>
                        <div className="flex-col" style={{listStyle: 'outside none none'}}>
                          <ul role="list" className="pl-0 my-0 mr-0 box-border" style={{listStyle: 'none'}}>
                            <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                              <a href="utility-pages/style-guide.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Styleguide</a>
                            </li>
                            <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                              <a href="utility-pages/start-here.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Start Here</a>
                            </li>
                            <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                              <a href="404.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>404 Not Found</a>
                            </li>
                            <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                              <a href="401.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Password Protected</a>
                            </li>
                            <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                              <a href="utility-pages/licenses.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Licenses</a>
                            </li>
                            <li className="mb-0" style={{listStyle: 'outside none none'}}>
                              <a href="utility-pages/changelog.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Changelog</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </li>
            </ul>
          </nav>

          <MenuButton expanded={expanded} onClick={() => { setExpanded(!expanded) }} />
        </div> */}
      </div>
    </div>

    {/* <div className="sm:hidden overflow-hidden absolute inset-x-0 top-full w-full leading-8 box-border" data-wf-ignore id="w-nav-overlay-0">
      <nav role="navigation" className="block overflow-visible inset-x-0 top-0 px-6 pt-0 pb-8 w-full font-medium leading-8 text-center border-b border-solid border-zinc-200 bg-white text-slate-500"
        style={{
          transform: `translateY(${expanded ? '0px' : '-100%'}) translateX(0px)`,
          transition: 'transform 400ms ease 0s',
          minWidth: '200px',
      }} data-nav-menu-open>
        <ul role="list" className="flex flex-col justify-end items-center pl-0 mb-0 leading-8 list-none text-slate-500" style={{listStyle: 'outside none none'}}>
          <li className="py-2 mr-0 mb-4 text-left" style={{listStyle: 'outside none none'}}>
            <a href="/" className="text-2xl leading-4 cursor-pointer text-dh-dark hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Home</a>
          </li>
          <li className="py-2 mr-0 mb-4 text-left" style={{listStyle: 'outside none none'}}>
            <a href="/about" className="text-2xl leading-4 cursor-pointer text-dh-dark hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>About</a>
          </li>
          <li className="py-2 mr-0 mb-4 text-left" style={{listStyle: 'outside none none'}}>
            <a href="/portfolio" className="text-2xl leading-4 cursor-pointer text-dh-dark hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Portfolio</a>
          </li>
          <li className="py-2 mr-0 mb-4 text-left" style={{listStyle: 'outside none none'}}>
            <div data-hover="false" data-delay={0} data-w-id="db29b40c-7868-3d9a-45ad-267063d37dd8" className="block relative mx-auto box-border" style={{maxWidth: '1248px', zIndex: 900, listStyle: 'outside none none'}}>
              <div className="flex items-center p-0 mx-auto text-2xl leading-4 align-top whitespace-nowrap cursor-pointer select-none text-neutral-800 hover:opacity-60" id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex={0} style={{textDecoration: 'none', transition: 'opacity 300ms ease 0s', listStyle: 'outside none none'}}>
                <div className="leading-6 box-border" style={{listStyle: 'outside none none'}}>
                  Pages
                </div>
                <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/612537104ca0d843e8eeb802_icon-dropdown-personal-x-template.svg" loading="eager" alt="Arrow Icon - You X Webflow Template" className="block relative ml-2 w-3 max-w-full leading-6 align-middle" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', top: '2px', listStyle: 'outside none none'}} />
              </div>
              <nav className="hidden overflow-hidden relative left-0 mt-8 bg-white rounded-3xl border border-solid opacity-0 border-zinc-200" style={{display: 'none', opacity: 0, transform: 'translate3d(0px, 0px, 0px) scale3d(0.94, 0.94, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', right: '-267px', zIndex: 9999, boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px', listStyle: 'outside none none'}} id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0">
                <div className="flex-col justify-between p-0 text-slate-500" style={{listStyle: 'outside none none'}}>
                  <div className="box-border" style={{listStyle: 'outside none none'}}>
                    <div className="mb-8 font-bold text-dh-dark" style={{listStyle: 'outside none none'}}>
                      Pages
                    </div>
                    <div className="flex-col" style={{listStyle: 'outside none none'}}>
                      <ul role="list" className="pl-0 my-0 mr-16 list-none box-border" style={{listStyle: 'none'}}>
                        <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                          <a href="/" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Home</a>
                        </li>
                        <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                          <a href="/about" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>About</a>
                        </li>
                        <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                          <a href="/contact" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Contact</a>
                        </li>
                        <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                          <a href="/portfolio" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Portfolio</a>
                        </li>
                        <li className="mb-0" style={{listStyle: 'outside none none'}}>
                          <a href="https://youtemplate.webflow.io/portfolio-project/todo-list-mobile-app-redesign" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Single Project</a>
                        </li>
                      </ul>
                      <ul role="list" className="pl-0 my-0 mr-16 list-none box-border" style={{listStyle: 'none'}}>
                        <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                          <a href="/shop" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Shop</a>
                        </li>
                        <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                          <a href="https://youtemplate.webflow.io/product/iphone-12-pro-max-mockups" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Single Product</a>
                        </li>
                        <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                          <a href="/blog" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Blog</a>
                        </li>
                        <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                          <a href="https://youtemplate.webflow.io/blog/what-did-i-learn-from-doing-50-design-sprints" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Blog Post</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-border" style={{listStyle: 'outside none none'}}>
                    <div className="mb-8 font-bold text-dh-dark" style={{listStyle: 'outside none none'}}>
                      Utility Pages
                    </div>
                    <div className="flex-col" style={{listStyle: 'outside none none'}}>
                      <ul role="list" className="pl-0 my-0 mr-0 list-none box-border" style={{listStyle: 'none'}}>
                        <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                          <a href="/utility-pages/style-guide" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Styleguide</a>
                        </li>
                        <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                          <a href="/utility-pages/start-here" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Start Here</a>
                        </li>
                        <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                          <a href="/404" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>404 Not Found</a>
                        </li>
                        <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                          <a href="/401" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Password Protected</a>
                        </li>
                        <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                          <a href="/utility-pages/licenses" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Licenses</a>
                        </li>
                        <li className="mb-0" style={{listStyle: 'outside none none'}}>
                          <a href="/utility-pages/changelog" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-dh-dark hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Changelog</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </li>
        </ul>
      </nav>

    </div> */}
  </div>

  );
}
