type Props = {
  title: string;
  thumb: string;
  slug: string;
};

export default function MovieCard({ title, thumb, slug }: Props) {
  return (
    <a
      href={`/${slug}`}
      style={{
        backgroundImage: `url(${thumb})`,
        textShadow: "0 1px 1px black",
      }}
      className="bg-cover bg-center block h-64 rounded-lg shadow-md text-white p-4 font-semibold uppercase"
    >
      {title}
    </a>
  );
}
