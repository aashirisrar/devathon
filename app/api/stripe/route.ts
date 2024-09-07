import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const returnUrl = absoluteUrl("/profile");

export async function GET() {
    try {
        const currentUser = await getCurrentUser()

        if (!currentUser || !currentUser.id || !currentUser.email)
            return new NextResponse("Unauthorized", { status: 401 });

        const userSubscription = await prismadb.userSubscription.findUnique({
            where: {
                userId: currentUser?.id,
            },
        });

        if (userSubscription && userSubscription.stripeCustomerId) {
            const stripeSession = await stripe.billingPortal.sessions.create({
                customer: userSubscription.stripeCustomerId,
                return_url: returnUrl,
            });

            return new NextResponse(JSON.stringify({ url: stripeSession.url }));
        }

        const stripeSession = await stripe.checkout.sessions.create({
            success_url: returnUrl,
            cancel_url: returnUrl,
            payment_method_types: ["card"],
            mode: "subscription",
            billing_address_collection: "auto",
            customer_email: currentUser?.email,
            line_items: [
                {
                    price_data: {
                        currency: "USD",
                        product_data: {
                            name: "Portfolio Pro",
                            description: "1 month subscription",
                        },
                        unit_amount: 2000,
                        recurring: {
                            interval: "month",
                        },
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                userId: currentUser?.id,
            },
        });

        return new NextResponse(JSON.stringify({ url: stripeSession.url }));
    } catch (error) {
        console.log("[STRIPE_ERROR]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}