import cn from "@/lib/cn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const ButtonSolid = ({ title, links }) => {
  return (
    <>
      <Link
        href={links}
        className='flex w-fit items-center border-1 border-primary bg-primary text-sm px-4 py-3 font-light text-textLight'>
        {title}
        <ArrowRight className='ml-2 w-4 h-4' />
      </Link>
    </>
  );
};
export default ButtonSolid;
