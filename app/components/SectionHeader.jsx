import HorizentalLine from "@/components/layout/HorizentalLine";

export default function SectionHeader({ text }) {
  return (
    <>
      <h2 className="text-4xl font-medium leading-tight text-center">{text}</h2>
      <HorizentalLine />
    </>
  );
}
