interface ChartIconProps {
  width?: number;
  height?: number;
  fill?: string;
  style?: React.CSSProperties;
}

// ... rest of the component
const FolderIcon = ({
  width = 24,
  height = 24,
  fill = "#000",
  style,
}: ChartIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 10V7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3H7.34315C8.16065 3 8.5694 3 8.93694 3.15224C9.30448 3.30448 9.59351 3.59351 10.1716 4.17157L10.8284 4.82843C11.4065 5.40649 11.6955 5.69552 12.0631 5.84776C12.4306 6 12.8394 6 13.6569 6H15C16.8856 6 17.8284 6 18.4142 6.58579C19 7.17157 19 8.11438 19 10V13C19 14.8856 19 15.8284 18.4142 16.4142C17.8284 17 16.8856 17 15 17H10"
        stroke={fill}
        stroke-width="2"
      />
      <path d="M2 14.5L4.5 17L9.5 12" stroke="#33363F" stroke-width="2" />
    </svg>
  );
};
export default FolderIcon;

// mẫu chung
