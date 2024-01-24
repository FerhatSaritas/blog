import Link from "next/link";
import { BreadCrumbType } from "../../../_constants";

export interface BreadcrumbProps {
  crumbs: BreadCrumbType[];
}

export const Breadcrumb = ({ crumbs }: BreadcrumbProps) => {
  return (
    <div className='text-sm breadcrumbs'>
      <ul>
        {crumbs.map((element, index) => (
          <li key={index}>
            {element?.link ? (
              <Link href={element.link}>{element.name}</Link>
            ) : (
              element.name
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

