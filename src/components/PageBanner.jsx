const PageBanner = ({ image, title, text, bg = "#fff" }) => {
  return (
    <section
      className="relative h-[30vh] lg:h-[70vh] flex items-center justify-center bg-no-repeat bg-center bg-cover mb-5"
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: bg,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center w-full lg:w-3/4 px-4">
        <header>
          <h1 className="text-2xl lg:text-7xl font-bold text-[var(--tertiary-color)] mb-4 capitalize">{title}</h1>
        </header>
        <p className="text-lg md:text-2xl leading-6 text-gray-300 md:leading-[40px]">
          {text}
        </p>
      </div>
    </section>
  );
};

export default PageBanner;
