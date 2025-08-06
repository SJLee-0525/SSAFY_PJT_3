import { IconProps } from "@/types/iconProps";

import useAuthenticateStore from "@stores/authenticateStore";

const EditIcon = ({
  width = 28,
  height = 28,
  strokeColor,
  onClick,
}: IconProps) => {
  const { currentTheme } = useAuthenticateStore();

  if (!strokeColor) {
    strokeColor = currentTheme === "theme-night" ? "#e9e9e9" : "#7d7983";
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M5.83333 22.1667H7.49583L18.9 10.7625L17.2375 9.1L5.83333 20.5042V22.1667ZM3.5 24.5V19.5417L18.9 4.17083C19.1333 3.95694 19.391 3.79167 19.6729 3.675C19.9549 3.55833 20.2514 3.5 20.5625 3.5C20.8736 3.5 21.175 3.55833 21.4667 3.675C21.7583 3.79167 22.0111 3.96667 22.225 4.2L23.8292 5.83333C24.0625 6.04722 24.2326 6.3 24.3396 6.59167C24.4465 6.88333 24.5 7.175 24.5 7.46667C24.5 7.77778 24.4465 8.07431 24.3396 8.35625C24.2326 8.63819 24.0625 8.89583 23.8292 9.12917L8.45833 24.5H3.5ZM18.0542 9.94583L17.2375 9.1L18.9 10.7625L18.0542 9.94583Z"
        fill={strokeColor}
      />
    </svg>
  );
};

export default EditIcon;
