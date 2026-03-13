import { useState } from 'react';
import { motion } from 'motion/react';

interface Props {
  onNext: () => void;
}

const options = [
  { id: 1, label: '0 a 12 meses', desc: 'Fase de construção delicada' },
  { id: 2, label: '1 a 3 anos', desc: 'Fase de maior exposição' },
  { id: 3, label: '3 a 6 anos', desc: 'Fase escolar e viroses' },
  { id: 4, label: 'Mais de 6 anos', desc: '' },
];

export default function QuizScreen({ onNext }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="min-h-screen flex flex-col items-center p-6 pt-12"
    >
      <div className="w-full max-w-2xl mb-12">
        <div className="flex justify-between text-sm text-[#3E3A36] mb-2">
          <span>Pergunta 1 de 5</span>
          <span>20%</span>
        </div>
        <div className="h-2 bg-[#7CC2A8]/20 rounded-full">
          <div className="h-full bg-[#4FAF8F] rounded-full w-[20%]" />
        </div>
      </div>

      <h2 className="font-serif text-4xl text-[#3E3A36] mb-12">Qual a idade do seu filho?</h2>

      <div className="w-full max-w-2xl space-y-4 mb-12">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelected(option.id)}
            className={`w-full p-6 rounded-2xl border-2 text-left transition-all ${
              selected === option.id 
                ? 'border-[#4FAF8F] bg-white' 
                : 'border-transparent bg-white hover:border-[#4FAF8F]/50'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selected === option.id ? 'border-[#4FAF8F]' : 'border-gray-300'
              }`}>
                {selected === option.id && <div className="w-3 h-3 rounded-full bg-[#4FAF8F]" />}
              </div>
              <div>
                <div className="font-semibold text-[#3E3A36]">{option.label}</div>
                {option.desc && <div className="text-sm text-gray-500">{option.desc}</div>}
              </div>
            </div>
          </button>
        ))}
      </div>

      <button 
        onClick={onNext}
        disabled={selected === null}
        className="w-full max-w-2xl bg-[#4FAF8F] text-white py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
      >
        Próxima
      </button>
    </motion.div>
  );
}
