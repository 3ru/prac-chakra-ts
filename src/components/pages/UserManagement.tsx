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
import { UserDetailModeal } from "../organisms/user/UserDetailModal";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { getUsers, loading, users } = useAllUsers();
	const { onSelectUser, selectedUser } = useSelectUser();
	const { loginUser } = useLoginUser();

	useEffect(() => {
		getUsers();
	}, []);

	const onClickUser = useCallback(
		(id: number) => {
			onSelectUser({ id, users, onOpen });
		},
		[users, onSelectUser, onOpen]
	);

	return (
		<>
			{loading ? (
				<Center h="100vh">
					<Spinner />
				</Center>
			) : (
				<Wrap p={{ base: 4, md: 10 }} justify="space-around">
					{users.map((user) => (
						<WrapItem key={user.id} mx="auto">
							<UserCard
								id={user.id}
								imageURL="https://source.unsplash.com/random"
								userName={user.username}
								fullName={user.name}
								onClick={onClickUser}
							/>
						</WrapItem>
					))}
				</Wrap>
			)}
			<UserDetailModeal
				user={selectedUser}
				isOpen={isOpen}
				onClose={onClose}
				isAdmin={loginUser?.isAdmin}
			/>
		</>
	);
});
