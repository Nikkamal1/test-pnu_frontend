import "@/styles/globals.css";
import Navbar from "@/components/Navbar";  // Import Navbar
import Footer from "@/components/Footer";  // Import Footer

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar /> {/* ใช้งาน Navbar ที่นี่ */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
