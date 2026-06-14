import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-slate-50">
      <Image
        src="/maurya-textile-banner.jpg"
        alt="Maurya Textile Engg. Works — Manufacturer & Repairer of Textile Machinery"
        width={1024}
        height={1024}
        priority
        sizes="100vw"
        className="h-auto w-full max-h-[100dvh] max-w-full object-contain"
      />
    </main>
  );
}
