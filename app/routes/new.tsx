import { Link } from "@remix-run/react";
import { BasicLayout, Portfolio, Testimonials, Hero, Services, AboutMe, Articles } from '~/components';
import { useOptionalUser } from "~/utils";

export default function New() {
  const user = useOptionalUser();
  return (
    <BasicLayout>
      <Hero />

      <Services />

      <AboutMe />
      
      <Portfolio />

      <Testimonials />
      
      <Articles />
      
    </BasicLayout>
  );
}
