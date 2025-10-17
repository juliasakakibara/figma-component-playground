function Text() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter',_sans-serif] grow items-center justify-between leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-primary-foreground text-nowrap tracking-[0.08px]">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.4] text-nowrap whitespace-pre" style={{ fontWeight: 300 }}>Component Playground</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.4] text-nowrap whitespace-pre" style={{ fontWeight: 300 }}>@juliasakakibara</p>
      </div>
    </div>
  );
}

export function PlaygroundFooter() {
  return (
    <footer className="bg-primary relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#b3b3b3] border-[1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-1px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[60px] py-[16px] relative w-full">
          <Text />
        </div>
      </div>
    </footer>
  );
}
