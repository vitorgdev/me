import React, { useState } from 'react'
import Flag from 'react-world-flags'

const LanguageSelector = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'EN', name: 'English', flagCode: 'us' },
    { code: 'PT', name: 'Português', flagCode: 'br' },
    { code: 'ES', name: 'Español', flagCode: 'es' },
    { code: 'FR', name: 'Français', flagCode: 'fr' },
    { code: 'IT', name: 'Italiano', flagCode: 'it' },
  ]

  const selectedLanguage = languages.find((lang) => lang.code === language)

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Flag
          code={selectedLanguage.flagCode}
          className=" w-5 h-5"
          style={{ minWidth: '20px' }}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 z-10">
          <div>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white"
              >
                <Flag
                  code={lang.flagCode}
                  className="w-5 h-5"
                  style={{ minWidth: '20px' }}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
