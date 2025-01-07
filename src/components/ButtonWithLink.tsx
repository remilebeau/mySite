type Props = {
  href: string;
  text: string;
};

export default function ButtonWithLink({ href, text }: Props) {
  return (
    <button className="w-full rounded-xl bg-green-700 p-4 text-3xl font-bold transition-all duration-300 ease-in-out hover:bg-black">
      <a target="_blank" rel="noreferrer" href={href}>
        {text}
      </a>
    </button>
  );
}
