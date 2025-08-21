import { cn } from "@/lib/utils";
import {
  IconTerminal2,
  IconRobot,
  IconCode,
  IconWorldWww,
  IconApi,
  IconDatabase,
  IconBrain,
  IconCloud,
} from "@tabler/icons-react";

export function ServicesSection() {
  const services = [
    {
      title: "SaaS Development",
      description:
        "Building scalable, multi-tenant software-as-a-service platforms.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Custom Automation",
      description:
        "Streamlining business processes with bespoke automation solutions.",
      icon: <IconRobot />,
    },
    {
      title: "Software Development",
      description:
        "Crafting robust custom software tailored to your unique needs.",
      icon: <IconCode />,
    },
    {
      title: "Web App Development",
      description:
        "Creating powerful and responsive web applications for any device.",
      icon: <IconWorldWww />,
    },
    {
      title: "API Integration & Creation",
      description:
        "Seamlessly connecting your systems or building new APIs from scratch.",
      icon: <IconApi />,
    },
    {
      title: "Complex Data Scraping",
      description:
        "Extracting valuable data from the web with precision and scale.",
      icon: <IconDatabase />,
    },
    {
      title: "AI & LLM Solutions",
      description:
        "Integrating cutting-edge AI and Large Language Models to build intelligent applications.",
      icon: <IconBrain />,
    },
    {
      title: "Cloud & DevOps",
      description:
        "Architecting and managing scalable cloud infrastructure for optimal performance.",
      icon: <IconCloud />,
    },
  ];
  
  return (
    <section 
      id="services" 
      className="py-24 snap-start"
      style={{ background: `linear-gradient(135deg, #16325B 0%, #0F1419 50%, #1A2947 100%)` }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, we deliver comprehensive software solutions that drive your business forward.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Feature key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
