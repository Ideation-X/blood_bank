"use client"
import { useClerk, UserButton } from "@clerk/nextjs";
import { useState } from "react";


const UserAvtar = () => {

    const { signOut } = useClerk();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="relative">
			{/* UserButton acts as the trigger */}
			<div onClick={() => setIsOpen(!isOpen)}>
				<UserButton afterSignOutUrl="/" />
			</div>

			{/* Custom Dropdown Menu */}
			{isOpen && (
				<div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md z-50">
					<button
						onClick={() => {
							setIsOpen(false);
							alert("Custom Action Triggered");
						}}
						className="block w-full px-4 py-2 text-left hover:bg-gray-100"
					>
						Custom Action
					</button>
					<button
						onClick={() => {
							setIsOpen(false);
							signOut();
						}}
						className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
					>
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};
export default UserAvtar;
