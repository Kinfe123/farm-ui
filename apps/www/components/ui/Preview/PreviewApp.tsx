"use client";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  CodeBlock,
  Component,
  ComponentCards,
  ComponentDetails,
} from "types/types";
import Preview from ".";

interface ComponentData extends Component, ComponentDetails, CodeBlock {
  mdxSource: MDXRemoteSerializeResult;
}

interface Props {
  components: ComponentData[];
  files: string[]
}

export default ({ components , files }: Props) => {
  const pathname = usePathname();
  console.log({components})
  
  return (
    <>
      {components?.map((item: ComponentData, idx: number) =>
        item.isActive ? (
          <div key={idx} >
            <Preview item={item} files={files} mdxSource={item.mdxSource} slug={pathname} />
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
};
