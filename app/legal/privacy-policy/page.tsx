export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Personal Information</h3>
        <p>We collect information that you provide directly to us:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Email address (when contacting support)</li>
          <li>Usage data and analytics</li>
          <li>Images you upload for processing</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Automatically Collected Information</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Usage statistics</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
        <p>We use the collected information for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Providing and maintaining our services</li>
          <li>Improving user experience</li>
          <li>Analyzing usage patterns</li>
          <li>Communicating with users</li>
          <li>Preventing fraud and abuse</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cookies and Tracking</h2>
        <p>We use cookies and similar tracking technologies to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Remember your preferences</li>
          <li>Analyze site traffic</li>
          <li>Personalize content</li>
          <li>Serve targeted advertisements</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Google Analytics for website analytics</li>
          <li>Google AdSense for advertising</li>
          <li>Cloud storage providers for image processing</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
        <p>We implement security measures including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>SSL/TLS encryption</li>
          <li>Secure data storage</li>
          <li>Regular security audits</li>
          <li>Access controls</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access your personal data</li>
          <li>Request data deletion</li>
          <li>Opt-out of marketing communications</li>
          <li>Object to data processing</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children's Privacy</h2>
        <p>Our service is not intended for children under 13. We do not knowingly collect information from children under 13.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Privacy Policy</h2>
        <p>We may update this privacy policy periodically. We will notify users of any material changes via email or website notice.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Information</h2>
        <p>For privacy-related inquiries:</p>
        <p>Email: privacy@bgremoval.in</p>
      </div>
    </div>
  );
}