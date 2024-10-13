import React, { useEffect } from 'react';
import Img1 from '../public/assets/aboutUs.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <>
      <div className="flex flex-col w-full h-full bg-custom_bg">
        {/* Section 1 */}
        <div className="flex items-center gap-10 justify-center p-5">
          <div
            className="w-[600px]"
            data-aos="fade-right" // Animation from the right
          >
            <h1 className="text-2xl font-bold">About Us</h1>
            <p>
              We are dedicated to transforming healthcare management by offering
              a platform that bridges the gap between hospitals and patients. Our
              services enable hospitals to streamline their operations while
              empowering patients with easy access to health records, lab reports,
              and appointments. At the core of our mission is improving the patient
              experience with innovative, user-friendly solutions.
            </p>
          </div>
          <div
            className="w-[400px] rounded-lg overflow-hidden"
            data-aos="fade-left" // Animation from the left
          >
            <img src={Img1} alt="" className="contain" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex items-center gap-10 justify-center p-5">
          <div
            className="w-[400px] rounded-lg overflow-hidden"
            data-aos="fade-right" // Animation from the right
          >
            <img src={Img1} alt="" className="contain" />
          </div>
          <div
            className="w-[600px]"
            data-aos="fade-left" // Animation from the left
          >
            <h1 className="text-2xl font-bold">Our Mission: Helping Millions Grow Better</h1>
            <p>
              We aim to revolutionize the healthcare experience by simplifying access
              to essential services for both hospitals and patients. Our mission is to
              ensure healthcare is efficient, transparent, and accessible, helping
              healthcare providers focus on care while patients manage their health
              effortlessly. Together, we strive for better outcomes and healthier
              communities through smart digital solutions.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex items-center gap-10 justify-center p-5">
          <div
            className="w-[600px]"
            data-aos="fade-right" // Animation from the right
          >
            <h1 className="text-2xl font-bold">Our Story</h1>
            <p>
              Founded with the vision to make healthcare simpler and more accessible,
              we recognized the need for a unified platform that caters to both
              hospitals and patients. What began as a small initiative has grown into
              a comprehensive solution, offering tools for managing health records,
              lab reports, and appointments seamlessly. Our journey is driven by a
              passion for innovation and a commitment to enhancing healthcare
              experiences for everyone.
            </p>
          </div>
          <div
            className="w-[400px] rounded-lg overflow-hidden"
            data-aos="fade-left" // Animation from the left
          >
            <img src={Img1} alt="" className="contain" />
          </div>
        </div>
      </div>
    </>
  );
}