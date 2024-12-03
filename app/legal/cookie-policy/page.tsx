export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
        <p>Cookies are small text files stored on your device when you visit our website. They help us provide and improve our services.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Types of Cookies We Use</h2>
        <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Essential Cookies</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Required for website functionality</li>
          <li>Cannot be disabled</li>
          <li>Do not store personal information</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Analytics Cookies</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Help us understand how visitors use our site</li>
          <li>Collect anonymous statistical data</li>
          <li>Used to improve our service</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">2.3 Advertising Cookies</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Used to deliver relevant advertisements</li>
          <li>Track ad performance</li>
          <li>Provided by third-party advertisers</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Third-Party Cookies</h2>
        <p>We use cookies from:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Google Analytics</li>
          <li>Google AdSense</li>
          <li>Social media platforms</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookie Management</h2>
        <p>You can control cookies through your browser settings:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Block all cookies</li>
          <li>Delete existing cookies</li>
          <li>Allow only certain cookies</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Impact of Disabling Cookies</h2>
        <p>Disabling cookies may affect:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Website functionality</li>
          <li>User experience</li>
          <li>Personalized content</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Updates to Cookie Policy</h2>
        <p>We may update this policy periodically. Changes will be posted on this page.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
        <p>For cookie-related inquiries:</p>
        <p>Email: privacy@bgremoval.in</p>
      </div>
    </div>
  );
}