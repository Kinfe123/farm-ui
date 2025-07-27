
// Inspired by Chatbot-UI and modified to fit the needs of this project
// @see https://github.com/mckaywrigley/chatbot-ui/blob/main/components/Markdown/CodeBlock.tsx

"use client";

import { FC, memo, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    coldarkDark,
    oneLight,
    coy,
    vs,
    ghcolors,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

import { useCopyToClipboard } from "@/lib/hooks/use-copy-to-clipboard";
import { useTheme } from "next-themes";
import { ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Copy01Icon, Download01Icon, Download04Icon } from "hugeicons-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface Props {
    language: string;
    value: string;
    raw: boolean;
}

interface languageMap {
    [key: string]: string | undefined;
}

export const programmingLanguages: languageMap = {
    javascript: ".js",
    python: ".py",
    java: ".java",
    c: ".c",
    cpp: ".cpp",
    "c++": ".cpp",
    "c#": ".cs",
    ruby: ".rb",
    php: ".php",
    swift: ".swift",
    "objective-c": ".m",
    kotlin: ".kt",
    typescript: ".ts",
    go: ".go",
    perl: ".pl",
    rust: ".rs",
    scala: ".scala",
    haskell: ".hs",
    lua: ".lua",
    shell: ".sh",
    sql: ".sql",
    html: ".html",
    css: ".css",
    // add more file extensions here, make sure the key is same as language prop in CodeBlock.tsx component
};

export const generateRandomString = (length: number, lowercase = false) => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXY3456789"; // excluding similar looking characters like Z, 2, I, 1, O, 0
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return lowercase ? result.toLowerCase() : result;
};

const CodeBlock: FC<Props> = memo(({ language, value, raw }) => {
    const { theme } = useTheme();
    const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });

    useEffect(() => {
        if (isCopied) {
            toast("Copied to clipboard", {
                icon: <Copy01Icon className="h-5 w-5" />,
                description: `Copied ${value.split("\n").length} lines.`,
            });
        }
    }, [isCopied]);

    const downloadAsFile = () => {
        if (typeof window === "undefined") {
            return;
        }
        const fileExtension = programmingLanguages[language] || ".file";
        const suggestedFileName = `file-${generateRandomString(
            3,
            true,
        )}${fileExtension}`;
        const fileName = window.prompt("Enter file name" || "", suggestedFileName);

        if (!fileName) {
            // User pressed cancel on prompt.
            return;
        }

        const blob = new Blob([value], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = fileName;
        link.href = url;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div
            className={cn(
                "codeblock w-full overflow-hidden font-sans",
                !raw && "rounded-lg border",
            )}
        >
            {!raw && (
                <div className="flex items-center justify-between bg-secondary p-2">
                    <span className="text-xs text-muted-foreground">{language}</span>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={downloadAsFile}
                            className="h-7 w-7 p-1"
                        >
                            <Download04Icon className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => copyToClipboard(value)}
                            className="h-7 w-7 p-1"
                        >
                            <Copy01Icon className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            )}
            <SyntaxHighlighter
                language={language}
                style={theme === "dark" ? coldarkDark : oneLight}
                PreTag="div"
                // showLineNumbers
                customStyle={{
                    margin: 0,
                    overflow: "hidden",
                    background: "transparent",
                    padding: raw ? "0rem 3rem 1rem 0rem" : "1rem 3rem 1rem 1rem",
                }}
                lineNumberStyle={{
                    userSelect: "none",
                }}
                showLineNumbers={raw}
                codeTagProps={{
                    style: {
                        fontSize: "0.9rem",
                        fontFamily: "var(--font-mono)",
                    },
                }}
                wrapLines
            >
                {value}
            </SyntaxHighlighter>
            <ScrollBar
                orientation="horizontal"
                className="max-w-screen sticky mb-0.5"
            />
        </div>
    );
});
CodeBlock.displayName = "CodeBlock";

export { CodeBlock };