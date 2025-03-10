import { footerLinks } from "@/data/footerData/page";

export const Footer = () => {
  return (
    <footer className="w-full mt-4 bg-white border-t border-gr rounded-t-xl">
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column with links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.url}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.url}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:text-right">
            <div className="flex gap-6 mb-8 md:justify-end">
              {footerLinks.social.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} NexusBank. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
