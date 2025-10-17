import svgPaths from "./svg-sl48mho0p6";

function Logo() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center p-[8px] relative rounded-[16px] shrink-0" data-name="Logo">
      <p className="font-['Orbitron:SemiBold',_sans-serif] font-semibold leading-none lowercase relative shrink-0 text-[#f6f6f6] text-[48px] text-nowrap whitespace-pre">;)</p>
    </div>
  );
}

function Sun() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
      <g clipPath="url(#clip0_7_3671)" id="Sun">
        <path d={svgPaths.p163ad680} id="Icon" stroke="var(--stroke-0, #F6F6F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
      </g>
      <defs>
        <clipPath id="clip0_7_3671">
          <rect fill="white" height="48" width="48" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Switch() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="switch">
      <Sun />
    </div>
  );
}

function NavBar() {
  return (
    <div className="bg-[#001aff] box-border content-stretch flex items-center justify-between pb-[24px] pt-[40px] px-[80px] relative shrink-0 w-[1440px]" data-name="Nav-bar">
      <Logo />
      <Switch />
    </div>
  );
}

function TextBox() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[80px] items-start not-italic px-0 py-[40px] relative shrink-0 text-[#f6f6f6] w-full" data-name="text-box">
      <p className="font-['Inter:SemiBold',_sans-serif] leading-[0.95] min-w-full relative shrink-0 text-[180px] tracking-[-4.32px] w-[min-content]">Component Playground</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[24px] tracking-[-0.12px] w-[908px]">{`Building lasting connections with your audience is our mission. We infuse creativity into every touchpoint, whether it's customer experience, relationship management, or commerce. `}</p>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#001aff] h-[781px] relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#b3b3b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[781px] items-start justify-center px-[80px] py-0 relative w-full">
          <TextBox />
        </div>
      </div>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="card">
      <Frame1000004050 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Icon_2" stroke="var(--stroke-0, #001AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function InputField() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="input-field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[40px] h-[40px] items-center p-[12px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#001aff] text-[16px] tracking-[0.08px]">Select</p>
          <Icon1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#001aff] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Select() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-full" data-name="select">
      <InputField />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <g id="Icon_2"></g>
        </g>
      </svg>
    </div>
  );
}

function InputField3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="input-field">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[40px] items-center justify-center p-[12px] relative size-[18px]">
          <Icon7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#001aff] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="checkbox">
      <InputField3 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#001aff] text-[16px] text-nowrap tracking-[0.08px] whitespace-pre">Unchecked</p>
    </div>
  );
}

function Controlers() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Controlers">
      {[...Array(3).keys()].map((_, i) => (
        <Select key={i} />
      ))}
      {[...Array(3).keys()].map((_, i) => (
        <Checkbox key={i} />
      ))}
    </div>
  );
}

function Controlers1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-0 py-[40px] relative self-stretch shrink-0 w-[328px]" data-name="Controlers">
      <Card />
      <Controlers />
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="image-container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-0" data-name="img" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f6f6f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="card">
      <ImageContainer1 />
    </div>
  );
}

function ColorPicker() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="color-picker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="color-picker">
          <circle cx="24" cy="24" fill="var(--fill-0, #001AFF)" id="Ellipse 2" r="17.5" stroke="var(--stroke-0, #001AFF)" strokeWidth="5" />
        </g>
      </svg>
    </div>
  );
}

function Canva() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="canva">
      <Controlers1 />
      <Card1 />
      <ColorPicker />
    </div>
  );
}

function Content1() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col h-[84px] items-center p-[80px] relative w-full">
          <Canva />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',_sans-serif] font-normal grow items-center justify-between leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-nowrap tracking-[0.08px]" data-name="Text">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.4] text-nowrap whitespace-pre">Component Playgroud</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.4] text-nowrap whitespace-pre">@juliasakakibara</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#001aff] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#b3b3b3] border-[1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-1px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[80px] py-[40px] relative w-full">
          <Text />
        </div>
      </div>
    </footer>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="Desktop">
      <NavBar />
      <Content />
      <Content1 />
      <Footer />
    </div>
  );
}