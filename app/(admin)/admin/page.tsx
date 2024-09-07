"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModals";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  return (
    <div>
      <Button onClick={() => registerModal.onOpen()}>Register</Button>
      <Button onClick={() => loginModal.onOpen()}>Login</Button>
    </div>
  );
};

export default page;
