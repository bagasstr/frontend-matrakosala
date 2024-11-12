import cn from "@/lib/cn";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";
const ButtonOutline = ({ title, links }) => {
  return (
    <>
      <Link
        href={links}
        className='border flex w-fit items-center border-1 border-textLight text-sm px-4 py-3 font-light text-textLight'>
        <ArrowDownToLine className='mr-2 w-4 h-4' />
        {title}
      </Link>
    </>
  );
};
export default ButtonOutline;
