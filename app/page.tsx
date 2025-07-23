"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Heart, Star, TrendingUp, Download, Shield, Headphones, Gift } from "lucide-react"
import Image from "next/image"

const names = [
  "Ana Silva",
  "Maria Santos",
  "João Oliveira",
  "Carla Mendes",
  "Pedro Costa",
  "Juliana Lima",
  "Rafael Souza",
  "Fernanda Alves",
  "Lucas Pereira",
  "Camila Rodrigues",
  "Bruno Ferreira",
  "Letícia Martins",
  "Diego Barbosa",
  "Patrícia Gomes",
  "Thiago Ribeiro",
  "Vanessa Cardoso",
  "Marcos Araújo",
  "Gabriela Nascimento",
  "Felipe Moreira",
  "Renata Castro",
  "André Dias",
  "Bianca Lopes",
  "Gustavo Ramos",
  "Priscila Teixeira",
  "Rodrigo Cunha",
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <CardContent className="p-0">
        <button
          className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-xl font-bold text-gray-800">{question}</h3>
          <div className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className="px-6 pb-6">
            <p className="text-gray-600 leading-relaxed">{answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function MorangoDoAmorSales() {
  const [currentNotification, setCurrentNotification] = useState(0)
  const [showNotification, setShowNotification] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(false)
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % names.length)
        setShowNotification(true)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const getRandomTime = () => {
    return Math.floor(Math.random() * 16) + 1 // 1 to 17 minutes
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-orange-50">
      {/* Purchase Notification */}
      <div
        className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${showNotification ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
      >
        <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-lg">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <p className="text-sm font-medium text-gray-900">{names[currentNotification]}</p>
              <p className="text-xs text-gray-600">Comprou há {getRandomTime()} minutos</p>
            </div>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </CardContent>
        </Card>
      </div>

      {/* Alert Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-center py-3">
        <p className="text-black font-bold text-sm md:text-base">
          ⚠️ ATENÇÃO! Essa sobremesa está conquistando o Brasil! Não fique de fora!
        </p>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Aprenda a Nova Receita do Momento:
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Morango do Amor Perfeito 🍓❤️</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descubra o segredo por trás do doce que conquistou as redes sociais – receita exclusiva, fácil e lucrativa!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge className="bg-red-500 text-white px-4 py-2 text-lg mb-4">🍓 OFERTA ESPECIAL 🍓</Badge>
                  <p className="text-gray-600 mb-4">Últimas vagas disponíveis com desconto exclusivo!</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-2xl text-gray-500 line-through">De R$ 47,90</span>
                    <span className="text-4xl md:text-5xl font-bold text-yellow-500">R$ 9,90</span>
                  </div>
                  <Badge className="bg-red-600 text-white px-3 py-1">79% de desconto</Badge>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                  onClick={() => window.open("https://pay.kiwify.com.br/u0oSj2t", "_blank")}
                >
                  🏆 QUERO APRENDER AGORA! 🏆
                </Button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  ⏰ Oferta válida apenas hoje! Restam apenas 23 vagas.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-4 text-center">
                  <Download className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="text-sm font-medium">Acesso imediato após o pagamento</p>
                </CardContent>
              </Card>
              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-4 text-center">
                  <Shield className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="text-sm font-medium">Garantia de 7 dias ou seu dinheiro de volta</p>
                </CardContent>
              </Card>
              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-4 text-center">
                  <Headphones className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="text-sm font-medium">Suporte prioritário por WhatsApp</p>
                </CardContent>
              </Card>
              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-4 text-center">
                  <Gift className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="text-sm font-medium">Um super brinde surpresa </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 rounded-3xl blur-2xl opacity-30"></div>
            <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0e13b9ce-b6a4-4695-bd87-e417cd69c9f1-1MGMnjyzIam5XfO0MIRVv9wzPrxlUG.png"
                    alt="E-book Morango do Amor - Tutorial Completo"
                    width={400}
                    height={500}
                    className="w-full rounded-xl"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O que você vai aprender? 📚</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Um curso completo com tudo que você precisa para dominar essa receita e começar a lucrar com o doce que
              todos querem experimentar!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Receita exclusiva do Morango do Amor Perfeito</h3>
                <p className="text-gray-600">Fórmula secreta que viralizou nas redes sociais</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Star className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Técnica do ponto ideal da calda</h3>
                <p className="text-gray-600">Aprenda o segredo para uma cobertura perfeita e brilhante</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Como rechear com perfeição</h3>
                <p className="text-gray-600">Técnicas profissionais para um recheio cremoso e saboroso</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Gift className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Embalagens que encantam</h3>
                <p className="text-gray-600">Apresentação profissional que conquista clientes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Transforme Sua Paixão por Doces em Uma Renda Incrível! 💰
            </h2>
            <p className="text-lg text-gray-600">
              O Morango do Amor não é apenas uma receita, é a sua porta de entrada para um negócio lucrativo e
              descomplicado! Por isso que vou te dar um <span className="text-red-600 font-bold">PRESENTÃO</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">O passo a passo completo</h4>
                <p className="text-sm text-gray-600">Receita detalhada do início ao fim</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Download className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Arquivo em PDF</h4>
                <p className="text-sm text-gray-600">Material para consulta offline</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Segredos para uma calda perfeita</h4>
                <p className="text-sm text-gray-600">Técnicas que ninguém te revela</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Preço super especial</h4>
                <p className="text-sm text-gray-600">De R$ 47,00 por apenas R$ 9,90</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Produção Simples e Rápida: Qualquer Um Consegue! ⚡
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Com o nosso e-book, a produção é tão simples que você terá mais tempo para lucrar e aproveitar! Veja como
              fica o resultado:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-red-100 to-pink-100 rounded-xl mb-4 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Processo%20completo.png-i9dNrFg6c2P8WDa973SA1QYo75OylP.jpeg"
                    alt="Depoimento Carla M. - Processo Completo"
                    width={200}
                    height={200}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Processo Completo</h3>
                <p className="text-gray-600">Técnicas profissionais reveladas</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-red-100 to-pink-100 rounded-xl mb-4 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/producao%20profisional.png-AQXrvJ6vUIRgZGGba6skkMZhViVuEd.jpeg"
                    alt="Produção em Escala - Bandejas de Morangos do Amor"
                    width={200}
                    height={200}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Produção Profissional</h3>
                <p className="text-gray-600">Escale seu negócio facilmente</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-red-100 to-pink-100 rounded-xl mb-4 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Resultado%20final.png-g3ikcquw5BgqhNHuX7OsbkrL2muYBS.jpeg"
                    alt="Depoimento Fernanda R. - Resultado Final"
                    width={200}
                    height={200}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Resultado Final</h3>
                <p className="text-gray-600">Doces irresistíveis que vendem sozinhos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      {/* Social Proof Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Posts Reais das Redes Sociais! 📱</h2>
            <p className="text-lg text-gray-600">Veja o que estão falando sobre o Morango do Amor nas redes sociais</p>
          </div>

          {/* Primeira linha - 3 depoimentos */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feed%20back8-Cn9e1CYh0V7xGVoameKaXU2dI4JVJz.png"
                  alt="Depoimento Mariana G."
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feedback-wUrCJSKkpSuMSIZepZPiAqLCR99w86.png"
                  alt="Depoimento Juliana P."
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feedback2-PT0V4GzMMR4OCrSxjU6VjoXorq6rC6.png"
                  alt="Depoimento Beatriz L."
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          {/* Segunda linha - 3 depoimentos */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feedback3-4iN2VefHBGd40ZvIreYlEWLNKHYZUQ.png"
                  alt="Depoimento Carla M."
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feedback23-ONCgt6x4TnxHu8ufsuHymFHlv1SXuD.png"
                  alt="Depoimento Fernanda R."
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feedback253-ADU7jaiiprgyiOnsFPHsmM9UsaAWFd.png"
                  alt="Depoimento Ana Paula S."
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Comentários das Nossas Alunas! 💬</h2>
            <p className="text-lg text-gray-600">
              Conheça as pessoas reais por trás dos depoimentos que mudaram de vida
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mariana.jpg-ookB4iS9V4oEldpXtn5Lg0ZcxYbWTJ.jpeg"
                    alt="Mariana G. - Aluna satisfeita"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Que descoberta! A receita é simplesmente maravilhosa, todos que provam elogiam. E o melhor, é super
                  fácil de fazer em casa. Já estou pensando em começar a vender para os amigos!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-800">Mariana G.</p>
                  <p className="text-sm text-gray-600">Há 3 semanas</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Juliana%20P.jpg-LVIO7YMnbqe42nT3XDkptJykKyXyTz.jpeg"
                    alt="Juliana P. - Aluna satisfeita"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Eu precisava de uma forma de ganhar dinheiro para a faculdade e o Morango do Amor foi a solução! A
                  receita é um sucesso, e a praticidade me permite conciliar com os estudos. Muito feliz!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-800">Juliana P.</p>
                  <p className="text-sm text-gray-600">Há 2 semanas</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beatriz%20L.jpg-NEiCieHLudxpBwAORjjkFY782C4Sn4.jpeg"
                    alt="Beatriz L. - Aluna satisfeita"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Simplesmente perfeito! Meus filhos amaram e meus vizinhos estão comprando sem parar. É impressionante
                  como algo tão fácil de fazer pode ser tão lucrativo. Recomendo demais!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-800">Beatriz L.</p>
                  <p className="text-sm text-gray-600">Há 3 dias</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">🔒 100% Seguro & Garantido</h2>
              <p className="text-lg text-gray-600 mb-8">
                Se você não ficar satisfeita com o curso em até 7 dias, devolvemos 100% do seu dinheiro. Sem perguntas,
                sem complicações.
              </p>

              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl text-gray-500 line-through">De R$ 47,90</span>
                  <span className="text-4xl md:text-5xl font-bold text-yellow-500">R$ 9,90</span>
                </div>
                <Badge className="bg-red-600 text-white px-3 py-1 text-lg">79% de desconto</Badge>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-6 text-xl rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 mb-4"
                onClick={() => window.open("https://pay.kiwify.com.br/u0oSj2t", "_blank")}
              >
                🏆 QUERO APRENDER AGORA! 🏆
              </Button>

              <p className="text-sm text-gray-500">⏰ Oferta válida apenas hoje! Restam apenas 23 vagas.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section - Now as last section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Dúvidas Frequentes 🤔</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Esclarecemos as principais dúvidas sobre o tutorial do Morango do Amor
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <FAQItem
              question="❓ É realmente fácil de fazer?"
              answer="Sim! O tutorial foi desenvolvido para iniciantes. Com ingredientes simples e passo a passo detalhado, qualquer pessoa consegue fazer em casa, mesmo sem experiência na cozinha."
            />

            <FAQItem
              question="💰 Quanto posso ganhar vendendo?"
              answer="O lucro varia conforme sua dedicação e região. Nossas alunas relatam ganhos de R$ 400 a R$ 3.000 por mês."
            />

            <FAQItem
              question="📱 Como recebo o material?"
              answer="Após a confirmação do pagamento, você recebe imediatamente por email o link para download do e-book em PDF. O material fica disponível para sempre em sua conta."
            />

            <FAQItem
              question="🛒 Onde encontro os ingredientes?"
              answer="Todos os ingredientes são facilmente encontrados em supermercados comuns. Não precisa de nada especial ou importado. Incluímos uma lista completa de fornecedores no e-book."
            />

            <FAQItem
              question="⏰ Quanto tempo para receber o tutorial?"
              answer="Você receberá automáticamente após a finalização da compra."
            />

            <FAQItem
              question="🔄 E se eu não gostar do produto?"
              answer="Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo não ficar satisfeita, devolvemos 100% do seu investimento, sem perguntas ou burocracias."
            />

            <FAQItem
              question="📞 Terei suporte se precisar de ajuda?"
              answer="Sim! Oferecemos suporte prioritário via WhatsApp para todas as nossas alunas. Nossa equipe está pronta para tirar suas dúvidas e ajudar no seu sucesso."
            />

            <FAQItem
              question="🎁 Tem algum bônus incluso?"
              answer="Sim! Além do tutorial completo, você ganha um super brinde surpresa que vai potencializar ainda mais seus resultados. É nosso presente especial para quem decide investir hoje!"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 Morango do Amor Perfeito. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
