import appConfig from '@/app.config'

export const semanticColors = appConfig.ui.colors

export function getColorsFromCss() {
    const styles = getComputedStyle(document.documentElement)
    const colors = {}
    for (let i = 0; i < styles.length; i++) {
        const name = styles[i]
        if (name.startsWith('--color-brand')) {
            const key = name.replace('--color-', '')
            colors[key] = styles.getPropertyValue(name).trim()
        }
    }

    return groupColorsByName(colors)
}

export const colorsFromCss = getColorsFromCss()

function groupColorsByName(colors) {
    // 1. Convertimos el objeto en entradas y extraemos nombre + nivel
    const parsed = Object.entries(colors).map(([key, value]) => {
        const [, name, level] = key.match(/^([a-z-]+)-(\d+)$/)
        return { name, level, value }
    })

    // 2. Agrupamos por nombre usando Object.groupBy
    const grouped = Object.groupBy(parsed, (item) => item.name)

    // 3. Construimos el objeto final
    return Object.fromEntries(
        Object.entries(grouped).map(([name, items]) => [
            name,
            Object.fromEntries(items.map(({ level, value }) => [level, value])),
        ])
    )
}
