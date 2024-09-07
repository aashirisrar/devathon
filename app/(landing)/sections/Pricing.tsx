import Heading from "@/components/Heading";
import PricingCard from "@/components/PricingCard";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="xl:px-96 lg:px-20 py-[96px] px-5 bg-white">
      <Heading
        heading="Pricing"
        subHeading="Choose the perfect plan for your needs and budget."
      />
      <div className="pt-10 gap-6 flex flex-col items-center justify-center lg:flex-row lg:items-end">
        <PricingCard data={pricingTiers[0]} />
        <PricingCard popular data={pricingTiers[1]} />
        <PricingCard data={pricingTiers[2]} />
      </div>
    </section>
  );
};
