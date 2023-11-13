"use client";

import { CreateServerModal } from "@/components/modals/create-server-modal";
import { useMount } from "@/lib/use-mount";
import { InviteModal } from "./invite-modal";
import { EditServerModal } from "./edit-server-modal";
import { MembersModal } from "./members-modal";
import { CreateChannelModal } from "./create-channel-modal";

export const ModalProvider = () => {
  const isMounted = useMount();

  if (!isMounted) return null;

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
    </>
  );
};
