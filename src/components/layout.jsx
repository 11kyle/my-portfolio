import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {

  return (
    <div>
      <main className="px-6 md:px-8 max-w-3xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}