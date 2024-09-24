import React, { ReactNode } from "react";

interface ButtonProps {
	onClick: () => void;
	children: ReactNode;
	className?: string;
}

export const Button: React.FC<ButtonProps> = ({
	onClick,
	children,
	className,
}) => {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
};
