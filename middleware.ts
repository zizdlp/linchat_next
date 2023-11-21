import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  let cookie = request.cookies.get("NEXT_LOCALE");
  let cookielang = cookie?.value;

  // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // If you have one
  if (
    [
      "/manifest.json",
      "/favicon.ico",
      "/logo.svg",
      "/bg.avif",
      "/login.svg",
      "/light_home.png",
      "/dark_home.png",
      "/ios_home_dark.png",
      "/ios_home_light.png",
      "/ios_user_dark.png",
      "/ios_user_light.png",
      "/chat_dark_iphone.png",
      "/chat_light_iphone.png",
      "/chat_light_mac.png",
      "/chat_dark_mac.png",
      "/download_dark_iphone.svg",
      "/download_dark_mac.svg",
      "/app/image.57x57.png",
      "/app/image.512x512.png",
      "/app/linchat.ipa",
      "/app/linchat.dmg",
      "/app/manifest.plist",
      "/app/linchat-08F0E06B-5E6B-4F38-BF5B-4C0586921706.ipa",
      "/app/linchat-69F2213C-C241-4DBB-8476-BE2E0CA33F70.ipa",
      "/app/linchat-027885A7-B1A6-4A65-97B8-1106108E65C3.ipa",
      "/app/linchat-F9D5DE3A-BE9C-4D71-8DAB-54D5A3F1F108.ipa"
      // Your other files in `public`
    ].includes(pathname)
  )
    return;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = cookielang ? cookielang : getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  } else {
    // console.log("path not miss:",pathname)
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
