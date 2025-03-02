// "use client";

// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
// } from "@heroui/navbar";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// import Button from "./Button";
// import VercelLogo from "@public/svg/vercel.svg";

// export default function Menu() {
//   const pathname = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);


//   return (
//     <Navbar
//       onMenuOpenChange={(open) => setIsMenuOpen(open)}
//       isMenuOpen={isMenuOpen}
//       isBordered
//       className="justify-between gap-2 bg-primary text-blackTransparent font-montserrat items-center w-full h-[70px] lg:px-8"
//       classNames={{
//         item: [
//           "flex",
//           "relative",
//           "mr-4 ml-0",
//           "data-[active=true]:after:text-primary",
//           "text-blackTransparent",
//         ],
//         brand: ["p-0 m-0"],
//         menuItem: [""],
//       }}
//     >
//       {/* Brand and Menu Toggle */}
//       <NavbarContent className="flex items-end pb-1">
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="lg:hidden"
//           onClick={() => setIsMenuOpen((prev) => !prev)}
//         />
//         <NavbarBrand> {/* Add margin-right here */}
          // <Image src={VercelLogo} width={30} height={30} alt="Logo" />
//           <p className="text-white text-lg font-montserrat">Vercel</p>
//         </NavbarBrand>
//       </NavbarContent>

//       {/* Desktop Menu */}
//       <NavbarContent
//         className="hidden lg:flex gap-2 w-full items-start -ml-36"
//         style={{ alignItems: "flex-end" }}
//         justify="start"
//       >
        // {menuItems.map((item) => (
        //   <NavbarItem key={item.href} isActive={pathname === item.href}>
        //     <Link href={item.href}>{item.label}</Link>
        //   </NavbarItem>
        // ))}
//       </NavbarContent>

//       {/* Social Icons and Search */}
//       <NavbarContent className="bg-red-300 flex items-end">
//         <NavbarItem className="hidden lg:flex items-end">
        //   <Button color="primary" className="text-secondary"  variant="bordered" size="md" radius="sm">
        //     Login
        //   </Button>
        // </NavbarItem>
        // <NavbarItem>
        //   <Button variant="ghost" size="sm" radius="full">
        //     Contact
        //   </Button>
        // </NavbarItem>

        // <NavbarItem>
        //   <Button  variant="ghost" size="sm" radius="full">
        //     Sign Up
        //   </Button>
//         </NavbarItem>
//       </NavbarContent>

//       {/* Mobile Menu */}
//       <NavbarMenu className="p-4 bg-white rounded-b-lg max-h-[calc(100vh-90px)] overflow-y-auto mt-[70px]">
//         {menuItems.map((item) => (
//           <NavbarMenuItem key={item.href}>
//             <Link
//               href={item.href}
              
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {item.label}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </Navbar>
//   );
// }
"use client"

const menuItems = [
  { label: "Products", href: "/" },
  { label: "Solutions", href: "/" },
  { label: "Resources", href: "/" },
  { label: "Enterprise", href: "/" },
  { label: "Docs", href: "/" },
  { label: "Pricing", href: "/" },
];


import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,

} from "@heroui/react";
 import { usePathname } from "next/navigation";
 import Image from "next/image"
 import VercelLogo from "@public/svg/vercel.svg";
import Button from "./Button";




export default function Menu() {
   const pathname = usePathname();

  return (
    <Navbar isBordered className="font-montserrat bg-primary flex items-end ">
      <NavbarContent className="text-blackTransparent" justify="start">
        <NavbarBrand className="mr-6">
        <Image src={VercelLogo} width={20} height={30} alt="vercel-logo" />
          <p className="hidden sm:block font-bold text-white">Vercel</p>
        </NavbarBrand>
        <NavbarContent className="hidden text-blackTransparent sm:flex gap-3">
        {menuItems.map((item) => (
          <NavbarItem className="mr-1" key={item.href} isActive={pathname === item.href}>
            <Link className="text-blackTransparent" href={item.href}>{item.label}</Link>
          </NavbarItem>
        ))}
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        {/* <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          // startContent={<SearchIcon size={18} />}
          type="search"
        /> */}
         <Button color="primary"  className="text-secondary border-blackTransparent border-1"  variant="solid" size="sm" >
            Login
          </Button>
      
          <Button variant="solid" className="text-secondary border-1 border-blackTransparent" size="sm" color="primary">
            Contact
          </Button>
  
          <Button  variant="solid" size="sm" color="secondary" className="text-primary">
            Sign Up
          </Button>
        {/* <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
      </NavbarContent>
    </Navbar>
  );
}
