"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterBloodBankInfo from "@/components/register-blood-bank-info";
import RegisterBloodBankDonationInfo from "@/components/register-blood-bank-donation-info";
import { Info, Landmark, User } from "lucide-react";
import { StaffManager } from "@/components/staff-manager";

export default function RegisterBloodBank() {
	const [activeTab, setActiveTab] = useState("blood-bank");

	return (
		<div className="container mx-auto py-6 max-w-7xl">
			<h1 className="text-2xl font-bold text-[#0b3052] mb-6">
				Blood Bank Details
			</h1>

			<Tabs defaultValue="blood-bank" className="space-y-6">
				<TabsList className="w-full justify-start h-auto p-0 bg-transparent gap-4">
					<TabsTrigger
						value="staff-manager"
						className={`data-[state=active]:bg-red-500 data-[state=active]:text-white px-6 py-3 rounded-xl border-b-2 ${
							activeTab === "blood-bank"
								? "border-[#f1f6ff]"
								: "border-transparent"
						}`}
						onClick={() => setActiveTab("blood-bank")}
					>
						<span className="flex items-center gap-3">
							Staff Manager
							<User className="w-6 h-6" />
						</span>
					</TabsTrigger>
					<TabsTrigger
						value="blood-bank"
						className={`data-[state=active]:bg-red-500 data-[state=active]:text-white px-6 py-3 rounded-xl border-b-2 ${
							activeTab === "blood-bank"
								? "border-[#f1f6ff]"
								: "border-transparent"
						}`}
						onClick={() => setActiveTab("blood-bank")}
					>
						<span className="flex items-center gap-3">
							Blood Bank Information
							<Landmark className="w-6 h-6" />
						</span>
					</TabsTrigger>
					<TabsTrigger
						value="donation"
						className={`data-[state=active]:bg-red-500  data-[state=active]:text-white px-6 py-3 rounded-xl`}
						onClick={() => setActiveTab("donation")}
					>
						<span className="flex items-center gap-3">
							Donation Information
							<Info className="w-6 h-6" />
						</span>
					</TabsTrigger>
				</TabsList>
				<StaffManager />
				<RegisterBloodBankInfo />
				<RegisterBloodBankDonationInfo />
			</Tabs>
		</div>
	);
}
