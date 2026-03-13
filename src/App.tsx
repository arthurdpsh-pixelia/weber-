/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import LandingScreen from './components/LandingScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'quiz' | 'result'>('landing');

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      {currentPage === 'landing' && (
        <LandingScreen onStart={() => setCurrentPage('quiz')} />
      )}
      {currentPage === 'quiz' && (
        <QuizScreen onNext={() => setCurrentPage('result')} />
      )}
      {currentPage === 'result' && (
        <ResultScreen />
      )}
    </div>
  );
}
