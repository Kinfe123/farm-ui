"use client";

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { spinner } from "components/spinner";
import { cn } from "@/lib/utils";
import { CodeBlock } from "components/ui/codeblock";
import { MemoizedReactMarkdown } from "components/markdown";
import { StreamableValue } from "ai/rsc";
import { useStreamableText } from "@/lib/hooks/use-streamable-text";
import UserAvatar from "components/user-avatar";
import Logo from "components/logo";

export function MarkdownBlock({
  content,
  raw = false,
}: {
  content: string;
  raw?: boolean;
}) {
  return (
    <div className="flex-1 space-y-2">
      <MemoizedReactMarkdown
        className="prose dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 break-words"
        remarkPlugins={[remarkGfm, remarkMath]}
        components={{
          ul({ children }: { children: React.ReactNode }) {
            return (
              <ul className="my-3 list-outside list-disc pl-6 marker:text-muted-foreground">
                {children}
              </ul>
            );
          },
          ol({ children }: { children: React.ReactNode }) {
            return (
              <ol className="my-3 list-outside list-decimal pl-3 marker:text-muted-foreground">
                {children}
              </ol>
            );
          },
          li({ children }: { children: React.ReactNode }) {
            return <li className="relative pl-1">{children}</li>;
          },
          b({ children, node }: { children: React.ReactNode, node: any }) {
            return <b className="px-1 font-bold">{children}</b>;
          },
          p({ children }: { children: React.ReactNode }) {
            return (
              <p className="mb-3 text-base leading-loose last:mb-0">
                {children}
              </p>
            );
          },
          h1({ children }: { children: React.ReactNode }) {
            return <h1 className="mb-3 text-2xl font-semibold">{children}</h1>;
          },
          h2({ children }: { children: React.ReactNode }) {
            return <h2 className="mb-3 text-xl font-semibold">{children}</h2>;
          },
          h3({ children }: { children: React.ReactNode }) {
            return <h3 className="mb-3 text-lg font-semibold">{children}</h3>;
          },
          h4({ children }: { children: React.ReactNode }) {
            return <h4 className="mb-3 text-base font-semibold">{children}</h4>;
          },
          h5({ children }: { children: React.ReactNode }) {
            return <h5 className="mb-3 text-sm font-semibold">{children}</h5>;
          },
          h6({ children }: { children: React.ReactNode }) {
            return <h6 className="mb-3 text-xs font-semibold">{children}</h6>;
          },
          // @ts-ignore
          code({ node, inline, className, children, ...props }) {
            if (children.length) {
              if (children[0] == "▍") {
                return (
                  <span className="mt-1 animate-pulse cursor-default">▍</span>
                );
              }

              children[0] = (children[0] as string).replace("`▍`", "▍");
            }

            const match = /language-(\w+)/.exec(className || "");

            if (inline) {
              return (
                <code
                  className={cn(
                    className,
                    "my-3 rounded-md border bg-secondary px-1 text-sm font-medium text-secondary-foreground shadow-sm",
                  )}
                  {...props}
                >
                  {children}
                </code>
              );
            }

            return (
              <CodeBlock
                key={Math.random()}
                language={(match && match[1]) || ""}
                value={String(children).replace(/\n$/, "")}
                raw={raw}
                {...props}
              />
            );
          },
        }}
      >
        {content}
      </MemoizedReactMarkdown>
    </div>
  );
}

export function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative flex items-start">
      <div className="flex size-[25px] shrink-0 select-none items-center justify-center rounded-md bg-background p-0 shadow-sm">
        <UserAvatar />
      </div>
      <div className="ml-2 flex-1 space-y-2 overflow-hidden pl-2">
        {children}
      </div>
    </div>
  );
}

export function PlainMessage({
  content,
  indent = false,
}: {
  content: string | StreamableValue<string>;
  indent?: boolean;
}) {
  const text = useStreamableText(content);

  return (
    <div
      className={cn(
        "ml-2 flex-1 space-y-2 overflow-hidden px-1",
        indent ? "pl-7" : "",
      )}
    >
      <MarkdownBlock content={text} />
    </div>
  );
}

export function BotMessage({
  content,
  className,
}: {
  content: string | StreamableValue<string>;
  className?: string;
}) {
  const text = useStreamableText(content);

  return (
    <div className={cn("group relative flex items-start", className)}>
      <div className="flex size-[24px] shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow-sm">
        <Logo />
      </div>
      <PlainMessage content={text} />
    </div>
  );
}

export function BotCard({
  children,
  showAvatar = true,
}: {
  children: React.ReactNode;
  showAvatar?: boolean;
}) {
  return (
    <div className="group relative flex items-start">
      <div
        className={cn(
          "flex size-[24px] shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow-sm",
          !showAvatar && "invisible",
        )}
      >
        <Logo />
      </div>
      <div className="ml-2 flex-1 pl-2">{children}</div>
    </div>
  );
}

export function SystemMessage({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        "mt-2 flex items-center justify-center gap-2 text-xs text-gray-500"
      }
    >
      <div className={"max-w-[600px] flex-initial p-2"}>{children}</div>
    </div>
  );
}

export function SpinnerMessage() {
  return (
    <div className="group relative flex items-start">
      <div className="flex size-[24px] shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow-sm">
        <Logo />
      </div>
      <div className="ml-2 flex h-[24px] flex-1 flex-row items-center space-y-2 overflow-hidden px-1">
        {spinner}
      </div>
    </div>
  );
}
