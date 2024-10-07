export default function Footer() {
  return (
    <div className="w-[100%] min-h-[60px] flex flex-row items-center justify-around bg-bggcol box-border bottom-0 left-0 rounded-lg p-8">
      <div>
        <h1 className="hdn">Services</h1>
        <h3>AI/ML</h3>
        <h3>Design</h3>
        <h3>Marketing</h3>
      </div>
      <div className="h-[90%] min-h-[50px] w-[2px] bg-seccol-70 rounded-lg"></div>
      <div>
        <h1 className="hdn">Contacts</h1>
        <h3>Email</h3>
        <h3>Phone Number</h3>
        <h3>&nbsp;</h3>
      </div>
      <div className="h-[90%] min-h-[50px] w-[2px] bg-seccol-70 rounded-lg"></div>
      <div>
        <h1 className="hdn">Socials</h1>
        <h3>Instagram</h3>
        <h3>LinkedIn</h3>
        <h3>Facebook</h3>
      </div>
    </div>
  );
}
