type Props = {
  id: string;
  title: string;
  thumbnailImg: string;
  releaseYear: string;
  seen: boolean;
  onList: boolean;
};

export default function MovieCard({
  id,
  title,
  thumbnailImg,
  releaseYear,
}: Props) {
  return (
    <a
      href={`/movie/${id}`}
      style={{
        backgroundImage: `url(${thumbnailImg})`,
        textShadow: "0 1px 1px black",
      }}
      className="bg-cover bg-center flex items-end h-64 rounded-lg shadow-md text-white p-4 font-semibold uppercase opacity-90 hover:opacity-100 transition"
    >
      {title}
    </a>
  );
}
