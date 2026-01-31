import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Tours from "@/components/Tours";
import Transport from "@/components/Transport";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import aboutImage from "../../public/images/about.png";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Destinations />
      <Tours />
      <Transport />

      {/* About Section - Brief in-page section */}
      <section id="about" className="section" style={{ background: "white" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <h2 className="section-title">The Downsouth Story</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--muted)", marginBottom: "2rem" }}>
              Born from a passion for showing the true essence of Sri Lanka&apos;s southern charm,
              Downsouth Lanka Travellers has grown into a premier travel partner.
              We believe travel is about more than just seeing places—it&apos;s about the stories you tell
              and the connections you make.
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--muted)", marginBottom: "2.5rem" }}>
              Our dedicated team of professionals ensures that every journey is crafted with care,
              combining luxury with authenticity. Whether you&apos;re exploring the ancient ramparts of Galle Fort
              or chasing sunsets in Mirissa, we are with you every step of the way.
            </p>
            <Link href="/about">
              <button className="btn-primary">Learn More About Us</button>
            </Link>
          </div>
          <div style={{ position: "relative", height: "480px", width: "100%", borderRadius: "2rem", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
            <Image
              src={aboutImage}
              alt="About Us"
              fill
              style={{
                objectFit: "cover",
                transform: "scale(1.05)" // Zoom in to crop out the black borders from the image edges
              }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Travel Tips/Guide Section */}
      <section className="section" style={{ background: "var(--light-gray)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <h2 className="section-title">Traveller&apos;s Guide</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>Practical information to help you prepare for your Sri Lankan adventure.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            <div style={{ background: "white", padding: "2rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--secondary)", marginBottom: "1rem", fontSize: "1.2rem", fontWeight: "700" }}>Best Time to Visit</h4>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)" }}>
                The West and South coast are best from **December to April**, while the East coast shines from **May to September**.
              </p>
            </div>
            <div style={{ background: "white", padding: "2rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--secondary)", marginBottom: "1rem", fontSize: "1.2rem", fontWeight: "700" }}>Visa & Entry</h4>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)" }}>
                Most travellers need an ETA (Electronic Travel Authorization) which can be easily applied for online before arrival.
              </p>
            </div>
            <div style={{ background: "white", padding: "2rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--secondary)", marginBottom: "1rem", fontSize: "1.2rem", fontWeight: "700" }}>Currency</h4>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)" }}>
                The local currency is the Sri Lankan Rupee (LKR). ATMs are widely available, and credit cards are accepted in major hotels.
              </p>
            </div>
            <div style={{ background: "white", padding: "2rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--secondary)", marginBottom: "1rem", fontSize: "1.2rem", fontWeight: "700" }}>Local Culture</h4>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)" }}>
                Sri Lankans are incredibly warm and hospitable. Remember to dress modestly when visiting sacred Buddhist temples.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section" style={{ background: "var(--primary)", color: "white", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "1.5rem" }}>Ready to Plan Your Island Getaway?</h2>
          <p style={{ fontSize: "1.25rem", opacity: "0.9", marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem" }}>
            Get in touch with our travel experts today and let us help you create the perfect itinerary for your Sri Lankan adventure.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
            <Link href="/contact">
              <button className="btn-secondary" style={{ border: "2px solid white", background: "transparent", color: "white" }}>Contact Us</button>
            </Link>
            <Link href="/contact">
              <button className="btn-white">Get a Quote</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
