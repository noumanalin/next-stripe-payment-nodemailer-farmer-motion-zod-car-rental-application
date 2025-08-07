

import { Car, Contact2, Briefcase } from "lucide-react";
import Image from "next/image";

const FooterBanner = () => {
  return (
    <section
      aria-label="Footer Information Banner"
      className="w-full grid grid-cols-1 md:grid-cols-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden"
    >
      {/* Banner Image */}
      <Image
        src="/lower-banner.jpg"
        alt="Promotional Banner"
        width={1920}
        height={800}
        className="h-96 w-full object-cover md:h-[60vh] lg:h-[80vh]"
        priority
      />

      {/* Textual Content */}
      <div className="flex flex-col justify-center gap-8 md:px-16 px-8 md:my-0 my-8">
        {/* Card 1 */}
        <article className="flex items-start gap-5">
          <span className="shadow-xl text-2xl p-4 rounded-full bg-white hover:shadow-[0_8px_30px_var(--tertiary-color)] transition-shadow duration-600">
            <Briefcase className="text-[var(--tertiary-color)] w-6 h-6" />
          </span>
          <div>
            <h2 className="text-2xl text-gray-900 font-bold">Wedding</h2>
            <p className="mt-2 text-base text-gray-600 border-l-4 border-[var(--tertiary-color)] pl-4">
              Seeking Wedding Transportation Services? Contact Us to Customize
              Your Special Day!
            </p>
          </div>
        </article>

        {/* Card 2 */}
        <article className="flex items-start gap-5">
          <span className="shadow-xl text-2xl p-4 rounded-full bg-white hover:shadow-[0_8px_30px_var(--tertiary-color)] transition-shadow duration-600">
            <Car className="text-[var(--tertiary-color)] w-6 h-6" />
          </span>
          <div>
            <h2 className="text-2xl text-gray-900 font-bold">Our Fleet</h2>
            <p className="mt-2 text-base text-gray-600 border-l-4 border-[var(--tertiary-color)] pl-4">
              Discover the Perfect Ride for Any Event – What’s Your Selection?
            </p>
          </div>
        </article>

        {/* Card 3 */}
        <article className="flex items-start gap-5">
          <span className="shadow-xl text-2xl p-4 rounded-full bg-white hover:shadow-[0_8px_30px_var(--tertiary-color)] transition-shadow duration-600">
            <Contact2 className="text-[var(--tertiary-color)] w-6 h-6" />
          </span>
          <div>
            <h2 className="text-2xl text-gray-900 font-bold">About Us</h2>
            <p className="mt-2 text-base text-gray-600 border-l-4 border-[var(--tertiary-color)] pl-4">
              Discover Unmatched Luxury Travel with Limolux in Melbourne’s
              Finest Experience.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FooterBanner;
