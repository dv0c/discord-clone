"use server";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export const findServer = async (name: string) => {
  const profile = await currentProfile();

  if (!profile) {
    return null;
  }

  const isAlreadyJoined = await db.server.findFirst({
    where: {
      name: name,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (isAlreadyJoined) {
    throw new Error("You are already a member of this server.");
  }

  const findServer = await db.server.findFirst({
    where: {
      name: name,
    },
  });

  if (!findServer) {
    throw new Error("Server not found.");
  }

  const server = await db.server.update({
    where: {
      id: findServer?.id,
    },
    data: {
      members: {
        create: {
          profileId: profile.id,
        },
      },
    },
  });

  return server;
};
