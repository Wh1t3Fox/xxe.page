export default function SeverityBadge({ severity, cvssScore = null, size = 'md' }) {
  const getSeverityConfig = (level) => {
    const configs = {
      critical: {
        bgColor: 'bg-red-100 dark:bg-red-900/30',
        textColor: 'text-red-800 dark:text-red-300',
        borderColor: 'border-red-300 dark:border-red-700',
        label: 'Critical',
        icon: '🔴',
      },
      high: {
        bgColor: 'bg-amber-100 dark:bg-amber-900/30',
        textColor: 'text-amber-800 dark:text-amber-300',
        borderColor: 'border-amber-300 dark:border-amber-700',
        label: 'High',
        icon: '🟠',
      },
      medium: {
        bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
        textColor: 'text-yellow-800 dark:text-yellow-300',
        borderColor: 'border-yellow-300 dark:border-yellow-700',
        label: 'Medium',
        icon: '🟡',
      },
      low: {
        bgColor: 'bg-green-100 dark:bg-green-900/30',
        textColor: 'text-green-800 dark:text-green-300',
        borderColor: 'border-green-300 dark:border-green-700',
        label: 'Low',
        icon: '🟢',
      },
      info: {
        bgColor: 'bg-blue-100 dark:bg-blue-900/30',
        textColor: 'text-blue-800 dark:text-blue-300',
        borderColor: 'border-blue-300 dark:border-blue-700',
        label: 'Info',
        icon: '🔵',
      },
    }
    return configs[level] || configs.info
  }

  const getSizeClasses = () => {
    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-1.5 text-base',
    }
    return sizes[size] || sizes.md
  }

  if (!severity) {
    return null
  }

  const config = getSeverityConfig(severity.toLowerCase())
  const sizeClasses = getSizeClasses()

  return (
    <div className="inline-flex items-center space-x-2">
      <span
        className={`inline-flex items-center font-semibold rounded-lg border ${config.bgColor} ${config.textColor} ${config.borderColor} ${sizeClasses}`}
      >
        <span className="mr-1.5">{config.icon}</span>
        <span>{config.label}</span>
      </span>

      {cvssScore !== null && (
        <span
          className={`inline-flex items-center px-2 py-1 text-sm font-mono font-semibold rounded ${
            cvssScore >= 9.0
              ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
              : cvssScore >= 7.0
              ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300'
              : cvssScore >= 4.0
              ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
              : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
          }`}
          title="CVSS Score"
        >
          {cvssScore.toFixed(1)}
        </span>
      )}
    </div>
  )
}
