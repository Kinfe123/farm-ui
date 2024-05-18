export default function CareerLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="overflow-x-hidden">
        <div className="absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
  
        <div className="">{children}</div>
      </div>
    );
  }
  