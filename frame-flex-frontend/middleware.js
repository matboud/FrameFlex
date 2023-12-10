import { NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import { fallbackLng, languages, cookieName } from './app/i18n/settings';

acceptLanguage.languages(languages);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
};

function detectLanguage(req) {
  let lng = req.cookies.get(cookieName) || acceptLanguage.get(req.headers.get('Accept-Language')) || fallbackLng;
  return languages.includes(lng) ? lng : fallbackLng;
}

export function middleware(req) {
  const lng = detectLanguage(req);

  // Redirect if lng in path is not supported and the path is not for internal Next.js handling
  if (!req.nextUrl.pathname.startsWith(`/${lng}`) && !req.nextUrl.pathname.startsWith('/_next')) {
    const redirectUrl = new URL(`/${lng}${req.nextUrl.pathname}`, req.url);
    return NextResponse.redirect(redirectUrl);
  }

  // Set language cookie based on referer
  if (req.headers.get('referer')) {
    const refererUrl = new URL(req.headers.get('referer'));
    const lngInReferer = languages.find(l => refererUrl.pathname.startsWith(`/${l}`));
    if (lngInReferer) {
      const response = NextResponse.next();
      response.cookies.set(cookieName, lngInReferer);
      return response;
    }
  }

  return NextResponse.next();
}
