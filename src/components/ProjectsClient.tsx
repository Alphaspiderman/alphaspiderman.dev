"use client";

import {
  ExpandableCard,
  ExpandableCardBody,
  ExpandableCardContent,
  ExpandableCardExpandContainer,
  ExpandableCardTitle,
  ExpandableCardDescription,
} from "@/components/ui/expandable-card";
import { CardAction } from "@/components/ui/card";
import type { Project } from "@/lib/types";
import React from "react";

function parseInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const index = match.index;
    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index));
    }

    if (match[1] && match[2]) {
      // link
      nodes.push(
        <a
          key={index}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 dark:text-blue-300 hover:underline"
        >
          {match[1]}
        </a>,
      );
    } else if (match[3]) {
      // bold
      nodes.push(
        <strong key={index} className="font-semibold">
          {match[3]}
        </strong>,
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function renderExtended(text?: string) {
  if (!text) return <p>No additional information available.</p>;

  const lines = text.split(/\n/);
  const nodes: React.ReactNode[] = [];
  let paragraphBuffer: string[] = [];
  let listBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length === 0) return;
    const paragraphText = paragraphBuffer.join(" ").trim();
    if (!paragraphText) {
      paragraphBuffer = [];
      return;
    }

    nodes.push(
      <p
        key={`p-${nodes.length}`}
        className="text-sm text-muted-foreground mb-3"
      >
        {parseInline(paragraphText)}
      </p>,
    );
    paragraphBuffer = [];
  };

  const flushList = () => {
    if (listBuffer.length === 0) return;

    nodes.push(
      <ul
        key={`ul-${nodes.length}`}
        className="list-disc ml-5 space-y-1 text-sm text-muted-foreground mb-3"
      >
        {listBuffer.map((item, idx) => (
          <li key={idx}>{parseInline(item)}</li>
        ))}
      </ul>,
    );
    listBuffer = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const listMatch = line.match(/^[-*]\s+(.+)$/);
    if (listMatch) {
      flushParagraph();
      listBuffer.push(listMatch[1]);
      continue;
    }

    flushList();
    paragraphBuffer.push(line);
  }

  flushParagraph();
  flushList();

  return nodes;
}

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-8">
      {projects.map((project) => (
        <ExpandableCard key={project.name}>
          <ExpandableCardBody className="bg-card text-card-foreground rounded-xl border shadow-sm p-6">
            <ExpandableCardTitle className="text-lg font-bold">
              {project.name}
            </ExpandableCardTitle>
            <ExpandableCardDescription className="text-muted-foreground mb-2">
              {project.description}
            </ExpandableCardDescription>
            <div className="flex items-start justify-between gap-4 px-4">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tech &&
                    project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>
              <div className="shrink-0 text-sm text-muted-foreground">
                {project.year}
              </div>
            </div>
          </ExpandableCardBody>

          <ExpandableCardExpandContainer className="p-6 w-full h-full">
            <ExpandableCardTitle className="text-lg font-bold">
              {project.name}
            </ExpandableCardTitle>
            <ExpandableCardDescription>
              <div className="prose max-w-none gap-y-4">
                {renderExtended(project.extended)}
              </div>
              {project.links && project.links.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  Links:
                  <div className="flex flex-wrap gap-2 items-center">
                    {project.links.map((link) => (
                      <CardAction key={link.url}>
                        <a
                          href={link.url}
                          className="text-sm text-blue-700 dark:text-blue-300 hover:underline px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/40"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      </CardAction>
                    ))}
                  </div>
                </div>
              )}
            </ExpandableCardDescription>
          </ExpandableCardExpandContainer>
        </ExpandableCard>
      ))}
    </div>
  );
}
