import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalCloseButton,
	ModalBody,
	FormLabel,
	Input,
	Stack,
	FormControl,
} from "@chakra-ui/react";
import React, { ChangeEvent, memo, VFC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
	user: User | null;
	isOpen: boolean;
	isAdmin?: boolean;
	onClose: () => void;
};

export const UserDetailModeal: VFC<Props> = memo((props) => {
	const { user, isOpen, isAdmin = false, onClose } = props;

	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	useEffect(() => {
		setUsername(user?.username ?? "");
		setName(user?.name ?? "");
		setEmail(user?.email ?? "");
		setPhone(user?.phone ?? "");
	}, [user]);

	const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
		setUsername(e.target.value);
	const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
		setName(e.target.value);
	const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);
	const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
		setPhone(e.target.value);

	const onClickUpdate = () => alert("updated");

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			autoFocus={false}
			motionPreset="slideInRight"
		>
			<ModalOverlay />
			<ModalContent pb={2}>
				<ModalHeader>ユーザー詳細</ModalHeader>
				<ModalCloseButton />
				<ModalBody mx={4}>
					<Stack spacing={4}>
						<FormControl>
							<FormLabel>名前</FormLabel>
							<Input
								value={username}
								onChange={onChangeUserName}
								isReadOnly={!isAdmin}
							/>
							<FormLabel>フルネーム</FormLabel>
							<Input
								value={name}
								onChange={onChangeName}
								isReadOnly={!isAdmin}
							/>
							<FormLabel>メールアドレス</FormLabel>
							<Input
								value={email}
								onChange={onChangeEmail}
								isReadOnly={!isAdmin}
							/>
							<FormLabel>電話番号</FormLabel>
							<Input
								value={phone}
								onChange={onChangePhone}
								isReadOnly={!isAdmin}
							/>
						</FormControl>
					</Stack>
				</ModalBody>
				{isAdmin && (
					<ModalFooter>
						<PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
					</ModalFooter>
				)}
			</ModalContent>
		</Modal>
	);
});
