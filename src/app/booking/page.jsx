"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { steps } from "@/utils/appData";
import { useForm } from "react-hook-form";
import StepOne from "@/components/StepOne";
import Insights from "@/components/insights/Insights";
import Contact from "@/components/Contact";
import StepFour from "@/components/StepFour";

const Booking = () => {
  const searchParams = useSearchParams();
  const current = parseInt(searchParams.index) || 1;
  const form = useForm();

  return (
    <main className="pt-20" aria-labelledby="booking-title">
      <h1 id="booking-title" className="sr-only">
        Booking Process
      </h1>

      {/* Stepper */}
      <nav
        className="hidden lg:flex justify-center items-center mt-10 ml-24"
        aria-label="Booking Steps"
      >
        <ol
          className="grid grid-cols-4 gap-5 mt-5 items-center w-[75%]"
          role="list"
        >
          {steps?.map((item, index) => {
            const stepNumber = index + 1;
            const isCompleted = current >= stepNumber;
            return (
              <li key={index} aria-current={current === stepNumber ? "step" : undefined} className="">
                <p className="font-roboto font-semibold text-sm uppercase my-2 text-slate-400">
                  Step {stepNumber}
                </p>
                <div className="flex items-center gap-5">
                  <svg
                    className="w-10 h-10 cursor-pointer"
                    viewBox="0 0 38 38"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label={`Step ${stepNumber}: ${item.name} ${
                      isCompleted ? "(Completed)" : ""
                    }`}
                  >
                    <path
                      d="M0 19C0 8.50547 8.50547 0 19 0C29.4945 0 38 8.50547 38 19C38 29.4945 29.4945 38 19 38C8.50547 38 0 29.4945 0 19ZM27.5945 15.7195C28.4035 14.9105 28.4035 13.5895 27.5945 12.7805C26.7855 11.9715 25.4645 11.9715 24.6555 12.7805L16.625 20.8109L13.3445 17.5305C12.5355 16.7215 11.2145 16.7215 10.4055 17.5305C9.59648 18.3395 9.59648 19.6605 10.4055 20.4695L15.1555 25.2195C15.9645 26.0285 17.2855 26.0285 18.0945 25.2195L27.5945 15.7195Z"
                      fill={isCompleted ? "#26d4e0" : "black"}
                    />
                  </svg>
                  {index !== steps.length - 1 && (
                    <span
                      className={`w-full h-0.5 ${
                        current > stepNumber ? "bg-[var(--tertiary-color)]" : "bg-black"
                      } rounded`}
                      aria-hidden="true"
                    ></span>
                  )}
                </div>
                
                <p className="font-roboto font-semibold text-sm uppercase text-slate-400">
                  {item.name}
                </p>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Step Content */}
      <section aria-label={`Step ${current} Content`} className="mt-6">
        {current === 1 && <StepOne form={form} />}
        {current === 2 && <Insights isForm={true} form={form} />}
        {current === 3 && <Contact form={form} />}
        {current === 4 && <StepFour form={form} />}
      </section>

      {/* Navigation */}
      {current < steps.length && (
        <footer
          className="flex justify-between items-center px-[10%] py-3 mt-6"
          aria-label="Step Navigation"
        >
          <Link
            href={`/booking?index=${Math.max(1, current - 1)}`}
            className={`bg-slate-100 px-10 py-3 rounded-full ${
              current === 1 ? "pointer-events-none opacity-50" : ""
            }`}
            aria-disabled={current === 1}
          >
            Back
          </Link>
          <Link
            href={`/booking?index=${current + 1}`}
            className="bg-third-color text-white px-10 py-3 rounded-full"
          >
            Next
          </Link>
        </footer>
      )}
    </main>
  );
};

export default Booking;
