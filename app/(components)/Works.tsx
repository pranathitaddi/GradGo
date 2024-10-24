export default function Works() {
  return (
    <div className="w-[100%] min-h-[100vh] flex flex-col p-8">
      <h1 className="bighdn text-center">Works</h1>
      <div className="flex flex-wrap w-[98%] justify-around">
        <div className="bg-seccol-30 max-w-[600px] min-h-[450px] m-2 rounded-lg box-border flex flex-col justify-start transition-all duration-300 hover:from-seccol-70 hover:to-bggcol-70 hover:translate-x-[+8px] ">
          <div className="bg-bgcol w-[100%] rounded-t-md h-[280px] opacity-50"></div>
          <h2 className="subhdn uppercase font-[500] tracking-[0.05px] ml-5 mt-5 mb-3">
            Quality Service
          </h2>
          <div className="bg-accol w-[200px] h-[2px] rounded-lg opacity-50 ml-4 m-1" />
          <p className="textt ml-5 mt-3 mb-5">
            We bring innovation to life through immersive AR/VR experiences that
            engage users and offer cutting-edge solutions for training,
            marketing, and entertainment. We focus on developing 3D environments
            and interactive simulations tailored to diverse industries.
          </p>
        </div>
      </div>
    </div>
  );
}
