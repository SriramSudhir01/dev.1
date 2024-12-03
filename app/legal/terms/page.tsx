export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>By accessing or using Bgremoval.in, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Service Description</h2>
        <p>Bgremoval.in provides AI-powered background removal services for images. The service is provided "as is" without warranties of any kind.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Obligations</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>You must be at least 13 years old to use the service</li>
          <li>You agree not to upload illegal or harmful content</li>
          <li>You are responsible for maintaining account security</li>
          <li>You agree not to abuse or overload the service</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property Rights</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>You retain rights to your uploaded images</li>
          <li>We claim no ownership over your content</li>
          <li>Our service, branding, and technology are protected by intellectual property laws</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Prohibited Activities</h2>
        <p>Users are prohibited from:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Uploading illegal or copyrighted content</li>
          <li>Attempting to breach security measures</li>
          <li>Interfering with service operation</li>
          <li>Scraping or data mining</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
        <p>We shall not be liable for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Service interruptions or errors</li>
          <li>Data loss or corruption</li>
          <li>Indirect or consequential damages</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Termination</h2>
        <p>We reserve the right to terminate or suspend access to our service immediately, without prior notice, for any violation of these Terms.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Users will be notified of significant changes.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
        <p>These terms shall be governed by and construed in accordance with the laws of India.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
        <p>For legal inquiries:</p>
        <p>Email: legal@bgremoval.in</p>
      </div>
    </div>
  );
}