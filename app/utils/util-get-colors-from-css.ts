import appConfig from '@/app.config'

export const semanticColors = appConfig.ui.colors

export type ColorMap = Record<string, string>
export type GroupedColors = Record<string, ColorMap>

export function getColorsFromCss(): GroupedColors {
    if (typeof window === 'undefined') return {}

    const styles = getComputedStyle(document.documentElement)
    const colors: ColorMap = {}
    for (let i = 0; i < styles.length; i++) {
        const name = styles[i]
        if (name && name.startsWith('--color-brand')) {
            const key = name.replace('--color-', '')
            colors[key] = styles.getPropertyValue(name).trim()
        }
    }

    return groupColorsByName(colors)
}

function groupColorsByName(colors: ColorMap): GroupedColors {
    // 1. Convertimos el objeto en entradas y extraemos nombre + nivel
    const parsed = Object.entries(colors)
        .map(([key, value]) => {
            const match = key.match(/^([a-z-]+)-(\d+)$/)
            if (!match) return null
            const [, name, level] = match
            return { name, level, value }
        })
        .filter((item): item is { name: string; level: string; value: string } => item !== null)

    // 2. Agrupamos por nombre
    const grouped = parsed.reduce<Record<string, typeof parsed>>((acc, item) => {
        if (!acc[item.name]) {
            acc[item.name] = []
        }
        acc[item.name]!.push(item)
        return acc
    }, {})

    // 3. Construimos el objeto final
    return Object.fromEntries(
        Object.entries(grouped).map(([name, items]) => [
            name,
            Object.fromEntries(items.map(({ level, value }) => [level, value])),
        ])
    )
}

export const colorsFromCss = getColorsFromCss()
