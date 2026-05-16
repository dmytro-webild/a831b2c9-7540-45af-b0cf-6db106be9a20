"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSizeMediumTitles"
        background="aurora"
        cardStyle="glass-elevated"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Vehicles",
          id: "products",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="FJKautosimport"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Premium Vehicle Import Agency"
      description="FJKautosimport brings the world's finest vehicles to your doorstep with expert logistics and seamless clearance."
      testimonials={[
        {
          name: "John D.",
          handle: "@johnd",
          testimonial: "Excellent import experience, my car arrived in perfect condition.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-car-showroom-dealership_23-2149117139.jpg",
        },
        {
          name: "Sarah K.",
          handle: "@sarahk",
          testimonial: "Seamless process and highly professional team at FJKautosimport.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-man-talking-phone_23-2148230757.jpg",
        },
        {
          name: "Mike R.",
          handle: "@miker",
          testimonial: "Best agency for luxury car imports, highly recommended.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-testing-car-car-showroom_1303-20298.jpg",
        },
        {
          name: "Linda M.",
          handle: "@lindam",
          testimonial: "Extremely satisfied with the communication and fast delivery.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-with-tablet-street_23-2148213475.jpg",
        },
        {
          name: "David L.",
          handle: "@davidl",
          testimonial: "Top notch service from start to finish, thank you FJKautosimport.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-working-from-his-office-concept-confidence-success_181624-23215.jpg",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/happy-customers-car-dealership_23-2149106169.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/woman-enjoying-her-financially-independence-while-buying-car_23-2149434336.jpg",
          alt: "Woman enjoying her financially independence while buying car",
        },
        {
          src: "http://img.b2bpic.net/free-photo/senior-man-car-showroom-choosing-car_1303-18966.jpg",
          alt: "Senior man in a car showroom choosing a car",
        },
        {
          src: "http://img.b2bpic.net/free-photo/stylish-elegant-woman-car-salon_1157-33509.jpg",
          alt: "Stylish and elegant woman in a car salon",
        },
        {
          src: "http://img.b2bpic.net/free-photo/female-salesperson-car-showroom-standing-by-car_1303-22400.jpg",
          alt: "Female salesperson at a car showroom standing by the car",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-car-salesman_23-2148130241.jpg",
          alt: "Portrait of car salesman",
        },
      ]}
      avatarText="Trusted by 500+ satisfied car enthusiasts"
      marqueeItems={[
        {
          type: "text",
          text: "Global Shipping Network",
        },
        {
          type: "text",
          text: "100-Point Quality Check",
        },
        {
          type: "text",
          text: "Customs Clearance Experts",
        },
        {
          type: "text",
          text: "Fast Door-to-Door Delivery",
        },
        {
          type: "text",
          text: "Fully Insured Logistics",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Our Commitment to ",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/two-men-handshake-front-car_613910-16930.jpg",
          alt: "About FJK",
        },
        {
          type: "text",
          content: " Excellence",
        },
      ]}
      buttons={[
        {
          text: "Learn More",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          label: "Quality",
          title: "Inspection Services",
          items: [
            "Rigorous 100-point check",
            "Detailed condition reports",
            "Expert mechanical assessment",
          ],
        },
        {
          id: "f2",
          label: "Logistic",
          title: "Secure Shipping",
          items: [
            "Global logistics network",
            "Insured transport services",
            "Safe door-to-door delivery",
          ],
        },
        {
          id: "f3",
          label: "Legal",
          title: "Clearance Support",
          items: [
            "Document preparation",
            "Customs handling experts",
            "Full legal compliance",
          ],
        },
      ]}
      title="Why Choose FJKautosimport"
      description="We specialize in making vehicle imports simple, secure, and cost-effective."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Luxury Motors",
          name: "Sports Sedan",
          price: "$85,000",
          rating: 5,
          reviewCount: "12",
          imageSrc: "http://img.b2bpic.net/free-photo/exterior-modern-white-luxury-car_181624-23559.jpg",
        },
        {
          id: "p2",
          brand: "Elite Auto",
          name: "Sport Coupe",
          price: "$120,000",
          rating: 5,
          reviewCount: "8",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-shot-car-s-black-modern-interior-perfect_181624-33164.jpg",
        },
        {
          id: "p3",
          brand: "Speed Kings",
          name: "Supercar",
          price: "$250,000",
          rating: 5,
          reviewCount: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/formula-one-car-burning_1048-1867.jpg",
        },
        {
          id: "p4",
          brand: "Family Comfort",
          name: "Luxury Saloon",
          price: "$65,000",
          rating: 4,
          reviewCount: "20",
          imageSrc: "http://img.b2bpic.net/free-photo/joyful-fashionable-female-friends-raise-their-hands-while-sitting-luxury-cabriolet-car-park_613910-19095.jpg",
        },
        {
          id: "p5",
          brand: "Urban Drive",
          name: "Luxury Crossover",
          price: "$55,000",
          rating: 4,
          reviewCount: "15",
          imageSrc: "http://img.b2bpic.net/free-photo/dark-crossover-driving-winter-city-street-dynamic-style_169016-71269.jpg",
        },
        {
          id: "p6",
          brand: "City Mini",
          name: "Compact Hatch",
          price: "$35,000",
          rating: 4,
          reviewCount: "30",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-empty-old-car-road_23-2148703156.jpg",
        },
      ]}
      title="Inventory Showcase"
      description="Explore our curated selection of high-end vehicles ready for import."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "AutoGlobal",
        "ShipDirect",
        "ClearancePro",
        "VehicleHub",
        "EliteTrans",
        "MotorLogistics",
        "ImportMaster",
      ]}
      title="Trusted by Global Partners"
      description="We collaborate with the best in the automotive industry."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Impact"
      tag="Trusted Statistics"
      metrics={[
        {
          id: "m1",
          value: "500+",
          description: "Cars Imported",
        },
        {
          id: "m2",
          value: "15",
          description: "Countries Covered",
        },
        {
          id: "m3",
          value: "99%",
          description: "Client Satisfaction",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "John Smith",
          date: "Jan 2024",
          title: "Satisfied Customer",
          quote: "Seamless service, FJKautosimport exceeded my expectations.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/person-preparing-get-driver-license_23-2150167637.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-customers-car-dealership_23-2149106169.jpg",
          imageAlt: "happy client buying car",
        },
        {
          id: "t2",
          name: "Jane Doe",
          date: "Feb 2024",
          title: "Import Enthusiast",
          quote: "Professional, reliable, and very transparent throughout the process.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-handsome-business-man-delivering-bouquet-beautiful-flowers_1303-20877.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/two-men-handshake-front-car_613910-16930.jpg",
          imageAlt: "happy client buying car",
        },
        {
          id: "t3",
          name: "Robert Brown",
          date: "Mar 2024",
          title: "Collector",
          quote: "Handling was impeccable, car arrived sooner than expected.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/family-enjoying-stop-their-road-trip_23-2149401851.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/factory-worker-analyzing-data-tablet_482257-126826.jpg",
          imageAlt: "happy client buying car",
        },
        {
          id: "t4",
          name: "Emily White",
          date: "Apr 2024",
          title: "First-time Buyer",
          quote: "I felt secure knowing they handled all customs documentation.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/saleswoman-car-showroom-selling-cars_1303-25484.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/view-plane-boxes_23-2149853129.jpg",
          imageAlt: "happy client buying car",
        },
        {
          id: "t5",
          name: "David Wilson",
          date: "May 2024",
          title: "Repeat Client",
          quote: "FJKautosimport is the only choice for hassle-free imports.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/content-businessman-smiling_74855-3248.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-storehouse-employee-analyzing-goods-logistics_482257-77538.jpg",
          imageAlt: "happy client buying car",
        },
      ]}
      title="What Our Clients Say"
      description="Trusted by enthusiasts worldwide."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How long does shipping take?",
          content: "Typically 4-8 weeks depending on the origin and destination countries.",
        },
        {
          id: "q2",
          title: "Are there extra hidden costs?",
          content: "No, all fees are transparently listed in our initial quote provided to you.",
        },
        {
          id: "q3",
          title: "Do you handle custom taxes?",
          content: "Yes, we handle all customs documentation and tax calculations for your import.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/husband-wife-showroom-looking-make-vehicle-purchase_482257-118265.jpg"
      mediaAnimation="slide-up"
      title="Common Questions"
      description="Here is everything you need to know about our import process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Get Started Today"
      description="Ready to import your dream car? Contact our professional team for a consultation."
      imageSrc="http://img.b2bpic.net/free-photo/man-talking-mobile-phone-while-charging-electric-car_107420-94883.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="FJKautosimport"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
