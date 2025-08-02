import Link from "next/link";
export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4 text-gray-600">Last updated: August 1, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to Get Help! These Terms and Conditions (`Terms`) govern your
          use of our platform, available through our website and mobile app. By
          accessing or using Get Help, you agree to be bound by these Terms. If
          you do not agree, please do not use our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. User Accounts</h2>
        <p>
          You must be at least 13 years old to use Get Help. When you register,
          you agree to provide accurate, complete, and up-to-date information.
          You are responsible for keeping your account secure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Service Use</h2>
        <p>
          Get Help connects users who need assistance with those who can provide
          it. We do not guarantee the quality, safety, or legality of any help
          offered or received. Users are solely responsible for their
          interactions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Prohibited Activities</h2>
        <p>You agree not to use Get Help to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Engage in illegal or harmful activities</li>
          <li>Harass, abuse, or harm others</li>
          <li>Post false or misleading information</li>
          <li>Upload viruses or malicious code</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Privacy</h2>
        <p>
          We respect your privacy. Please review our{" "}
          <Link href="/privacy" className="text-blue-600 underline">
            Privacy Policy
          </Link>{" "}
          to learn how we collect and use data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          6. Limitation of Liability
        </h2>
        <p>
          Get Help is provided as &quot; is and as available &quot;. We are not
          liable for any damages arising from your use of the platform,
          including direct, indirect, incidental, or consequential damages.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          7. Changes to These Terms
        </h2>
        <p>
          We may update these Terms from time to time. Changes will be posted on
          this page with an updated date. Continued use of the service means you
          accept the updated terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
        <p>
          If you have questions or concerns about these Terms, please contact us
          at: <br />
          <a
            href="mailto:email@mutalibb.xyz"
            className="text-blue-600 underline"
          >
            support@gethelpapp.com
          </a>
        </p>
      </section>
    </div>
  );
}
