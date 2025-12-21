# XXE.page

> Comprehensive educational resource for XML External Entity (XXE) vulnerabilities

A production-ready, static site providing in-depth guides, code examples, and an interactive payload generator for understanding, testing, and preventing XXE injection attacks.

🌐 **Live Site:** [xxe.page](https://xxe.page) *(if deployed)*

## 📚 Overview

XXE.page is a comprehensive educational platform covering all aspects of XML External Entity vulnerabilities, from fundamental concepts to advanced exploitation techniques and prevention strategies across multiple programming languages and frameworks.

### Key Features

- **27 Comprehensive Guides** organized into 7 categories
- **Interactive Payload Generator** with 6 payload types
- **Language-Specific Prevention** for Java, .NET, PHP, Python, Node.js, Ruby, and Go
- **Real-World Code Examples** (vulnerable and secure implementations)
- **Testing Methodology** with tools and techniques
- **Dark Mode Support** with responsive design
- **Syntax Highlighting** for all code examples
- **Static Site Generation** for fast, secure deployment

## 📖 Content Coverage

### Fundamentals (2 guides)
- XML & DTD Basics
- Entity Processing

### Vulnerabilities (4 guides)
- Classic XXE
- Blind XXE
- Parameter Entities
- File Upload XXE

### Attack Vectors (4 guides)
- File Disclosure
- Server-Side Request Forgery (SSRF)
- Denial of Service (Billion Laughs)
- RCE Escalation

### Application Contexts (5 guides)
- SOAP Services
- SAML Authentication
- JSON-to-XML Converters
- SVG Processors
- Document Parsers (DOCX, XLSX, etc.)

### Prevention by Language (7 guides)
- Java (JAX-WS, JAXB, DOM, SAX)
- .NET (XmlReader, XDocument, WCF)
- PHP (libxml, SimpleXML, DOMDocument)
- Python (lxml, xml.etree, defusedxml)
- Node.js (libxmljs, fast-xml-parser)
- Ruby (Nokogiri, REXML, Ox)
- Go (encoding/xml, etree)

### Testing & Remediation (5 guides)
- Testing Methodology
- Payload Design
- Testing Tools
- Secure Patterns
- Defense-in-Depth Strategy

## 🚀 Quick Start

### Prerequisites

- Node.js 20.9.0 or later
- npm 10.1.0 or later

### Installation

```bash
# Clone the repository
git clone https://github.com/Wh1t3Fox/xxe.page.git
cd xxe.page

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the site.

### Build for Production

```bash
# Build static site
npm run build

# Serve production build
npm start
```

The static site will be generated in the `out/` directory.

## 🏗️ Project Structure

```
xxe.page/
├── components/           # React components
│   ├── CodeBlock.js     # Syntax-highlighted code display
│   ├── CodeComparison.js # Side-by-side vulnerable/secure code
│   ├── Layout.js        # Page layout wrapper
│   ├── Navigation.js    # Top navigation bar
│   ├── Sidebar.js       # Collapsible guide navigation
│   ├── SeverityBadge.js # CVSS severity indicators
│   └── TabbedCode.js    # Multi-language code tabs
│
├── data/
│   ├── guides/          # 27 comprehensive guide JSON files
│   │   ├── xml-basics.json
│   │   ├── classic-xxe.json
│   │   ├── java-prevention.json
│   │   └── ...
│   └── navigation.json  # Site navigation structure
│
├── lib/
│   └── guideLoader.js   # Guide data loading utilities
│
├── pages/
│   ├── _app.js          # Next.js app wrapper
│   ├── index.js         # Home page
│   ├── about.js         # About page
│   ├── payloads.js      # Interactive payload generator
│   ├── references.js    # External references
│   └── guide/
│       └── [...slug].js # Dynamic guide pages (SSG)
│
├── styles/
│   └── globals.css      # Global styles with Tailwind
│
├── public/              # Static assets
├── out/                 # Production build output
├── tailwind.config.js   # Tailwind CSS configuration
└── next.config.js       # Next.js configuration
```

## 🎨 Features

### Interactive Payload Generator

The payload generator (`/payloads`) allows security professionals to create custom XXE test payloads:

- **Payload Types:**
  - File Disclosure (classic XXE)
  - Blind XXE (out-of-band exfiltration)
  - SSRF (Server-Side Request Forgery)
  - Parameter Entity (advanced blind XXE)
  - Error-Based XXE
  - Billion Laughs (DoS)

- **Customization:**
  - Platform selection (Linux/Windows)
  - Target file selection with presets
  - Callback URL configuration
  - Protocol selection (file://, php://, expect://)
  - Custom entity names
  - Encoding options

- **Export Options:**
  - Copy to clipboard
  - Download as XML file
  - Live preview with syntax highlighting

### Code Examples

Every guide includes:
- **Vulnerable code** demonstrating the security issue
- **Secure code** showing proper mitigation
- **Attack payloads** for testing
- **Prevention checklists**
- **Language-specific configurations**

### Responsive Design

- Mobile-friendly layouts
- Collapsible navigation on small screens
- Dark mode support
- Optimized typography for readability
- Touch-friendly interactive elements

## 🛠️ Development

### Tech Stack

- **Framework:** Next.js 16 (React 19)
- **Styling:** Tailwind CSS 3.4
- **Syntax Highlighting:** react-syntax-highlighter
- **Markdown:** react-markdown with remark-gfm
- **Build:** Static Site Generation (SSG)

### Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Serve production build locally
npm start

# Lint code (if configured)
npm run lint
```

### Adding New Guides

1. Create a new JSON file in `data/guides/`:

```json
{
  "id": "guide-slug",
  "category": "vulnerabilities",
  "title": "Guide Title",
  "description": "Brief description",
  "severity": "critical",
  "cvssScore": 9.0,
  "sections": [
    {
      "id": "section-id",
      "title": "Section Title",
      "type": "text",
      "content": "Markdown content here..."
    },
    {
      "id": "code-example",
      "title": "Code Example",
      "type": "code",
      "code": {
        "language": "java",
        "code": "// Code here",
        "isVulnerable": true,
        "filename": "Example.java"
      }
    }
  ],
  "relatedTopics": ["other-guide-slug"],
  "references": [
    {
      "title": "Reference Title",
      "url": "https://example.com"
    }
  ]
}
```

2. Add the guide to `data/navigation.json`

3. Rebuild the site: `npm run build`

## 📦 Deployment

### Static Hosting

The site is built as a static export and can be deployed to any static hosting platform:

**GitHub Pages:**
```bash
npm run build
# Push the 'out' directory to gh-pages branch
```

**Netlify:**
```bash
# Build command: npm run build
# Publish directory: out
```

**Vercel:**
```bash
# Framework Preset: Next.js
# Output Directory: out
```

**AWS S3 + CloudFront:**
```bash
npm run build
aws s3 sync out/ s3://your-bucket-name
```

### Environment Variables

No environment variables are required for basic deployment. The site is fully static.

## 🧪 Testing

All guides include practical, testable examples:

1. **Code Examples:** Both vulnerable and secure implementations
2. **Test Payloads:** Ready-to-use XXE payloads for authorized testing
3. **Validation Steps:** How to verify vulnerabilities and fixes
4. **Prevention Checklists:** Actionable security measures

⚠️ **Security Notice:** All payloads and techniques are for authorized security testing only. Unauthorized testing is illegal and unethical.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Report Issues:** Found a bug or error? Open an issue
2. **Suggest Guides:** Ideas for new content? Create a feature request
3. **Submit Pull Requests:**
   - Fork the repository
   - Create a feature branch (`git checkout -b feature/new-guide`)
   - Commit your changes
   - Push to the branch
   - Open a Pull Request

### Contribution Guidelines

- Follow existing guide structure and formatting
- Include both vulnerable and secure code examples
- Provide references to authoritative sources (OWASP, CWE, vendor docs)
- Test all code examples before submission
- Ensure markdown renders correctly
- Update navigation.json when adding guides

## 📄 License

This project is open source and available for educational purposes. All content is provided for security education and authorized testing only.

## 🙏 Acknowledgments

- **OWASP** for XXE prevention guidelines and cheat sheets
- **PortSwigger** for XXE research and testing methodology
- **Security community** for vulnerability disclosures and research
- **Next.js team** for the excellent framework
- **Tailwind CSS** for the utility-first CSS framework

## 📞 Contact

- **GitHub Issues:** For bugs, questions, and feature requests
- **Security Reports:** Responsible disclosure appreciated

## ⚠️ Disclaimer

This project is for **educational purposes only**. The tools, techniques, and payloads provided are intended for:

- **Authorized security testing** with explicit permission
- **Security research** in controlled environments
- **Educational training** for security professionals
- **Defensive security** implementation

**Unauthorized use is illegal and unethical.** Always obtain proper authorization before testing any system you do not own or have explicit permission to test.

---

**Built with ❤️ for the security community**

*Last Updated: December 2024*
