export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4 text-gray-600">Last updated: August 1, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          At Get Help, your privacy is important to us. This Privacy Policy
          explains how we collect, use, and protect your information when you
          use our app and website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Information We Collect
        </h2>
        <p>We may collect the following types of information:</p>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>Personal Information:</strong> Name, email, phone number,
            profile photo, etc.
          </li>
          <li>
            <strong>Location Data:</strong> We collect real-time location if you
            grant permission, to help match users nearby.
          </li>
          <li>
            <strong>Device Information:</strong> Device type, operating system,
            and other technical data.
          </li>
          <li>
            <strong>Usage Data:</strong> How you interact with the app,
            including pages viewed, features used, and time spent.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. How We Use Your Information
        </h2>
        <p>
          Your data helps us provide and improve our services. Specifically, we
          use it to:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Create and manage your account</li>
          <li>Show relevant help requests or offers near you</li>
          <li>Enable communication between users</li>
          <li>Improve app functionality and user experience</li>
          <li>Send notifications and service-related messages</li>
          <li>Prevent fraud and ensure user safety</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          4. Sharing Your Information
        </h2>
        <p>
          We do not sell or rent your personal data. We may share your
          information:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            With other users (e.g., your name, photo, and contact if you respond
            to a request)
          </li>
          <li>With service providers who help us operate the app</li>
          <li>If required by law or to protect rights and safety</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data.
          However, no system is 100% secure. Please use strong passwords and
          avoid sharing account details.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Your Choices</h2>
        <p>
          You can update or delete your personal information at any time via
          your profile settings. You can also request deletion of your account
          by contacting us at the email below.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          7. Children&lsquo;s Privacy
        </h2>
        <p>
          Our services are not intended for children under 13. We do not
          knowingly collect data from anyone under 13. If we become aware of
          such data, we will delete it immediately.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          8. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of changes by updating the “Last updated” date and, where
          appropriate, providing additional notice in the app.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
          <br />
          <a
            href="mailto:support@gethelpapp.com"
            className="text-blue-600 underline"
          >
            support@gethelpapp.com
          </a>
        </p>
      </section>
    </div>
  );
}
