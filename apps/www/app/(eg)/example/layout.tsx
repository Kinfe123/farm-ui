import { ReactNode } from "react";
import { TemplateToaster } from "./_components/template-toast";
const ExampleLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
      <TemplateToaster />
    </div>
  );
};
export default ExampleLayout;
