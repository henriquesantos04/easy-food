'use client'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const prestadoresExemplo = [
  {
    nome: 'Maria Quituteira',
    tipo: 'Marmita Fitness',
    cidade: 'São Paulo',
    descricao: 'Marmitas saudáveis e saborosas com entrega diária.',
    whatsapp: '5511999999999',
  },
  {
    nome: 'João Doces',
    tipo: 'Doces Artesanais',
    cidade: 'Belo Horizonte',
    descricao: 'Brigadeiros gourmet, bolos e sobremesas especiais.',
    whatsapp: '5531999999999',
  },
]

export default function EasyFood() {
  const [filtro, setFiltro] = useState('')
  const filtrados = prestadoresExemplo.filter((p) =>
    p.tipo.toLowerCase().includes(filtro.toLowerCase()) ||
    p.cidade.toLowerCase().includes(filtro.toLowerCase()) ||
    p.nome.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Easy Food 🍽️</h1>
      <p className="text-center text-gray-500 mb-6">
        Encontre prestadores de serviços culinários perto de você
      </p>

      <Input
        placeholder="Buscar por cidade, nome ou tipo..."
        className="mb-6"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <div className="grid gap-4">
        {filtrados.map((p, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{p.nome}</h2>
              <p className="text-sm text-gray-600">{p.tipo} - {p.cidade}</p>
              <p className="mt-2 text-gray-700">{p.descricao}</p>
              <Button
                className="mt-4"
                variant="outline"
                onClick={() => {
                  const msg = encodeURIComponent(`Olá ${p.nome}, vi seu perfil no Easy Food e gostaria de saber mais!`)
                  window.open(`https://wa.me/${p.whatsapp}?text=${msg}`, '_blank')
                }}
              >
                Chamar no WhatsApp
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
