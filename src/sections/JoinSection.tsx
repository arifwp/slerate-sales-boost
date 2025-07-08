import Link from "next/link";

export const JoinSection = () => {
  return (
    <section id="join" className="">
      <div className="bg-white">
        <div className="sm:px-6 sm:pt-4 pb-12">
          <div className="relative isolate overflow-hidden bg-black px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <div className="p-44 aspect-square rounded-full bg-(--color-primary) absolute -top-38 -left-22 blur-3xl z-0" />

            <div className="w-full flex flex-col z-10 relative">
              <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                Ready to Supercharge Your Sales?
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300">
                Join the next generation of teams growing faster with Slerate
                Sales Boost.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {" "}
                  Get started{" "}
                </Link>
                <Link href="#" className="text-sm/6 font-semibold text-white">
                  Learn more
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
