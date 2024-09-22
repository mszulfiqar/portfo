import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-28 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400  text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 -z-10 opacity-5" style={{
            backgroundImage: `url(${grainImage.src})`
          }}></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Let's create something amazing togther</h2>
              <p className="text-sm md:text-base mt-2">Ready to bring your next project to life? Let's connect and discuss how can I help you achieve your goals.</p>
            </div>
            <div>
            <button className="text-white rounded-xl bg-gray-900 h-12 px-6 font-semibold inline-flex items-center justify-center gap-2 w-max
            border border-gray-900">
              <a href="mailto:your-email@example.com">
              <span className="font-semibold">Connect Me</span>
              </a>
              <ArrowUp className="size-4 " />
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
