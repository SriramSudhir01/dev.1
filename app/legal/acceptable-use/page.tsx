export default function AcceptableUsePolicy() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Acceptable Use Policy</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptable Use</h2>
        <p>You agree to use our service only for lawful purposes and in accordance with this policy.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Prohibited Uses</h2>
        <p>You must not use our service:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>For any unlawful purpose</li>
          <li>To upload illegal or harmful content</li>
          <li>To infringe on intellectual property rights</li>
          <li>To transmit malware or viruses</li>
          <li>To conduct automated scraping</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Content Standards</h2>
        <p>All content must comply with:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Applicable laws and regulations</li>
          <li>Community guidelines</li>
          <li>Copyright and trademark laws</li>
          <li>Privacy rights</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Service Limitations</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Maximum file size: 10MB</li>
          <li>Supported formats: JPG, PNG, WEBP</li>
          <li>Fair usage limits apply</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Enforcement</h2>
        <p>We reserve the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Remove any content</li>
          <li>Suspend or terminate accounts</li>
          <li>Report violations to authorities</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Information</h2>
        <p>For policy-related inquiries:</p>
        <p>Email: support@bgremoval.in</p>
      </div>
    </div>
  );
}