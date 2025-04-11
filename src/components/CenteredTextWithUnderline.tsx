export default function CenteredTextWithUnderline({ text }: { text: string }) {
  return (
    <div className="text-center">
      <div className="inline-block px-4">
        <span className="text-lg:text-2xl">{text}</span>
      </div>
      <div className="mt-2 mb-8 border-t-2 border-gray-300" />
    </div>
  );
}
