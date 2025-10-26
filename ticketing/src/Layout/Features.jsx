import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Easy Ticket Creation",
      description:
        "Create and assign tickets in seconds with our intuitive interface.",
      icon: "🎫",
    },
    {
      title: "Real-time Tracking",
      description: "Monitor ticket progress and status updates in real-time.",
      icon: "📊",
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly with your team on complex issues.",
      icon: "👥",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose TicketFlow?
        </h2>

        <div className="flex flex-col gap-8 md:flex-row">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
