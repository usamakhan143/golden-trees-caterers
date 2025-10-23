import React, { useState, useEffect, useRef } from "react"
import reels from "./data/reels.json"

const LOGO_SRC = "/assets/gtc-logo.png"

const heroSlides = [
  {
    image: "/assets/slider-images/1.jpg",
    heading: "Where Taste Meets Elegance",
    subheading:
      "Golden Trees Caterers stands for class, comfort, and care—every dish prepared with perfection, every setup arranged with heart.",
  },
  {
    image: "/assets/slider-images/2.jpg",
    heading: "Serving Karachi with Heart Since 1992",
    subheading:
      "Over 30 years, countless celebrations, one promise: unforgettable taste and hospitality that feels like home yet shines with class.",
  },
  {
    image: "/assets/slider-images/3.jpg",
    heading: "From Overseas to Karachi, We Host for You",
    subheading:
      "Wherever you are in the world, your loved ones can still feel your presence. Golden Trees Caterers turns your plans into warm, real celebrations back home.",
  },
  {
    image: "/assets/slider-images/4.jpg",
    heading: "Karachi's Taste of Celebration",
    subheading:
      "We don't just cater food; we curate emotions, creating the kind of moments people talk about long after the lights go out.",
  },
]

const services = [
  {
    image: "/assets/services/wedding-catering.jpg",
    title: "Wedding and Reception Catering",
    description:
      "Your special day deserves nothing less than perfection. From elegant décor to exquisite multi-course meals, we design your wedding experience around your personality and preferences.",
  },
  {
    image: "/assets/services/private-celebration.jpg",
    title: "Private Gatherings and Family Celebrations",
    description:
      "We know the joy of celebrating at home with the people who matter most. Our team manages everything from décor to cleanup, giving you time to focus on your guests while we handle the rest.",
  },
  {
    image: "/assets/services/Corporate-Event-Catering.webp",
    title: "Corporate Events and Business Dinners",
    description:
      "We bring professionalism and refinement to the corporate table. Whether it's a product launch, annual dinner, or client gathering, we help you create an atmosphere that speaks of confidence and success.",
  },
  {
    image: "/assets/services/outdoor-bbq.jpg",
    title: "Outdoor BBQs and Seasonal Parties",
    description:
      "Experience the charm of open-air dining with our exclusive BBQ setups and themed outdoor events. Our arrangements are perfect for creating a relaxed, yet sophisticated environment.",
  },
]

const whyChooseUsItems = [
  {
    title: "Uncompromising Quality",
    description:
      "We use only fresh ingredients and premium materials, ensuring safety, taste, and presentation in every meal.",
  },
  {
    title: "Attention to Detail",
    description:
      "We notice what others miss. From table symmetry to lighting balance, we perfect every corner until it feels right.",
  },
  {
    title: "Professional Team",
    description:
      "Our chefs, planners, and service staff are trained to deliver excellence without distraction. Every member of our team works with discipline and pride.",
  },
  {
    title: "Reliable Execution",
    description:
      "We manage every step with transparency, punctuality, and professionalism, giving our clients complete peace of mind.",
  },
  {
    title: "Elegant Design and Presentation",
    description:
      "Every event we handle reflects a sense of luxury. We blend modern design with timeless charm, creating an atmosphere that feels natural, graceful, and memorable.",
  },
]

const eventTypes = [
  "Wedding Reception",
  "Nikkah Ceremony",
  "Mehndi Event",
  "Walima Celebration",
  "Engagement Party",
  "Anniversary Celebration",
  "Birthday Party",
  "Bridal Shower",
  "Family Gathering",
  "BBQ Party",
  "Private Home Dinner",
  "Corporate Dinner",
  "Office Lunch",
  "Business Conference",
  "Charity Event",
  "Community Gathering",
  "Religious Event (Milad / Khatam)",
  "Iftar Party",
  "Eid Celebration",
  "School or College Function",
  "Cultural Festival",
  "Grand Opening Ceremony",
]

const menuTypes = ["Dinner", "Lunch", "Hi-Tea", "BBQ", "Buffet", "Custom Menu"]

