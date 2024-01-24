import Link from "next/link";
import { ButtonLinkProps } from "../../../_constants";

export const IconButtonLink = ({ icon, href }: ButtonLinkProps) => (
  <Link
    href={href}
    className='btn btn-neutral text-neutral-content btn-square'
    target='_blank'
  >
    <span className='w-7'>{icon}</span>
  </Link>
);

