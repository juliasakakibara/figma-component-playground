import svgPaths from "./svg-9hytu629lt";
import imgImageContainer from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";

function Logo() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center p-[8px] relative rounded-[16px] shrink-0" data-name="Logo">
      <p className="font-['Orbitron:SemiBold',_sans-serif] font-semibold leading-none lowercase relative shrink-0 text-[#001aff] text-[48px] text-nowrap whitespace-pre">;)</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <div className="absolute bg-[#001aff] h-[2px] left-0 right-0 top-[5px]" data-name="Horizontal Divider" />
      <div className="absolute bg-[#001aff] h-[2px] left-0 right-0 top-[17px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-end justify-center min-h-px min-w-px relative shrink-0" data-name="Icon">
      <Icon1 />
    </div>
  );
}

function Menu() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-end overflow-clip p-[12px] relative shrink-0 size-[64px]" data-name="Menu">
      <Icon2 />
    </div>
  );
}

function NavBar() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav-bar">
      <div aria-hidden="true" className="absolute border-[#001aff] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pb-[24px] pt-[64px] px-[40px] relative w-full">
          <Logo />
          <Menu />
        </div>
      </div>
    </div>
  );
}

function TextBox() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[800px] items-start justify-center not-italic relative shrink-0 text-[#001aff] w-full" data-name="text-box">
      <p className="font-['Inter:SemiBold',_sans-serif] leading-[0.95] min-w-full relative shrink-0 text-[180px] tracking-[-4.32px] w-[min-content]">Component Playground</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[24px] tracking-[-0.12px] w-[908px]">{`Building lasting connections with your audience is our mission. We infuse creativity into every touchpoint, whether it's customer experience, relationship management, or commerce. `}</p>
    </div>
  );
}

function Frame1000004050() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start leading-[1.2] not-italic pb-[40px] pt-0 px-0 relative shrink-0 text-[#001aff] w-full">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[36px] tracking-[-0.072px] w-full">Component</p>
      <p className="font-['MW_Sans:SemiBold',_sans-serif] relative shrink-0 text-[20px] tracking-[-0.04px] w-full">A more detailed subtitle that captures the essence.</p>
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="card">
      <Frame1000004050 />
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="image-container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageContainer} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f6f6f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="card">
      <ImageContainer1 />
    </div>
  );
}

function Grid() {
  return (
    <div className="content-stretch flex gap-[16px] h-[416px] items-center relative shrink-0 w-full" data-name="grid">
      <Card />
      {[...Array(3).keys()].map((_, i) => (
        <Card1 key={i} />
      ))}
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-start pb-[80px] pt-0 px-[40px] relative w-full">
          <TextBox />
          {[...Array(2).keys()].map((_, i) => (
            <Grid key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center p-[8px] relative rounded-[16px] shrink-0" data-name="Logo">
      <p className="font-['Orbitron:SemiBold',_sans-serif] font-semibold leading-none lowercase relative shrink-0 text-[#001aff] text-[48px] text-nowrap whitespace-pre">;)</p>
    </div>
  );
}

function Nav() {
  return (
    <nav className="box-border content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-[32px] items-start leading-[0] not-italic overflow-visible p-0 relative shrink-0 text-[#001aff] text-[16px] text-nowrap tracking-[0.08px]" data-name="Nav">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.4] text-nowrap whitespace-pre">Brand Guidelines</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.4] text-nowrap whitespace-pre">Brand Strategy</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.4] text-nowrap whitespace-pre">Resources</p>
      </div>
    </nav>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0" data-name="Text">
      <Logo1 />
      <Nav />
    </div>
  );
}

function SocialLink1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social link 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4_993)" id="Social link 1">
          <path d={svgPaths.p3c382d72} fill="var(--fill-0, #001AFF)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4_993">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialLink2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social link 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4_990)" id="Social link 2">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p1fcf5070} fill="#001AFF" fillRule="evenodd" />
            <path d={svgPaths.pe7ea00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1ab31680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p28c6df0} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4_990">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialLink3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social link 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Social link 3">
          <path d={svgPaths.pdaf0200} fill="var(--fill-0, #001AFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialLinks() {
  return (
    <nav className="box-border content-stretch flex gap-[24px] items-center overflow-visible p-0 relative shrink-0" data-name="Social links">
      <SocialLink1 />
      <SocialLink2 />
      <SocialLink3 />
    </nav>
  );
}

function Footer() {
  return (
    <footer className="relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#f6f6f6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[40px] py-[64px] relative w-full">
          <Text />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="Desktop">
      <NavBar />
      <Section />
      <Footer />
    </div>
  );
}