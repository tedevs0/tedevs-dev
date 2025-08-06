import { routeTranslations } from './routes'

export function getAlternatePath(pathname: string, currentLocale: 'en' | 'es'): string {
  const isEs = currentLocale === 'es'
  const langFrom = isEs ? 'es' : 'en'
  const langTo = isEs ? 'en' : 'es'

  // 🔹 1. Normalizar la ruta quitando /es si aplica
  const pathWithoutPrefix = pathname.replace(/^\/es(?=\/|$)/, '') || '/'

  // 🔹 2. Detectar caso especial raíz
  if (pathWithoutPrefix === '/') {
    return langTo === 'es' ? '/es' : '/'
  }

  // 🔹 3. Buscar en las rutas traducidas
  const match = Object.values(routeTranslations).find(
    (r) => r[langFrom] === pathWithoutPrefix || r[langFrom] === '/' + pathWithoutPrefix
  )

  if (match) {
    return (langTo === 'es' ? '/es' + match[langTo] : match[langTo]).replace(/\/$/, '')
  }

  // 🔹 4. Fallback general
  return (isEs ? pathname.replace(/^\/es/, '') : '/es' + pathname).replace(/\/$/, '')
}


export function getLocaleFromPath(pathname: string): 'en' | 'es' {
  return pathname.startsWith('/es') ? 'es' : 'en'
}
