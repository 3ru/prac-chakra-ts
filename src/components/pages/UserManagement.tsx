/* eslint-disable react-hooks/exhaustive-deps */
import {
	Center,
	Spinner,
	Wrap,
	WrapItem,
	useDisclosure,
} from "@chakra-ui/react";
import React, { memo, useCallback, useEffect, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModeal } from "../organisms/user/UserDetailModal";

export const UserManagement: VFC = memo(() => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { getUsers, loading, users } = useAllUsers();

	useEffect(() => {
		getUsers();
	}, []);

	const onClickUser = useCallback(() => onOpen(), []);

	return (
		<>
			{loading ? (
				<Center h="100vh">
					<Spinner />
				</Center>
			) : (
				<Wrap p={{ base: 4, md: 10 }}>
					{users.map((user) => (
						<WrapItem key={user.id} mx="auto">
							<UserCard
								imageURL="https://source.unsplash.com/random"
								userName={user.username}
								fullName={user.name}
								onClick={onClickUser}
							/>
						</WrapItem>
					))}
				</Wrap>
			)}
			<UserDetailModeal isOpen={isOpen} onClose={onClose} />
		</>
	);
});
