import Link from "next/link";
import { IconButtonLink, Label, Menu } from "../../atoms";
import { GitHubIcon, LinkedInIcon } from "../../../_public/Icons";

export const Navbar = () => {
  return (
    <div className='navbar w-full lg:w-11/12 mx-auto lg:rounded-b-lg'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <Label />
          <Menu />
        </div>
      </div>
      <div className='navbar-center flex-1'>
        <Link href='/' className='btn btn-ghost font-mono normal-case text-xl'>
          {" "}
          Ferhat Saritas{" "}
        </Link>
      </div>
      <div className='navbar-end flex gap-4'>
        <IconButtonLink icon={<LinkedInIcon />} href='#' />
        <IconButtonLink icon={<GitHubIcon />} href='#' />
      </div>
    </div>
  );
};

