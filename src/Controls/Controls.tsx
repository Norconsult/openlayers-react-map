import React from "react";

interface Props {
	children: React.ReactNode
}

const Controls = ({ children }: Props) => {
	return <div>{children}</div>;
};

export default Controls;
