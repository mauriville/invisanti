export type Parent = 'mama' | 'papa'

export const parents: Record<Parent, { role: string; name: string; phone: string; displayPhone: string }> = {
  mama: { role: 'mamá', name: 'Valeria', phone: '59175822707', displayPhone: '75822707' },
  papa: { role: 'papá', name: 'Mauricio', phone: '59175232449', displayPhone: '75232449' },
}

export function buildWhatsAppMessage(parent: Parent, guests: number): string {
  const { name } = parents[parent]
  const firstLine = `Hola ${name} 👋`
  const secondLine = `Confirmo ${guests === 1 ? 'mi' : 'nuestra'} asistencia al cumpleaños de Santiago 🎉🍉`
  const thirdLine = guests === 1 ? 'Seré 1 persona.' : `Seremos ${guests} personas.`
  return [firstLine, secondLine, thirdLine].join('\n')
}

export function buildWhatsAppUrl(parent: Parent, guests: number): string {
  return `https://wa.me/${parents[parent].phone}?text=${encodeURIComponent(buildWhatsAppMessage(parent, guests))}`
}
