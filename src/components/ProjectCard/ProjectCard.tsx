import type { ReactNode } from "react";
import Badge from "../Badge";
import { Icon } from "@/components";

/**
 * Status mapping for project cards.
 */
export interface ProjectCardData {
  /** Project ID */
  id: string | number;
  /** Project title */
  title: string;
  /** Short description */
  description: string;
  /** Cover image URL */
  image?: string;
  /** Technology tags */
  tags?: string[];
  /** Status key — maps to Badge variant */
  status?: "active" | "completed" | "in-progress";
  /** Human-readable status label */
  statusLabel?: string;
  /** Link to project detail page */
  href: string;
}

interface ProjectCardProps {
  /** Project data */
  project: ProjectCardData;
  /** Animation delay in seconds */
  delay?: number;
  /** Additional class names */
  className?: string;
  /** Optional action element rendered at the bottom */
  action?: ReactNode;
}

const STATUS_VARIANT: Record<string, "gold" | "green" | "silver"> = {
  active: "green",
  completed: "gold",
  "in-progress": "silver",
};

/**
 * Project card for grids on Home and Projects pages.
 *
 * @example
 * ```tsx
 * <ProjectCard
 *   project={{
 *     id: 1,
 *     title: "مشروعي",
 *     description: "وصف المشروع",
 *     tags: ["React", "Node"],
 *     status: "active",
 *     href: "/project/1",
 *   }}
 * />
 * ```
 */
const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  delay = 0,
  className = "",
  action,
}) => {
  const { title, description, image, tags, status, statusLabel, href } = project;

  return (
    <article
      className={`proj-card reveal ${className}`.trim()}
      role="listitem"
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      tabIndex={0}
    >
      <div className="proj-img">
        {image ? (
          <img
            src={image}
            alt={title}
            width="400"
            height="225"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              const ph = (e.currentTarget as HTMLImageElement)
                .nextElementSibling as HTMLElement | null;
              if (ph) ph.style.display = "flex";
            }}
          />
        ) : (
          <div className="proj-img-ph" aria-hidden="true">
            <Icon name="monitor" />
          </div>
        )}
        {status && (
          <div className="proj-status-overlay">
            <Badge variant={STATUS_VARIANT[status] || "silver"}>
              {statusLabel || status}
            </Badge>
          </div>
        )}
      </div>

      <div className="proj-body">
        {tags && tags.length > 0 && (
          <div className="proj-tags">
            {tags.map((tag) => (
              <span key={tag} className="proj-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="proj-title">{title}</h3>
        <p className="proj-desc">{description}</p>
        {action || (
          <a href={href} className="btn-text" style={{ fontSize: "0.82rem" }}>
            عرض
            <Icon name="arrow-left" size={14} />
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
