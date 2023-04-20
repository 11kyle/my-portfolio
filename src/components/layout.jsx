import Navbar from "./navbar";
import Hero from "./hero";
import Footer from "./footer";
import LeftOverlay from "./left-overlay";
import RightOverlay from "./right-overlay";

export default function Layout({ children }) {

  return (
    <>
      <Navbar />
      <main className="px-6 md:px-16 lg:px-[88px] max-w-5xl mx-auto">
      <Hero />
        {children}
      </main>
      <Footer />
      <LeftOverlay />
      <RightOverlay />
    </>
  )
}