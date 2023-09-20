export default function MyButton(props) {
  const { variant, className, children, icon, onClick, ...restProps } = props;
  switch (variant) {
    case "primary":
      return (
        <button
          onClick={onClick}
          className={`bg-primary-400 hover:bg-primary-500 border-primary-400
              border-2 rounded-full w-28 h-10 transition duration-200`}
        >
          {children}
        </button>
      );
    case "secondary":
      return (
        <button
          onClick={onClick}
          className={`
              border-secondary-400 hover:bg-secondary-400 border-2 rounded-full w-28 h-10 transition duration-200`}
        >
          {children}
        </button>
      );
    case "tertiary":
      return (
        <button
          onClick={onClick}
          className={`${className} border-2 rounded-full w-28 h-10`}
        >
          {children}
        </button>
      );
    case "icon":
      return;
  }
}
