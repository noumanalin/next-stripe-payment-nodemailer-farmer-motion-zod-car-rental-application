import React from "react";

const ExploreCard = ({ world }) => {
  return (
    <article
className="text-center w-full sm:mx-auto mt-16 text-[var(--primary-color)] px-10 py-6 sm:p-8 rounded-lg border-2 border-[var(--tertiary-color)] relative cursor-pointer shadow-xl hover:shadow-[0_8px_30px_var(--tertiary-color)] transition-shadow duration-300"
      role="group"
      aria-label={world.title}
    >
      <figure className="mx-auto w-32 h-32 relative -mt-[85px] border-8 border-white rounded-full overflow-hidden">
        <img
          src={world.imgUrl}
          alt={world.title}
          className="object-cover object-center h-32 w-full"
        />
      </figure>
      <div className="mt-6">
        <h3 className="text-xl font-bold text-[var(--tertiary-color)]">
          {world.title}
        </h3>
        <p className="text-gray-500 mt-6 leading-relaxed">
          {world.description}
        </p>
      </div>
    </article>
  );
};

export default ExploreCard;
