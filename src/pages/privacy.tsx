import React from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Privacy = () => {
	return (
		<div className="min-h-screen bg-background text-black">
			<Header />

			<main className="container py-8" style={{ marginTop: "60px" }}>
				<p className="text-sm text-black/60 italic mb-6">Last updated: January 2, 2026</p>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">1. Introduction</h2>
					<p className="text-black/70">
						Welcome to Requnex Finance ("we", "our", or "us"). We are committed to protecting your personal
						information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and
						safeguard your information when you use our mobile application.
					</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">2. Information We Collect</h2>

					<h3 className="text-lg font-semibold mt-3">2.1 Personal Information</h3>
					<ul className="list-disc ml-6 mt-2 text-black/70 space-y-1">
						<li>Email address</li>
						<li>Password (encrypted)</li>
						<li>User preferences and settings</li>
					</ul>

					<h3 className="text-lg font-semibold mt-4">2.2 Financial Data</h3>
					<ul className="list-disc ml-6 mt-2 text-black/70 space-y-1">
						<li>Income records you enter</li>
						<li>Expense records you enter</li>
						<li>Budget categories and limits</li>
						<li>Savings goals</li>
						<li>Recurring expense schedules</li>
						<li>Currency preferences</li>
					</ul>

					<h3 className="text-lg font-semibold mt-4">2.3 Automatically Collected Information</h3>
					<ul className="list-disc ml-6 mt-2 text-black/70 space-y-1">
						<li>Device information (type, OS version)</li>
						<li>App usage statistics</li>
						<li>Error logs for troubleshooting</li>
					</ul>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">3. How We Use Your Information</h2>
					<ul className="list-disc ml-6 mt-2 text-black/70 space-y-1">
						<li>Provide and maintain our services</li>
						<li>Process your financial data for tracking and analytics</li>
						<li>Sync your data across devices</li>
						<li>Send important notifications about your account</li>
						<li>Improve our application and user experience</li>
						<li>Comply with legal obligations</li>
					</ul>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">4. Data Storage and Security</h2>

					<h3 className="text-lg font-semibold mt-3">4.1 Where Your Data is Stored</h3>
					  <p className="text-black/70">Your data is stored securely in Google Firebase cloud infrastructure, which is hosted in data centers that comply with industry security standards including SOC 1, SOC 2, and ISO 27001.</p>

					<h3 className="text-lg font-semibold mt-3">4.2 Security Measures</h3>
					<ul className="list-disc ml-6 mt-2 text-black/70 space-y-1">
						<li>Encryption of data in transit (TLS/SSL)</li>
						<li>Encryption of data at rest</li>
						<li>Secure authentication mechanisms</li>
						<li>Regular security assessments</li>
						<li>Access controls and monitoring</li>
					</ul>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">5. Data Sharing</h2>
					<p className="text-black/70">We do NOT sell, rent, or share your personal financial data with third parties for marketing purposes. We may share information only:</p>
					<ul className="list-disc ml-6 mt-2 text-black/70 space-y-1">
						<li>With your explicit consent</li>
						<li>To comply with legal obligations</li>
						<li>To protect our rights and prevent fraud</li>
						<li>With service providers who assist in app operations (under strict confidentiality agreements)</li>
					</ul>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">6. Your Rights</h2>
					<ul className="list-disc ml-6 mt-2 text-black/70 space-y-1">
						<li>Access your personal data</li>
						<li>Correct inaccurate data</li>
						<li>Request deletion of your data</li>
						<li>Export your data</li>
						<li>Withdraw consent at any time</li>
					</ul>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">7. Data Retention</h2>
					  <p className="text-black/70">We retain your data for as long as your account is active. If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it for legal purposes.</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">8. Children's Privacy</h2>
					  <p className="text-black/70">Our service is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">9. Changes to This Policy</h2>
					  <p className="text-black/70">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the app and updating the "Last updated" date.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-bold mb-2">10. Contact Us</h2>
					  <p className="text-black/70">If you have questions about this Privacy Policy or our data practices, please contact us at:</p>
					  <p className="text-black/70 mt-3">Email: requnexsoftware@gmail.com</p>
					  <p className="text-black/70">Address: Poland</p>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Privacy;

