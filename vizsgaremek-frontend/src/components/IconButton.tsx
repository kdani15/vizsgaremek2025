import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
};

export default function IconButton({ children, ...rest }: Props) {
  return (
    <button
      type="button"
      {...rest}
      className="text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-gray-500 dark:hover:bg-gray-600"
    >
      {children}
    </button>
  );
}
