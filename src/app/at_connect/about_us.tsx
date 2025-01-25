import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="relative py-5">
      {/* Background image that adjusts height dynamically */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/logo2.png"
          alt="ATConnect Banner"
          fill // Makes the image fill its container dynamically
          className="object-cover"
          priority
        />
      </div>

      {/* Scrollable content */}
      <div className="relative flex  p-4 items-start justify-start" >
        <div className="bg-white/90 p-6 rounded-lg shadow-lg lg:w-[48vw] max-w-4xl px-5">
          <section>
            <h3 className="text-xl font-bold mb-2 text-black">WHAT IS ATCONNECT?</h3>
            <p className="text-sm md:text-base">
              ATConnect is Thomas Jefferson High School for Science and Technology's first-ever fair connecting
              students and companies across the county to create and share their assistive technology with students
              with disabilities. The event is organized by TJ's Assistive Technology Club, which emphasizes working
              with and creating technology for students with disabilities. At the event, students and companies will
              present their products in separate booths for anyone to join.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-2 text-black">WHY ATCONNECT?</h3>
            <p className="text-sm md:text-base">
              We believe Assistive Technology will help bring full unity to the world. This event will showcase
              the power of Assistive Technology from schools around the district and beyond. We are just as excited
              to host this event as we are to see what incredible technology you can come up with!
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-2 text-black">BE A PART OF THE MAGIC</h3>
            <p className="text-sm md:text-base">
              We're here to deliver the dream and spread awareness to those in need. Whether you're a high school
              team or a sponsor, come join us for the first-ever TJ Assistive Technology fair, coming April 6th, 2025!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