const additionalServices = [
  "Decor",
  "Lighting",
  "Photography",
  "Live BBQ Setup",
  "Waiter Service",
  "Music/Stage Setup",
]

const QualityIcon: React.FC = () => (
  <svg
    className='w-16 h-16 mx-auto mb-4 text-[#f6bb1d] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    ></path>
  </svg>
)
const DetailIcon: React.FC = () => (
  <svg
    className='w-16 h-16 mx-auto mb-4 text-[#f6bb1d] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
    ></path>
  </svg>
)
const TeamIcon: React.FC = () => (
  <svg
    className='w-16 h-16 mx-auto mb-4 text-[#f6bb1d] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    ></path>
  </svg>
)
const ReliabilityIcon: React.FC = () => (
  <svg
    className='w-16 h-16 mx-auto mb-4 text-[#f6bb1d] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    ></path>
  </svg>
)
const EleganceIcon: React.FC = () => (
  <svg
    className='w-16 h-16 mx-auto mb-4 text-[#f6bb1d] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
    ></path>
  </svg>
)

const icons = [QualityIcon, DetailIcon, TeamIcon, ReliabilityIcon, EleganceIcon]

const Topbar: React.FC = () => (
  <div className='hidden md:block fixed top-0 left-0 right-0 z-50 bg-[#002a08] py-2'>
    <div className='container mx-auto px-6'>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center text-xs md:text-sm text-gray-300 gap-2 md:gap-4'>
        <div className='flex flex-wrap gap-3 md:gap-6 text-xs md:text-sm'>
          <a
            href='mailto:goldentreescaterer@gmail.com'
            className='flex items-center gap-2 hover:text-[#f6bb1d] transition-colors'
          >
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              ></path>
            </svg>
            goldentreescaterer@gmail.com
          </a>
          <a
            href='tel:03341107929'
            className='flex items-center gap-2 hover:text-[#f6bb1d] transition-colors'
          >
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
              ></path>
            </svg>
            0334 1107929
          </a>
          <a
            href='https://wa.me/923701032536'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 hover:text-[#f6bb1d] transition-colors'
          >
            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
            </svg>
            +92 370 1032536
          </a>
        </div>
        <div className='flex items-center gap-2 text-xs md:text-sm'>
          <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
            ></path>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
            ></path>
          </svg>
          <span>Abdullah Haroon Road Saddar, Karachi</span>
        </div>
      </div>
    </div>
  </div>
)

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Topbar />
      <header
        className={`fixed top-0 md:top-[40px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-premium py-3" : "bg-transparent py-4"
        }`}
      >
        <div className='container mx-auto px-6 flex justify-between items-center'>
          <img
            src={LOGO_SRC}
            alt='Golden Trees Caterers Logo'
            className='h-16 md:h-24 transition-all duration-300'
          />
          <nav className='hidden md:flex space-x-8'>
            {["Home", "About", "Services", "Gallery", "FAQs", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className='relative text-white hover:text-[#f6bb1d] transition-colors duration-300 font-lora text-lg group'
                >
                  {item}
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full'></span>
                </a>
              ),
            )}
          </nav>
          <a
            href='#booking'
            className='bg-gradient-gold text-[#f6bb1d] font-extrabold py-3 px-8 rounded-full shadow-gold hover:shadow-premium transition-all duration-300 transform hover:scale-105 animate-scaleIn border-2 border-[#f6bb1d]'
          >
            Book Now
          </a>
        </div>
      </header>
    </>
  )
}

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id='home'
      className='relative h-screen w-full overflow-hidden pt-0 md:pt-[40px]'
    >
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className='absolute inset-0 gradient-overlay opacity-90'></div>
        </div>
      ))}
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4'>
        <div className='max-w-5xl'>
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10 absolute"
              }`}
            >
              {index === currentSlide && (
                <>
                  <h1 className='text-4xl md:text-7xl font-extrabold mb-6 text-shadow-gold leading-[1.4] pb-2 animate-fadeInUp gradient-text banner-headings'>
                    {slide.heading}
                  </h1>
                  <p className='text-xl md:text-2xl font-lora text-shadow-lg text-gray-100 animate-fadeIn max-w-4xl mx-auto'>
                    {slide.subheading}
                  </p>
                  <a
                    href='#booking'
                    className='bg-gradient-gold text-[#f6bb1d] font-extrabold py-3 px-8 rounded-full shadow-gold hover:shadow-premium transition-all duration-300 transform hover:scale-105 animate-scaleIn border-2 border-[#f6bb1d] mt-8 inline-block'
                  >
                    Book Now
                  </a>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3'>
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gradient-gold scale-125 shadow-gold"
                : "glass scale-100"
            }`}
          ></button>
        ))}
      </div>
    </section>
  )
}

