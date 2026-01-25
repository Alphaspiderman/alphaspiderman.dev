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
              {project.extended
                ? project.extended
                : "No additional information available."}
            </ExpandableCardDescription>
            <ExpandableCardContent className="bg-card text-card-foreground rounded-b-xl p-4">
              <div className="flex flex-wrap gap-2">
                Links:
                {project.links &&
                  project.links.map((link) => (
                    <CardAction key={link.url}>
                      <a
                        href={link.url}
                        className="text-sm text-blue-700 dark:text-blue-300 hover:underline px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/40"
                        target="_blank"
                        rel="noopener"
                      >
                        {link.label}
                      </a>
                    </CardAction>
                  ))}
              </div>
            </ExpandableCardContent>
          </ExpandableCardExpandContainer>
        </ExpandableCard>
      ))}
    </div>
  );
}
