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
    <div className="max-w-2xl mx-auto mt-10  p-6 rounded-md text-gray-700 dark:text-gray-200">
      <h1 className="text-2xl font-semibold mb-4">服务政策</h1>
      <p className=" mb-4">
        欢迎使用我们的服务。本服务政策阐述了您在使用我们的服务时的权利和责任。请仔细阅读以下内容。
      </p>
      <h2 className="text-lg font-semibold mb-2">1. 服务概述</h2>
      <p className=" mb-4">
        我们的服务致力于提供优质的体验。在使用我们的服务之前，请确保您已阅读并同意本服务政策。
      </p>
      <h2 className="text-lg font-semibold mb-2">2. 用户责任</h2>
      <p className=" mb-4">
        在使用我们的服务时，请确保您遵守适用的法律法规。禁止使用我们的服务进行非法活动或侵犯他人权利。
      </p>
      <h2 className="text-lg font-semibold mb-2">3. 数据保护</h2>
      <p className=" mb-4">
        我们尊重用户隐私，会采取适当的措施保护用户数据。有关详细信息，请参阅我们的隐私政策。
      </p>
      <p className=" mb-4">如有任何疑问或问题，请随时与我们联系。</p>
    </div>
  );
}
