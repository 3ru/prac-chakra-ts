import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	FormLabel,
	Input,
	Stack,
	FormControl,
} from "@chakra-ui/react";
import React, { memo, VFC } from "react";
import { User } from "../../../types/api/user";
type Props = {
	user: User | null;
	isOpen: boolean;
	onClose: () => void;
};

export const UserDetailModeal: VFC<Props> = memo((props) => {
	const { user, isOpen, onClose } = props;

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			autoFocus={false}
			motionPreset="slideInRight"
		>
			<ModalOverlay />
			<ModalContent pb={6}>
				<ModalHeader>ユーザー詳細</ModalHeader>
				<ModalCloseButton />
				<ModalBody mx={4}>
					<Stack spacing={4}>
						<FormControl>
							<FormLabel>名前</FormLabel>
							<Input value={user?.username} isReadOnly />
							<FormLabel>フルネーム</FormLabel>
							<Input value={user?.name} isReadOnly />
							<FormLabel>メールアドレス</FormLabel>
							<Input value={user?.email} isReadOnly />
							<FormLabel>電話番号</FormLabel>
							<Input value={user?.phone} isReadOnly />
						</FormControl>
					</Stack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
});
