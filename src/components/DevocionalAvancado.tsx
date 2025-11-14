'use client'

import { useState, useEffect } from 'react'
import { BookOpen, Heart, Lightbulb, MessageSquare, Clock, Star, ChevronRight, Play, Pause, Volume2, Bookmark, Share2 } from 'lucide-react'

export default function DevocionalAvancado() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [userReflections, setUserReflections] = useState<{[key: string]: string}>({})
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const devocionalCompleto = {
    titulo: "Encontrando Esperança na Tempestade",
    tema: "Superando Momentos Difíceis",
    tempoEstimado: "15-20 minutos",
    versiculo: {
      texto: "\"Quando você atravessar as águas, eu estarei com você; quando atravessar os rios, eles não o submergirão. Quando você andar através do fogo, não se queimará; as chamas não o deixarão em brasas.\"",
      referencia: "Isaías 43:2",
      contexto: "Escrito durante o exílio babilônico, quando o povo de Israel passava por um dos momentos mais difíceis de sua história."
    },
    interpretacao: {
      historica: "Este versículo foi escrito pelo profeta Isaías para consolar o povo de Israel durante o exílio. As 'águas' e 'fogo' representam as dificuldades extremas que enfrentamos na vida.",
      pessoal: "Deus não promete que não passaremos por dificuldades, mas garante que estará conosco em cada uma delas. Sua presença é nossa segurança.",
      pratica: "Quando enfrentamos 'tempestades' em nossa vida, podemos ter certeza de que não estamos sozinhos. Deus caminha conosco através de cada desafio."
    },
    reflexoes: [
      {
        pergunta: "Qual 'tempestade' você está enfrentando agora?",
        tipo: "pessoal",
        placeholder: "Compartilhe o que está pesando em seu coração..."
      },
      {
        pergunta: "Como você pode ver a presença de Deus em meio a essa situação?",
        tipo: "espiritual",
        placeholder: "Reflita sobre os sinais da presença divina..."
      },
      {
        pergunta: "Que passo prático você pode dar hoje para confiar mais em Deus?",
        tipo: "acao",
        placeholder: "Pense em uma ação concreta que você pode tomar..."
      }
    ],
    oracao: "Pai celestial, obrigado(a) por estar comigo em cada momento difícil. Ajuda-me a sentir Sua presença quando as águas parecem me submergir e o fogo ameaça me queimar. Dá-me força para confiar em Seus planos, mesmo quando não consigo entender. Em nome de Jesus, amém.",
    aplicacao: [
      "Memorize este versículo e repita-o quando sentir medo",
      "Compartilhe esta promessa com alguém que está passando por dificuldades",
      "Mantenha um diário de como Deus tem estado presente em sua vida"
    ]
  }

  const steps = [
    { id: 0, title: "Preparação", icon: Heart, description: "Prepare seu coração" },
    { id: 1, title: "Leitura", icon: BookOpen, description: "Leia a Palavra" },
    { id: 2, title: "Interpretação", icon: Lightbulb, description: "Entenda o contexto" },
    { id: 3, title: "Reflexão", icon: MessageSquare, description: "Reflita pessoalmente" },
    { id: 4, title: "Aplicação", icon: Star, description: "Aplique em sua vida" }
  ]

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false)
            return 100
          }
          return prev + 1
        })
      }, 100)
      return () => clearInterval(timer)
    }
  }, [isPlaying])

  const handleReflectionChange = (pergunta: string, valor: string) => {
    setUserReflections(prev => ({
      ...prev,
      [pergunta]: valor
    }))
  }

  const completeStep = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps(prev => [...prev, stepId])
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Preparando o Coração</h3>
              <p className="text-gray-600 mb-6">
                Antes de mergulharmos na Palavra, vamos preparar nosso coração para receber o que Deus quer nos falar hoje.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Momento de Silêncio</h4>
              <p className="text-gray-700 mb-4">
                Feche os olhos, respire profundamente e entregue suas preocupações a Deus.
              </p>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </button>
                <div className="flex-1">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
                <Volume2 className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500 mt-2">Música instrumental suave • 3 minutos</p>
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Leitura Bíblica</h3>
              <p className="text-gray-600 mb-6">
                Leia o versículo com atenção, permitindo que as palavras penetrem em seu coração.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-xl shadow-lg">
              <div className="flex items-start space-x-3 mb-4">
                <BookOpen className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">{devocionalCompleto.versiculo.referencia}</h4>
                  <p className="text-sm text-gray-500">{devocionalCompleto.versiculo.contexto}</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-800 italic leading-relaxed">
                {devocionalCompleto.versiculo.texto}
              </blockquote>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
              <h5 className="font-medium text-yellow-800 mb-2">💡 Dica de Leitura:</h5>
              <p className="text-yellow-700 text-sm">
                Leia o versículo três vezes: primeiro para entender, segundo para sentir, terceiro para memorizar.
              </p>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interpretação e Contexto</h3>
              <p className="text-gray-600 mb-6">
                Vamos entender o que este versículo significava na época e o que significa para nós hoje.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Contexto Histórico</span>
                </h4>
                <p className="text-green-700 text-sm leading-relaxed">
                  {devocionalCompleto.interpretacao.historica}
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>Significado Pessoal</span>
                </h4>
                <p className="text-purple-700 text-sm leading-relaxed">
                  {devocionalCompleto.interpretacao.pessoal}
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-3 flex items-center space-x-2">
                  <Lightbulb className="h-5 w-5" />
                  <span>Aplicação Prática</span>
                </h4>
                <p className="text-orange-700 text-sm leading-relaxed">
                  {devocionalCompleto.interpretacao.pratica}
                </p>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reflexão Pessoal</h3>
              <p className="text-gray-600 mb-6">
                Agora é hora de aplicar esta verdade à sua vida. Seja honesto(a) em suas respostas.
              </p>
            </div>

            <div className="space-y-6">
              {devocionalCompleto.reflexoes.map((reflexao, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {reflexao.pergunta}
                  </h4>
                  <textarea
                    value={userReflections[reflexao.pergunta] || ''}
                    onChange={(e) => handleReflectionChange(reflexao.pergunta, e.target.value)}
                    placeholder={reflexao.placeholder}
                    className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={4}
                  />
                  <div className="flex items-center justify-between mt-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      reflexao.tipo === 'pessoal' ? 'bg-blue-100 text-blue-700' :
                      reflexao.tipo === 'espiritual' ? 'bg-purple-100 text-purple-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {reflexao.tipo === 'pessoal' ? 'Reflexão Pessoal' :
                       reflexao.tipo === 'espiritual' ? 'Reflexão Espiritual' :
                       'Ação Prática'}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Bookmark className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Aplicação e Oração</h3>
              <p className="text-gray-600 mb-6">
                Vamos finalizar com oração e passos práticos para viver esta verdade.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span>Oração Sugerida</span>
              </h4>
              <p className="text-gray-700 italic leading-relaxed mb-4">
                {devocionalCompleto.oracao}
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Personalizar esta oração
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span>Passos Práticos para Hoje</span>
              </h4>
              <ul className="space-y-3">
                {devocionalCompleto.aplicacao.map((passo, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-600 rounded-full p-1 mt-0.5">
                      <ChevronRight className="h-3 w-3" />
                    </div>
                    <span className="text-gray-700">{passo}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Salvar Devocional
              </button>
              <button className="bg-white border border-gray-200 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{devocionalCompleto.titulo}</h1>
          <p className="text-gray-600">{devocionalCompleto.tema} • {devocionalCompleto.tempoEstimado}</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <button
                  onClick={() => setCurrentStep(step.id)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentStep === step.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-110'
                      : completedSteps.includes(step.id)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  <step.icon className="h-5 w-5" />
                </button>
                <div className="mt-2 text-center">
                  <div className={`text-sm font-medium ${
                    currentStep === step.id ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-500">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="absolute top-6 left-6 right-6 h-0.5 bg-gray-200"></div>
            <div 
              className="absolute top-6 left-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          
          <button
            onClick={() => {
              completeStep(currentStep)
              if (currentStep < steps.length - 1) {
                setCurrentStep(currentStep + 1)
              }
            }}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
          >
            {currentStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
          </button>
        </div>
      </div>
    </div>
  )
}