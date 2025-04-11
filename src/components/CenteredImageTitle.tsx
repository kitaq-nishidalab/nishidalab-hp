import Image from "next/image";

type Props = {
  imageUrl: string;
  title: string;
};

export const CenteredImageTitle = ({ imageUrl, title }: Props) => {
  return (
    <div className="relative w-full h-28 md:h-48">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4">
          {title}
        </h1>
      </div>
    </div>
  );
};
