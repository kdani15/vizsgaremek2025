type Props = {
  id: string;
  title: string;
  thumb: string;
  releaseYear: string;
  seen: boolean;
  onList: boolean;
};

export default function MovieCard({
  id,
  title,
  thumb,
  releaseYear,
  seen,
  onList,
}: Props) {
  return (
    <a
      href={`/${id}`}
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
