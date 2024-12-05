import React from "react";

const services = [
  {
    title: "Digital Engineering",
    description: "UX/UI | Frontend | API | Web | Mobile | Dev | QE | SRE",
    icon: "📘", // Replace with an appropriate icon or image
  },
  {
    title: "Cloud & DevOps",
    description: "DevOps Automation | SRE | Cloud Migration | Cloud consulting | 24x7 Managed Services",
    icon: "☁️",
  },
  {
    title: "Media & Entertainment Solutions",
    description: "OTT Platform Development | System Integration | Quality Assurance | Managed Services | OTT Content Services",
    icon: "📡",
  },
  {
    title: "Data & Analytics",
    description: "Data Engineering | BI & Data Analysis | Data Science & ML",
    icon: "📊",
  },
  {
    title: "CX & Content",
    description: "CX | WCM | Drupal | AEM",
    icon: "📋",
  },
  {
    title: "Digital Marketing",
    description: "SEO | SEM | Creative & Design | Media | Email & Marketing Automation | Digital Analytics",
    icon: "📈",
  },
];

const DigitalTransformationServices = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Our Digital Transformation Services</h1>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          TO THE NEW is a digital technology firm providing digital transformation and product engineering services to ISVs, Consumer Internet, and large enterprises across the globe. We design & build digital platforms and products with Cloud and Data at the focal point.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationServices;
