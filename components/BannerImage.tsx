import Image from "next/image";
import bannerImage from "@/public/maurya-textile-banner.jpg";

export default function BannerImage() {
  return (
    <Image
      src={bannerImage}
      alt="Maurya Textile Engg. Works — Manufacturer & Repairer of Textile Machinery"
      priority
      placeholder="blur"
      className="h-auto w-full max-h-[100dvh] max-w-full object-contain"
    />
  );
}
