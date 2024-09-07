import NextAuth from "next-auth"
import authConfig from "@/lib/auth.config"

export const { auth: middleware } = NextAuth(authConfig)

export const config = {
    matcher: [
        "/trips",
        "/reservations",
        "/favorites",
        "/properties"],
};