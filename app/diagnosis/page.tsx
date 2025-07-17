
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import Link from 'next/link';

export default function DiagnosisPage() {
  const [activeTab, setActiveTab] = useState('gtm');
  const [currentStep, setCurrentStep] = useState(1);
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);

  const diagnostics = {
    gtm: {
      title: 'Go-To-Market Diagnostic',
      description: 'Assess your market entry readiness and strategy effectiveness',
      color: 'blue',
      questions: [
        {
          id: 'target_market',
          question: 'How well-defined is your target market?',
          type: 'multiple',
          options: [
            { text: 'Very specific with detailed personas', score: 4 },
            { text: 'Somewhat defined with basic segments', score: 3 },
            { text: 'Broadly defined market categories', score: 2 },
            { text: 'Not clearly defined yet', score: 1 }
          ]
        },
        {
          id: 'competitive_analysis',
          question: 'Have you conducted comprehensive competitive analysis?',
          type: 'multiple',
          options: [
            { text: 'Yes, detailed analysis with positioning map', score: 4 },
            { text: 'Basic competitor identification done', score: 3 },
            { text: 'Aware of some competitors', score: 2 },
            { text: 'Limited competitive knowledge', score: 1 }
          ]
        },
        {
          id: 'value_proposition',
          question: 'How clear is your value proposition?',
          type: 'multiple',
          options: [
            { text: 'Crystal clear and validated with customers', score: 4 },
            { text: 'Well-defined but needs validation', score: 3 },
            { text: 'Somewhat clear but could be stronger', score: 2 },
            { text: 'Still working on defining it', score: 1 }
          ]
        },
        {
          id: 'pricing_strategy',
          question: 'How developed is your pricing strategy?',
          type: 'multiple',
          options: [
            { text: 'Comprehensive pricing model with testing', score: 4 },
            { text: 'Basic pricing strategy in place', score: 3 },
            { text: 'Some pricing ideas but not finalized', score: 2 },
            { text: 'No clear pricing strategy yet', score: 1 }
          ]
        },
        {
          id: 'market_validation',
          question: 'Have you validated your product/service with real customers?',
          type: 'multiple',
          options: [
            { text: 'Extensive validation with paying customers', score: 4 },
            { text: 'Some customer feedback and testing', score: 3 },
            { text: 'Limited validation efforts', score: 2 },
            { text: 'No market validation yet', score: 1 }
          ]
        }
      ]
    },
    innovation: {
      title: 'Innovation Readiness Assessment',
      description: 'Evaluate your organization\'s innovation capabilities and culture',
      color: 'purple',
      questions: [
        {
          id: 'innovation_culture',
          question: 'How would you rate your organization\'s innovation culture?',
          type: 'multiple',
          options: [
            { text: 'Highly innovative with dedicated resources', score: 4 },
            { text: 'Encourages innovation with some support', score: 3 },
            { text: 'Open to innovation but limited resources', score: 2 },
            { text: 'Traditional approach with minimal innovation', score: 1 }
          ]
        },
        {
          id: 'technology_adoption',
          question: 'How quickly does your organization adopt new technologies?',
          type: 'multiple',
          options: [
            { text: 'Early adopter with dedicated tech team', score: 4 },
            { text: 'Adopts proven technologies quickly', score: 3 },
            { text: 'Follows industry standards with some delay', score: 2 },
            { text: 'Conservative approach to new technology', score: 1 }
          ]
        },
        {
          id: 'rnd_investment',
          question: 'What percentage of revenue is invested in R&D?',
          type: 'multiple',
          options: [
            { text: 'More than 10% of revenue', score: 4 },
            { text: '5-10% of revenue', score: 3 },
            { text: '1-5% of revenue', score: 2 },
            { text: 'Less than 1% of revenue', score: 1 }
          ]
        },
        {
          id: 'innovation_process',
          question: 'Do you have structured innovation processes?',
          type: 'multiple',
          options: [
            { text: 'Formal innovation methodology in place', score: 4 },
            { text: 'Some structured approaches used', score: 3 },
            { text: 'Ad-hoc innovation activities', score: 2 },
            { text: 'No structured innovation process', score: 1 }
          ]
        },
        {
          id: 'failure_tolerance',
          question: 'How does your organization handle failure and experimentation?',
          type: 'multiple',
          options: [
            { text: 'Celebrates learning from failure', score: 4 },
            { text: 'Tolerates failure in innovation projects', score: 3 },
            { text: 'Somewhat risk-averse but open to experimentation', score: 2 },
            { text: 'Risk-averse culture that avoids failure', score: 1 }
          ]
        }
      ]
    },
    growth: {
      title: 'Growth Strategy Assessment',
      description: 'Analyze your business growth potential and strategic positioning',
      color: 'green',
      questions: [
        {
          id: 'growth_stage',
          question: 'What stage is your business currently in?',
          type: 'multiple',
          options: [
            { text: 'Scaling rapidly with proven model', score: 4 },
            { text: 'Growing steadily with clear direction', score: 3 },
            { text: 'Early growth phase finding direction', score: 2 },
            { text: 'Pre-growth or startup phase', score: 1 }
          ]
        },
        {
          id: 'market_share',
          question: 'What is your current market position?',
          type: 'multiple',
          options: [
            { text: 'Market leader with significant share', score: 4 },
            { text: 'Strong player with growing share', score: 3 },
            { text: 'Emerging player gaining traction', score: 2 },
            { text: 'New entrant building presence', score: 1 }
          ]
        },
        {
          id: 'scalability',
          question: 'How scalable is your current business model?',
          type: 'multiple',
          options: [
            { text: 'Highly scalable with proven systems', score: 4 },
            { text: 'Scalable with some operational improvements needed', score: 3 },
            { text: 'Limited scalability without major changes', score: 2 },
            { text: 'Not scalable in current form', score: 1 }
          ]
        },
        {
          id: 'customer_acquisition',
          question: 'How effective is your customer acquisition strategy?',
          type: 'multiple',
          options: [
            { text: 'Highly effective with multiple channels', score: 4 },
            { text: 'Good results from key channels', score: 3 },
            { text: 'Some success but inconsistent', score: 2 },
            { text: 'Struggling with customer acquisition', score: 1 }
          ]
        },
        {
          id: 'financial_health',
          question: 'How would you describe your financial health?',
          type: 'multiple',
          options: [
            { text: 'Strong profitability and cash flow', score: 4 },
            { text: 'Positive trends and sustainable growth', score: 3 },
            { text: 'Break-even or modest profitability', score: 2 },
            { text: 'Cash flow challenges or losses', score: 1 }
          ]
        }
      ]
    }
  };

  const handleResponse = (questionId, answer) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const nextStep = () => {
    if (currentStep < diagnostics[activeTab].questions.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateScore = () => {
    const questions = diagnostics[activeTab].questions;
    let totalScore = 0;
    let answeredQuestions = 0;

    questions.forEach(question => {
      const response = responses[question.id];
      if (response) {
        const option = question.options.find(opt => opt.text === response);
        if (option) {
          totalScore += option.score;
          answeredQuestions++;
        }
      }
    });

    return answeredQuestions > 0 ? Math.round((totalScore / (answeredQuestions * 4)) * 100) : 0;
  };

  const getScoreLevel = (score) => {
    if (score >= 80) return { level: 'Excellent', color: 'green', message: 'You\'re well-positioned for success!' };
    if (score >= 60) return { level: 'Good', color: 'blue', message: 'Strong foundation with room for optimization.' };
    if (score >= 40) return { level: 'Fair', color: 'yellow', message: 'Some areas need attention and improvement.' };
    return { level: 'Needs Improvement', color: 'red', message: 'Significant opportunities for enhancement.' };
  };

  const generateReport = () => {
    setShowResults(true);
  };

  const resetAssessment = () => {
    setCurrentStep(1);
    setResponses({});
    setShowResults(false);
  };

  const currentQuestion = diagnostics[activeTab].questions[currentStep - 1];
  const score = calculateScore();
  const scoreData = getScoreLevel(score);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 61, 58, 0.9), rgba(31, 61, 58, 0.9)), url('https://readdy.ai/api/search-image?query=Ethiopian%20business%20professionals%20analyzing%20charts%20and%20data%20on%20laptops%20and%20tablets%2C%20modern%20office%20setting%20with%20strategic%20planning%20documents%20and%20digital%20analytics%20dashboards%2C%20contemporary%20workspace%20showcasing%20business%20intelligence%20and%20assessment%20tools%2C%20professional%20atmosphere%20with%20natural%20lighting&width=1920&height=600&seq=diaghero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Business Diagnostic Tools</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Get personalized insights and actionable recommendations with our comprehensive AI-powered diagnostic assessments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-sm">🚀 Free Assessment • 📊 Instant Results • 💡 Expert Recommendations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-[#1F3D3A] mb-2">12,000+</div>
              <div className="text-gray-600 text-sm">Assessments Completed</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-[#1F3D3A] mb-2">95%</div>
              <div className="text-gray-600 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-[#1F3D3A] mb-2">3 Min</div>
              <div className="text-gray-600 text-sm">Average Time</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-[#1F3D3A] mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Available Anytime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Tools */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-2xl">
                {Object.entries(diagnostics).map(([key, diagnostic]) => (
                  <button
                    key={key}
                    onClick={() => {setActiveTab(key); setCurrentStep(1); setResponses({}); setShowResults(false);}}
                    className={`px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap cursor-pointer font-medium ${
                      activeTab === key 
                        ? 'bg-[#1F3D3A] text-white shadow-lg' 
                        : 'text-gray-600 hover:text-[#1F3D3A] hover:bg-gray-50'
                    }`}
                  >
                    {diagnostic.title.split(' ')[0]} {diagnostic.title.split(' ')[1]}
                  </button>
                ))}
              </div>
            </div>

            {!showResults ? (
              /* Assessment Interface */
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#1F3D3A] mb-3">
                    {diagnostics[activeTab].title}
                  </h2>
                  <p className="text-gray-600 text-lg">{diagnostics[activeTab].description}</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-10">
                  <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <span className="font-medium">Question {currentStep} of {diagnostics[activeTab].questions.length}</span>
                    <span className="font-medium">{Math.round((currentStep / diagnostics[activeTab].questions.length) * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-[#1F3D3A] to-green-500 h-3 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${(currentStep / diagnostics[activeTab].questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Question */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold text-[#1F3D3A] mb-8 text-center">
                    {currentQuestion.question}
                  </h3>

                  <div className="space-y-4 max-w-2xl mx-auto">
                    {currentQuestion.options.map((option, index) => (
                      <label key={index} className={`flex items-center p-5 border-2 rounded-xl hover:border-[#1F3D3A] cursor-pointer transition-all duration-200 ${
                        responses[currentQuestion.id] === option.text 
                          ? 'border-[#1F3D3A] bg-[#1F3D3A]/5' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}>
                        <input
                          type="radio"
                          name={currentQuestion.id}
                          value={option.text}
                          onChange={(e) => handleResponse(currentQuestion.id, e.target.value)}
                          checked={responses[currentQuestion.id] === option.text}
                          className="mr-4 w-5 h-5 text-[#1F3D3A] focus:ring-[#1F3D3A]"
                        />
                        <span className="text-gray-700 text-lg">{option.text}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`flex items-center px-6 py-3 rounded-full border-2 transition-colors whitespace-nowrap cursor-pointer ${
                      currentStep === 1
                        ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                        : 'border-[#1F3D3A] text-[#1F3D3A] hover:bg-[#1F3D3A] hover:text-white'
                    }`}
                  >
                    <i className="ri-arrow-left-line mr-2"></i>
                    Previous
                  </button>

                  {currentStep === diagnostics[activeTab].questions.length ? (
                    <button
                      onClick={generateReport}
                      disabled={!responses[currentQuestion.id]}
                      className={`flex items-center px-8 py-3 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                        responses[currentQuestion.id]
                          ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-lg'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <i className="ri-file-chart-line mr-2"></i>
                      Generate Report
                    </button>
                  ) : (
                    <button
                      onClick={nextStep}
                      disabled={!responses[currentQuestion.id]}
                      className={`flex items-center px-6 py-3 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                        responses[currentQuestion.id]
                          ? 'bg-[#1F3D3A] text-white hover:bg-[#2a5248]'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Next Question
                      <i className="ri-arrow-right-line ml-2"></i>
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Results Interface */
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                <div className="text-center mb-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                    scoreData.color === 'green' ? 'bg-green-100' :
                    scoreData.color === 'blue' ? 'bg-blue-100' :
                    scoreData.color === 'yellow' ? 'bg-yellow-100' : 'bg-red-100'
                  }`}>
                    <span className={`text-3xl font-bold ${
                      scoreData.color === 'green' ? 'text-green-600' :
                      scoreData.color === 'blue' ? 'text-blue-600' :
                      scoreData.color === 'yellow' ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {score}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#1F3D3A] mb-3">Your Assessment Results</h2>
                  <p className={`text-xl font-semibold mb-2 ${
                    scoreData.color === 'green' ? 'text-green-600' :
                    scoreData.color === 'blue' ? 'text-blue-600' :
                    scoreData.color === 'yellow' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {scoreData.level}
                  </p>
                  <p className="text-gray-600">{scoreData.message}</p>
                </div>

                {/* Score Breakdown */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-[#1F3D3A] mb-6 text-center">Detailed Analysis</h3>
                  <div className="space-y-4">
                    {diagnostics[activeTab].questions.map((question, index) => {
                      const response = responses[question.id];
                      const option = response ? question.options.find(opt => opt.text === response) : null;
                      const questionScore = option ? (option.score / 4) * 100 : 0;
                      
                      return (
                        <div key={question.id} className="bg-gray-50 p-4 rounded-xl">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-gray-800 flex-1">{question.question}</h4>
                            <span className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${
                              questionScore >= 75 ? 'bg-green-100 text-green-800' :
                              questionScore >= 50 ? 'bg-blue-100 text-blue-800' :
                              questionScore >= 25 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {questionScore.toFixed(0)}%
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm">{response || 'Not answered'}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="mb-10 bg-gradient-to-r from-[#1F3D3A]/10 to-green-500/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#1F3D3A] mb-4">Recommended Next Steps</h3>
                  <ul className="space-y-3">
                    {score >= 80 ? (
                      <>
                        <li className="flex items-start">
                          <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                          <span className="text-gray-700">Consider advanced strategy optimization sessions</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                          <span className="text-gray-700">Explore scaling opportunities and market expansion</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                          <span className="text-gray-700">Share your success story and mentor others</span>
                        </li>
                      </>
                    ) : score >= 60 ? (
                      <>
                        <li className="flex items-start">
                          <i className="ri-lightbulb-line text-blue-500 mr-2 mt-1"></i>
                          <span className="text-gray-700">Focus on strengthening weak areas identified</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-lightbulb-line text-blue-500 mr-2 mt-1"></i>
                          <span className="text-gray-700">Consider targeted consulting in specific domains</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-lightbulb-line text-blue-500 mr-2 mt-1"></i>
                          <span className="text-gray-700">Implement best practices in identified gap areas</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-start">
                          <i className="ri-alert-line text-orange-500 mr-2 mt-1"></i>
                          <span className="text-gray-700">Schedule a comprehensive strategy consultation</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-alert-line text-orange-500 mr-2 mt-1"></i>
                          <span className="text-gray-700">Develop foundational frameworks before scaling</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-alert-line text-orange-500 mr-2 mt-1"></i>
                          <span className="text-gray-700">Consider our intensive business transformation program</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="bg-[#1F3D3A] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2a5248] transition-colors whitespace-nowrap cursor-pointer text-center">
                    Book Expert Consultation
                  </Link>
                  <button
                    onClick={resetAssessment}
                    className="border-2 border-[#1F3D3A] text-[#1F3D3A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1F3D3A] hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Take Another Assessment
                  </button>
                  <Link href="/services" className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer text-center">
                    View Our Services
                  </Link>
                </div>
              </div>
            )}

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                  <i className="ri-ai-generate text-2xl text-green-600"></i>
                </div>
                <h3 className="font-semibold text-[#1F3D3A] mb-2">AI-Powered Analysis</h3>
                <p className="text-gray-600 text-sm">Advanced algorithms provide personalized insights based on industry best practices</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                  <i className="ri-file-pdf-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="font-semibold text-[#1F3D3A] mb-2">Detailed PDF Report</h3>
                <p className="text-gray-600 text-sm">Comprehensive analysis with actionable recommendations and implementation roadmap</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                  <i className="ri-phone-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="font-semibold text-[#1F3D3A] mb-2">Expert Consultation</h3>
                <p className="text-gray-600 text-sm">Follow-up call with our innovation specialists to discuss your results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F3D3A] mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your business knowledge with our comprehensive resource library
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                <i className="ri-book-open-line text-xl text-blue-600"></i>
              </div>
              <h3 className="font-semibold text-[#1F3D3A] mb-2">Strategy Playbooks</h3>
              <p className="text-gray-600 text-sm mb-4">Downloadable guides for business strategy implementation</p>
              <Link href="/warehouse" className="text-[#1F3D3A] text-sm font-medium hover:underline">
                View Playbooks →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mb-4">
                <i className="ri-video-line text-xl text-green-600"></i>
              </div>
              <h3 className="font-semibold text-[#1F3D3A] mb-2">Video Tutorials</h3>
              <p className="text-gray-600 text-sm mb-4">Step-by-step guidance for business development</p>
              <Link href="/warehouse" className="text-[#1F3D3A] text-sm font-medium hover:underline">
                Watch Videos →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mb-4">
                <i className="ri-calendar-event-line text-xl text-purple-600"></i>
              </div>
              <h3 className="font-semibold text-[#1F3D3A] mb-2">Webinars</h3>
              <p className="text-gray-600 text-sm mb-4">Live sessions with industry experts and thought leaders</p>
              <Link href="/warehouse" className="text-[#1F3D3A] text-sm font-medium hover:underline">
                Join Webinars →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg mb-4">
                <i className="ri-article-line text-xl text-orange-600"></i>
              </div>
              <h3 className="font-semibold text-[#1F3D3A] mb-2">Case Studies</h3>
              <p className="text-gray-600 text-sm mb-4">Real-world examples of successful business transformations</p>
              <Link href="/case-studies" className="text-[#1F3D3A] text-sm font-medium hover:underline">
                Read Cases →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1F3D3A]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Personalized Strategy Support?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a consultation for in-depth business analysis and custom strategy development tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer">
              Book Expert Consultation
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1F3D3A] transition-colors whitespace-nowrap cursor-pointer">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
