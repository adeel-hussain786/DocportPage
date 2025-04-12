import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fc] border-t py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#2d2d2f] mb-4">Resources</h4>
            <ul className="text-sm text-gray-600">
              {resourcesLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="hover:text-green-500">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#2d2d2f] mb-4">Platform</h4>
            <ul className="text-sm text-gray-600">
              {platformLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="hover:text-green-500">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#2d2d2f] mb-4">Community</h4>
            <ul className="text-sm text-gray-600">
              {communityLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="hover:text-green-500">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-10 text-center text-sm text-gray-600">
          ©2025 Docport, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
