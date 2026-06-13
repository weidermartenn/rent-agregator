interface Props {
  text: string;
  onClick?: () => void;
  onClickForm?: () => void;
}

export default function Button({ ...props }: Props) {
  return (
    <button
      onClick={props.onClick}
      className="min-w-24 border border-gray-100 px-4 py-2 rounded-2xl text-sm hover:bg-gray-100 hover:text-black transition duration-300 ease-in-out"
    >
      {props.text}
    </button>
  );
}
