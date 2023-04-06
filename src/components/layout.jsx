import Navbar from "./navbar";
import Hero from "./hero";
import Footer from "./footer";

export default function Layout({ children }) {

  return (
    <>
      <Navbar />
      <Hero />
      <main className="px-6 md:px-8 max-w-3xl mx-auto">
        {children}
      </main>
      <Footer />
    </>
  )
}