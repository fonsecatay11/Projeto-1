'use client'

import { useState } from 'react'
import { Download, Share2, Copy, Instagram, MessageCircle, Heart, Bookmark, TrendingUp } from 'lucide-react'

export default function ViralContent() {
  const [selectedPost, setSelectedPost] = useState(0)

  // Conteúdo viral para redes sociais
  const viralPosts = [
    {
      platform: "Instagram",
      type: "Carrossel",
      title: "5 Versículos que Curam a Ansiedade",
      content: [
        {
          slide: 1,
          text: "VOCÊ NÃO PRECISA CARREGAR ESSE PESO SOZINHO(A)",
          verse: "\"Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês.\" - 1 Pedro 5:7",
          design: "bg-gradient-to-br from-blue-400 to-purple-600"
        },
        {
          slide: 2,
          text: "SUA PAZ NÃO DEPENDE DAS CIRCUNSTÂNCIAS",
          verse: "\"Deixo-lhes a paz; a minha paz lhes dou. Não a dou como o mundo a dá.\" - João 14:27",
          design: "bg-gradient-to-br from-green-400 to-blue-500"
        },
        {
          slide: 3,
          text: "DEUS TEM PLANOS DE BEM PARA VOCÊ",
          verse: "\"Porque eu sei os planos que tenho para vocês, planos de fazê-los prosperar.\" - Jeremias 29:11",
          design: "bg-gradient-to-br from-pink-400 to-red-500"
        }
      ],
      hashtags: "#ansiedade #fe #biblia #deus #paz #esperanca #amor #cura #transformacao #jesus",
      engagement: "98.5k curtidas • 2.3k comentários"
    },
    {
      platform: "TikTok",
      type: "Vídeo Viral",
      title: "POV: Você descobriu seu valor em Deus",
      content: [
        {
          scene: "Início",
          text: "Quando você se sente sem valor...",
          action: "Pessoa olhando no espelho, triste"
        },
        {
          scene: "Revelação",
          text: "Mas aí você lembra que Deus te ama tanto que...",
          action: "Transição dramática"
        },
        {
          scene: "Clímax",
          text: "ELE MORREU POR VOCÊ! 💕",
          verse: "Romanos 5:8",
          action: "Transformação visual completa"
        }
      ],
      hashtags: "#deus #amor #valor #autoestima #fe #biblia #jesus #transformacao #viral #fyp",
      engagement: "2.1M visualizações • 156k curtidas"
    },
    {
      platform: "Pinterest",
      type: "Pin Inspiracional",
      title: "Afirmações Bíblicas para Começar o Dia",
      content: [
        {
          affirmation: "EU SOU AMADO(A) INCONDICIONALMENTE",
          verse: "Romanos 8:38-39",
          design: "Tipografia elegante com flores"
        },
        {
          affirmation: "EU SOU MAIS QUE VENCEDOR(A)",
          verse: "Romanos 8:37",
          design: "Design minimalista com dourado"
        },
        {
          affirmation: "EU POSSO TODAS AS COISAS",
          verse: "Filipenses 4:13",
          design: "Fundo com montanhas e nascer do sol"
        }
      ],
      hashtags: "#afirmacoes #fe #biblia #motivacao #autoestima #deus #jesus #inspiracao #crescimentopessoal",
      engagement: "45.2k salvamentos • 12.8k cliques"
    }
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // Aqui você adicionaria uma notificação de sucesso
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Conteúdo Viral para Redes Sociais
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Templates prontos para engajar sua audiência e espalhar a Palavra de Deus
          </p>
        </div>

        {/* Seletor de Plataforma */}
        <div className="flex justify-center space-x-4 mb-8">
          {viralPosts.map((post, index) => (
            <button
              key={index}
              onClick={() => setSelectedPost(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedPost === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {post.platform}
            </button>
          ))}
        </div>

        {/* Conteúdo do Post Selecionado */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{viralPosts[selectedPost].title}</h2>
                <p className="opacity-90">{viralPosts[selectedPost].type} • {viralPosts[selectedPost].platform}</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors">
                  <Download className="h-5 w-5" />
                </button>
                <button className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Instagram Carrossel */}
            {viralPosts[selectedPost].platform === "Instagram" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {viralPosts[selectedPost].content.map((slide: any, index: number) => (
                    <div key={index} className={`${slide.design} p-6 rounded-xl text-white aspect-square flex flex-col justify-center items-center text-center`}>
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold leading-tight">
                          {slide.text}
                        </h3>
                        <div className="border-t border-white/30 pt-4">
                          <p className="text-sm opacity-90 italic">
                            {slide.verse}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                    <Instagram className="h-5 w-5 text-pink-600" />
                    <span>Caption Sugerida:</span>
                  </h4>
                  <p className="text-gray-700 mb-4">
                    "Se você está passando por um momento difícil, saiba que Deus tem uma palavra especial para você hoje. 💙 
                    Salve este post e volte aqui sempre que precisar lembrar do amor incondicional de Deus por você. ✨
                    
                    Qual versículo mais tocou seu coração? Comenta aqui embaixo! 👇"
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">{viralPosts[selectedPost].hashtags}</p>
                    <button 
                      onClick={() => copyToClipboard(viralPosts[selectedPost].hashtags)}
                      className="flex items-center space-x-2 text-purple-600 hover:text-purple-700"
                    >
                      <Copy className="h-4 w-4" />
                      <span className="text-sm">Copiar</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TikTok Roteiro */}
            {viralPosts[selectedPost].platform === "TikTok" && (
              <div className="space-y-6">
                <div className="bg-black rounded-xl p-6 text-white aspect-[9/16] max-w-sm mx-auto relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="relative h-full flex flex-col justify-between">
                    <div className="text-center">
                      <h3 className="text-lg font-bold mb-2">POV: Você descobriu seu valor em Deus</h3>
                    </div>
                    <div className="space-y-4">
                      {viralPosts[selectedPost].content.map((scene: any, index: number) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                          <div className="text-xs text-gray-300 mb-1">{scene.scene}</div>
                          <div className="text-sm font-semibold">{scene.text}</div>
                          {scene.verse && (
                            <div className="text-xs text-gray-300 mt-1">{scene.verse}</div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <Heart className="h-6 w-6" />
                        <MessageCircle className="h-6 w-6" />
                        <Share2 className="h-6 w-6" />
                      </div>
                      <Bookmark className="h-6 w-6" />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-red-600" />
                    <span>Roteiro Detalhado:</span>
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-800">Hook (0-3s):</h5>
                      <p className="text-gray-600 text-sm">Comece com uma situação que todos se identificam - se sentir sem valor</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800">Desenvolvimento (3-8s):</h5>
                      <p className="text-gray-600 text-sm">Crie suspense com "Mas aí você lembra que..." - use transição visual impactante</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800">Clímax (8-12s):</h5>
                      <p className="text-gray-600 text-sm">Revele o amor de Deus de forma emocional - use texto grande e música inspiradora</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pinterest Pin */}
            {viralPosts[selectedPost].platform === "Pinterest" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {viralPosts[selectedPost].content.map((pin: any, index: number) => (
                    <div key={index} className="bg-gradient-to-br from-rose-100 to-pink-100 p-6 rounded-xl aspect-[2/3] flex flex-col justify-center items-center text-center border-2 border-rose-200">
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                          {pin.affirmation}
                        </h3>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto"></div>
                        <p className="text-gray-600 font-medium">
                          {pin.verse}
                        </p>
                        <div className="text-xs text-gray-500 font-medium tracking-wider">
                          PALAVRA VIVA
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Descrição Otimizada para SEO:</h4>
                  <p className="text-gray-700 mb-4">
                    "Transforme seu dia com essas poderosas afirmações bíblicas! 🙏 Salve este pin e use essas verdades para fortalecer sua fé e autoestima. Perfeito para seu devocional matinal ou momentos de reflexão. #fe #biblia #afirmacoes #deus #motivacao #autoestima #crescimentopessoal #inspiracao #jesus #amor"
                  </p>
                </div>
              </div>
            )}

            {/* Métricas de Engajamento */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mt-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span>Potencial de Engajamento:</span>
              </h4>
              <p className="text-gray-700 mb-2">{viralPosts[selectedPost].engagement}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">Alto</div>
                  <div className="text-sm text-gray-600">Potencial Viral</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-gray-600">Taxa de Salvamento</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">8.5%</div>
                  <div className="text-sm text-gray-600">Taxa de Engajamento</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">4.2x</div>
                  <div className="text-sm text-gray-600">Mais Compartilhamentos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}