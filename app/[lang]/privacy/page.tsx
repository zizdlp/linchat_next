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
    <div className="max-w-2xl mx-auto p-6 rounded-md pt-10 mt-10 text-gray-700 dark:text-gray-200">
      <h1 className="text-2xl font-semibold mb-4">隐私政策</h1>
      <p className="mb-4">
        感谢您使用我们的应用。我们非常重视您的隐私，并致力于保护您的个人信息。我们的应用不收集任何与您个人身份相关的信息。
      </p>
      <p className="mb-4">
        我们的应用使用蓝牙功能来提供更好的用户体验，但不会记录或存储与您身份有关的数据。您的隐私对我们至关重要。
      </p>
      <p className="mb-4">
        如果您对隐私政策有任何疑问或意见，请随时与我们联系。
      </p>
    </div>
  );
}
