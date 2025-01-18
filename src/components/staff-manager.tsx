"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { STATES, STATE_DISTRICTS } from "@/lib/utils";
import { useState } from "react";

export const StaffManager = () => {
	const [selectedState, setSelectedState] = useState(null);
	const [selectedDistrict, setSelectedDistrict] = useState(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted");
	};
	return (
		<TabsContent value="staff-manager">
			<form onSubmit={handleSubmit} className="space-y-6">
				<Card>
					<CardContent className="p-6">
						<h2 className="text-xl font-semibold mb-6">
							Staff Manger Information
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="space-y-2">
								<Label htmlFor="firstname">
									First Name
									<span className="text-[#C41E3A]">*</span>
								</Label>
								<Input
									id="firstname"
									name="firstname"
									placeholder="First Name"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="lastname">
									Last Name
									<span className="text-[#C41E3A]">*</span>
								</Label>
								<Input
									id="lastname"
									name="lastname"
									placeholder="Last Name"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="age">
									Age
									<span className="text-[#C41E3A]">*</span>
								</Label>
								<Input id="age" name="age" placeholder="Age" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="email">
									Email
									<span className="text-[#C41E3A]">*</span>
								</Label>
								<Input
									id="email"
									name="email"
									placeholder=" Email"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="phone">
									Mobile
									<span className="text-[#C41E3A]">*</span>
								</Label>
								<Input
									id="phone"
									name="phone"
									placeholder="Phone"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="state">
									State
									<span className="text-[#C41E3A]">*</span>
								</Label>
								<Select required>
									<SelectTrigger>
										<SelectValue placeholder="Select State" />
									</SelectTrigger>
									<SelectContent>
										{STATES.map((state) => (
											<SelectItem
												key={state}
												value={state}
											>
												{state}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-2">
								<Label htmlFor="district">
									District
									<span className="text-[#C41E3A]">*</span>
								</Label>
								<Select required>
									<SelectTrigger>
										<SelectValue placeholder="Select District" />
									</SelectTrigger>
									<SelectContent>
										{selectedState !== null &&
											STATE_DISTRICTS[selectedState].map(
												(district) => (
													<SelectItem
														key={district}
														value={district}
													>
														{district}
													</SelectItem>
												)
											)}
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-2">
								<Label htmlFor="address">Address</Label>
								<Input
									id="address"
									name="address"
									placeholder="Enter your Address"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="pincode">
									Pincode
									<span className="text-[#C41E3A]">*</span>
								</Label>
								<Input
									id="pincode"
									name="pincode"
									placeholder="Enter your Pincode"
								/>
							</div>
						</div>
					</CardContent>
				</Card>

				<div className="flex justify-end gap-4">
					<Button variant="outline" type="button">
						Cancel
					</Button>
					<Button className="bg-red-500" type="submit">
						Save & Continue
					</Button>
				</div>
			</form>
		</TabsContent>
	);
};
