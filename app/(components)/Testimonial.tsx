export default function Testimonial() {
  return (
    <div className="w-[100%] min-h-[50vh] flex flex-col p-8">
      <h1 className="bighdn">Testimonial</h1>
      {/* Carousel */}
      <div className="w-[100%] flex flex-row items-center justify-around">
        <div>left</div>
        <div className="border-accol-50 bg-seccol-30 border-x-2 hover:border-2 max-w-[600px] min-h-[300px] m-2 rounded-sm p-5 box-border flex flex-col justify-start transition-all duration-3000 ">
          <div className="w-[80px] h-[80px] rounded-[50%] bg-black flex justify-center items-center m-5 mb-0 ml-1">
            🍄‍🟫
          </div>
          <h2 className="subhdn uppercase font-[500] tracking-[0.05px] ml-2 mt-3 mb-5">
            Quality Service
          </h2>
          <div className="bg-accol w-[200px] h-[2px] rounded-lg opacity-50 ml-3" />
          <p className="textt ml-[0.55rem] mt-5">
            We bring innovation to life through immersive AR/VR experiences that
            engage users and offer cutting-edge solutions for training,
            marketing, and entertainment. We focus on developing 3D environments
            and interactive simulations tailored to diverse industries.
          </p>
        </div>
        <div>right</div>
      </div>
    </div>
  );
}
