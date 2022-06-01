export function Header() {
  return (
    <div role="banner" className="relative py-8 font-medium leading-8 bg-white opacity-100 text-slate-500" style={{opacity: 1, zIndex: 1000, content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
        <div className="container-xl flex-col items-stretch px-6 mx-auto leading-8" style={{maxWidth: '1248px', content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
          <div className="text-lg flex justify-between items-center text-slate-500" style={{zIndex: 99}}>
            <div className="relative" style={{zIndex: 99}}>
              <a href="index.html" aria-current="page" className="float-left relative p-0 bg-transparent cursor-pointer text-zinc-800 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none'}}><img src="/david-hargitai-logo.svg" alt="" className="inline-block w-24 max-w-full align-middle border-0" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} /></a>
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
  );
}
