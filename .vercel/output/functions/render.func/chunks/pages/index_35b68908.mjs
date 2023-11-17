/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot } from '../astro/server_d7673763.mjs';

const $$Astro$4 = createAstro();
const $$SidebarHome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SidebarHome;
  return renderTemplate`${maybeRenderHead()}<nav class="fixed w-full z-20 top-0 start-0"><div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-1"><a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse"><img src="/favicon-white.svg" class="h-[5rem]" alt="Flowbite Logo"></a><div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"><button type="button" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Get started</button><button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button></div><div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky"><ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"><li><a href="#" class="text-shadow block py-2 px-3 text-primary-20 bg-primary-700 rounded md:bg-transparent md:text-primary-200 md:p-0 md:dark:text-primary-200" aria-current="page">Inicio</a></li><li><a href="#" class="text-shadow block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 md:dark:hover:text-primary-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Acerca de mí</a></li><li><a href="#" class="text-shadow block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 md:dark:hover:text-primary-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Proyectos</a></li><li><a href="#" class="text-shadow block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 md:dark:hover:text-primary-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contacto</a></li></ul></div></div></nav>`;
}, "/Users/deoslv/portafolio/myportfolio/src/components/shared/SidebarHome.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body>${renderComponent($$result, "SidebarHome", $$SidebarHome, {})}${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/Users/deoslv/portafolio/myportfolio/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$SectionHome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SectionHome;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white text-white h-screen w-screen text-center overflow-hidden"><div class="z-30 relative flex h-full flex-col"><header><h2 class="lg:text-6xl mt-40 font-medium text-shadow">
Soy Oscar Herrera Lugo
</h2><div class="lg:mx-[30rem]"><p class="lg:text-2xl mt-20 text-shadow">
Como desarrollador Full Stack, tengo una amplia gama de
                    habilidades técnicas y blandas que me permiten trabajar en
                    todas las etapas del desarrollo de software.
</p></div></header><footer class="flex flex-col flex-grow justify-end pb-24"><div><a class="border-[3px] border-white bg-white/5 backdrop-blur-xl rounded font-medium text-white px-6 py-2 inline-block hover:bg-white hover:text-black transition-colors" href="#">Canales de contacto</a></div></footer></div><div class="absolute top-0 bottom-0 h-full z-10"><video class="object-cover object-center h-full" autoplay muted loop playsinline src="/videoc-compress.webm"></video><!-- <video
            class="object-cover object-center h-full"
            autoplay
            muted
            loop
            src="/videoc-compress.webm"></video> --></div></section>`;
}, "/Users/deoslv/portafolio/myportfolio/src/components/SectionHome.astro", void 0);

const $$Astro$1 = createAstro();
const $$Section50Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section50Projects;
  return renderTemplate`${maybeRenderHead()}<section><div class="max-w-screen-2xl h-screen flex flex-wrap items-center justify-between mx-auto p-1
         px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"><div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"><div class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"><h2 class="text-3xl font-bold sm:text-4xl">
Find your career path
</h2><p class="mt-4 text-gray-600">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    vero aliquid sint distinctio iure ipsum cupiditate? Quis,
                    odit assumenda? Deleniti quasi inventore, libero reiciendis
                    minima aliquid tempora. Obcaecati, autem.
</p><a href="#" class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
Get Started Today
</a></div><div class="grid grid-cols-2 gap-4 sm:grid-cols-3"><a class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/accountant"><span class="inline-block rounded-lg bg-gray-50 p-3"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg></span><h2 class="mt-2 font-bold">Accountant</h2><p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
Lorem ipsum dolor sit amet consectetur.
</p></a><a class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/accountant"><span class="inline-block rounded-lg bg-gray-50 p-3"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg></span><h2 class="mt-2 font-bold">Accountant</h2><p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
Lorem ipsum dolor sit amet consectetur.
</p></a><a class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/accountant"><span class="inline-block rounded-lg bg-gray-50 p-3"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg></span><h2 class="mt-2 font-bold">Accountant</h2><p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
Lorem ipsum dolor sit amet consectetur.
</p></a><a class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/accountant"><span class="inline-block rounded-lg bg-gray-50 p-3"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg></span><h2 class="mt-2 font-bold">Accountant</h2><p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
Lorem ipsum dolor sit amet consectetur.
</p></a><a class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/accountant"><span class="inline-block rounded-lg bg-gray-50 p-3"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg></span><h2 class="mt-2 font-bold">Accountant</h2><p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
Lorem ipsum dolor sit amet consectetur.
</p></a><a class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/accountant"><span class="inline-block rounded-lg bg-gray-50 p-3"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg></span><h2 class="mt-2 font-bold">Accountant</h2><p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
Lorem ipsum dolor sit amet consectetur.
</p></a></div></div></div></section>`;
}, "/Users/deoslv/portafolio/myportfolio/src/components/dev-50-proyects/Section50Projects.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Oscar Herrera Page" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main>${renderComponent($$result2, "SectionHome", $$SectionHome, {})}${renderComponent($$result2, "Section50Projects", $$Section50Projects, {})}</main>` })}`;
}, "/Users/deoslv/portafolio/myportfolio/src/pages/index.astro", void 0);

const $$file = "/Users/deoslv/portafolio/myportfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
