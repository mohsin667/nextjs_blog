import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);
const cookieName = "auth_token";


export async function signAuthToken(payload) {
    try {
        const token = await new SignJWT(payload)
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setExpirationTime("7d")
            .sign(secret);

        return token;
    }
    catch (error) {
        throw new Error("Token signing failed: " + error);
    }
} 