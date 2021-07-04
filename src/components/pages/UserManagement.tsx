import { Wrap, WrapItem } from "@chakra-ui/react";
import React, { memo, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
	return (
		<Wrap p={{ base: 4, md: 10 }}>
			<WrapItem>
				<UserCard
					imageURL="https://source.unsplash.com/random"
					userName="Ru"
					fullName="Ryuya Hasegawa"
				/>
			</WrapItem>
		</Wrap>
	);
});
