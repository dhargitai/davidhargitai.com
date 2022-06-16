import {
  BasicLayout,
  Portfolio,
  Testimonials,
  Hero,
  Services,
  AboutMe,
  Articles,
} from "~/components";

export default function Index() {
  return (
    <BasicLayout>
      <Hero />

      <Services />

      <AboutMe />

      {/* <Portfolio />

      <Testimonials />

      <Articles /> */}
    </BasicLayout>
  );
}
