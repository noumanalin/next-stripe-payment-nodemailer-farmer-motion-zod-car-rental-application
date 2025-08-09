import Title from "./Title";
import { objectives } from "@/utils/appData";

const OurObjective = () => {
  return (
    <section className="bg-teal-50">
      <section className="container mx-auto px-2 md:px-5 py-10">
        {/* Title */}
        <Title
          text={
            <span className="text-zinc-900 font-bold mb-5 capitalize">
              our objective
            </span>
          }
        />

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((item, index) => (
            <article
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-[var(--tertiary-color)] font-bold text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default OurObjective;
