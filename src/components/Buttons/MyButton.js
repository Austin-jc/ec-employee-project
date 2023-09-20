import { IconButton } from "@mui/material";

export default function MyButton(props) {
  const { variant, className, children, onClick, ...restProps } = props;
  switch (variant) {
    case "primary":
      return (
        <button
          onClick={onClick}
          className={`bg-primary-400 hover:bg-primary-500  dark:bg-dark-primary-500 hover:dark:bg-dark-primary-600
               rounded-full w-24 h-10 transition-all duration-300`}
        >
          {children}
        </button>
      );
    case "secondary":
      return (
        <button
          onClick={onClick}
          className={`
              border-secondary-400 hover:bg-secondary-400 border-2 rounded-full w-24 h-10 transition-all duration-300`}
        >
          {children}
        </button>
      );
    case "tertiary":
      return (
        <button
          onClick={onClick}
          className={`${className} border-2 rounded-full w-20 h-10`}
        >
          {children}
        </button>
      );
    case "icon":
      return <IconButton onClick={onClick}>{children}</IconButton>;
  }
}
