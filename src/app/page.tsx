'use client'

import { useState, useEffect } from 'react'
import { Heart, BookOpen, Users, Star, ArrowRight, Clock, CheckCircle, Quote, Sparkles, Crown, Gift } from 'lucide-react'

export default function BibliaApp() {
  const [currentDevocional, setCurrentDevocional] = useState(0)
  const [showTestimonial, setShowTestimonial] = useState(0)
  const [userAnswers, setUserAnswers] = useState<{[key: string]: string}>({})

  // Devocionais diários com perguntas reflexivas
  const devocionais = [
    {
      titulo: "Encontrando Paz em Meio ao Caos",
      versiculo: "\"Deixo-lhes a paz; a minha paz lhes dou. Não a dou como o mundo a dá. Não se perturbe o seu coração, nem tenham medo.\" - João 14:27",
      reflexao: "Em um mundo cheio de incertezas, ansiedades e pressões, Jesus nos oferece algo que o mundo não pode dar: paz verdadeira. Esta não é uma paz temporária que depende das circunstâncias, mas uma paz profunda que vem de saber que estamos nas mãos de Deus.",
      pergunta: "Qual área da sua vida mais precisa da paz de Jesus hoje?",
      opcoes: ["Relacionamentos familiares", "Situação financeira", "Saúde física/mental", "Futuro profissional", "Decisões importantes"]
    },
    {
      titulo: "Você é Amado Incondicionalmente",
      versiculo: "\"Mas Deus demonstra seu amor por nós: Cristo morreu em nosso favor quando ainda éramos pecadores.\" - Romanos 5:8",
      reflexao: "Muitas vezes nos sentimos inadequados, rejeitados ou não merecedores de amor. Mas o amor de Deus não depende do nosso desempenho. Ele nos ama exatamente como somos, com todas as nossas falhas e imperfeições.",
      pergunta: "O que mais dificulta você aceitar o amor incondicional de Deus?",
      opcoes: ["Sentimento de culpa", "Baixa autoestima", "Comparação com outros", "Experiências passadas", "Medo de decepcioná-Lo"]
    },
    {
      titulo: "Transformando Dor em Propósito",
      versiculo: "\"Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados de acordo com o seu propósito.\" - Romanos 8:28",
      reflexao: "Suas dores não são desperdiçadas. Deus tem o poder de transformar até mesmo as situações mais difíceis em instrumentos de crescimento, cura e propósito. Sua história de superação pode ser a esperança que alguém precisa.",
      pergunta: "Como você gostaria que Deus usasse suas experiências difíceis para ajudar outros?",
      opcoes: ["Mentorear jovens", "Aconselhar casais", "Ajudar pessoas em crise", "Compartilhar testemunho", "Servir na comunidade"]
    }
  ]

  // Depoimentos reais e emocionantes
  const testimonials = [
    {
      nome: "Maria Silva",
      idade: 34,
      texto: "Depois de anos lutando contra ansiedade e depressão, encontrei na Palavra de Deus a cura que tanto procurava. Os devocionais diários mudaram completamente minha perspectiva de vida.",
      transformacao: "De ansiedade para paz interior"
    },
    {
      nome: "João Santos",
      idade: 28,
      texto: "Estava perdido após o divórcio, sem direção. As reflexões bíblicas me ajudaram a reconstruir minha identidade e encontrar propósito novamente. Hoje sou um homem renovado.",
      transformacao: "De desesperança para propósito"
    },
    {
      nome: "Ana Costa",
      idade: 45,
      texto: "Como mãe solo, me sentia sobrecarregada e sem forças. Os estudos bíblicos me deram a sabedoria e força que precisava para criar meus filhos com amor e paciência.",
      transformacao: "De sobrecarga para sabedoria"
    }
  ]

  // Rotação automática de depoimentos
  useEffect(() => {
    const interval = setInterval(() => {
      setShowTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleAnswerSelect = (pergunta: string, resposta: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [pergunta]: resposta
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Palavra Viva
              </h1>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
              <Crown className="h-4 w-4" />
              <span className="font-semibold">Acesso Premium</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ✨ Transforme sua vida espiritual
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Descubra o <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Poder Transformador</span> da Palavra de Deus
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Aprenda a ler, interpretar e aplicar a Bíblia em sua vida diária com devocionais personalizados que tocam sua alma e curam suas feridas mais profundas.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50k+</div>
              <div className="text-sm text-gray-600">Vidas Transformadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">365</div>
              <div className="text-sm text-gray-600">Devocionais Únicos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">4.9★</div>
              <div className="text-sm text-gray-600">Avaliação Média</div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto">
            <Gift className="h-5 w-5" />
            <span>Comece Grátis por 7 Dias</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="text-sm text-gray-500 mt-3">Sem compromisso • Cancele quando quiser</p>
        </div>
      </section>

      {/* Devocional Interativo */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Experimente um Devocional Personalizado
            </h2>
            <p className="text-gray-600">
              Veja como nossos devocionais tocam questões reais da sua vida
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-600">Devocional de Hoje</span>
              </div>
              <div className="flex space-x-1">
                {devocionais.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentDevocional(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentDevocional 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {devocionais[currentDevocional].titulo}
              </h3>
              
              <div className="bg-white p-6 rounded-xl border-l-4 border-gradient-to-b from-blue-600 to-purple-600">
                <Quote className="h-6 w-6 text-blue-600 mb-3" />
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  {devocionais[currentDevocional].versiculo}
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {devocionais[currentDevocional].reflexao}
              </p>

              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                  <span>Reflexão Pessoal:</span>
                </h4>
                <p className="text-gray-700 mb-4 font-medium">
                  {devocionais[currentDevocional].pergunta}
                </p>
                <div className="space-y-2">
                  {devocionais[currentDevocional].opcoes.map((opcao, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(devocionais[currentDevocional].pergunta, opcao)}
                      className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-300 ${
                        userAnswers[devocionais[currentDevocional].pergunta] === opcao
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          userAnswers[devocionais[currentDevocional].pergunta] === opcao
                            ? 'border-blue-600 bg-blue-600'
                            : 'border-gray-300'
                        }`}>
                          {userAnswers[devocionais[currentDevocional].pergunta] === opcao && (
                            <CheckCircle className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <span>{opcao}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Histórias Reais de Transformação
            </h2>
            <p className="text-gray-600">
              Veja como a Palavra de Deus tem mudado vidas ao redor do mundo
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                "{testimonials[showTestimonial].texto}"
              </blockquote>
              <div className="border-t pt-6">
                <div className="font-semibold text-gray-900">
                  {testimonials[showTestimonial].nome}, {testimonials[showTestimonial].idade} anos
                </div>
                <div className="text-sm text-blue-600 font-medium mt-1">
                  {testimonials[showTestimonial].transformacao}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Sua Jornada de Transformação Começa Agora
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a milhares de pessoas que já descobriram o poder da Palavra de Deus em suas vidas
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">🎁 Oferta Especial de Lançamento</h3>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-3xl font-bold line-through opacity-60">R$ 97/mês</span>
              <span className="text-5xl font-bold">R$ 47/mês</span>
            </div>
            <p className="text-lg opacity-90">
              Acesso completo por apenas R$ 1,56 por dia
            </p>
          </div>

          <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto mb-4">
            <Crown className="h-6 w-6" />
            <span>Garantir Meu Acesso Agora</span>
            <ArrowRight className="h-6 w-6" />
          </button>
          
          <div className="flex items-center justify-center space-x-6 text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>7 dias grátis</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Garantia de 30 dias</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Palavra Viva</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Transformando vidas através do poder da Palavra de Deus, um devocional por vez.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Users className="h-5 w-5" />
                </div>
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Heart className="h-5 w-5" />
                </div>
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Star className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Devocionais Diários</li>
                <li>Estudos Bíblicos</li>
                <li>Planos de Leitura</li>
                <li>Comunidade</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Central de Ajuda</li>
                <li>Contato</li>
                <li>Política de Privacidade</li>
                <li>Termos de Uso</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Palavra Viva. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}