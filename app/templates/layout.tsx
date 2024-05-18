export default function TemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-hidden">
      <div className="absolute -z-1 inset-0 h-[200px] w-full bg-transparent opacity-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      <div className="">{children}</div>
    </div>
  );
}
