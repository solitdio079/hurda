import {index,route,type RouteConfig} from '@react-router/dev/routes';
export default [index('routes/home.tsx'),route('hizmetler/:slug','routes/service.tsx'),route('hizmet-bolgeleri','routes/regions.tsx'),route('iletisim','routes/contact.tsx')] satisfies RouteConfig;
