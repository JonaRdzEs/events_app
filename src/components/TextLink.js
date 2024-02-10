import Link from "next/link";
import { useRouter } from 'next/router'

function TextLink({ className = "", url = "", text = "Link" }) {
  const router = useRouter();

  const isActive = () => {
    if(url !== "/" && router.pathname.startsWith(url)) return true;
    if(url === router.pathname) return true;
  }

  return (
    <li className={`h-full text-center p-2 w-28 font-medium ${isActive() ? "bg-green-500 rounded-lg text-white" : ""}  ${className}`}>
      <Link href={url}>{text}</Link>
    </li>
  );
}

export default TextLink;
