"use client";

import Container from "@/components/Container";
import Logo from "@/components/navbar/Logo";
import UserMenu from "@/components/navbar/UserMenu";
import { SafeUser } from "@/types";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10 px-8">
      <div className="py-4">
        <Container>
          <div
            className="flex flex-row
                items-center justify-between gap-3 md:gap-0"
          >
            <Logo />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