const About: React.FC = () => (
  <section id='about' className='py-24 gradient-green-dark'>
    <div className='container mx-auto px-6'>
      <div className='grid md:grid-cols-2 gap-16 items-center'>
        <div className='text-center md:text-left animate-slideInLeft'>
          <h2 className='text-3xl md:text-5xl font-bold gradient-text mb-6 leading-[1.3] md:leading-[78px] pb-2'>
            About Golden Trees Caterers
          </h2>
          <img
            src='/assets/elegant-design.svg'
            alt='elegant design'
            className='mt-4 e-design'
          />
          <p className='text-2xl font-lora text-[#f6bb1d] mb-8 text-shadow-gold'>
            Serving Karachi with excellence over 30 years
          </p>
          <div className='space-y-6 text-gray-200 text-left text-lg leading-relaxed'>
            <p className='animate-fadeInUp'>
              Since 1992, Golden Trees Caterers has been a trusted name in
              Pakistan's hospitality industry serving excellence, flavor, and
              unforgettable experiences for over three decades. What began as a
              humble family venture has grown into one of the country's most
              respected catering and event service brands, known for our refined
              taste, flawless presentation, and personalized service.
            </p>
            <p className='animate-fadeInUp' style={{ animationDelay: "0.2s" }}>
              With 30+ years of expertise, we take pride in creating moments
              that bring people together from elegant weddings and nikkah
              ceremonies to corporate galas, BBQ nights, and private
              celebrations. Every event we manage reflects our passion for
              perfection, where culinary mastery meets professional
              coordination.
            </p>
            <p className='animate-fadeInUp' style={{ animationDelay: "0.4s" }}>
              We don't just cater food; we create experiences that stay with you
              forever. That's why our clients call us not just caterers, but
              memory makers since 1992.
            </p>
          </div>
        </div>
        <div className='animate-slideInRight'>
          <div className='relative border-gradient rounded-2xl overflow-hidden'>
            <img
              src='assets/gallery-images/about-catering-setup.jpg'
              alt='Elegant catering setup'
              className='rounded-2xl shadow-premium w-full h-full object-cover transform hover:scale-105 transition-transform duration-700'
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

const OverseasClients: React.FC = () => (
  <section
    id='overseas'
    className='py-24 bg-[#002a08] relative overflow-hidden'
  >
    <div className='absolute inset-0 opacity-10'>
      <div className='absolute top-0 left-0 w-96 h-96 bg-[#f6bb1d] rounded-full filter blur-3xl'></div>
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-[#10ff93] rounded-full filter blur-3xl'></div>
    </div>
    <div className='container mx-auto px-6 text-center relative z-10'>
      <h3 className='text-lg uppercase tracking-widest text-[#10ff93] font-semibold mb-4 animate-fadeIn'>
        For Our Overseas Clients
      </h3>
      <h2 className='text-3xl md:text-5xl font-bold text-white my-6 gradient-text animate-fadeInUp leading-[1.3] md:leading-[78px] pb-2'>
        Celebrate in Karachi, even when you're miles away.
      </h2>
      <img
        src='/assets/elegant-design.svg'
        alt='elegant design'
        className='mx-auto mt-4 e-design-center'
      />
      <div
        className='max-w-4xl mx-auto text-gray-300 text-lg mb-12 animate-fadeIn'
        style={{ animationDelay: "0.2s" }}
      >
        <p>
          Distance should never stop you from celebrating with family. Golden
          Trees Caterers makes it possible to host dinners, BBQs, and family
          events in Karachi even while you're abroad.
        </p>
        <p className='mt-4'>
          You share your wishes; we bring them to life. We keep you connected
          through live updates and ensure your gathering feels personal,
          elegant, and stress-free. Because whether you live in Karachi or
          across the ocean, your moments deserve to be celebrated beautifully.
        </p>
      </div>
      <div className='bg-gradient-to-br from-[#f6bb1d] to-[#ffd700] shadow-gold inline-block p-8 rounded-2xl my-10 animate-scaleIn border-4 border-[#f6bb1d]'>
        <p className='text-2xl font-bold mb-2 text-black'>Registration Cost</p>
        <p className='text-6xl font-extrabold font-playfair text-black'>
          $75 USD
        </p>
        <p className='mt-3 text-lg text-black font-semibold'>
          Your Celebration in Karachi Starts Here
        </p>
      </div>
      <div
        className='mt-16 animate-fadeInUp'
        style={{ animationDelay: "0.4s" }}
      >
        <h4 className='text-2xl md:text-3xl font-bold gradient-text mb-8 leading-[1.3] pb-5'>
          We manage it all:
        </h4>
        <div className='flex flex-wrap justify-center gap-4 text-sm'>
          {eventTypes.slice(0, 14).map((event, idx) => (
            <span
              key={event}
              className='bg-[#001a08]/50 border-2 border-[#f6bb1d]/40 text-[#f6bb1d] py-3 px-6 rounded-full hover:bg-[#f6bb1d] hover:text-black transition-all duration-300 transform hover:scale-105 shadow-premium animate-fadeIn font-semibold'
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              {event}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
)

const Services: React.FC = () => (
  <section id='services' className='py-24 gradient-green-dark'>
    <div className='container mx-auto px-6 text-center'>
      <h2 className='text-3xl md:text-5xl font-bold gradient-text mb-6 animate-fadeInUp leading-[1.3] md:leading-[78px] pb-2'>
        Services We Offer
      </h2>
      <img
        src='/assets/elegant-design.svg'
        alt='elegant design'
        className='mx-auto mt-4 e-design-center'
      />
      <p className='max-w-4xl mx-auto text-gray-200 text-lg mb-16 animate-fadeIn'>
        We offer full-service catering for all kinds of occasions. Our expertise
        lies in combining professional organization with artistic presentation,
        making every event feel effortless and polished.
      </p>
      <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-10'>
        {services.map((service, idx) => (
          <div
            key={service.title}
            className='bg-gradient-to-br from-[#003515] to-[#001a08] p-8 rounded-2xl shadow-gold text-left hover-lift animate-scaleIn border-2 border-[#f6bb1d]/30 hover:border-[#f6bb1d] group transition-all duration-300'
            style={{ animationDelay: `${0.1 * idx}s` }}
          >
            <img
              src={service.image}
              alt={service.title}
              className='w-full h-48 object-cover rounded-lg mb-6 transition-transform duration-300 group-hover:scale-105'
            />
            <h3 className='text-xl font-bold gradient-text mb-4 leading-[1.3] md:leading-[38.3px] pb-1'>
              {service.title}
            </h3>
            <p className='text-gray-200 leading-relaxed'>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const WhyChooseUs: React.FC = () => (
  <section id='why-us' className='py-24 bg-[#002a08]'>
    <div className='container mx-auto px-6 text-center'>
      <h2 className='text-3xl md:text-5xl font-bold text-white mb-6 gradient-text animate-fadeInUp leading-[1.3] md:leading-[78px] pb-2'>
        Why Choose Golden Trees Caterers
      </h2>
      <img
        src='/assets/elegant-design.svg'
        alt='elegant design'
        className='mx-auto mt-4 e-design-center'
      />
      <p className='max-w-4xl mx-auto text-gray-300 text-lg mb-16 animate-fadeIn'>
        Golden Trees Caterers is not built on marketing words, but on trust and
        reputation. We have earned our name by delivering consistency, elegance,
        and genuine hospitality.
      </p>
      <div className='flex flex-wrap justify-center gap-8'>
        {whyChooseUsItems.map((item, index) => (
          <div
            key={item.title}
            className='bg-gradient-to-br from-[#003515] to-[#001a08] p-10 rounded-2xl shadow-premium border-2 border-[#f6bb1d]/30 hover:border-[#f6bb1d] hover-lift animate-fadeInUp group transition-all duration-300 w-full md:w-[calc(33.333%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]'
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            {React.createElement(icons[index % icons.length])}
            <h3 className='text-xl font-bold gradient-text mb-4 leading-[40px] pb-1'>
              {item.title}
            </h3>
            <p className='text-gray-200 leading-relaxed'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
const Gallery: React.FC = () => {
  const galleryImages = [
    "/assets/gallery-images/1.jpg",
    "/assets/gallery-images/2.jpg",
    "/assets/gallery-images/3.jpg",
    "/assets/gallery-images/4.jpg",
    "/assets/gallery-images/5.jpg",
    "/assets/gallery-images/6.jpg",
    "/assets/gallery-images/8.jpg",
    "/assets/gallery-images/9.jpg",
    "/assets/gallery-images/10.jpg",
    "/assets/gallery-images/11.jpg",
    "/assets/gallery-images/12.jpg",
    "/assets/gallery-images/13.jpg",
    "/assets/gallery-images/14.jpg",
    "/assets/gallery-images/15.jpg",
    "/assets/gallery-images/16.jpg",
    "/assets/gallery-images/17.jpg",
    "/assets/gallery-images/18.jpg",
    "/assets/gallery-images/19.jpg",
  ]

  useEffect(() => {
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement("script")
      script.src = "//www.instagram.com/embed.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section id='gallery' className='py-24 gradient-green-dark'>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='text-3xl md:text-5xl font-bold gradient-text mb-7 animate-fadeInUp leading-[1.3] md:leading-[78px] pb-2'>
          Gallery
        </h2>
        <img
          src='/assets/elegant-design.svg'
          alt='elegant design'
          className='mx-auto mt-0 e-design-center'
        />
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mb-20'>
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className='overflow-hidden rounded-2xl shadow-premium hover:shadow-gold transition-all duration-500 animate-scaleIn border-gradient'
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className='w-full h-full object-cover transform hover:scale-110 transition-transform duration-700'
              />
            </div>
          ))}
        </div>
        <h3 className='text-2xl md:text-4xl font-bold text-white mb-10 gradient-text animate-fadeInUp leading-[1.3] md:leading-[52px] pb-2'>
          Event Reels
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20'>
          {reels.map((reel, index) => (
            <div
              key={index}
              className='overflow-hidden rounded-2xl shadow-premium hover:shadow-gold transition-all duration-500 animate-scaleIn border-gradient'
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <video
                src={reel.src}
                controls
                muted
                autoPlay
                loop
                className='w-full h-full object-cover'
                // poster='/assets/gallery-images/about-catering-setup.jpg' // Optional poster image
              >
                Your browser does not support the video tag.
              </video>
              <div className='p-4 bg-gradient-to-br from-[#003515] to-[#001a08]'>
                <h4 className='text-lg font-bold gradient-text'>
                  {reel.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What types of events do you cater?",
      answer:
        "Golden Trees Caterers serves all kinds of occasions including weddings, nikkah, mehendi, birthdays, BBQs, corporate dinners, and family gatherings. No matter the size, we handle every event with care and perfection.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 10–15 days before your event. For large weddings or corporate functions, 3–4 weeks in advance helps us ensure everything runs seamlessly.",
    },
    {
      question: "Do you offer custom menu options?",
      answer:
        "Yes, Golden Trees Caterers designs personalized menus based on your taste, theme, and cultural preferences. Every dish is crafted to reflect your unique event style.",
    },
    {
      question: "Is delivery included in the service?",
      answer:
        "Yes, delivery across Karachi is part of our catering service. Our team ensures your food arrives fresh, warm, and perfectly timed.",
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer:
        "Of course, we handle vegetarian, vegan, gluten-free, and other dietary requests with great care. Golden Trees Caterers makes sure every guest enjoys a satisfying meal.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellations made at least 72 hours before the event are eligible for partial refund or future credit. Our team will guide you through the best possible option based on your situation.",
    },
    {
      question: "Do you provide decoration and event management too?",
      answer:
        "Yes, Golden Trees Caterers offers complete event setups including décor, lighting, seating, and on-site coordination. We make sure your event looks and feels exceptional.",
    },
    {
      question: "Can I plan and pay for an event from overseas?",
      answer:
        "Absolutely, our Overseas Celebration Service is made for clients living abroad. You can book, pay, and coordinate your event online while we manage everything in Karachi with live updates.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id='faqs' className='py-24 bg-[#002a08]'>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='text-3xl md:text-5xl font-bold gradient-text mb-6 animate-fadeInUp leading-[1.3] md:leading-[78px] pb-2'>
          Frequently Asked Questions
        </h2>
        <img
          src='/assets/elegant-design.svg'
          alt='elegant design'
          className='mx-auto mt-4 e-design-center'
        />
        <div className='max-w-4xl mx-auto mt-16 space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='bg-gradient-to-br from-[#003515] to-[#001a08] rounded-2xl shadow-premium border-2 border-[#f6bb1d]/30 hover:border-[#f6bb1d] transition-all duration-300 animate-fadeInUp overflow-hidden'
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className='w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-[#f6bb1d] rounded-2xl'
              >
                <div className='flex justify-between items-center'>
                  <h3
                    className='text-lg md:text-xl font-bold gradient-text leading-[1.3]'
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-[#f6bb1d] transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className='text-gray-200 leading-relaxed text-left px-8 pb-8 pt-8'>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const InputField: React.FC<{
  label: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}> = ({ label, name, type, value, onChange, placeholder }) => (
  <div>
    <label
      htmlFor={name}
      className='block text-base font-bold text-[#f6bb1d] mb-3'
    >
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className='w-full bg-[#001a08]/50 border-2 border-[#f6bb1d]/30 text-white rounded-xl p-4 focus:ring-2 focus:ring-[#f6bb1d] focus:border-[#f6bb1d] transition-all duration-300 shadow-premium placeholder-gray-500'
      placeholder={placeholder}
    />
  </div>
)

const SelectField: React.FC<{
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: string[]
}> = ({ label, name, value, onChange, options }) => (
  <div>
    <label
      htmlFor={name}
      className='block text-base font-bold text-[#f6bb1d] mb-3'
    >
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className='w-full bg-[#001a08]/50 border-2 border-[#f6bb1d]/30 text-white rounded-xl p-4 focus:ring-2 focus:ring-[#f6bb1d] focus:border-[#f6bb1d] transition-all duration-300 shadow-premium'
    >
      <option value=''>-- Select --</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
)

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cityCountry: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    venue: "",
    menuType: "",
    additionalServices: [] as string[],
    notes: "",
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData((prev) => {
      if (checked) {
        return {
          ...prev,
          additionalServices: [...prev.additionalServices, value],
        }
      } else {
        return {
          ...prev,
          additionalServices: prev.additionalServices.filter(
            (service) => service !== value,
          ),
        }
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Submitted", formData)
    alert(
      "Thank you for your booking request! Our team will contact you shortly.",
    )
  }

  return (
    <section id='booking' className='py-24 bg-[#002a08]'>
      <div className='container mx-auto px-6'>
        <div className='max-w-5xl mx-auto text-center mb-12'>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-6 gradient-text animate-fadeInUp leading-[1.3] md:leading-[78px] pb-2'>
            Book Your Event with Golden Trees Caterers
          </h2>
          <img
            src='/assets/elegant-design.svg'
            alt='elegant design'
            className='mx-auto mt-0 e-design-center'
          />
          <p className='text-gray-300 text-lg animate-fadeIn'>
            Planning your event begins with one conversation. Fill out the
            booking form below and our team will contact you to discuss your
            date, theme, and preferences.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className='max-w-5xl mx-auto bg-gradient-to-br from-[#003515] to-[#001a08] p-12 rounded-3xl shadow-2xl border-2 border-[#f6bb1d]/40 animate-scaleIn'
        >
          <div className='grid md:grid-cols-2 gap-8'>
            <InputField
              label='Full Name'
              name='fullName'
              type='text'
              value={formData.fullName}
              onChange={handleChange}
              placeholder='Your full name'
            />
            <InputField
              label='Email Address'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='you@example.com'
            />
            <InputField
              label='Phone / WhatsApp Number'
              name='phone'
              type='tel'
              value={formData.phone}
              onChange={handleChange}
              placeholder='+92 300 1234567'
            />
            <InputField
              label='City / Country'
              name='cityCountry'
              type='text'
              value={formData.cityCountry}
              onChange={handleChange}
              placeholder='e.g., Karachi or USA'
            />
            <SelectField
              label='Select Event Type'
              name='eventType'
              value={formData.eventType}
              onChange={handleChange}
              options={eventTypes}
            />
            <InputField
              label='Event Date'
              name='eventDate'
              type='date'
              value={formData.eventDate}
              onChange={handleChange}
            />
            <InputField
              label='Number of Guests'
              name='guestCount'
              type='number'
              value={formData.guestCount}
              onChange={handleChange}
              placeholder='Approx. 50'
            />
            <InputField
              label='Venue Location (if confirmed)'
              name='venue'
              type='text'
              value={formData.venue}
              onChange={handleChange}
              placeholder='Optional'
            />
            <SelectField
              label='Select Menu Type'
              name='menuType'
              value={formData.menuType}
              onChange={handleChange}
              options={menuTypes}
            />

            <div className='md:col-span-2'>
              <label className='block text-base font-bold text-[#f6bb1d] mb-4'>
                Additional Services Needed
              </label>
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
                {additionalServices.map((service) => (
                  <label
                    key={service}
                    className='flex items-center space-x-3 text-white cursor-pointer group'
                  >
                    <input
                      type='checkbox'
                      name='additionalServices'
                      value={service}
                      onChange={handleCheckboxChange}
                      className='form-checkbox h-6 w-6 text-[#10ff93] glass border-gray-500 rounded focus:ring-2 focus:ring-[#f6bb1d] transition-all duration-300'
                    />
                    <span className='group-hover:text-[#f6bb1d] transition-colors duration-300'>
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className='md:col-span-2'>
              <label
                htmlFor='notes'
                className='block text-base font-bold text-[#f6bb1d] mb-3'
              >
                Special Instructions or Notes
              </label>
              <textarea
                id='notes'
                name='notes'
                value={formData.notes}
                onChange={handleChange}
                rows={5}
                className='w-full bg-[#001a08]/50 border-2 border-[#f6bb1d]/30 text-white rounded-xl p-4 focus:ring-2 focus:ring-[#f6bb1d] focus:border-[#f6bb1d] transition-all duration-300 shadow-premium placeholder-gray-500'
                placeholder='Any special requests, themes, or details...'
              ></textarea>
            </div>
          </div>
          <div className='mt-10 text-center'>
            <button
              type='submit'
              className='bg-gradient-gold text-[#f6bb1d] font-extrabold py-4 px-16 rounded-full text-xl shadow-gold hover:shadow-premium transition-all duration-300 transform hover:scale-105 border-2 border-[#f6bb1d]'
            >
              Reserve Your Date
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

const Contact: React.FC = () => (
  <section id='contact' className='py-24 gradient-green-dark'>
    <div className='container mx-auto px-6 text-center'>
      <h2 className='text-3xl md:text-5xl font-bold gradient-text mb-6 animate-fadeInUp leading-[1.3] md:leading-[78px] pb-2'>
        Get in Touch
      </h2>
      <img
        src='/assets/elegant-design.svg'
        alt='elegant design'
        className='mx-auto mt-4 e-design-center'
      />
      <p className='max-w-3xl mx-auto text-gray-200 text-lg mb-12 animate-fadeIn'>
        We'd love to hear from you. Reach out to us for bookings, inquiries, or
        just to say hello.
      </p>
      <div className='grid md:grid-cols-3 gap-10 max-w-5xl mx-auto'>
        <div className='glass p-8 rounded-2xl shadow-premium hover-lift animate-scaleIn'>
          <svg
            className='w-16 h-16 mx-auto mb-4 text-[#f6bb1d]'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
            ></path>
          </svg>
          <h3 className='text-xl font-bold text-[#f6bb1d] mb-2'>Email</h3>
          <a
            href='mailto:goldentreescaterer@gmail.com'
            className='text-gray-300 hover:text-[#f6bb1d] transition-colors'
          >
            goldentreescaterer@gmail.com
          </a>
        </div>
        <div
          className='glass p-8 rounded-2xl shadow-premium hover-lift animate-scaleIn'
          style={{ animationDelay: "0.1s" }}
        >
          <svg
            className='w-16 h-16 mx-auto mb-4 text-[#f6bb1d]'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
            ></path>
          </svg>
          <h3 className='text-xl font-bold text-[#f6bb1d] mb-2'>Phone</h3>
          <a
            href='tel:03341107929'
            className='text-gray-300 hover:text-[#f6bb1d] transition-colors'
          >
            0334 1107929
          </a>
        </div>
        <div
          className='glass p-8 rounded-2xl shadow-premium hover-lift animate-scaleIn'
          style={{ animationDelay: "0.2s" }}
        >
          <svg
            className='w-16 h-16 mx-auto mb-4 text-[#f6bb1d]'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
            ></path>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
            ></path>
          </svg>
          <h3 className='text-xl font-bold text-[#f6bb1d] mb-2'>Address</h3>
          <p className='text-gray-300'>Abdullah Haroon Road Saddar, Karachi</p>
        </div>
      </div>
    </div>
  </section>
)

const Footer: React.FC = () => (
  <footer className='bg-[#002a08] py-12 border-t border-gray-800'>
    <div className='container mx-auto px-6'>
      <div className='grid md:grid-cols-3 gap-12 mb-8'>
        <div className='text-center md:text-left'>
          <img
            src={LOGO_SRC}
            alt='Golden Trees Caterers Logo'
            className='h-28 mx-auto md:mx-0 mb-4'
          />
          <p className='text-gray-400 text-lg'>
            Creating unforgettable moments since 1992
          </p>
        </div>
        <div className='text-center md:text-left'>
          <h3 className='text-xl font-bold text-[#f6bb1d] mb-6'>
            Contact Info
          </h3>
          <div className='space-y-3 text-gray-300'>
            <a
              href='mailto:goldentreescaterer@gmail.com'
              className='flex items-center gap-2 hover:text-[#f6bb1d] transition-colors justify-center md:justify-start'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                ></path>
              </svg>
              goldentreescaterer@gmail.com
            </a>
            <a
              href='tel:03341107929'
              className='flex items-center gap-2 hover:text-[#f6bb1d] transition-colors justify-center md:justify-start'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                ></path>
              </svg>
              0334 1107929
            </a>
            <a
              href='https://wa.me/923701032536'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 hover:text-[#f6bb1d] transition-colors justify-center md:justify-start'
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
              </svg>
              +92 370 1032536
            </a>
            <div className='flex items-center gap-2 justify-center md:justify-start'>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                ></path>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                ></path>
              </svg>
              <span>Abdullah Haroon Road Saddar, Karachi</span>
            </div>
          </div>
        </div>
        <div className='text-center md:text-left'>
          <h3 className='text-xl font-bold text-[#f6bb1d] mb-6'>Follow Us</h3>
          <div className='flex justify-center md:justify-start space-x-6 mb-6'>
            <a
              href='https://www.facebook.com/goldentreescaterers'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-[#f6bb1d] transition-colors duration-300 transform hover:scale-125'
            >
              <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
              </svg>
            </a>
            <a
              href='https://www.instagram.com/goldentreescaters1992/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-[#f6bb1d] transition-colors duration-300 transform hover:scale-125'
            >
              <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className='text-center text-gray-500 text-sm border-t border-gray-800 pt-6'>
        <p>&copy; 2025 Golden Trees Caterers. All rights reserved.</p>
        <p className='mt-2'>Serving Karachi with Excellence since 1992</p>
      </div>
    </div>
  </footer>
)

function App() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Header />
      <Hero />
      <About />
      <OverseasClients />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Faqs />
      <BookingForm />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
