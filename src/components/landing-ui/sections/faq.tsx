import { CustomAccordion } from "@/components/custom-accordion";
import { DmOnXButton } from "@/components/landing-ui/dm-on-x-button";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    id: "item-1",
    question: "What export formats does Monowave support?",
    answer:
      "Monowave exports ASCII art as PNG snapshots, ZIP archives of frame text files, video where the browser supports it, and self-contained React components.",
  },
  {
    id: "item-2",
    question: "Does my media get uploaded to a server?",
    answer:
      "No. Conversion runs locally in the browser with Canvas APIs, so your source files stay on your device.",
  },
  {
    id: "item-3",
    question: "Can I customize the output style?",
    answer:
      "Yes. You can tune density, threshold, character sets, font, spacing, colors, source-color rendering, and multiple visual effects.",
  },
  {
    id: "item-4",
    question: "Is the studio free?",
    answer:
      "The core studio is designed to stay useful for free. Paid plans can add no-watermark exports, premium presets, saved workflows, and heavier rendering options.",
  },
  {
    id: "item-5",
    question: "Who is this for?",
    answer:
      "Creators, developers, and teams who want distinctive ASCII visuals for landing pages, videos, README assets, social posts, and interactive web components.",
  },
];

const Faq = () => {
  return (
    <section className="flex justify-center px-4">
      <div className="landing-content-width grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">
            Questions
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            Clear answers before you render.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            The product keeps the local creative workflow simple while leaving
            room for higher-end export and team features.
          </p>
          <DmOnXButton className="mt-6" />
        </div>

        <CustomAccordion
          items={faqItems.map((item) => ({
            title: item.question,
            content: item.answer,
          }))}
        />
      </div>
    </section>
  );
};

export default Faq;
