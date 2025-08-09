import FooterBanner from '@/components/FooterBanner';
import PageBanner from '@/components/PageBanner';

const Local = () => {
  return (
    <>
      <PageBanner
        image="/local-banner.jpg"
        title="Local Transfers"
        text="Add to the memories on your big day with us."
      />

      {/* Main Content Section */}
      <section className="wrapper">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Left - Text Content */}
          <section>
            <header className="text-[var(--tertiary-color)] text-4xl font-bold mb-10 capitalize">
              <h1>Local Car Services</h1>
            </header>
            <p className="leading-6 text-lg text-slate-500">
              At Limolux, we understand the significance of a vehicle service for your big day.
              <br /><br />
              Our wedding vehicles are meticulously prepared for a flawless appearance, and we plan
              your route to ensure complete reliability. We value the finer details, so please let us
              know if you’d like any special additions — such as decorations — to make your journey
              even more memorable.
              <br /><br />
              Customize your experience with us and make every ride truly exceptional.
            </p>
          </section>

          {/* Right - Image */}
          <figure>
            <img
              src="/local.jpeg"
              className="w-full h-full object-cover rounded-lg"
              alt="Local transfer service car"
            />
          </figure>
        </article>

        {/* Bottom Tagline */}
        <h2 className="text-center text-md md:text-4xl text-slate-500 my-16">
          Whether you seek lavish indulgence or spacious versatility, our versatile fleet ensures
          the ideal ride for every event.
        </h2>
      </section>

      <FooterBanner />
    </>
  );
};

export default Local;
