import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"; 
import { ClerkMiddlewareOptions } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    '/form(.*)',
]);

export default clerkMiddleware((auth, req) => {
    if(isProtectedRoute(req)) auth().protect();
}); 

export const config = { matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"], };
