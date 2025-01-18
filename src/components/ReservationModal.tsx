import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white/95 backdrop-blur-sm rounded-none border border-gray-200 p-8 max-w-xl w-full mx-4 relative overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-red-700 rounded-full mx-auto mb-6 flex items-center justify-center"
              >
                <FaCheck className="text-white text-3xl" />
              </motion.div>
              <h3 className="text-3xl font-serif text-gray-900 mb-4">Reserva Confirmada</h3>
              <p className="text-gray-600 text-lg">Aguarde nosso contacto para confirmação final.</p>
              <p className="text-gray-500 mt-2 text-sm">Um email de confirmação será enviado em breve.</p>
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif text-gray-900">Reserva</h2>
                <p className="text-gray-500 mt-2">Reserve a sua experiência gastronómica</p>
              </div>

              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-4">
                  {[1, 2].map((num) => (
                    <div key={num} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step >= num ? 'bg-red-700 text-white' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {num}
                      </div>
                      {num === 1 && (
                        <div className={`w-16 h-0.5 mx-2 ${
                          step > 1 ? 'bg-red-700' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 ? (
                  <>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Data</label>
                        <input
                          type="date"
                          required
                          className="w-full px-4 py-3 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Horário</label>
                        <select 
                          required
                          className="w-full px-4 py-3 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                        >
                          <option value="">Selecione</option>
                          <option>12:00</option>
                          <option>13:00</option>
                          <option>19:00</option>
                          <option>19:30</option>
                          <option>20:00</option>
                          <option>20:30</option>
                          <option>21:00</option>
                          <option>21:30</option>
                          <option>22:00</option>
                          <option>22:30</option>
                          <option>23:00</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Número de Pessoas</label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                      >
                        {[...Array(20)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1} {i === 0 ? 'pessoa' : 'pessoas'}
                          </option>
                        ))}
                      </select>
                    </div>
                    <motion.button
                      type="button"
                      onClick={() => setStep(2)}
                      whileHover={{ scale: 1.02 }}
                      className="w-full py-4 bg-red-700 text-white text-sm uppercase tracking-wider hover:bg-red-800 transition-colors"
                    >
                      Continuar
                    </motion.button>
                  </>
                ) : (
                  <>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                          <input
                            type="tel"
                            required
                            className="w-full px-4 py-3 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Observações Especiais</label>
                        <textarea
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                          placeholder="Alergias, preferências ou ocasiões especiais"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <motion.button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 py-4 border border-gray-300 text-gray-700 text-sm uppercase tracking-wider hover:bg-gray-50 transition-colors"
                      >
                        Voltar
                      </motion.button>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        className="flex-1 py-4 bg-red-700 text-white text-sm uppercase tracking-wider hover:bg-red-800 transition-colors"
                      >
                        Confirmar Reserva
                      </motion.button>
                    </div>
                  </>
                )}
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}