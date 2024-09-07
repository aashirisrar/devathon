import prismadb from "@/lib/prismadb";

import { getCurrentUser } from "@/app/actions/getCurrentUser";

const DAY_IN_MS = 86_400_000;

export const getSubscription = async () => {
  // const currentUser = await getCurrentUser();
  // if (!currentUser) return false;
  // const userSubscription = await prismadb.userSubscription.findUnique({
  //     where: {
  //         userId: currentUser?.id,
  //     },
  //     select: {
  //         stripeSubscritionId: true,
  //         stripeCurrentPeriodEnd: true,
  //         stripeCustomerId: true,
  //         stripePriceId: true,
  //     },
  // });
  // if (!userSubscription) return false;
  // const isValid =
  //     userSubscription.stripePriceId &&
  //     userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
  //     Date.now();
  // return !!isValid;

  return true;
};
