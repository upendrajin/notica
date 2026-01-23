import React, { useEffect, useRef, useState } from "react";

const banks = [
  { name: "Axis Bank", logo: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/Bank-Logos/Axis.webp" },
  { name: "ICICI Bank", logo: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/Bank-Logos/ICICI_Bank_Logo.webp" },
  { name: "Kotak Bank", logo: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/Bank-Logos/Kotak.webp" },
  { name: "HDFC Bank", logo: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/Bank-Logos/HDFC_Bank_Logo.webp" },
  { name: "Bank of Baroda", logo: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/Bank-Logos/BOB.webp" },
  { name: "SBI", logo: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/Bank-Logos/SBI.webp" },
  { name: "IDBI Bank", logo: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/Bank-Logos/IDBI-Bank-logo.webp" },
  { name: "Yes Bank", logo: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/Bank-Logos/Yes_Bank_logo.webp" },
];

const upiApps = [
  { name: "BHIM", logo: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/Bank-Logos/BHIM.webp" },
  { name: "GPay", logo: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/Bank-Logos/Google_Pay_Logo.webp" },
  { name: "PhonePe", logo: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/Bank-Logos/phonepe.webp" },
  { name: "Paytm", logo: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/Bank-Logos/Paytm_Logo_.webp" },
];

function PaymentAndBooking() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-24 transition-all duration-700 ${visible ? "pay-visible" : "opacity-0 translate-y-16"
        }`}
    >
      <div className="max-w-7xl mx-auto px-2 md:px-6 space-y-24">

        <div>
          <div className="text-center section-header mb-8">
            <h2 className="text-4xl font-bold mb-2">Booking Details</h2>
            <p>We offer a wide range of services to meet the needs of our customers.</p>
          </div>

          <div className="border rounded-xl p-8 max-w-4xl mx-auto" >
            <ul className="space-y-4 text-gray-700">
              <li><strong>Account Details :</strong> For NEFT / RTGS / IMPS</li>
              <li><strong>Bank Name :</strong> HDFC Bank – Utran, Surat</li>
              <li><strong>Account Name :</strong> Surat Food and Beverage Pvt Ltd</li>
              <li><strong>Account Number :</strong> 50200101730832</li>
              <li><strong>IFSC Code :</strong> HDFC0005699</li>
              <li><strong>GST Number :</strong> 24ABOCS0295D1ZB</li>
              <li><strong>FSSAI Licence :</strong> 10240815106346760</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="section-title">
            Supported Banks for Credit Card EMI
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
            {banks.map((item, index) => (
              <HoverCard key={index} visible={visible}>
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-10 object-contain"
                />
              </HoverCard>
            ))}
          </div>
        </div>

        <div>
          <h3 className="section-title">
            We Also Accept
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
            {upiApps.map((item, index) => (
              <HoverCard key={index} visible={visible}>
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-10 object-contain"
                />
              </HoverCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function HoverCard({ children, visible }) {
  return (
    <div
      className={`payment-card ${visible ? "payment-card-visible" : "opacity-0 translate-y-6"
        }`}
    >
      {children}
    </div>
  );
}

export default PaymentAndBooking;
