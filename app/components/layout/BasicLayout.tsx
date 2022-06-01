import { Footer, Header } from '~/components';

export function BasicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-wrapper">
      
      <Header />

      {children}

      <Footer />
      
    </div>
  )
}
