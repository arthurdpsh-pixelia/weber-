import { Heart, Shield, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  onStart: () => void;
}

export default function LandingScreen({ onStart }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="flex gap-4 mb-8">
        {[Heart, Shield, Leaf].map((Icon, i) => (
          <div key={i} className="w-16 h-16 rounded-full bg-[#7CC2A8]/20 flex items-center justify-center">
            <Icon className="w-8 h-8 text-[#4FAF8F]" />
          </div>
        ))}
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7CC2A8]/20 text-[#4FAF8F] font-medium mb-6">
        <Shield className="w-4 h-4" />
        <span>Diagnóstico da Imunidade Infantil</span>
      </div>

      <h1 className="font-serif text-5xl md:text-6xl text-[#3E3A36] mb-6 max-w-2xl">
        Seu filho vive no ciclo <br />
        <span className="text-[#4FAF8F]">"Melhora-Adoece"?</span>
      </h1>

      <p className="text-lg text-[#3E3A36] mb-10 max-w-xl">
        Responda a <b>5 perguntas rápidas</b> para descobrir o Perfil Imunológico dele e receber um plano de ação personalizado para quebrar esse ciclo <b>sem depender de remédios químicos</b>.
      </p>

      <button 
        onClick={onStart}
        className="bg-gradient-to-r from-[#4FAF8F] to-[#7CC2A8] text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all mb-10"
      >
        COMEÇAR O DIAGNÓSTICO →
      </button>

      <div className="flex flex-col md:flex-row gap-6 text-[#3E3A36] font-medium">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4FAF8F]" />
          <span>Apenas 60 segundos</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4FAF8F]" />
          <span>100% Gratuito</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4FAF8F]" />
          <span>Resultado Imediato</span>
        </div>
      </div>
    </motion.div>
  );
}
