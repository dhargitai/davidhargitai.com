import { Link } from "@remix-run/react";

export function Footer() {
  return (
    <footer className="text-base block pt-14 lg:pt-32 font-medium leading-8 bg-white border-t border-solid border-dh-dark-lighter text-dh-dark-light">
        <div className="flex-col items-stretch px-6 leading-8">
          <div className="justify-items-center items-center text-dh-dark-light" style={{rowGap: '24px', gridTemplateColumns: '0.25fr 1fr', gridTemplateRows: 'auto'}}>
            <div className="flex flex-wrap justify-between pb-16 opacity-100" >
              <div className="mb-16 w-full lg:w-1/3">
                <Link to="/" className="inline-block mb-6 max-w-full bg-transparent cursor-pointer text-dh-dark hover:text-dh-dark-light" style={{transition: 'color 300ms ease 0s', textDecoration: 'underline'}}>
                  <img src="/david-hargitai-logo.svg" alt="David Hargitai logo" className="inline-block w-28 max-w-full align-middle border-0 box-border" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} />
                </Link>
                <p className="mt-0 mb-10">
                  Practice the unconventional, enjoy the exceptional
                </p>
                <div className="grid auto-cols-auto justify-between" style={{gap: '0px 22px', gridTemplateColumns: 'auto auto auto auto auto', gridTemplateRows: 'auto', maxWidth: '225px'}}>
                  <a href="https://twitter.com/hargitaidavid" target="_blank" rel="noreferrer" className="flex justify-center items-center place-self-center w-full max-w-full h-full bg-transparent cursor-pointer box-border text-dh-dark hover:text-dh-dark-light" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/footer-social-icon-twitter-personal-x-webflow-template-brix-templates.svg" alt="" className="flex justify-center items-center w-auto max-w-full h-auto align-middle border-0 box-border" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} /></a>
                  <a href="https://www.instagram.com/david.hargitai/" target="_blank" rel="noreferrer" className="flex justify-center items-center place-self-center w-full max-w-full h-full bg-transparent cursor-pointer box-border text-dh-dark hover:text-dh-dark-light" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s', textDecoration: 'underline'}}><img src="/images/footer-social-icon-instagram-personal-x-webflow-template-brix-templates.svg" alt="" className="flex justify-center items-center w-auto max-w-full h-auto align-middle border-0 box-border" style={{transition: 'transform 300ms ease 0s, -webkit-transform 300ms ease 0s'}} /></a>
                </div>
              </div>

            </div>
            <div className="flex justify-center items-center py-8 w-full text-center border-t border-solid opacity-100 box-border border-dh-dark-lighter" >
              <div className="box-border">
                Copyright © David Hargitai
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
