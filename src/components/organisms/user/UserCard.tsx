import { Box, Stack, Image, Text } from "@chakra-ui/react";
import React, { memo, VFC } from "react";
type Props = {
	imageURL: string;
	userName: string;
	fullName: string;
	onClick: () => void;
};

export const UserCard: VFC<Props> = memo((props) => {
	const { imageURL, userName, fullName, onClick } = props;
	return (
		<Box
			w="260px"
			h="260px"
			bg="white"
			borderRadius="10px"
			shadow="md"
			p={4}
			_hover={{ cursor: "pointer", opacity: 0.8 }}
			onClick={onClick}
		>
			<Stack textAlign="center">
				<Image
					borderRadius="full"
					boxSize="160px"
					src={imageURL}
					alt={userName}
					m="auto"
				/>
				<Text fontSize="lg" fontWeight="bold">
					{userName}
				</Text>
				<Text fontSize="sm" color="gray">
					{fullName}
				</Text>
			</Stack>
		</Box>
	);
});
