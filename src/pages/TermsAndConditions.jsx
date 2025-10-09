import React from "react";
import { Link } from "react-router-dom";
const TermsConditions = () => {
  return (
    <div className="bg-white">
      {/* Hero-style heading */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-6 md:px-16 lg:px-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Terms <span className="text-cyan-600">& Conditions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Legal terms for using Rosewood Investigations’ website and services.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-16 lg:px-32">
          {/* Section 1 */}
          <h2 className="text-lg font-semibold text-black mb-2">1. Liability</h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            We try to ensure the accuracy of all of the content. However, we do not accept any liability for the use made by you of the content. The content of this site should only be used for information purposes and you should not rely on it to make (or refrain from making) any decision or take (or refrain from taking) any action.
            <br />
            <br />
            The site is for your personal use and is not to be used for any commercial purpose. As a result, Rosewood Investigations will not be responsible in any circumstances for your loss of profits. Rosewood Investigations will also not be responsible for any loss including wasted expenditure, corruption or destruction of data unless the loss results from something Rosewood Investigations has done wrong.
            <br />
            <br />
            Rosewood Investigations is not liable for any damages or losses resulting from your inability to use this site. Rosewood Investigations cannot promise that the site will be uninterrupted or entirely error free. Because of the nature of the internet, the site is provided on an “as available” basis. Rosewood Investigations will not be responsible to you if we are unable to provide the site for any reason beyond our control.
          </p>

          {/* Section 2 */}
          <h2 className="text-lg font-semibold text-black mb-2">2. Data Protection and Privacy</h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            Any details which you provide to us from which we can identify you are held and processed in accordance with our {" "}
            <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
          </p>

          {/* Section 3 */}
          <h2 className="text-lg font-semibold text-black mb-2">3. Changes to the Terms</h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            Rosewood Investigations may change the site or these terms at any time. If you use the site after Rosewood Investigations has changed the terms, you will be bound by the new terms.
          </p>

          {/* Section 4 */}
          <h2 className="text-lg font-semibold text-black mb-2">4. Governing Law and Jurisdiction</h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            These terms and your use of this site are governed by and construed in accordance with the laws of England and Wales, and any disputes will be decided only by the Courts of England and Wales.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
