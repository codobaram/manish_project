const SuccessStories = () => {
  const stories = [
    {
      country: "India",
      title: "Digital Transformation of Tata Sky",
      description: "India's leading Pay TV & OTT services company",
      tags: ["#DigitalEngineering", "#OTT", "#UX", "#AWS", "#Cloud", "#DevOps"],
      logo: "TATA PLAY", // Replace with the actual logo/image if available,
      img : "https://www.tothenew.com/cms-assets/s3fs-public/2017-12/Banner%20image%20%281%29.jpg"
    },
    {
      country: "USA",
      title: "Successfully migrated Siprocals architecture",
      description: "From On-Premise to AWS",
      tags: ["#Cloud", "#DevOps", "#AWS", "#DigitalEngineering"],
      logo: "Sipocal", // Replace with the actual logo/image if available
       img : "https://www.tothenew.com/cms-assets/s3fs-public/2023-09/Tile%402x.png"
    },
    {
      country: "Australia",
      title: "Revolutionizing wagering experiences for Tabcorp",
      description: "Developing interactive cross-platform applications",
      tags: ["#DigitalEngineering", "#Cloud", "#CustomerExperience", "#Automation"],
      logo: "Tabcorp", // Replace with the actual logo/image if available
       img : "https://www.tothenew.com/cms-assets/s3fs-public/2023-09/Tile%20banner.png"
    },
    {
      country: "UAE",
      title: "Building a Data Lake",
      description: "For one of the largest Travel & Tourism companies in Middle East",
      tags: ["#DataEngineering", "#Analytics", "#Cloud"],
      logo: "Seera", // Replace with the actual logo/image if available
       img : "https://www.tothenew.com/cms-assets/s3fs-public/2017-12/Banner%20image%20%281%29.jpg"
    },
    {
      country: "India",
      title: "Built & managed microservices-based AWS setup for IndiGo",
      description: "Scalability & cost optimization",
      tags: ["#DataEngineering", "#Cloud", "#AWS"],
      logo: "IndiGo", // Replace with the actual logo/image if available
       img : "https://www.tothenew.com/cms-assets/s3fs-public/2017-12/Banner%20image%20%281%29.jpg"
    },
    {
      country: "USA",
      title: "Integrated marketing systems for Cloudwords",
      description: "Automated project workflows to speed up time to market",
      tags: ["#AWS", "#DevOps"],
      logo: "Cloudwords", // Replace with the actual logo/image if available
       img : "https://www.tothenew.com/cms-assets/s3fs-public/2017-12/Banner%20image%20%281%29.jpg"
    },
  ];

  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
      <p className="text-center text-gray-600 mb-12">
        Our work speaks for itself and we are proud of it
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md overflow-hidden border border-gray-200"
          >
            <div className="p-4">
                <img src={story.img} alt="" className=" w-full mb-2 rounded-md"/>
              <h3 className="text-sm font-semibold text-gray-500">{story.country}</h3>
              <h4 className="text-lg font-bold text-gray-800 mt-2">{story.title}</h4>
              <p className="text-gray-600 mt-2">{story.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {story.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="text-pink-600 border border-pink-600 px-4 py-2 rounded-md hover:bg-pink-50">
          Read All Success Stories
        </button>
      </div>
    </div>
  );
};

export default SuccessStories;
