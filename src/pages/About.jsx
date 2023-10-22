const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1> 
        <div className="stats bg-primary shadow ">
          <div className="stat">
            <div className="stat-title text-primary-content text-3xl font-bold tracking-wide">
              Comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        We offer complete furniture solutions for Living, Dining, Kitchens,
        Bedroom, Study, Home Theatre and Outdoor. Crafted in Italy, Germany,
        Spain and Norway, the collection features over 350 sofas, 120 dining
        tables, 200 chairs, 70 recliners, 3 exclusive designer kitchen brands,
        and much more - all of which are available through 5 stores in 4 cities.
      </p>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto font-semibold">
        BANGALORE . CHENNAI . COIMBATORE . KOCHI
      </p>
    </>
  );
};
export default About;
