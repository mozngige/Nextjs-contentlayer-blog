
import { cx } from "@/src/app/utils";
import Link from "next/link";
import React from "react";



const Tag = ( {link = "#",name,...props}) => {
  return (
    <Link href={link}
     className={cx("inline-block py-3 px-10 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid hover:scale-105 transition-all ease duration-200" ,props.className)} >
    {name}
</Link>
  )
}

export default Tag