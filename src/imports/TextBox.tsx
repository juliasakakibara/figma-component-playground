export default function TextBox() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[40px] items-start not-italic px-0 py-[80px] relative size-full text-[#001aff]" data-name="text-box">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.05] min-w-full relative shrink-0 text-[40px] tracking-[-0.3px] w-[min-content]">Component Playground</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[16px] tracking-[0.08px] w-[908px]">{`Building lasting connections with your audience is our mission. We infuse creativity into every touchpoint, whether it's customer experience, relationship management, or commerce. `}</p>
    </div>
  );
}