"use strict";(()=>{var e={};e.id=639,e.ids=[639],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4021:e=>{e.exports=import("next/dist/compiled/@vercel/og/index.node.js")},1124:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>m,patchFetch:()=>f,requestAsyncStorage:()=>c,routeModule:()=>d,serverHooks:()=>x,staticGenerationAsyncStorage:()=>p});var o={};r.r(o),r.d(o,{GET:()=>u});var s=r(2058),n=r(2834),a=r(531),i=r(2043),l=r(2416);function u(e){let t=new URL(e.url).searchParams.get("title")||"Next.js Portfolio Starter";return new l.E(i.jsx("div",{tw:"flex flex-col w-full h-full items-center justify-center bg-white",children:i.jsx("div",{tw:"flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8",children:i.jsx("h2",{tw:"flex flex-col text-4xl font-bold tracking-tight text-left",children:t})})}),{width:1200,height:630})}let d=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/og/route",pathname:"/og",filename:"route",bundlePath:"app/og/route"},resolvedPagePath:"/home/ryo/Public/mani-cmd.github.io/app/og/route.tsx",nextConfigOutput:"export",userland:o}),{requestAsyncStorage:c,staticGenerationAsyncStorage:p,serverHooks:x}=d,m="/og/route";function f(){return(0,a.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:p})}},2043:(e,t,r)=>{e.exports=r(7311).vendored["react-rsc"].ReactJsxRuntime},2058:(e,t,r)=>{e.exports=r(517)},2416:(e,t,r)=>{Object.defineProperty(t,"E",{enumerable:!0,get:function(){return o}});class o extends Response{static #e=this.displayName="ImageResponse";constructor(...e){let t=new ReadableStream({async start(t){let o=new(await Promise.resolve().then(r.bind(r,4021))).ImageResponse(...e);if(!o.body)return t.close();let s=o.body.getReader();for(;;){let{done:e,value:r}=await s.read();if(e)return t.close();t.enqueue(r)}}}),o=e[1]||{};super(t,{headers:{"content-type":"image/png","cache-control":"public, immutable, no-transform, max-age=31536000",...o.headers},status:o.status,statusText:o.statusText})}}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[176],()=>r(1124));module.exports=o})();