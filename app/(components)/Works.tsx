export default function Works() {
  return (
    <div className="w-[100%] min-h-[100vh] flex flex-col p-8">
      <h1 className="bighdn">Works</h1>
      <div className="flex flex-row justify-around items-center m-2 h-[90vh]">
        <div>&lt;</div>
        <div className="h-[95%] w-[90%] bg-pricol-30 rounded-lg flex flex-row items-center">
          <p className="m-2 flex-grow">Image</p>
          <div className="h-[90%] w-[2px] rounded-lg bg-bggcol m-2"></div>
          <div className="flex-grow flex flex-col justify-start h-[90%] box-border m-2 p-2">
            <h1 className="hdn">Some heading of Work</h1>
            <div className="h-[2px] w-[80%] bg-seccol-70 rounded-lg"></div>
            <p>More text about work</p>
          </div>
        </div>
        <div>&gt;</div>
      </div>
    </div>
  );
}
