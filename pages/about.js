import Link from 'next/link';

import Container from '@/components/Container';

const Talk = ({ title, link, children }) => (
  <>
    <h3 className="font-medium mb-2 text-lg">
      <a
        className="flex items-center text-gray-900 dark:text-gray-100"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {title}
        <div>
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-8">{children}</p>
  </>
);

export default function About() {
  return (
    <Container title="About – David Hargitai">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>Hey, I’m David.</p>
          <p>
            ATM I'm working as a frontend engineer, but my other passion is
            digital/content marketing, and copywriting.
          </p>
          <p>
            From the first time I heard about what a great copywriter can
            achieve, I knew that I want to be one of them one day.
          </p>
          <p>
            First I learned everything I could access from Gary Halbert, then
            from other great names like Gene Schwartz, John Caples, Ben Settle,
            Mike Shreeve and some other great people.
          </p>
          <p>
            For a few years I haven't done anything, but not long ago I decided
            to start my copywriting journey and I'll practice my craft (almost)
            every day.
          </p>
          <p>
            This website is my playground for this. I send tips and tricks in
            daily emails, you can follow them if you subscribe to my list below.
          </p>
          <p>
            If you want me to help you with your sales copy or marketing emails,
            here you can book a quick 15m chat with me and we can see if I can
            help you:{' '}
            <a href="https://davidharigtai.com/discovery-call">
              davidharigtai.com/discovery-call
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}
