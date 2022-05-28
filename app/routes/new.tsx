import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function New() {
  const user = useOptionalUser();
  return (
    <div className="page-wrapper">
      <div data-collapse="medium" data-animation="default" data-duration={400} data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9" data-easing="ease" data-easing2="ease" role="banner" className="relative py-8 font-medium leading-8 bg-white opacity-100 text-slate-500" style={{opacity: 1, zIndex: 1000, content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
        <div className="container-xl flex-col items-stretch px-6 mx-auto leading-8" style={{maxWidth: '1248px', content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
          <div className="text-lg flex justify-between items-center text-slate-500" style={{zIndex: 99}}>
            <div className="relative" style={{zIndex: 99}}>
              <a href="index.html" aria-current="page" className="float-left relative p-0 bg-transparent cursor-pointer text-zinc-800 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}><img src="/images/logo-you-x-webflow-template.svg" alt="" className="inline-block w-32 max-w-full align-middle border-0" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} /></a>
            </div>
            <div className="flex justify-between items-center ml-5">
              <nav role="navigation" className="pt-0 w-full">
                <ul role="list" className="flex justify-end items-center pl-0 my-0 list-none" style={{listStyle: 'outside none none'}}>
                  <li className="py-2 mr-10 text-left">
                    <a href="index.html" aria-current="page" className="leading-4 bg-transparent cursor-pointer text-slate-900 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Home</a>
                  </li>
                  <li className="py-2 mr-10 text-left">
                    <a href="about.html" className="leading-4 bg-transparent cursor-pointer text-slate-900 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>About</a>
                  </li>
                  <li className="py-2 mr-10 text-left">
                    <a href="portfolio.html" className="leading-4 bg-transparent cursor-pointer text-slate-900 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Portfolio</a>
                  </li>
                  <li className="py-2 mr-10 text-left">
                    <div data-hover="false" data-delay={0} data-w-id="db29b40c-7868-3d9a-45ad-267063d37dd8" className="inline-block relative mx-auto box-border" style={{maxWidth: '1248px', zIndex: 900, listStyle: 'outside none none'}}>
                      <div className="flex relative items-center p-0 mx-auto leading-4 align-top whitespace-nowrap cursor-pointer select-none text-neutral-800 hover:opacity-60" id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex={0} style={{textDecoration: 'none', transition: 'opacity 300ms ease 0s', listStyle: 'outside none none'}}>
                        <div className="box-border" style={{listStyle: 'outside none none'}}>
                          Pages
                        </div>
                        <img src="/images/icon-dropdown-personal-x-template.svg" loading="eager" alt="" className="block relative ml-2 w-3 max-w-full align-middle border-0" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', top: '2px', listStyle: 'outside none none'}} />
                      </div>
                      <nav className="hidden overflow-hidden absolute left-0 mt-8 min-w-full bg-white rounded-3xl border border-solid opacity-0 border-zinc-200" style={{display: 'none', opacity: 0, transform: 'translate3d(0px, -20px, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', right: '-267px', zIndex: 9999, boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px', listStyle: 'outside none none'}} id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0">
                        <div className="flex flex-col justify-between p-10" style={{listStyle: 'outside none none'}}>
                          <div className="box-border" style={{listStyle: 'outside none none'}}>
                            <div className="mb-8 font-bold text-slate-900" style={{listStyle: 'outside none none'}}>
                              Pages
                            </div>
                            <div className="flex-col" style={{listStyle: 'outside none none'}}>
                              <ul role="list" className="pl-0 my-0 mr-16 box-border" style={{listStyle: 'none'}}>
                                <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                                  <a href="index.html" aria-current="page" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Home</a>
                                </li>
                                <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                                  <a href="about.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>About</a>
                                </li>
                                <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                                  <a href="contact.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Contact</a>
                                </li>
                                <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                                  <a href="portfolio.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Portfolio</a>
                                </li>
                                <li className="mb-0" style={{listStyle: 'outside none none'}}>
                                  <a href="https://youtemplate.webflow.io/portfolio-project/todo-list-mobile-app-redesign" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Single Project</a>
                                </li>
                              </ul>
                              <ul role="list" className="pl-0 my-0 mr-16 box-border" style={{listStyle: 'none'}}>
                                <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                                  <a href="shop.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Shop</a>
                                </li>
                                <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                                  <a href="https://youtemplate.webflow.io/product/iphone-12-pro-max-mockups" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Single Product</a>
                                </li>
                                <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                                  <a href="blog.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Blog</a>
                                </li>
                                <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                                  <a href="https://youtemplate.webflow.io/blog/what-did-i-learn-from-doing-50-design-sprints" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Blog Post</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="box-border" style={{listStyle: 'outside none none'}}>
                            <div className="mb-8 font-bold text-slate-900" style={{listStyle: 'outside none none'}}>
                              Utility Pages
                            </div>
                            <div className="flex-col" style={{listStyle: 'outside none none'}}>
                              <ul role="list" className="pl-0 my-0 mr-0 box-border" style={{listStyle: 'none'}}>
                                <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                                  <a href="utility-pages/style-guide.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Styleguide</a>
                                </li>
                                <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                                  <a href="utility-pages/start-here.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Start Here</a>
                                </li>
                                <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                                  <a href="404.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>404 Not Found</a>
                                </li>
                                <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                                  <a href="401.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Password Protected</a>
                                </li>
                                <li className="mb-3 box-border" style={{listStyle: 'outside none none'}}>
                                  <a href="utility-pages/licenses.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Licenses</a>
                                </li>
                                <li className="mb-0" style={{listStyle: 'outside none none'}}>
                                  <a href="utility-pages/changelog.html" className="block relative p-0 mx-auto align-top whitespace-nowrap bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" tabIndex={0} style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Changelog</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </li>
                </ul>
                <a href="mailto:john@you.com" className="hidden items-center mt-5 max-w-full text-2xl bg-transparent cursor-pointer text-slate-900 hover:text-slate-900 hover:opacity-60" style={{transition: 'opacity 350ms ease 0s', textDecoration: 'none'}}><img src="/images/email-icon-personal-x-template.svg" alt="" className="inline-block mr-3 w-6 max-w-full text-3xl align-middle border-0" />
                  <div className="box-border">john@you.com</div>
                </a>
              </nav>
              <div data-node-type="commerce-cart-wrapper" data-open-product data-wf-cart-type="rightSidebar" data-wf-cart-query data-wf-page-link-href-prefix className="inline-block relative box-border">
                <a href="#" data-node-type="commerce-cart-open-link" className="flex items-center p-0 mr-5 max-w-full bg-transparent rounded-none border-0 appearance-none cursor-pointer text-slate-900 hover:text-slate-500" style={{transition: 'color 350ms ease 0s', textDecoration: 'none'}}>
                  <div className="inline-block max-w-full box-border">Cart</div>
                  <div className="inline-block max-w-full box-border">&nbsp;(</div>
                  <div className="inline-block px-0 ml-0 h-auto text-lg leading-7 text-center box-border" style={{minWidth: 'auto', borderRadius: '9px'}}>
                    0
                  </div>
                  <div className="inline-block max-w-full box-border">)</div>
                </a>
                <div data-node-type="commerce-cart-container-wrapper" style={{display: 'none', inset: '0px', zIndex: 999999}} className="hidden fixed flex-row justify-end items-stretch box-border bg-zinc-800">
                  <div data-node-type="commerce-cart-container" className="flex overflow-auto flex-col w-full bg-white box-border" style={{maxWidth: '600px', minWidth: '320px', boxShadow: 'none'}}>
                    <div className="flex relative flex-none justify-between items-center py-8 px-6 border-b border-solid box-border border-neutral-200">
                      <h4 className="px-0 my-0 text-xl font-bold leading-5 text-slate-900">
                        Your Cart
                      </h4>
                      <a href="#" data-node-type="commerce-cart-close-link" className="flex justify-center items-center w-4 max-w-full h-4 bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'underline'}}><svg width="16px" height="16px" viewBox="0 0 16 16" className="box-border">
                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" className="box-border">
                            <g fillRule="nonzero" fill="#333333" className="box-border">
                              <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8" className="box-border" />
                            </g>
                          </g></svg></a>
                    </div>
                    <div className="flex flex-col flex-1 box-border">
                      <form data-node-type="commerce-cart-form" style={{display: 'none'}} className="hidden flex-col flex-1 justify-start box-border">
                        <div className="overflow-auto flex-1 py-10 px-6" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-86d01ae5-f4f5-e0fe-d623-45a4fc1f5cf4" />
                        <div className="flex flex-col flex-none px-6 pt-4 pb-6 border-t border-solid box-border border-neutral-200">
                          <div className="flex flex-none justify-between items-baseline mb-4 box-border">
                            <div className="box-border">Subtotal</div>
                            <div className="text-xl font-bold box-border text-slate-900" />
                          </div>
                          <div className="box-border">
                            <div data-node-type="commerce-cart-quick-checkout-actions" className="mb-4">
                              <a data-node-type="commerce-cart-apple-pay-button" style={{backgroundSize: '100% 50%', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', transition: 'color 300ms ease 0s', textDecoration: 'none', borderRadius: '500px', minHeight: '30px'}} className="flex items-center p-0 mb-2 h-12 text-white bg-black bg-no-repeat border-0 appearance-none cursor-pointer box-border hover:text-slate-500">
                                <div className="box-border" />
                              </a>
                              <a data-node-type="commerce-cart-quick-checkout-button" style={{display: 'none', transition: 'color 300ms ease 0s', textDecoration: 'none', borderRadius: '500px'}} className="hidden justify-center items-center py-0 px-4 mb-2 h-10 text-white bg-black border-0 appearance-none cursor-pointer box-border hover:text-slate-500"><svg className="block mr-2 box-border" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={16} height={16} viewBox="0 0 16 16">
                                  <defs className="box-border">
                                    <polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649" className="box-border" />
                                    <polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443" className="box-border" />
                                  </defs>
                                  <g fill="none" fillRule="evenodd" className="box-border">
                                    <path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469" className="box-border" />
                                    <path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16" className="box-border" />
                                    <g transform="translate(0 4)" className="box-border">
                                      <mask id="google-mark-b" fill="#fff" className="box-border">
                                        <use xlinkHref="#google-mark-a" className="box-border" />
                                      </mask>
                                      <path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)" className="box-border" />
                                    </g>
                                    <mask id="google-mark-d" fill="#fff" className="box-border">
                                      <use xlinkHref="#google-mark-c" className="box-border" />
                                    </mask>
                                    <path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)" className="box-border" />
                                  </g></svg><svg className="block mr-2 box-border" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                                  <g fill="none" fillRule="evenodd" className="box-border">
                                    <polygon fill="#F05022" points="7 7 1 7 1 1 7 1" className="box-border" />
                                    <polygon fill="#7DB902" points="15 7 9 7 9 1 15 1" className="box-border" />
                                    <polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9" className="box-border" />
                                    <polygon fill="#FFB700" points="15 15 9 15 9 9 15 9" className="box-border" />
                                  </g>
                                </svg>
                                <div className="box-border">Pay with browser.</div>
                              </a>
                            </div>
                            <a href="checkout.html" value="Continue to Checkout" data-node-type="cart-checkout-button" className="block items-center py-6 px-16 w-full text-lg font-bold text-center text-white border-0 border-none appearance-none cursor-pointer bg-slate-900 hover:bg-white hover:text-slate-900" data-loading-text="Hang Tight..." style={{transition: 'color 300ms ease 0s, transform 300ms ease 0s, box-shadow 300ms ease 0s, background-color 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'none', borderRadius: '80px'}}>Continue to Checkout</a>
                          </div>
                        </div>
                      </form>
                      <div className="flex flex-col flex-1 justify-center items-center p-5 my-0 text-center text-gray-600 rounded-none border-0 border-solid border-zinc-200">
                        <div className="mb-4 box-border">No items found.</div>
                        <a href="shop.html" className="inline-block py-6 px-16 w-full text-lg font-bold text-white border-0 border-none cursor-pointer bg-slate-900 hover:bg-white hover:text-slate-900" style={{transition: 'color 300ms ease 0s, transform 300ms ease 0s, box-shadow 300ms ease 0s, background-color 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'none', borderRadius: '80px'}}>Visit shop</a>
                      </div>
                      <div style={{display: 'none'}} data-node-type="commerce-cart-error" className="hidden flex-none p-5 mx-6 mt-0 mb-6 text-center bg-red-100 rounded-lg box-border text-slate-900">
                        <div className="box-border" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Cart failed.">
                          Product is not available in this quantity.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden block p-0 w-16 text-3xl text-white rounded-full bg-slate-900 hover:bg-slate-900" style={{userSelect: 'text', minHeight: '64px', minWidth: '64px', transition: 'transform 300ms ease 0s, background-color 350ms ease 0s, -webkit-transform 300ms ease 0s'}} aria-label="menu" role="button" tabIndex={0} aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
                <div className="flex absolute flex-col justify-center items-center p-0 w-full h-full">
                  <div className="flex flex-col justify-between items-center p-0 m-auto w-6" style={{minHeight: '18px'}}>
                    <div className="p-0 w-6" style={{minHeight: '2px', borderRadius: '10px'}} />
                    <div className="p-0 w-6" style={{minHeight: '2px', borderRadius: '10px'}} />
                    <div className="p-0 w-6" style={{minHeight: '2px', borderRadius: '10px'}} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex relative items-center" style={{zIndex: 99}}>
              <a href="mailto:john@you.com" className="flex items-center max-w-full bg-transparent cursor-pointer text-slate-900 hover:text-slate-900 hover:opacity-60" style={{transition: 'opacity 350ms ease 0s', textDecoration: 'none'}}><img src="/images/email-icon-personal-x-template.svg" alt="" className="inline-block mr-3 w-6 max-w-full text-3xl align-middle border-0" />
                <div className="box-border">john@you.com</div>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden overflow-hidden absolute inset-x-0 top-full w-full leading-8 box-border" data-wf-ignore id="w-nav-overlay-0" />
      </div>
      <div className="pt-16 pb-20 font-medium leading-8 text-slate-500">
        <div className="container-xl flex-col items-stretch px-6 mx-auto leading-8" style={{maxWidth: '1248px', content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
          <div className="flex justify-between items-center text-slate-500">
            <div data-w-id="709d9349-d07c-23cf-ffe0-25d8a3c4f186" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d', maxWidth: '880px', minWidth: 'auto'}} className="mx-auto mb-6 opacity-100">
              <h3 className="mt-0 mb-5 text-2xl font-bold leading-5 text-gray-600">
                Hey, I’m John Carter
              </h3>
              <h1 className="mx-0 mt-0 mb-6 text-6xl font-bold text-slate-900">
                I enjoy designing tech websites and digital products
              </h1>
              <img src="/images/hero-underline-personal-x-template.svg" loading="eager" alt="" className="inline-block relative max-w-full align-middle border-0" style={{top: '-38px', zIndex: -1}} />
              <div className="box-border">
                <a href="contact.html" className="inline-block py-6 px-16 text-lg font-bold text-white border-0 border-none cursor-pointer bg-slate-900 hover:bg-white hover:text-slate-900" style={{transition: 'color 300ms ease 0s, transform 300ms ease 0s, box-shadow 300ms ease 0s, background-color 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'none', borderRadius: '80px'}}>Get in touch</a>
              </div>
            </div>
            <div data-w-id="62baa06f-5c49-4902-dcc5-46ded3bffd2d" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d', maxWidth: '590px'}} className="overflow-hidden w-full opacity-100">
              <img src="/images/hero-image-personal-x-template.png" srcSet="
          /images/hero-image-personal-x-template-p-500.png  500w,
          /images/hero-image-personal-x-template.png       1184w
        " sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, (max-width: 991px) 472px, (max-width: 1439px) 47vw, 588px" alt="" className="inline-block mx-auto w-full max-w-full align-middle border-0" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-48 pb-20 font-medium leading-8 text-slate-500">
        <div className="table clear-both flex-col items-stretch px-6 mx-auto leading-8" style={{maxWidth: '1248px', content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
          <div data-w-id="80fc6ce2-ba8b-0e61-7127-03c73b793436" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d', maxWidth: '592px'}} className="relative px-6 mx-auto text-center opacity-100">
            <h2 className="mt-0 mb-4 text-4xl font-bold leading-6 text-slate-900">
              My services
            </h2>
            <p className="mt-0 mb-5 box-border">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis
              nunc aliquam tincidunt est non. Viverra
              <span className="whitespace-nowrap box-border">nec eu.</span>
            </p>
          </div>
          <div className="flex relative justify-center items-center mt-16 text-slate-500">
            <div className="grid" style={{gap: '40px 48px', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto', gridAutoColumns: '1fr'}}>
              <div data-w-id="f26e9ff2-30d1-efc9-7625-a9b1bf2a5c06" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d', borderRadius: '20px'}} className="flex overflow-hidden flex-col items-start py-12 pr-12 pl-10 bg-white opacity-100">
                <img src="/images/service-1-personal-x-template.svg" alt="" className="inline-block mr-6 mb-6 max-w-full align-middle border-0" style={{borderRadius: '20px'}} />
                <div className="box-border">
                  <h3 className="mt-0 mb-3 text-2xl font-bold leading-5 text-slate-900">
                    Web Design
                  </h3>
                  <p className="my-0 box-border">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget
                    vitae id tortor.
                  </p>
                </div>
              </div>
              <div data-w-id="0b584023-c6e7-c8f5-aae2-54d5d8072e5a" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d', borderRadius: '20px'}} className="flex overflow-hidden flex-col items-start py-12 pr-12 pl-10 bg-white opacity-100">
                <img src="/images/service-2-personal-x-template.svg" alt="" className="inline-block mr-6 mb-6 max-w-full align-middle border-0" style={{borderRadius: '20px'}} />
                <div className="box-border">
                  <h3 className="mt-0 mb-3 text-2xl font-bold leading-5 text-slate-900">
                    UI / UX Design
                  </h3>
                  <p className="my-0 box-border">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget
                    vitae id tortor.
                  </p>
                </div>
              </div>
              <div data-w-id="679e070c-ebf8-e913-cb5b-a9c521d0a708" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d', borderRadius: '20px'}} className="flex overflow-hidden flex-col items-start py-12 pr-12 pl-10 bg-white opacity-100">
                <img src="/images/service-3-personal-x-template.svg" alt="" className="inline-block mr-6 mb-6 max-w-full align-middle border-0" style={{borderRadius: '20px'}} />
                <div className="box-border">
                  <h3 className="mt-0 mb-3 text-2xl font-bold leading-5 text-slate-900">
                    Product Design
                  </h3>
                  <p className="my-0 box-border">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget
                    vitae id tortor.
                  </p>
                </div>
              </div>
              <div data-w-id="371c426b-9338-e482-b26d-bf27e4abebe6" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d', borderRadius: '20px'}} className="flex overflow-hidden flex-col items-start py-12 pr-12 pl-10 bg-white opacity-100">
                <img src="/images/service-4-personal-x-template.svg" alt="" className="inline-block mr-6 mb-6 max-w-full align-middle border-0" style={{borderRadius: '20px'}} />
                <div className="box-border">
                  <h3 className="mt-0 mb-3 text-2xl font-bold leading-5 text-slate-900">
                    Web Development
                  </h3>
                  <p className="my-0 box-border">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget
                    vitae id tortor.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-[1] left-auto right-auto top-0 bottom-0 w-full max-w-4xl bg-violet-50 rounded-3xl -mt-9" style={{ minHeight: '116%', inset: '0% auto'}} />
          </div>
          

          <div data-w-id="44188954-e756-82a1-5142-83eec3745ca0" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d'}} className="flex justify-center mt-20 opacity-100">
            <a href="contact.html" className="inline-block py-6 px-16 text-lg font-bold text-center text-white border-0 border-none cursor-pointer bg-slate-900 hover:bg-white hover:text-slate-900" style={{transition: 'color 300ms ease 0s, transform 300ms ease 0s, box-shadow 300ms ease 0s, background-color 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'none', borderRadius: '80px'}}>Get in touch</a>
          </div>
        </div>
      </div>
      <div className="py-24 font-medium leading-8 text-slate-500">
        <div className="table clear-both items-stretch px-6 mx-auto leading-8" style={{maxWidth: '1248px', content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
          <div className="flex flex-row-reverse justify-between items-center text-slate-500">
            <div data-w-id="1b4fbc4a-e967-008a-2aa9-4904969e8761" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d'}} className="overflow-hidden w-1/2 rounded-3xl opacity-100">
              <img src="/images/home-about-personal-x-template.jpg" srcSet="
          /images/home-about-personal-x-template-p-500.jpeg   500w,
          /images/home-about-personal-x-template-p-800.jpeg   800w,
          /images/home-about-personal-x-template-p-1080.jpeg 1080w,
          /images/home-about-personal-x-template.jpg         1194w
        " sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 47vw, 589.46875px" alt="" className="inline-block max-w-full align-middle border-0 box-border" />
            </div>
            <div data-w-id="21a4c434-3893-cfcf-0f70-4b8ab2950946" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d'}} className="mb-12 ml-0 w-full opacity-100">
              <h2 className="mt-0 mb-6 text-4xl font-bold leading-6 text-slate-900">
                About me
              </h2>
              <p className="mt-0 mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis
                nunc aliquam tincidunt est non. Viverra nec eu, in ridiculus egestas
                mi. Vulputate tristique porttitor enim aliquam ullamcorper. Velit dui
                laoreet in <span className="whitespace-nowrap box-border">et mus.</span>
              </p>
              <a href="about.html" className="inline-block py-6 px-16 text-lg font-bold text-center text-white border-0 border-none cursor-pointer bg-slate-900 hover:bg-white hover:text-slate-900" style={{transition: 'color 300ms ease 0s, transform 300ms ease 0s, box-shadow 300ms ease 0s, background-color 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'none', borderRadius: '80px'}}>More about me</a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 font-medium leading-8 text-slate-500">
        <div className="table clear-both flex-col items-stretch px-6 mx-auto leading-8" style={{maxWidth: '1248px', content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
          <div data-w-id="e0fb2ffc-b1a3-478c-0a65-4f26db701dd7" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d'}} className="flex relative flex-wrap justify-between items-center mb-20 opacity-100">
            <h2 className="my-0 max-w-full text-4xl font-bold leading-6 text-slate-900">
              Take a look at my resume
            </h2>
            <img src="/images/resume-underline-personal-x-template.svg" alt="" className="inline-block absolute max-w-full align-middle border-0" style={{left: '14em', top: '58px', zIndex: -1}} />
            <a href="https://youtemplate.webflow.io/about#about-resume" className="inline-block py-6 px-16 text-lg font-bold text-center text-white border-0 border-none cursor-pointer bg-slate-900 hover:bg-white hover:text-slate-900" style={{transition: 'color 300ms ease 0s, transform 300ms ease 0s, box-shadow 300ms ease 0s, background-color 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'none', borderRadius: '80px'}}>See full resume</a>
          </div>
          <div className="flex relative justify-center items-center box-border">
            <div className="grid text-slate-500" style={{gap: '35px 50px', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto', gridAutoColumns: '1fr'}}>
              <div data-w-id="6704fc41-56a0-6e68-9aaf-ea1c40874f0d" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d', borderRadius: '20px'}} className="overflow-hidden p-12 bg-white opacity-100">
                <a href="https://www.facebook.com/" target="_blank" className="inline-block items-center mb-5 max-w-full bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}>
                  <div className="flex box-border">
                    <img src="/images/resume-facebook-small-personal-x-template.svg" alt="" className="inline-block mr-3 max-w-full align-middle rounded-lg border-0 box-border" />
                    <div className="flex items-center leading-4 box-border">
                      <div className="box-border">Facebook</div>
                      <img src="/images/resume-arrow-personal-x-template.svg" loading="eager" alt="" className="inline-block mt-1 ml-2 max-w-full align-middle border-0 box-border" style={{minHeight: '12px'}} />
                    </div>
                  </div>
                </a>
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <h3 className="my-0 text-2xl font-bold leading-5 text-slate-900">
                    Mobile Product Designer
                  </h3>
                  <div className="box-border">Jan 2023 - Present</div>
                </div>
                <p className="mt-0 mb-5 box-border">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                  bibendum sit dolor dregoneml adi.
                </p>
              </div>
              <div data-w-id="6f98dad5-ef72-e3b5-c968-dd0ef0c559a4" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d', borderRadius: '20px'}} className="overflow-hidden p-12 bg-white opacity-100">
                <a href="https://twitter.com/" target="_blank" className="inline-block items-center mb-5 max-w-full bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}>
                  <div className="flex box-border">
                    <img src="/images/resume-twitter-small-personal-x-template.svg" alt="" className="inline-block mr-3 max-w-full align-middle rounded-lg border-0 box-border" />
                    <div className="flex items-center leading-4 box-border">
                      <div className="box-border">Twitter</div>
                      <img src="/images/resume-arrow-personal-x-template.svg" loading="eager" alt="" className="inline-block mt-1 ml-2 max-w-full align-middle border-0 box-border" style={{minHeight: '12px'}} />
                    </div>
                  </div>
                </a>
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <h3 className="my-0 text-2xl font-bold leading-5 text-slate-900">
                    UI / UX Designer
                  </h3>
                  <div className="box-border">Jan 2021 - Dec 2022</div>
                </div>
                <p className="mt-0 mb-5 box-border">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                  bibendum sit dolor dregoneml adi.
                </p>
              </div>
              <div data-w-id="6102985c-d9c4-1cbe-2b46-737fa93d113e" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d', borderRadius: '20px'}} className="overflow-hidden p-12 bg-white opacity-100">
                <a href="https://www.youtube.com/" target="_blank" className="inline-block items-center mb-5 max-w-full bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}>
                  <div className="flex box-border">
                    <img src="/images/resume-youtube-small-personal-x-template.svg" alt="" className="inline-block mr-3 max-w-full align-middle rounded-lg border-0 box-border" />
                    <div className="flex items-center leading-4 box-border">
                      <div className="box-border">YouTube</div>
                      <img src="/images/resume-arrow-personal-x-template.svg" loading="eager" alt="" className="inline-block mt-1 ml-2 max-w-full align-middle border-0 box-border" style={{minHeight: '12px'}} />
                    </div>
                  </div>
                </a>
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <h3 className="my-0 text-2xl font-bold leading-5 text-slate-900">
                    VP of Design
                  </h3>
                  <div className="box-border">Mar 2020 - Dec 2020</div>
                </div>
                <p className="mt-0 mb-5 box-border">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                  bibendum sit dolor dregoneml adi.
                </p>
              </div>
              <div data-w-id="f617cd8f-ea4a-94ae-8a31-dc5378ffc6d4" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d', borderRadius: '20px'}} className="overflow-hidden p-12 bg-white opacity-100">
                <a href="https://www.instagram.com/" target="_blank" className="inline-block items-center mb-5 max-w-full bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}>
                  <div className="flex box-border">
                    <img src="/images/resume-instagram-small-personal-x-template.svg" alt="" className="inline-block mr-3 max-w-full align-middle rounded-lg border-0 box-border" />
                    <div className="flex items-center leading-4 box-border">
                      <div className="box-border">Instagram</div>
                      <img src="/images/resume-arrow-personal-x-template.svg" loading="eager" alt="" className="inline-block mt-1 ml-2 max-w-full align-middle border-0 box-border" style={{minHeight: '12px'}} />
                    </div>
                  </div>
                </a>
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <h3 className="my-0 text-2xl font-bold leading-5 text-slate-900">
                    Head of Product Design
                  </h3>
                  <div className="box-border">Sep 2017 - Feb 2020</div>
                </div>
                <p className="mt-0 mb-5 box-border">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                  bibendum sit dolor dregoneml adi.
                </p>
              </div>
            </div>
            <div className="absolute -z-[1] left-auto right-auto top-0 bottom-0 w-full max-w-4xl bg-violet-50 rounded-3xl -mt-7" style={{ minHeight: '112%', inset: '0% auto'}} />
          </div>
        </div>
      </div>
      <div className="overflow-hidden py-48 font-medium leading-8 text-slate-500">
        <div className="flex-col items-stretch px-6 mx-auto leading-8" style={{maxWidth: '1248px', content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
          <div data-w-id="958960c1-23c4-b448-27ed-e4d2345aee47" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d', maxWidth: '325px'}} className="flex flex-wrap justify-between items-center mb-20 opacity-100">
            <div className="relative box-border" style={{maxWidth: '465px'}}>
              <h2 className="my-0 text-4xl font-bold text-slate-900">
                Take a look at my design portfolio
              </h2>
              <img src="/images/portfolio-underline-personal-x-template.svg" alt="" className="inline-block absolute max-w-full align-middle border-0 box-border" style={{inset: 'auto 0px -20px', zIndex: -1}} />
            </div>
          </div>
          <div data-w-id="69f75c50-8619-7ebb-912d-114e45cb4c1a" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d'}} className="opacity-100 box-border">
            <div data-delay={4000} data-animation="slide" className="clear-both relative mb-0 w-full h-full min-h-full text-center bg-transparent" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={500} data-infinite="true" role="region" aria-label="carousel">
              <div className="block overflow-visible relative inset-x-0 h-full whitespace-nowrap box-border" id="w-slider-mask-0" style={{zIndex: 1, maxWidth: '575px'}}>
                <div className="inline-block relative mr-8 w-full h-full text-left align-top whitespace-normal opacity-100 box-border" aria-label="1 of 12" role="group" style={{transform: 'translateX(0px)', opacity: 1}}>
                  <div className="box-border">
                    <div role="list" className="box-border">
                      <div role="listitem" className="box-border">
                        <a href="#" className="inline-block overflow-visible max-w-full bg-white rounded-none cursor-pointer box-border hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}>
                          <div className="overflow-hidden relative mb-12 h-auto rounded-3xl" style={{transform: 'translate(0px, 0px)'}}>
                            <img src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/6112cd9d5b27385cbcd7218d_portfolio-1-featured-image-personal-x-template.jpg" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" />
                          </div>
                          <div className="box-border">
                            <h3 className="mt-0 mb-4 text-2xl font-bold leading-5 text-slate-900">My last app redesign project</h3>
                            <p className="mt-0 mb-8 box-border">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non dolor sit consectuetur do.</p>
                            <div className="flex items-center font-bold leading-4 box-border text-slate-900">
                              <div className="box-border">Read case study</div>
                              <img src="/images/arrow-personal-x-template.svg" loading="eager" alt="" className="inline-block mt-px ml-2 w-4 max-w-full align-middle border-0 box-border" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* <div className="flex-col p-5 my-5 text-gray-600 bg-white border border-solid border-zinc-200" style={{borderRadius: '18px'}}>
                      <div className="box-border">No items found.</div>
                    </div> */}
                  </div>
                </div>
                <div className="inline-block relative mr-8 w-full h-full text-left align-top whitespace-normal opacity-100 box-border" aria-label="2 of 12" role="group" aria-hidden="true" style={{transform: 'translateX(0px)', opacity: 1}}>
                  <div className="box-border" aria-hidden="true">
                    <div role="list" className="box-border" aria-hidden="true">
                      <div role="listitem" className="box-border" aria-hidden="true">
                        <a href="#" className="inline-block overflow-visible max-w-full bg-white rounded-none cursor-pointer box-border hover:text-slate-500" tabIndex={-1} aria-hidden="true" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}>
                          <div className="overflow-hidden relative mb-12 h-auto rounded-3xl" aria-hidden="true" style={{transform: 'translate(0px, 0px)'}}>
                            <img src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/6112cc8b235a8e05a257f734_portfolio-3-featured-image-personal-x-template.jpg" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" aria-hidden="true" />
                          </div>
                          <div className="box-border" aria-hidden="true">
                          <h3 className="mt-0 mb-4 text-2xl font-bold leading-5 text-slate-900">My last app redesign project</h3>
                            <p className="mt-0 mb-8 box-border">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non dolor sit consectuetur do.</p>
                            <div className="flex items-center font-bold leading-4 box-border text-slate-900" aria-hidden="true">
                              <div aria-hidden="true" className="box-border">
                                Read case study
                              </div>
                              <img src="/images/arrow-personal-x-template.svg" loading="eager" alt="" className="inline-block mt-px ml-2 w-4 max-w-full align-middle border-0 box-border" aria-hidden="true" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-block relative mr-8 w-full h-full text-left align-top whitespace-normal opacity-100 box-border" aria-label="3 of 12" role="group" aria-hidden="true" style={{transform: 'translateX(0px)', opacity: 1}}>
                  <div className="box-border" aria-hidden="true">
                    <div role="list" className="box-border" aria-hidden="true">
                      <div role="listitem" className="box-border" aria-hidden="true">
                        <a href="#" className="inline-block overflow-visible max-w-full bg-white rounded-none cursor-pointer box-border hover:text-slate-500" tabIndex={-1} aria-hidden="true" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}>
                          <div className="overflow-hidden relative mb-12 h-auto rounded-3xl" aria-hidden="true" style={{transform: 'translate(0px, 0px)'}}>
                            <img src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/6112cca34f769f7534c0c044_portfolio-2-featured-image-personal-x-template.jpg" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" aria-hidden="true" />
                          </div>
                          <div className="box-border" aria-hidden="true">
                          <h3 className="mt-0 mb-4 text-2xl font-bold leading-5 text-slate-900">My last app redesign project</h3>
                            <p className="mt-0 mb-8 box-border">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non dolor sit consectuetur do.</p>
                            <div className="flex items-center font-bold leading-4 box-border text-slate-900" aria-hidden="true">
                              <div aria-hidden="true" className="box-border">
                                Read case study
                              </div>
                              <img src="/images/arrow-personal-x-template.svg" loading="eager" alt="" className="inline-block mt-px ml-2 w-4 max-w-full align-middle border-0 box-border" aria-hidden="true" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="flex-col p-5 my-5 text-gray-600 bg-white border border-solid border-zinc-200" aria-hidden="true" style={{borderRadius: '18px'}}>
                      <div aria-hidden="true" className="box-border">No items found.</div>
                    </div>
                  </div>
                </div>
                <div className="inline-block relative mr-8 w-full h-full text-left align-top whitespace-normal opacity-100 box-border" aria-label="4 of 12" role="group" aria-hidden="true" style={{transform: 'translateX(0px)', opacity: 1}}>
                  <div className="box-border" aria-hidden="true">
                    <div role="list" className="box-border" aria-hidden="true">
                      <div role="listitem" className="box-border" aria-hidden="true">
                        <a href="#" className="inline-block overflow-visible max-w-full bg-white rounded-none cursor-pointer box-border hover:text-slate-500" tabIndex={-1} aria-hidden="true" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}>
                          <div className="overflow-hidden relative mb-12 h-auto rounded-3xl" aria-hidden="true" style={{transform: 'translate(0px, 0px)'}}>
                            <img src="" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" aria-hidden="true" />
                          </div>
                          <div className="box-border" aria-hidden="true">
                            <h3 className="mt-0 mb-4 text-2xl font-bold leading-5 text-slate-900" aria-hidden="true" />
                            <p className="mt-0 mb-8 box-border" aria-hidden="true" />
                            <div className="flex items-center font-bold leading-4 box-border text-slate-900" aria-hidden="true">
                              <div aria-hidden="true" className="box-border">
                                Read case study
                              </div>
                              <img src="/images/arrow-personal-x-template.svg" loading="eager" alt="" className="inline-block mt-px ml-2 w-4 max-w-full align-middle border-0 box-border" aria-hidden="true" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="flex-col p-5 my-5 text-gray-600 bg-white border border-solid border-zinc-200" aria-hidden="true" style={{borderRadius: '18px'}}>
                      <div aria-hidden="true" className="box-border">No items found.</div>
                    </div>
                  </div>
                </div>
                <div className="inline-block relative mr-8 w-full h-full text-left align-top whitespace-normal opacity-100 box-border" aria-label="5 of 12" role="group" aria-hidden="true" style={{transform: 'translateX(0px)', opacity: 1}}>
                  <div className="box-border" aria-hidden="true">
                    <div role="list" className="box-border" aria-hidden="true">
                      <div role="listitem" className="box-border" aria-hidden="true">
                        <a href="#" className="inline-block overflow-visible max-w-full bg-white rounded-none cursor-pointer box-border hover:text-slate-500" tabIndex={-1} aria-hidden="true" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}>
                          <div className="overflow-hidden relative mb-12 h-auto rounded-3xl" aria-hidden="true" style={{transform: 'translate(0px, 0px)'}}>
                            <img src="" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" aria-hidden="true" />
                          </div>
                          <div className="box-border" aria-hidden="true">
                            <h3 className="mt-0 mb-4 text-2xl font-bold leading-5 text-slate-900" aria-hidden="true" />
                            <p className="mt-0 mb-8 box-border" aria-hidden="true" />
                            <div className="flex items-center font-bold leading-4 box-border text-slate-900" aria-hidden="true">
                              <div aria-hidden="true" className="box-border">
                                Read case study
                              </div>
                              <img src="/images/arrow-personal-x-template.svg" loading="eager" alt="" className="inline-block mt-px ml-2 w-4 max-w-full align-middle border-0 box-border" aria-hidden="true" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="flex-col p-5 my-5 text-gray-600 bg-white border border-solid border-zinc-200" aria-hidden="true" style={{borderRadius: '18px'}}>
                      <div aria-hidden="true" className="box-border">No items found.</div>
                    </div>
                  </div>
                </div>
                <div className="inline-block relative mr-8 w-full h-full text-left align-top whitespace-normal opacity-100 box-border" aria-label="6 of 12" role="group" aria-hidden="true" style={{transform: 'translateX(0px)', opacity: 1}}>
                  <div className="box-border" aria-hidden="true">
                    <div role="list" className="box-border" aria-hidden="true">
                      <div role="listitem" className="box-border" aria-hidden="true">
                        <a href="#" className="inline-block overflow-visible max-w-full bg-white rounded-none cursor-pointer box-border hover:text-slate-500" tabIndex={-1} aria-hidden="true" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}>
                          <div className="overflow-hidden relative mb-12 h-auto rounded-3xl" aria-hidden="true" style={{transform: 'translate(0px, 0px)'}}>
                            <img src="" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" aria-hidden="true" />
                          </div>
                          <div className="box-border" aria-hidden="true">
                            <h3 className="mt-0 mb-4 text-2xl font-bold leading-5 text-slate-900" aria-hidden="true" />
                            <p className="mt-0 mb-8 box-border" aria-hidden="true" />
                            <div className="flex items-center font-bold leading-4 box-border text-slate-900" aria-hidden="true">
                              <div aria-hidden="true" className="box-border">
                                Read case study
                              </div>
                              <img src="/images/arrow-personal-x-template.svg" loading="eager" alt="" className="inline-block mt-px ml-2 w-4 max-w-full align-middle border-0 box-border" aria-hidden="true" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="flex-col p-5 my-5 text-gray-600 bg-white border border-solid border-zinc-200" aria-hidden="true" style={{borderRadius: '18px'}}>
                      <div aria-hidden="true" className="box-border">No items found.</div>
                    </div>
                  </div>
                </div>
                <div className="inline-block relative mr-8 w-full h-full text-left align-top whitespace-normal opacity-100 box-border" aria-label="7 of 12" role="group" aria-hidden="true" style={{transform: 'translateX(0px)', opacity: 1}}>
                  <div className="box-border" aria-hidden="true">
                    <div role="list" className="box-border" aria-hidden="true">
                      <div role="listitem" className="box-border" aria-hidden="true">
                        <a href="#" className="inline-block overflow-visible max-w-full bg-white rounded-none cursor-pointer box-border hover:text-slate-500" tabIndex={-1} aria-hidden="true" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}>
                          <div className="overflow-hidden relative mb-12 h-auto rounded-3xl" aria-hidden="true" style={{transform: 'translate(0px, 0px)'}}>
                            <img src="" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" aria-hidden="true" />
                          </div>
                          <div className="box-border" aria-hidden="true">
                            <h3 className="mt-0 mb-4 text-2xl font-bold leading-5 text-slate-900" aria-hidden="true" />
                            <p className="mt-0 mb-8 box-border" aria-hidden="true" />
                            <div className="flex items-center font-bold leading-4 box-border text-slate-900" aria-hidden="true">
                              <div aria-hidden="true" className="box-border">
                                Read case study
                              </div>
                              <img src="/images/arrow-personal-x-template.svg" loading="eager" alt="" className="inline-block mt-px ml-2 w-4 max-w-full align-middle border-0 box-border" aria-hidden="true" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="flex-col p-5 my-5 text-gray-600 bg-white border border-solid border-zinc-200" aria-hidden="true" style={{borderRadius: '18px'}}>
                      <div aria-hidden="true" className="box-border">No items found.</div>
                    </div>
                  </div>
                </div>
                <div className="inline-block relative mr-8 w-full h-full text-left align-top whitespace-normal opacity-100 box-border" aria-label="8 of 12" role="group" aria-hidden="true" style={{transform: 'translateX(0px)', opacity: 1}}>
                  <div className="box-border" aria-hidden="true">
                    <div role="list" className="box-border" aria-hidden="true">
                      <div role="listitem" className="box-border" aria-hidden="true">
                        <a href="#" className="inline-block overflow-visible max-w-full bg-white rounded-none cursor-pointer box-border hover:text-slate-500" tabIndex={-1} aria-hidden="true" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}>
                          <div className="overflow-hidden relative mb-12 h-auto rounded-3xl" aria-hidden="true" style={{transform: 'translate(0px, 0px)'}}>
                            <img src="" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" aria-hidden="true" />
                          </div>
                          <div className="box-border" aria-hidden="true">
                            <h3 className="mt-0 mb-4 text-2xl font-bold leading-5 text-slate-900" aria-hidden="true" />
                            <p className="mt-0 mb-8 box-border" aria-hidden="true" />
                            <div className="flex items-center font-bold leading-4 box-border text-slate-900" aria-hidden="true">
                              <div aria-hidden="true" className="box-border">
                                Read case study
                              </div>
                              <img src="/images/arrow-personal-x-template.svg" loading="eager" alt="" className="inline-block mt-px ml-2 w-4 max-w-full align-middle border-0 box-border" aria-hidden="true" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="flex-col p-5 my-5 text-gray-600 bg-white border border-solid border-zinc-200" aria-hidden="true" style={{borderRadius: '18px'}}>
                      <div aria-hidden="true" className="box-border">No items found.</div>
                    </div>
                  </div>
                </div>
                <div className="inline-block relative mr-8 w-full h-full text-left align-top whitespace-normal opacity-100 box-border" aria-label="9 of 12" role="group" aria-hidden="true" style={{transform: 'translateX(0px)', opacity: 1}}>
                  <div className="box-border" aria-hidden="true">
                    <div role="list" className="box-border" aria-hidden="true">
                      <div role="listitem" className="box-border" aria-hidden="true">
                        <a href="#" className="inline-block overflow-visible max-w-full bg-white rounded-none cursor-pointer box-border hover:text-slate-500" tabIndex={-1} aria-hidden="true" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}>
                          <div className="overflow-hidden relative mb-12 h-auto rounded-3xl" aria-hidden="true" style={{transform: 'translate(0px, 0px)'}}>
                            <img src="" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" aria-hidden="true" />
                          </div>
                          <div className="box-border" aria-hidden="true">
                            <h3 className="mt-0 mb-4 text-2xl font-bold leading-5 text-slate-900" aria-hidden="true" />
                            <p className="mt-0 mb-8 box-border" aria-hidden="true" />
                            <div className="flex items-center font-bold leading-4 box-border text-slate-900" aria-hidden="true">
                              <div aria-hidden="true" className="box-border">
                                Read case study
                              </div>
                              <img src="/images/arrow-personal-x-template.svg" loading="eager" alt="" className="inline-block mt-px ml-2 w-4 max-w-full align-middle border-0 box-border" aria-hidden="true" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="flex-col p-5 my-5 text-gray-600 bg-white border border-solid border-zinc-200" aria-hidden="true" style={{borderRadius: '18px'}}>
                      <div aria-hidden="true" className="box-border">No items found.</div>
                    </div>
                  </div>
                </div>
                <div className="inline-block relative mr-8 w-full h-full text-left align-top whitespace-normal opacity-100 box-border" aria-label="10 of 12" role="group" aria-hidden="true" style={{transform: 'translateX(0px)', opacity: 1}}>
                  <div className="box-border" aria-hidden="true">
                    <div role="list" className="box-border" aria-hidden="true">
                      <div role="listitem" className="box-border" aria-hidden="true">
                        <a href="#" className="inline-block overflow-visible max-w-full bg-white rounded-none cursor-pointer box-border hover:text-slate-500" tabIndex={-1} aria-hidden="true" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}>
                          <div className="overflow-hidden relative mb-12 h-auto rounded-3xl" aria-hidden="true" style={{transform: 'translate(0px, 0px)'}}>
                            <img src="" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" aria-hidden="true" />
                          </div>
                          <div className="box-border" aria-hidden="true">
                            <h3 className="mt-0 mb-4 text-2xl font-bold leading-5 text-slate-900" aria-hidden="true" />
                            <p className="mt-0 mb-8 box-border" aria-hidden="true" />
                            <div className="flex items-center font-bold leading-4 box-border text-slate-900" aria-hidden="true">
                              <div aria-hidden="true" className="box-border">
                                Read case study
                              </div>
                              <img src="/images/arrow-personal-x-template.svg" loading="eager" alt="" className="inline-block mt-px ml-2 w-4 max-w-full align-middle border-0 box-border" aria-hidden="true" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="flex-col p-5 my-5 text-gray-600 bg-white border border-solid border-zinc-200" aria-hidden="true" style={{borderRadius: '18px'}}>
                      <div aria-hidden="true" className="box-border">No items found.</div>
                    </div>
                  </div>
                </div>
                <div className="inline-block relative mr-8 w-full h-full text-left align-top whitespace-normal opacity-100 box-border" aria-label="11 of 12" role="group" aria-hidden="true" style={{transform: 'translateX(0px)', opacity: 1}}>
                  <div className="box-border" aria-hidden="true">
                    <div role="list" className="box-border" aria-hidden="true">
                      <div role="listitem" className="box-border" aria-hidden="true">
                        <a href="#" className="inline-block overflow-visible max-w-full bg-white rounded-none cursor-pointer box-border hover:text-slate-500" tabIndex={-1} aria-hidden="true" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}>
                          <div className="overflow-hidden relative mb-12 h-auto rounded-3xl" aria-hidden="true" style={{transform: 'translate(0px, 0px)'}}>
                            <img src="" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" aria-hidden="true" />
                          </div>
                          <div className="box-border" aria-hidden="true">
                            <h3 className="mt-0 mb-4 text-2xl font-bold leading-5 text-slate-900" aria-hidden="true" />
                            <p className="mt-0 mb-8 box-border" aria-hidden="true" />
                            <div className="flex items-center font-bold leading-4 box-border text-slate-900" aria-hidden="true">
                              <div aria-hidden="true" className="box-border">
                                Read case study
                              </div>
                              <img src="/images/arrow-personal-x-template.svg" loading="eager" alt="" className="inline-block mt-px ml-2 w-4 max-w-full align-middle border-0 box-border" aria-hidden="true" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="flex-col p-5 my-5 text-gray-600 bg-white border border-solid border-zinc-200" aria-hidden="true" style={{borderRadius: '18px'}}>
                      <div aria-hidden="true" className="box-border">No items found.</div>
                    </div>
                  </div>
                </div>
                <div className="inline-block relative mr-8 w-full h-full text-left align-top whitespace-normal opacity-100 box-border" aria-label="12 of 12" role="group" aria-hidden="true" style={{transform: 'translateX(0px)', opacity: 1}}>
                  <div className="box-border" aria-hidden="true">
                    <div role="list" className="box-border" aria-hidden="true">
                      <div role="listitem" className="box-border" aria-hidden="true">
                        <a href="#" className="inline-block overflow-visible max-w-full bg-white rounded-none cursor-pointer box-border hover:text-slate-500" tabIndex={-1} aria-hidden="true" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}>
                          <div className="overflow-hidden relative mb-12 h-auto rounded-3xl" aria-hidden="true" style={{transform: 'translate(0px, 0px)'}}>
                            <img src="" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" aria-hidden="true" />
                          </div>
                          <div className="box-border" aria-hidden="true">
                            <h3 className="mt-0 mb-4 text-2xl font-bold leading-5 text-slate-900" aria-hidden="true" />
                            <p className="mt-0 mb-8 box-border" aria-hidden="true" />
                            <div className="flex items-center font-bold leading-4 box-border text-slate-900" aria-hidden="true">
                              <div aria-hidden="true" className="box-border">
                                Read case study
                              </div>
                              <img src="/images/arrow-personal-x-template.svg" loading="eager" alt="" className="inline-block mt-px ml-2 w-4 max-w-full align-middle border-0 box-border" aria-hidden="true" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="flex-col p-5 my-5 text-gray-600 bg-white border border-solid border-zinc-200" aria-hidden="true" style={{borderRadius: '18px'}}>
                      <div aria-hidden="true" className="box-border">No items found.</div>
                    </div>
                  </div>
                </div>
                <div aria-live="off" aria-atomic="true" className="sr-only box-border" data-wf-ignore />
              </div>
              <div className="block overflow-hidden absolute z-10 m-auto w-20 text-2xl leading-4 bg-gray-100 cursor-pointer select-none text-slate-900 hover:bg-slate-900 hover:text-white" role="button" tabIndex={0} aria-controls="w-slider-mask-0" aria-label="previous slide" style={{maxHeight: '80px', minHeight: '80px', minWidth: '80px', inset: '-180px 106px auto auto', borderRadius: '50%', transition: 'transform 300ms ease 0s, background-color 300ms ease 0s, color 300ms ease 0s, -webkit-transform 300ms ease 0s'}}>
                <div className="font-webflow-icons w-icon-slider-left absolute m-auto not-italic leading-none normal-case box-border" style={{inset: '0px', width: '1em', height: '1em'}} />
              </div>
              <div className="block overflow-hidden absolute z-10 m-auto w-20 text-2xl leading-4 bg-gray-100 cursor-pointer select-none text-slate-900 hover:bg-slate-900 hover:text-white" role="button" tabIndex={0} aria-controls="w-slider-mask-0" aria-label="next slide" style={{maxHeight: '80px', minHeight: '80px', minWidth: '80px', inset: '-180px 0px auto auto', borderRadius: '50%', transition: 'transform 300ms ease 0s, background-color 300ms ease 0s, color 300ms ease 0s, -webkit-transform 300ms ease 0s'}}>
              <div className="font-webflow-icons w-icon-slider-right absolute m-auto not-italic leading-none normal-case box-border" style={{inset: '0px', width: '1em', height: '1em'}} />
              </div>
              <div className="hidden absolute pt-2 m-auto h-10 box-border" style={{zIndex: 2, inset: 'auto 0px 0px'}}>
                <div className="inline-block relative mx-1 mt-0 mb-2 w-4 h-4 bg-white cursor-pointer box-border" data-wf-ignore aria-label="Show slide 1 of 12" aria-pressed="true" role="button" tabIndex={0} style={{marginLeft: '3px', marginRight: '3px', transition: 'background-color 100ms ease 0s, color 100ms ease 0s', borderRadius: '100%'}} />
                <div className="inline-block relative mx-1 mt-0 mb-2 w-4 h-4 bg-white cursor-pointer box-border" data-wf-ignore aria-label="Show slide 2 of 12" aria-pressed="false" role="button" tabIndex={-1} style={{marginLeft: '3px', marginRight: '3px', transition: 'background-color 100ms ease 0s, color 100ms ease 0s', borderRadius: '100%'}} />
                <div className="inline-block relative mx-1 mt-0 mb-2 w-4 h-4 bg-white cursor-pointer box-border" data-wf-ignore aria-label="Show slide 3 of 12" aria-pressed="false" role="button" tabIndex={-1} style={{marginLeft: '3px', marginRight: '3px', transition: 'background-color 100ms ease 0s, color 100ms ease 0s', borderRadius: '100%'}} />
                <div className="inline-block relative mx-1 mt-0 mb-2 w-4 h-4 bg-white cursor-pointer box-border" data-wf-ignore aria-label="Show slide 4 of 12" aria-pressed="false" role="button" tabIndex={-1} style={{marginLeft: '3px', marginRight: '3px', transition: 'background-color 100ms ease 0s, color 100ms ease 0s', borderRadius: '100%'}} />
                <div className="inline-block relative mx-1 mt-0 mb-2 w-4 h-4 bg-white cursor-pointer box-border" data-wf-ignore aria-label="Show slide 5 of 12" aria-pressed="false" role="button" tabIndex={-1} style={{marginLeft: '3px', marginRight: '3px', transition: 'background-color 100ms ease 0s, color 100ms ease 0s', borderRadius: '100%'}} />
                <div className="inline-block relative mx-1 mt-0 mb-2 w-4 h-4 bg-white cursor-pointer box-border" data-wf-ignore aria-label="Show slide 6 of 12" aria-pressed="false" role="button" tabIndex={-1} style={{marginLeft: '3px', marginRight: '3px', transition: 'background-color 100ms ease 0s, color 100ms ease 0s', borderRadius: '100%'}} />
                <div className="inline-block relative mx-1 mt-0 mb-2 w-4 h-4 bg-white cursor-pointer box-border" data-wf-ignore aria-label="Show slide 7 of 12" aria-pressed="false" role="button" tabIndex={-1} style={{marginLeft: '3px', marginRight: '3px', transition: 'background-color 100ms ease 0s, color 100ms ease 0s', borderRadius: '100%'}} />
                <div className="inline-block relative mx-1 mt-0 mb-2 w-4 h-4 bg-white cursor-pointer box-border" data-wf-ignore aria-label="Show slide 8 of 12" aria-pressed="false" role="button" tabIndex={-1} style={{marginLeft: '3px', marginRight: '3px', transition: 'background-color 100ms ease 0s, color 100ms ease 0s', borderRadius: '100%'}} />
                <div className="inline-block relative mx-1 mt-0 mb-2 w-4 h-4 bg-white cursor-pointer box-border" data-wf-ignore aria-label="Show slide 9 of 12" aria-pressed="false" role="button" tabIndex={-1} style={{marginLeft: '3px', marginRight: '3px', transition: 'background-color 100ms ease 0s, color 100ms ease 0s', borderRadius: '100%'}} />
                <div className="inline-block relative mx-1 mt-0 mb-2 w-4 h-4 bg-white cursor-pointer box-border" data-wf-ignore aria-label="Show slide 10 of 12" aria-pressed="false" role="button" tabIndex={-1} style={{marginLeft: '3px', marginRight: '3px', transition: 'background-color 100ms ease 0s, color 100ms ease 0s', borderRadius: '100%'}} />
                <div className="inline-block relative mx-1 mt-0 mb-2 w-4 h-4 bg-white cursor-pointer box-border" data-wf-ignore aria-label="Show slide 11 of 12" aria-pressed="false" role="button" tabIndex={-1} style={{marginLeft: '3px', marginRight: '3px', transition: 'background-color 100ms ease 0s, color 100ms ease 0s', borderRadius: '100%'}} />
                <div className="inline-block relative mx-1 mt-0 mb-2 w-4 h-4 bg-white cursor-pointer box-border" data-wf-ignore aria-label="Show slide 12 of 12" aria-pressed="false" role="button" tabIndex={-1} style={{marginLeft: '3px', marginRight: '3px', transition: 'background-color 100ms ease 0s, color 100ms ease 0s', borderRadius: '100%'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden py-24 font-medium leading-8 text-slate-500">
        <div className="flex-col items-stretch px-6 mx-auto leading-8" style={{maxWidth: '1248px', content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
          <div data-w-id="e27904d4-7f48-e1d9-23c0-1bf0e609dac0" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d', maxWidth: '838px'}} className="px-6 mx-auto mb-16 text-center opacity-100">
            <h2 className="mx-auto mt-0 mb-6 text-4xl font-bold text-slate-900">
              What my clients say about my work
            </h2>
            <p className="my-0 mx-auto box-border" style={{maxWidth: '572px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis
              nunc aliquam tincidunt est non. Viverra
              <span className="whitespace-nowrap box-border">nec eu.</span>
            </p>
          </div>
          <div data-w-id="aa5c9f48-3089-353a-3558-9b12a591cb00" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d'}} className="flex relative justify-center items-center opacity-100 box-border">
            <div data-delay={4000} data-animation="cross" className="clear-both relative mb-8 w-full h-full text-center bg-white" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={500} data-infinite="true" role="region" aria-label="carousel">
              <div className="block overflow-hidden relative inset-x-0 mx-auto w-full h-full whitespace-nowrap" id="w-slider-mask-1" style={{maxWidth: '998px', zIndex: 1}}>
                <div className="inline-block relative px-8 w-full h-full text-left align-top whitespace-normal opacity-100" aria-label="1 of 3" role="group" style={{transform: 'translateX(0px)', opacity: 1, marginRight: '20%'}}>
                  <div className="flex justify-between items-center pt-6 pr-10 pb-16 pl-10 rounded-3xl">
                    <div className="mt-16 mr-10 text-slate-500" style={{maxWidth: '478px'}}>
                      <p className="mt-0 mb-10 text-2xl">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lectus mattis nunc aliquam tincidunt est non. Viverra nec eu,
                        in ridicus”
                      </p>
                      <div className="box-border">
                        <div className="mb-3 font-bold leading-4 text-slate-900">
                          Matt Canon
                        </div>
                        <div className="box-border">VP of Design at Google</div>
                      </div>
                    </div>
                    <div className="overflow-hidden box-border" style={{transform: 'translate(0px, 0px)'}}>
                      <img src="/images/testimonial-client-matt-cannon-personal-x-template.png" alt="" className="inline-block w-full max-w-full align-middle border-0" style={{minWidth: '238px'}} />
                    </div>
                  </div>
                </div>
                <div className="inline-block relative invisible px-20 w-full h-full text-left align-top whitespace-normal opacity-100" aria-label="2 of 3" role="group" aria-hidden="true" style={{transform: 'translateX(0px)', opacity: 1, visibility: 'hidden', marginRight: '20%'}}>
                  <div className="flex justify-between items-center pt-6 pr-10 pb-16 pl-16 rounded-3xl" aria-hidden="true">
                    <div className="mt-16 mr-10 text-slate-500" aria-hidden="true" style={{maxWidth: '478px'}}>
                      <p className="mt-0 mb-10 text-2xl" aria-hidden="true">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lectus mattis nunc aliquam tincidunt est non. Viverra nec eu,
                        in ridicus”
                      </p>
                      <div aria-hidden="true" className="box-border">
                        <div className="mb-3 font-bold leading-4 text-slate-900" aria-hidden="true">
                          Sophie Moore
                        </div>
                        <div className="box-border" aria-hidden="true">
                          VP of Design at Twitter
                        </div>
                      </div>
                    </div>
                    <div className="overflow-hidden box-border" aria-hidden="true" style={{transform: 'translate(0px, 0px)'}}>
                      <img src="/images/testimonial-client-sophie-moore-personal-x-template.png" srcSet="
                  /images/testimonial-client-sophie-moore-personal-x-template-p-500.png 500w,
                  /images/testimonial-client-sophie-moore-personal-x-template.png       734w
                " sizes="(max-width: 479px) 54vw, (max-width: 991px) 238px, (max-width: 1439px) 32vw, 374px" alt="" className="inline-block w-full max-w-full align-middle border-0" aria-hidden="true" style={{minWidth: '238px'}} />
                    </div>
                  </div>
                </div>
                <div className="inline-block relative invisible px-20 w-full h-full text-left align-top whitespace-normal opacity-100" aria-label="3 of 3" role="group" aria-hidden="true" style={{transform: 'translateX(0px)', opacity: 1, visibility: 'hidden', marginRight: '20%'}}>
                  <div className="flex justify-between items-center pt-6 pr-10 pb-16 pl-16 rounded-3xl" aria-hidden="true">
                    <div className="mt-16 mr-10 text-slate-500" aria-hidden="true" style={{maxWidth: '478px'}}>
                      <p className="mt-0 mb-10 text-2xl" aria-hidden="true">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lectus mattis nunc aliquam tincidunt est non. Viverra nec eu,
                        in ridicus”
                      </p>
                      <div aria-hidden="true" className="box-border">
                        <div className="mb-3 font-bold leading-4 text-slate-900" aria-hidden="true">
                          Sam Owen
                        </div>
                        <div className="box-border" aria-hidden="true">
                          VP of Design at Facebook
                        </div>
                      </div>
                    </div>
                    <div className="overflow-hidden box-border" aria-hidden="true" style={{transform: 'translate(0px, 0px)'}}>
                      <img src="/images/testimonial-client-sam-owen-personal-x-template.png" srcSet="
                  /images/testimonial-client-sam-owen-personal-x-template-p-500.png 500w,
                  /images/testimonial-client-sam-owen-personal-x-template.png       734w
                " sizes="(max-width: 479px) 54vw, (max-width: 991px) 238px, (max-width: 1439px) 32vw, 374px" alt="" className="inline-block w-full max-w-full align-middle border-0" aria-hidden="true" style={{minWidth: '238px'}} />
                    </div>
                  </div>
                </div>
                <div aria-live="off" aria-atomic="true" className="sr-only box-border" data-wf-ignore />
              </div>
              <div className="overflow-hidden absolute z-10 m-auto ml-0 w-20 text-2xl leading-4 bg-gray-100 cursor-pointer select-none text-slate-900 hover:bg-slate-900 hover:text-white" role="button" tabIndex={0} aria-controls="w-slider-mask-1" aria-label="previous slide" style={{maxHeight: '80px', minHeight: '80px', minWidth: '80px', inset: '0px', transition: 'transform 300ms ease 0s, background-color 300ms ease 0s, color 300ms ease 0s, -webkit-transform 300ms ease 0s', borderRadius: '50%'}}>
                <div className="font-webflow-icons w-icon-slider-left absolute m-auto not-italic leading-none normal-case box-border" style={{inset: '0px', width: '1em', height: '1em'}} />
              </div>
              <div className="overflow-hidden absolute z-10 m-auto mr-0 w-20 text-2xl leading-4 bg-gray-100 cursor-pointer select-none text-slate-900 hover:bg-slate-900 hover:text-white" role="button" tabIndex={0} aria-controls="w-slider-mask-1" aria-label="next slide" style={{maxHeight: '80px', minHeight: '80px', minWidth: '80px', inset: '0px', transition: 'transform 300ms ease 0s, background-color 300ms ease 0s, color 300ms ease 0s, -webkit-transform 300ms ease 0s', borderRadius: '50%'}}>
                <div className="font-webflow-icons w-icon-slider-right absolute m-auto not-italic leading-none normal-case box-border" style={{inset: '0px', width: '1em', height: '1em'}} />
              </div>
              <div className="hidden absolute pt-2 m-auto h-10 box-border" style={{zIndex: 2, inset: 'auto 0px 0px'}}>
                <div className="inline-block relative mx-1 mt-0 mb-2 w-4 h-4 bg-white cursor-pointer box-border" data-wf-ignore aria-label="Show slide 1 of 3" aria-pressed="true" role="button" tabIndex={0} style={{marginLeft: '3px', marginRight: '3px', transition: 'background-color 100ms ease 0s, color 100ms ease 0s', borderRadius: '100%'}} />
                <div className="inline-block relative mx-1 mt-0 mb-2 w-4 h-4 bg-white cursor-pointer box-border" data-wf-ignore aria-label="Show slide 2 of 3" aria-pressed="false" role="button" tabIndex={-1} style={{marginLeft: '3px', marginRight: '3px', transition: 'background-color 100ms ease 0s, color 100ms ease 0s', borderRadius: '100%'}} />
                <div className="inline-block relative mx-1 mt-0 mb-2 w-4 h-4 bg-white cursor-pointer box-border" data-wf-ignore aria-label="Show slide 3 of 3" aria-pressed="false" role="button" tabIndex={-1} style={{marginLeft: '3px', marginRight: '3px', transition: 'background-color 100ms ease 0s, color 100ms ease 0s', borderRadius: '100%'}} />
              </div>
            </div>
            <div className="absolute -z-[1] left-auto right-auto top-0 bottom-0 w-full max-w-4xl bg-violet-50 rounded-3xl -mt-7" style={{ minWidth: '900px', inset: '0% auto'}} />
          </div>
        </div>
      </div>
      <div className="py-24 font-medium leading-8 text-slate-500">
        <div className="flex-col items-stretch px-6 mx-auto leading-8" style={{maxWidth: '1248px', content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
          <div data-w-id="cf3247e1-b12d-06f4-752a-dcfbe4b4edab" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d'}} className="flex justify-between mb-16 opacity-100">
            <h2 className="my-0 text-4xl font-bold leading-6 text-slate-900">
              Articles &amp; News
            </h2>
            <a href="blog.html" className="py-6 px-16 mb-6 text-lg font-bold text-center text-white border-0 border-none cursor-pointer bg-slate-900 hover:bg-white hover:text-slate-900" style={{textDecoration: 'none', borderRadius: '80px', transition: 'color 300ms ease 0s, transform 300ms ease 0s, box-shadow 300ms ease 0s, background-color 300ms ease 0s, -webkit-transform 300ms ease 0s'}}>Browse articles</a>
          </div>
          <div data-w-id="8ee26d9a-e305-14f3-388b-e05a5f51c0d6" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d'}} className="opacity-100 box-border">
            <div role="list" className="mx-auto text-slate-500 grid auto-cols-[1fr] grid-cols-3 gap-x-7">
              <div role="listitem" className="box-border">
                <a data-w-id="080749d7-7ebe-83f7-ab02-213be105fcf9" href="#" className="flex overflow-hidden flex-col max-w-full min-h-full bg-white border border-solid cursor-pointer box-border border-zinc-200 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none', borderRadius: '20px'}}>
                  <div className="flex flex-col justify-center h-48">
                    <img src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/611418e277292729f8324d1c_post-01-featured-image-personal-x-template.jpg" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
                  </div>
                  <div className="px-6 pt-6 pb-12">
                    <h3 className="mt-0 mb-5 text-2xl font-bold leading-5 text-slate-900">What is the right design tool to choose in 2022?</h3>
                    <div className="flex flex-wrap items-center box-border">
                      <div className="box-border">UI/UX</div>
                      <div className="mx-3 w-6 max-h-px bg-zinc-200" style={{minHeight: '1px'}} />
                      <div className="box-border">August 26, 2021</div>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="box-border">
                <a data-w-id="080749d7-7ebe-83f7-ab02-213be105fcf9" href="#" className="flex overflow-hidden flex-col max-w-full min-h-full bg-white border border-solid cursor-pointer box-border border-zinc-200 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none', borderRadius: '20px'}}>
                  <div className="flex flex-col justify-center h-48">
                    <img src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/611418854f62aac0a4e703c7_post-02-featured-image-personal-x-template.jpg" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
                  </div>
                  <div className="px-6 pt-6 pb-12">
                    <h3 className="mt-0 mb-5 text-2xl font-bold leading-5 text-slate-900">Font sizes definitive guide</h3>
                    <div className="flex flex-wrap items-center box-border">
                      <div className="box-border">UI/UX</div>
                      <div className="mx-3 w-6 max-h-px bg-zinc-200" style={{minHeight: '1px'}} />
                      <div className="box-border">August 27, 2021</div>
                    </div>
                  </div>
                </a>
              </div>
              <div role="listitem" className="box-border">
                <a data-w-id="080749d7-7ebe-83f7-ab02-213be105fcf9" href="#" className="flex overflow-hidden flex-col max-w-full min-h-full bg-white border border-solid cursor-pointer box-border border-zinc-200 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none', borderRadius: '20px'}}>
                  <div className="flex flex-col justify-center h-48">
                    <img src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/61141875f2025117a96d5d32_post-03-featured-image-personal-x-template.jpg" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
                  </div>
                  <div className="px-6 pt-6 pb-12">
                    <h3 className="mt-0 mb-5 text-2xl font-bold leading-5 text-slate-900">WFT is happening in the industry?</h3>
                    <div className="flex flex-wrap items-center box-border">
                      <div className="box-border">UI/UX</div>
                      <div className="mx-3 w-6 max-h-px bg-zinc-200" style={{minHeight: '1px'}} />
                      <div className="box-border">August 28, 2021</div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="flex-col p-5 my-5 text-center text-gray-600 bg-white border border-solid border-zinc-200" style={{borderRadius: '18px'}}>
                <div className="box-border">No items found.</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="py-24 font-medium leading-8 text-slate-500">
        <div className="table clear-both flex-col items-stretch px-6 mx-auto leading-8" style={{maxWidth: '1248px', content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
          <div data-w-id="49624ee1-e392-6c2f-2417-6e942a283501" className="flex flex-wrap justify-center items-center mx-auto mb-16 text-center opacity-100" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1}}>
            <h2 className="my-0 text-4xl font-bold leading-6 text-slate-900">
              Follow me on
              <a href="https://www.instagram.com/" target="_blank" className="bg-transparent cursor-pointer box-border hover:text-slate-500 hover:opacity-60" style={{transition: 'opacity 300ms ease 0s', textDecoration: 'underline', lineHeight: '57.96px'}}>Instagram</a>
            </h2>
          </div>
          <div className="grid gap-8 text-slate-500" style={{gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gridTemplateRows: 'auto', gridAutoColumns: '1fr'}}>
            <a data-w-id="49624ee1-e392-6c2f-2417-6e942a283507" href="https://www.instagram.com/" target="_blank" className="inline-block overflow-hidden max-w-full bg-transparent rounded-xl opacity-100 cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1, transition: 'color 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/instagram-07-personal-x-template.jpg" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" /></a>
            <a id="w-node-_49624ee1-e392-6c2f-2417-6e942a283509-2a2834ff" data-w-id="49624ee1-e392-6c2f-2417-6e942a283509" href="https://www.instagram.com/" target="_blank" className="inline-block overflow-hidden max-w-full bg-transparent rounded-xl opacity-100 cursor-pointer text-slate-900 hover:text-slate-500" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1, gridArea: 'span 2 / span 2 / span 2 / span 2', transition: 'color 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/instagram-05-personal-x-template.jpg" srcSet="
          /images/instagram-05-personal-x-template-p-500.jpeg 500w,
          /images/instagram-05-personal-x-template-p-800.jpeg 800w,
          /images/instagram-05-personal-x-template.jpg        942w
        " sizes="(max-width: 767px) 45vw, (max-width: 1439px) 17vw, 216px" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" /></a>
            <a data-w-id="49624ee1-e392-6c2f-2417-6e942a28350b" href="https://www.instagram.com/" target="_blank" className="inline-block overflow-hidden max-w-full bg-transparent rounded-xl opacity-100 cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1, transition: 'color 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/instagram-04-personal-x-template.jpg" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" /></a>
            <a data-w-id="49624ee1-e392-6c2f-2417-6e942a28350d" href="https://www.instagram.com/" target="_blank" className="inline-block overflow-hidden max-w-full bg-transparent rounded-xl opacity-100 cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1, transition: 'color 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/instagram-02-personal-x-template.jpg" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border will-change-transform" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1.04917, 1.04917, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} /></a>
            <a data-w-id="49624ee1-e392-6c2f-2417-6e942a28350f" href="https://www.instagram.com/" target="_blank" className="inline-block overflow-hidden max-w-full bg-transparent rounded-xl opacity-100 cursor-pointer text-slate-900 hover:text-slate-500" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1, transition: 'color 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/instagram-06-personal-x-template.jpg" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" /></a>
            <a data-w-id="49624ee1-e392-6c2f-2417-6e942a283511" href="https://www.instagram.com/" target="_blank" className="inline-block overflow-hidden max-w-full bg-transparent rounded-xl opacity-100 cursor-pointer text-slate-900 hover:text-slate-500" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1, transition: 'color 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/instagram-03-personal-x-template.jpg" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" /></a>
            <a data-w-id="49624ee1-e392-6c2f-2417-6e942a283513" href="https://www.instagram.com/" target="_blank" className="inline-block overflow-hidden max-w-full bg-transparent rounded-xl opacity-100 cursor-pointer text-slate-900 hover:text-slate-500" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1, transition: 'color 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/instagram-01-personal-x-template.jpg" alt="" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} /></a>
          </div>
        </div>
      </div>
      <footer className="block pt-32 font-medium leading-8 bg-white border-t border-solid border-zinc-200 text-slate-500">
        <div className="flex-col items-stretch px-6 leading-8">
          <div className="justify-items-center items-center text-slate-500" style={{rowGap: '24px', gridTemplateColumns: '0.25fr 1fr', gridTemplateRows: 'auto'}}>
            <div data-w-id="d8ff4f39-9935-6322-9c9f-6a276f3fb0f8" className="flex justify-between pb-16 opacity-100" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1}}>
              <div className="mr-12 mb-16 w-1/3">
                <a href="index.html" aria-current="page" className="inline-block mb-6 max-w-full bg-transparent cursor-pointer text-slate-900 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/logo-you-x-webflow-template.svg" alt="" className="inline-block w-40 max-w-full align-middle border-0 box-border" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} /></a>
                <p className="mt-0 mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                  mattis nunc aliquam tincidunt est non.
                </p>
                <div className="grid auto-cols-auto justify-between" style={{gap: '0px 22px', gridTemplateColumns: 'auto auto auto auto auto', gridTemplateRows: 'auto', maxWidth: '225px'}}>
                  <a id="w-node-dace37e7-9f7d-bd23-c0da-b4371de70cef-ae2f46c5" href="https://www.facebook.com/" target="_blank" className="flex justify-center items-center place-self-center w-full max-w-full h-full bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/footer-social-icon-facebook-personal-x-webflow-template-brix-templates.svg" alt="" className="flex justify-center items-center w-auto max-w-full h-auto align-middle border-0 box-border" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} /></a>
                  <a id="w-node-_3d676b4a-39c2-ba90-e05e-2e0231200950-ae2f46c5" href="https://twitter.com/" target="_blank" className="flex justify-center items-center place-self-center w-full max-w-full h-full bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/footer-social-icon-twitter-personal-x-webflow-template-brix-templates.svg" alt="" className="flex justify-center items-center w-auto max-w-full h-auto align-middle border-0 box-border" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} /></a>
                  <a id="w-node-_76f69537-9545-3254-9e62-804702692aed-ae2f46c5" href="https://www.instagram.com/" target="_blank" className="flex justify-center items-center place-self-center w-full max-w-full h-full bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/footer-social-icon-instagram-personal-x-webflow-template-brix-templates.svg" alt="" className="flex justify-center items-center w-auto max-w-full h-auto align-middle border-0 box-border" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} /></a>
                  <a id="w-node-_531c99c3-bf37-23d5-32d5-68134a34f4a4-ae2f46c5" href="https://www.linkedin.com/" target="_blank" className="flex justify-center items-center place-self-center w-full max-w-full h-full bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/footer-social-icon-linkedin-personal-x-webflow-template-brix-templates.svg" alt="" className="flex justify-center items-center w-auto max-w-full h-auto align-middle border-0 box-border" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} /></a>
                  <a id="w-node-cbb89fca-0d6e-42c5-c84a-e55d6cf59c93-ae2f46c5" href="https://www.whatsapp.com/" target="_blank" className="flex justify-center items-center place-self-center w-full max-w-full h-full bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/footer-social-icon-whatsapp-personal-x-webflow-template-brix-templates.svg" alt="" className="flex justify-center items-center w-auto max-w-full h-auto align-middle border-0 box-border" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} /></a>
                </div>
              </div>
              <div className="flex gap-8 justify-between w-2/3">
                <div id="w-node-e8d48131-b634-f991-cac4-38c5477a9b0c-ae2f46c5" className="w-1/3">
                  <div className="mb-8 text-xl font-bold leading-5 text-slate-900">
                    Pages
                  </div>
                  <div className="grid flex-nowrap gap-8 justify-start" style={{gridAutoColumns: '1fr', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto'}}>
                    <ul role="list" className="flex-col items-start pl-0 mr-0 mb-0 list-none" style={{listStyle: 'none'}}>
                      <li className="mb-6 w-full leading-5 text-left" style={{listStyle: 'outside none none'}}>
                        <a href="index.html" aria-current="page" className="bg-transparent cursor-pointer box-border hover:text-slate-900" style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Home</a>
                      </li>
                      <li className="mb-6 w-full leading-5 text-left" style={{listStyle: 'outside none none'}}>
                        <a href="about.html" className="bg-transparent cursor-pointer box-border hover:text-slate-900" style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>About</a>
                      </li>
                      <li className="mb-6 w-full leading-5 text-left" style={{listStyle: 'outside none none'}}>
                        <a href="contact.html" className="bg-transparent cursor-pointer box-border hover:text-slate-900" style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Contact</a>
                      </li>
                      <li className="mb-6 w-full leading-5 text-left" style={{listStyle: 'outside none none'}}>
                        <a href="portfolio.html" className="bg-transparent cursor-pointer box-border hover:text-slate-900" style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Portfolio</a>
                      </li>
                      <li className="mb-6 w-full leading-5 text-left" style={{listStyle: 'outside none none'}}>
                        <a href="https://youtemplate.webflow.io/portfolio-project/todo-list-mobile-app-redesign" className="bg-transparent cursor-pointer box-border hover:text-slate-900" style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Single project</a>
                      </li>
                    </ul>
                    <ul role="list" className="flex-col items-start pl-0 mr-0 mb-0 list-none" style={{listStyle: 'none'}}>
                      <li className="mb-6 w-full leading-5 text-left" style={{listStyle: 'outside none none'}}>
                        <a href="shop.html" className="bg-transparent cursor-pointer box-border hover:text-slate-900" style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Shop</a>
                      </li>
                      <li className="mb-6 w-full leading-5 text-left" style={{listStyle: 'outside none none'}}>
                        <a href="https://youtemplate.webflow.io/product/iphone-12-pro-max-mockups" className="bg-transparent cursor-pointer box-border hover:text-slate-900" style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Single Product</a>
                      </li>
                      <li className="mb-6 w-full leading-5 text-left" style={{listStyle: 'outside none none'}}>
                        <a href="blog.html" className="bg-transparent cursor-pointer box-border hover:text-slate-900" style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Blog</a>
                      </li>
                      <li className="mb-6 w-full leading-5 text-left" style={{listStyle: 'outside none none'}}>
                        <a href="https://youtemplate.webflow.io/blog/what-did-i-learn-from-doing-50-design-sprints" className="bg-transparent cursor-pointer box-border hover:text-slate-900" style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Blog Post</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-xl font-bold leading-5 text-slate-900">
                    Utility Pages
                  </div>
                  <div className="flex-nowrap gap-8 justify-start items-start" style={{gridAutoColumns: '1fr', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto'}}>
                    <ul role="list" className="flex-col items-start pl-0 mr-0 mb-0 list-none" style={{listStyle: 'none'}}>
                      <li className="mb-6 w-full leading-5 text-left" style={{listStyle: 'outside none none'}}>
                        <a href="utility-pages/style-guide.html" className="bg-transparent cursor-pointer box-border hover:text-slate-900" style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Styleguide</a>
                      </li>
                      <li className="mb-6 w-full leading-5 text-left" style={{listStyle: 'outside none none'}}>
                        <a href="utility-pages/start-here.html" className="bg-transparent cursor-pointer box-border hover:text-slate-900" style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Start Here</a>
                      </li>
                      <li className="mb-6 w-full leading-5 text-left" style={{listStyle: 'outside none none'}}>
                        <a href="404.html" className="bg-transparent cursor-pointer box-border hover:text-slate-900" style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>404 Not Found</a>
                      </li>
                      <li className="mb-6 w-full leading-5 text-left" style={{listStyle: 'outside none none'}}>
                        <a href="401.html" className="bg-transparent cursor-pointer box-border hover:text-slate-900" style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Password Protected</a>
                      </li>
                      <li className="mb-6 w-full leading-5 text-left" style={{listStyle: 'outside none none'}}>
                        <a href="utility-pages/licenses.html" className="bg-transparent cursor-pointer box-border hover:text-slate-900" style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Licenses</a>
                      </li>
                      <li className="mb-6 w-full leading-5 text-left" style={{listStyle: 'outside none none'}}>
                        <a href="utility-pages/changelog.html" className="bg-transparent cursor-pointer box-border hover:text-slate-900" style={{transition: 'color 350ms ease 0s', textDecoration: 'none', listStyle: 'outside none none'}}>Changelog</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8 text-xl font-bold leading-5 text-slate-900">
                    Contact Me
                  </div>
                  <div className="flex-nowrap gap-8 justify-start items-start" style={{gridAutoColumns: '1fr', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto'}}>
                    <ul role="list" className="flex-col items-start pl-0 mr-0 mb-0 list-none" style={{listStyle: 'none'}}>
                      <li className="mb-6 w-full leading-5 text-left" style={{listStyle: 'outside none none'}}>
                        <a href="mailto:hello@you.com" className="flex items-center mr-3 mb-3 max-w-full text-gray-600 bg-transparent cursor-pointer hover:text-gray-600 hover:opacity-60" style={{textDecoration: 'none', transition: 'opacity 300ms ease 0s', listStyle: 'outside none none'}}><img src="/images/email-icon-700-personal-x-webflow-template-brix-templates.svg" alt="" className="inline-block mr-3 w-5 max-w-full align-middle border-0" style={{minHeight: '22px', listStyle: 'outside none none'}} />
                          <div className="box-border" style={{listStyle: 'outside none none'}}>
                            hello@you.com
                          </div>
                        </a>
                      </li>
                      <li className="mb-6 w-full leading-5 text-left" style={{listStyle: 'outside none none'}}>
                        <a href="tel:(415)200-8613" className="flex items-center mr-3 mb-3 max-w-full text-gray-600 bg-transparent cursor-pointer hover:text-gray-600 hover:opacity-60" style={{textDecoration: 'none', transition: 'opacity 300ms ease 0s', listStyle: 'outside none none'}}><img src="/images/phone-icon-personal-x-webflow-template-brix-templates.svg" alt="" className="inline-block mr-3 w-5 max-w-full align-middle border-0" style={{minHeight: '22px', listStyle: 'outside none none'}} />
                          <div className="box-border" style={{listStyle: 'outside none none'}}>
                            (415) 200 - 8613
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-id="c52ce4d4-0663-d89d-957c-28c21111b778" className="flex justify-center items-center py-8 w-full text-center border-t border-solid opacity-100 box-border border-zinc-200" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1}}>
              <div className="box-border">
                Copyright © David Hargitai
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
}
