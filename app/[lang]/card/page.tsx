import Image from "next/image";
import Link from "next/link";

import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <div className="fixed stars"></div>
      <div className="overflow-hidden">
        <div className="mx-3 md:mx-4 sm:px-6 md:px-8">
          <header className="overflow-hidden pt-8 pb-24 text-slate-600 dark:text-slate-400 lg:py-16">
            <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
              <div className="w-[108rem] flex-none flex justify-end">
                <Image
                  src="/bg.avif"
                  alt=""
                  className="w-[90rem] flex-none max-w-none  block"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="flex items-center justify-center text-sm font-medium uppercase tracking-[0.16em]">
              <p className="hidden lg:block">
                {dictionary["home-page"].Seamlessly}
                <span className="dark:text-white text-black font-bold">
                  {dictionary["home-page"]["Light/Night mode"]}
                </span>
              </p>
              <div className="mx-6 hidden h-[0.1875rem] w-[0.1875rem] rounded-full bg-white/30 lg:block xl:mx-16"></div>

              <p>
                {dictionary["home-page"]["Mobile-first"]}
                <span className="dark:text-white text-black font-bold ">
                  {dictionary["home-page"]["responsive design"]}
                </span>
              </p>
              <div className="mx-6 hidden h-[0.1875rem] w-[0.1875rem] rounded-full bg-white/30 lg:block xl:mx-16"></div>

              <p className="hidden lg:block">
                <span className="dark:text-white text-black font-bold ">
                  {dictionary["home-page"].full}
                </span>
                {dictionary["home-page"]["text search"]}
              </p>
              <div className="mx-6 hidden h-[0.1875rem] w-[0.1875rem] rounded-full bg-white/30 lg:block xl:mx-16"></div>
            </div>

            <div className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8 mx-auto mt-24 lg:mt-56">
              <div className="lg:flex">
                <div className="flex-auto">
                  <h1 className="bg-black dark:bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-5xl leading-[1.2] tracking-tighter text-transparent sm:text-center sm:text-[4rem] sm:leading-[4.75rem] lg:text-left">
                    {
                      dictionary["home-page"][
                        "Free GPU Usage, AI Generates Exquisite Images"
                      ]
                    }
                  </h1>
                  <p className="mt-6 text-slate-700 dark:text-slate-400 max-w-3xl text-2xl leading-[2.5rem] tracking-tight sm:text-center lg:text-left">
                    {
                      dictionary["home-page"][
                        "Register Now and Receive Free Prompts to Generate Exquisite Images as You Describe"
                      ]
                    }
                  </p>
                  <div className="mt-12 hidden lg:flex">
                    <Link href="itms-services://?action=download-manifest&url=https://zizdlp.github.io/app/manifest.plist">
                      <Image
                        src="/download_dark_iphone.svg"
                        alt="Picture of logo"
                        width={160}
                        height={512}
                        className="relative rounded-md p-4  dark:block "
                      />
                    </Link>
                    <Image
                      src="/download_dark_mac.svg"
                      alt="Picture of logo"
                      width={200}
                      height={512}
                      className="relative rounded-md p-4  dark:block "
                    />
                  </div>
                </div>
                <div className="relative mt-24 flex-none lg:mt-0 lg:w-80">
                  <div className="top-1/2 left-8 mx-auto w-[19.25rem] rotate-12 lg:absolute lg:w-[23.75rem] lg:-translate-y-1/2">
                    <div className="pointer-events-none">
                      <div className="absolute -right-14 top-16 h-px w-[400%] bg-gradient-to-l from-slate-400 opacity-20"></div>
                      <div className="absolute left-full top-16 ml-14 h-px w-screen bg-slate-400 opacity-20"></div>
                      <div className="absolute top-[-135%] bottom-[-65%] right-11 w-px opacity-20"></div>
                      <div className="absolute -right-24 -bottom-16 h-px w-[400%] opacity-30"></div>
                      <div className="absolute top-[-120%] bottom-[-80%] -left-12 w-px opacity-20"></div>
                      <div className="absolute top-16 -left-80 mt-[-0.5px] h-[2px] w-28 rounded-full bg-gradient-to-r from-blue-500"></div>
                      <div className="absolute -left-12 bottom-8 ml-[-0.5px] h-28 w-[2px] rounded-full bg-gradient-to-t from-violet-400"></div>
                    </div>
                  </div>
                  <div className="relative mt-16 flex flex-col sm:flex-row sm:justify-center lg:hidden">
                    <Image
                      src="/download_dark_iphone.svg"
                      alt="Picture of logo"
                      width={160}
                      height={512}
                      className="relative rounded-md p-4  dark:block "
                    />
                    <Image
                      src="/download_dark_mac.svg"
                      alt="Picture of logo"
                      width={200}
                      height={512}
                      className="relative rounded-md p-4  dark:block "
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section id="mobile-first" className="overflow-hidden mb-14 mt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="mt-6 sm:mt-10 relative z-10 rounded-xl md:px-10  border-2 border-dotted border-slate-400	 dark:border-sky-500">
                <div className="flex  flex-col xl:flex-row p-4 	items-center ">
                  <Image
                    src="/chat_dark_iphone.png"
                    alt="Picture of logo"
                    width={300}
                    height={512}
                    className="relative rounded-md p-4 hidden dark:block "
                  />
                  <Image
                    src="/chat_dark_mac.png"
                    alt="Picture of logo"
                    width={900}
                    height={512}
                    className="relative rounded-md p-4 hidden dark:block "
                  />
                  <Image
                    src="/chat_light_iphone.png"
                    alt="Picture of logo"
                    width={300}
                    height={512}
                    className=" relative rounded-md p-4 dark:hidden"
                  />
                  <Image
                    src="/chat_light_mac.png"
                    alt="Picture of logo"
                    width={900}
                    height={512}
                    className=" relative rounded-md p-4 dark:hidden"
                  />
                </div>
              </div>
            </div>
          </section>

          <footer className="pb-16 text-sm leading-6">
            <div className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
              <div className="flex">
                <div className="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
                  <div className="lg:flex-none lg:w-1/2">
                    <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                      {dictionary["home-page"]["Getting Started"]}
                    </h2>
                    <ul className="mt-3 space-y-2">
                      <li>
                        <a
                          className="hover:text-slate-900 dark:hover:text-slate-300"
                          href="https://github.com/zdlpsina/zizdlp"
                        >
                          {dictionary["home-page"].Prerequisite}
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-slate-900 dark:hover:text-slate-300"
                          href="https://github.com/zdlpsina/zizdlp"
                        >
                          {dictionary["home-page"]["How to use"]}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:flex-none lg:w-1/2">
                    <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                      {dictionary["home-page"]["Core Concepts"]}
                    </h2>
                    <ul className="mt-3 space-y-2">
                      <li>
                        <a
                          className="hover:text-slate-900 dark:hover:text-slate-300"
                          href="https://github.com/zdlpsina/zizdlp"
                        >
                          {dictionary["home-page"]["Responsive Design"]}
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-slate-900 dark:hover:text-slate-300"
                          href="https://github.com/zdlpsina/zizdlp"
                        >
                          {dictionary["home-page"]["Quick response"]}
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-slate-900 dark:hover:text-slate-300"
                          href="https://github.com/zdlpsina/zizdlp"
                        >
                          {dictionary["home-page"]["Dark Mode"]}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
                  <div className="lg:flex-none lg:w-1/2">
                    <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                      {dictionary["home-page"].Community}
                    </h2>
                    <ul className="mt-3 space-y-2">
                      <li>
                        <a
                          className="hover:text-slate-900 dark:hover:text-slate-300"
                          href="https://github.com/zdlpsina/zizdlp"
                        >
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-slate-900 dark:hover:text-slate-300"
                          href="https://github.com/zdlpsina/zizdlp"
                        >
                          Bilibili
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-slate-900 dark:hover:text-slate-300"
                          href="https://github.com/zdlpsina/zizdlp"
                        >
                          YouTube
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:flex-none lg:w-1/2">
                    <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                      {dictionary["home-page"]["Friends Link"]}
                    </h2>
                    <ul className="mt-3 space-y-2">
                      <li>
                        <a
                          className="hover:text-slate-900 dark:hover:text-slate-300"
                          href="https://linchat.zizdlp.com/ios"
                        >
                          LinChat APP
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-slate-900 dark:hover:text-slate-300"
                          href="https://zizdlp.com/"
                        >
                          AIWIKI
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-16 pt-10 flex items-center justify-start">
                <Link
                  href="/"
                  className="md:mr-1 flex-none w-[1.8rem] overflow-hidden md:w-auto"
                >
                  <Image
                    src="/60.png"
                    className=" w-10 h-10  rounded-md "
                    alt="LOGO"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href="/" className="flex-col items-center">
                  <h1 className="font-bold text-xl md:text-2xl dark:text-slate-50 cursor-pointer px-4">
                    Lin
                    <span className="text-blue-500 dark:text-blue-400">
                      Chat
                    </span>
                  </h1>
                  <span className="font-sm px-4">
                    {dictionary["home-page"]["All rights reserved."]}
                  </span>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
