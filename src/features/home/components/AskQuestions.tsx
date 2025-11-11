import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const questions = [
  {
    id: 1,
    question: "¿Qué sucede después de comprar una plantilla?",
    answer: "Después de comprar una plantillas, recibirás un enlace del repositorio de Github. A continuación un miembro del equipo te ayudará con la personalización de la plantilla, en base a tus requerimientos.",
  },
  {
    id: 2,
    question: "¿Cómo compro una plantilla?",
    answer: "Para realizar una compra, visite nuestro sitio web, seleccione la plantilla que desea comprar y proceda con el pago. Sigue las indicaciones para completar la compra.",
  },
  {
    id: 3,
    question: "¿Con qué frecuencia lanzan nuevas plantillas?",
    answer: "Lanzamos nuevas plantillas periódicamente, generalmente cada 4 días o 1 semana, para garantizar que nuestra colección se mantenga actualizada y diversificada.",
  },
  {
    id: 4,
    question: "¿Todas sus plantillas son responsivas?",
    answer: "Sí, todas nuestras plantillas son responsivas, lo que significa que se adaptan automáticamente a diferentes tamaños de pantalla, incluyendo smartphones, tablets y computadoras de escritorio.",
  },
  {
    id: 5,
    question: "¿Puedo personalizar la plantilla?",
    answer: "Si, la plantilla se puede personalizar según tus necesidades, para ello, contamos con un equipo de desarrollo que te ayudará con la personalización de la plantilla, en base a tus requerimientos.",
  },
  {
    id: 6,
    question: "¿Bridan soporte después de la compra?",
    answer: "Si, ofrecemos soporte para consultas relacionadas con las plantillas. Póngase en contacto con nuestro equipo de soporte si tiene alguna pregunta o encuentra problemas.",
  },
  {
    id: 7,
    question: "¿Puedo usar la plantilla para varios proyectos?",
    answer: "Si, la plantilla se puede usar para varios proyectos.",
  },
  {
    id: 8,
    question: "¿Cuál es su política de garantía de devolución dinero/reembolso?",
    answer: "No tenemos política de devolución de dinero/reembolso, ya que las plantillas son digitales y no se pueden devolver.",
  },
  {
    id: 9,
    question: "¿Cuáles son sus métodos de pago?",
    answer: "Aceptamos pagos a través de transferencias bancarias, Yape y Plin. Los pagos se procesan de forma segura y confiable.",
  },
  {
    id: 10,
    question: "¿Proporcionan facturas de compra?",
    answer: "Por el momento proporcionamos solo facturas tipo recibo por honorarios.",
  }
]

export default function AskQuestions() {
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(new Set([1]))

  const toggleQuestion = (id: number) => {
    setOpenQuestions((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <main
    className="py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-0" data-aos="fade-up" data-aos-delay="300">
      <div
      className="max-w-7xl mx-auto">
        <div
        className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 min-h-screen">
          <div
          className="w-full lg:w-1/3 lg:sticky lg:top-40 self-start">
            <h2
            className="text-white text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center lg:text-left">Preguntas frecuentes</h2>
            <p
            className="text-white text-base md:text-lg text-center lg:text-left">
              Respuestas a las preguntas más frecuentes sobre nuestras plantillas, servicios y procesos de compra.
            </p>
          </div>
          <div
          className="w-full lg:w-2/3 space-y-4 md:space-y-5 lg:space-y-6">
            {questions.map((question) => {
              const isOpen = openQuestions.has(question.id)
              return (
                <div
                key={question.id}
                className="bg-primary border border-gray-400 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-700 ease-out">
                  <button
                    onClick={() => toggleQuestion(question.id)}
                    className="w-full p-3 md:p-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-500 ease-out"
                  >
                    <h3
                    className="text-white text-lg md:text-xl lg:text-2xl font-bold text-left pr-3 md:pr-4">
                      {question.question}
                    </h3>
                    <ChevronDown
                      className={`text-white shrink-0 transition-transform duration-700 ease-in-out w-5 h-5 md:w-6 md:h-6 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      style={{
                        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                      size={20}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      isOpen
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                    style={{
                      transitionProperty: 'max-height, opacity',
                      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <div className="px-3 md:px-4 pb-3 md:pb-4">
                      <hr className="mb-2 md:mb-3 text-gray-400 border-t-2 border-dashed" />
                      <p className="text-white text-base md:text-lg">
                        {question.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
