import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import { useEffect } from "react";
import mergeTW from "utils/mergeTW";

export default ({
  code,
  className = "",
}: {
  code: string;
  className?: string;
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre>
      <code className={mergeTW(`lang-jsx text-sm w-1/2 ${className}`)}>{code}</code>
    </pre>
  );
};
