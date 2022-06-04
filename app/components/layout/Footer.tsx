export function Footer() {
  return (
    <footer className="text-base block pt-14 lg:pt-32 font-medium leading-8 bg-white border-t border-solid border-zinc-200 text-slate-500">
        <div className="flex-col items-stretch px-6 leading-8">
          <div className="justify-items-center items-center text-slate-500" style={{rowGap: '24px', gridTemplateColumns: '0.25fr 1fr', gridTemplateRows: 'auto'}}>
            <div className="flex flex-wrap justify-between pb-16 opacity-100" >
              <div className="mb-16 w-full lg:w-1/3">
                <a href="/" aria-current="page" className="inline-block mb-6 max-w-full bg-transparent cursor-pointer text-slate-900 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'underline'}}>
                  <img src="/david-hargitai-logo.svg" alt="" className="inline-block w-28 max-w-full align-middle border-0 box-border" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} />
                </a>
                <p className="mt-0 mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                  mattis nunc aliquam tincidunt est non.
                </p>
                <div className="grid auto-cols-auto justify-between" style={{gap: '0px 22px', gridTemplateColumns: 'auto auto auto auto auto', gridTemplateRows: 'auto', maxWidth: '225px'}}>
                  <a href="https://www.facebook.com/" target="_blank" className="flex justify-center items-center place-self-center w-full max-w-full h-full bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/footer-social-icon-facebook-personal-x-webflow-template-brix-templates.svg" alt="" className="flex justify-center items-center w-auto max-w-full h-auto align-middle border-0 box-border" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} /></a>
                  <a href="https://twitter.com/" target="_blank" className="flex justify-center items-center place-self-center w-full max-w-full h-full bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/footer-social-icon-twitter-personal-x-webflow-template-brix-templates.svg" alt="" className="flex justify-center items-center w-auto max-w-full h-auto align-middle border-0 box-border" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} /></a>
                  <a href="https://www.instagram.com/" target="_blank" className="flex justify-center items-center place-self-center w-full max-w-full h-full bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/footer-social-icon-instagram-personal-x-webflow-template-brix-templates.svg" alt="" className="flex justify-center items-center w-auto max-w-full h-auto align-middle border-0 box-border" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} /></a>
                  <a href="https://www.linkedin.com/" target="_blank" className="flex justify-center items-center place-self-center w-full max-w-full h-full bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/footer-social-icon-linkedin-personal-x-webflow-template-brix-templates.svg" alt="" className="flex justify-center items-center w-auto max-w-full h-auto align-middle border-0 box-border" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} /></a>
                  <a href="https://www.whatsapp.com/" target="_blank" className="flex justify-center items-center place-self-center w-full max-w-full h-full bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/footer-social-icon-whatsapp-personal-x-webflow-template-brix-templates.svg" alt="" className="flex justify-center items-center w-auto max-w-full h-auto align-middle border-0 box-border" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} /></a>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-between w-full lg:w-2/3">
                <div className="w-full xs:w-1/2 sm:w-1/3">
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
            <div className="flex justify-center items-center py-8 w-full text-center border-t border-solid opacity-100 box-border border-zinc-200" >
              <div className="box-border">
                Copyright © David Hargitai
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
