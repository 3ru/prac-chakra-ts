import React, { memo, VFC, ReactNode } from "react";
import { Button } from "@chakra-ui/react";
type Props = {
	children: ReactNode;
	disabled?: boolean;
	loading?: boolean;
	onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
	const { children, disabled = false, loading = false, onClick } = props;
	return (
		<Button
			bg="teal.400"
			color="white"
			_hover={disabled ? {} : { opacity: 0.6 }}
			disabled={disabled || loading}
			isLoading={loading}
			onClick={onClick}
		>
			{children}
		</Button>
	);
});
