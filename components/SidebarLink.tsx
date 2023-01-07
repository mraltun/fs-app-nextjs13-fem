"use client";
import Link from "next/link";
// Icon library
import { Settings, User, Grid, Calendar } from "react-feather";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const icons = { Settings, User, Grid, Calendar };

const SidebarLink = ({ link }) => {
  // Get the current url pathname from client component
  const pathname = usePathname();
  // No need to put in a state because this will only change when the url changes, that means re-render anyways.
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  // We can't serialize a function (component) or anything recursive client to server component. Because of that, we can't pass Icon component itself. Instead we pass a string that tells us what icon it uses then we can map to it when we are on component side
  const Icon = icons[link.icon];

  return (
    <Link href={link.link} className='w-full flex justify-center items-center'>
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;
