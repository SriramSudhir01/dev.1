export default function DMCAPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">DMCA Policy</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. DMCA Notice & Takedown Policy</h2>
        <p>We respect intellectual property rights and expect our users to do the same. We will respond to notices of alleged copyright infringement that comply with applicable law.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Reporting Copyright Infringement</h2>
        <p>To file a copyright infringement notification, please send a written communication that includes:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>A physical or electronic signature of the copyright owner</li>
          <li>Identification of the copyrighted work claimed to be infringed</li>
          <li>Identification of the infringing material and its location</li>
          <li>Your contact information</li>
          <li>A statement of good faith belief in the infringement</li>
          <li>A statement of accuracy under penalty of perjury</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Counter-Notification</h2>
        <p>If you believe your content was wrongly removed, you may submit a counter-notice containing:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Your physical or electronic signature</li>
          <li>Identification of the removed material</li>
          <li>A statement under penalty of perjury</li>
          <li>Your contact information</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Repeat Infringers</h2>
        <p>We maintain a policy to terminate services to users who repeatedly infringe copyrights.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Information</h2>
        <p>Send DMCA notices to:</p>
        <p>Email: dmca@bgremoval.in</p>
        <p>Address: [Your Business Address]</p>
      </div>
    </div>
  );
}