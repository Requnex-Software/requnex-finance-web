import React from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Terms = () => {
	return (
		<div className="min-h-screen bg-background text-black">
			<Header />

			<main className="container py-8" style={{ marginTop: "60px" }}>
				<p className="text-sm text-black/60 italic mb-6">Last updated: January 2, 2026</p>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">1. Acceptance of Terms</h2>
					<p className="text-black/70">By downloading, installing, or using Requnex Finance ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">2. Description of Service</h2>
					<p className="text-black/70">Requnex Finance is a personal finance management application that allows users to:</p>
					<ul className="list-disc ml-6 mt-2 text-black/70 space-y-1">
						<li>Track income and expenses</li>
						<li>Set and monitor budgets</li>
						<li>Create savings goals</li>
						<li>View financial analytics</li>
						<li>Manage multiple currencies</li>
						<li>Track recurring expenses</li>
					</ul>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">3. User Accounts</h2>
					<h3 className="text-lg font-semibold mt-3">3.1 Registration</h3>
					<p className="text-black/70">To use certain features, you must create an account. You agree to provide accurate, current, and complete information during registration.</p>

					<h3 className="text-lg font-semibold mt-3">3.2 Account Security</h3>
					<p className="text-black/70">You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately of any unauthorized use.</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">4. User Responsibilities</h2>
					<p className="text-black/70">You agree to:</p>
					<ul className="list-disc ml-6 mt-2 text-black/70 space-y-1">
						<li>Use the App only for lawful purposes</li>
						<li>Not attempt to gain unauthorized access to our systems</li>
						<li>Not use the App to transmit malware or harmful code</li>
						<li>Not interfere with other users' use of the App</li>
						<li>Provide accurate financial information for your own records</li>
					</ul>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">5. Intellectual Property</h2>
					<p className="text-black/70">The App, including its design, features, and content, is owned by Requnex and protected by intellectual property laws. You may not copy, modify, distribute, or reverse engineer any part of the App without our written permission.</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">6. Financial Disclaimer</h2>
					<p className="text-black/70">IMPORTANT: Requnex Finance is a personal finance tracking tool only. We do NOT provide:</p>
					<ul className="list-disc ml-6 mt-2 text-black/70 space-y-1">
						<li>Financial advice</li>
						<li>Investment recommendations</li>
						<li>Tax advice</li>
						<li>Professional accounting services</li>
					</ul>
					<p className="text-black/70 mt-3">The App is for informational and personal tracking purposes only. Always consult qualified professionals for financial decisions.</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">7. Data Accuracy</h2>
					<p className="text-black/70">Currency exchange rates are provided by the National Bank of Ukraine (NBU) and are for informational purposes only. We do not guarantee the accuracy, completeness, or timeliness of exchange rate data.</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">8. Limitation of Liability</h2>
					<p className="text-black/70">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
					<ul className="list-disc ml-6 mt-2 text-black/70 space-y-1">
						<li>The App is provided "AS IS" without warranties of any kind</li>
						<li>We are not liable for any damages arising from your use of the App</li>
						<li>We are not responsible for data loss, although we take reasonable measures to prevent it</li>
						<li>Our total liability shall not exceed the amount you paid for the App (if any)</li>
					</ul>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">9. Termination</h2>
					<p className="text-black/70">We reserve the right to suspend or terminate your account if you violate these Terms. You may delete your account at any time through the App settings.</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">10. Changes to Terms</h2>
					<p className="text-black/70">We may update these Terms from time to time. Continued use of the App after changes constitutes acceptance of the new Terms. We will notify you of significant changes.</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">11. Governing Law</h2>
					<p className="text-black/70">These Terms are governed by the laws of Ukraine. Any disputes shall be resolved in the courts of Ukraine.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-bold mb-2">12. Contact</h2>
					<p className="text-black/70">For questions about these Terms, contact us at:</p>
					<p className="text-black/70 mt-3">Email: requnexsoftware@gmail.com</p>
					<p className="text-black/70">Address: Poland</p>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Terms;

