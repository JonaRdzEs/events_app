import Link from "next/link";
import { useRouter } from 'next/router'

function TextLink({ className = "", url = "", text = "Link" }) {

  const router = useRouter();

  console.log(router);

  return (
    <li className={`h-full text-center p-2 w-28 font-medium ${url === router.pathname ? "bg-green-500 rounded-lg text-white" : ""}  ${className}`}>
      <Link href={url}>{text}</Link>
    </li>
  );
}

export default TextLink;
