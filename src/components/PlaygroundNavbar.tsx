import svgPaths from "../imports/svg-sl48mho0p6";

function Logo() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center p-[8px] relative shrink-0">
      <p className="font-['Orbitron',_sans-serif] leading-none lowercase relative shrink-0 text-primary-foreground text-[48px] text-nowrap whitespace-pre">;)</p>
    </div>
  );
}

function Sun() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
      <g clipPath="url(#clip0_7_3671)" id="Sun">
        <path d={svgPaths.p163ad680} id="Icon" stroke="#F6F6F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
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
    <div className="relative shrink-0 size-[48px]">
      <Sun />
    </div>
  );
}

export function PlaygroundNavbar() {
  return (
    <div className="bg-[rgb(0,26,255)] box-border content-stretch flex items-center justify-between pb-[16px] pt-[16px] px-[60px] fixed top-0 w-full z-50">
      <Logo />
      <Switch />
    </div>
  );
}
