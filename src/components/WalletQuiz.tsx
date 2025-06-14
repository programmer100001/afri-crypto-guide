
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Smartphone, Shield, DollarSign } from "lucide-react";

export const WalletQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What's your crypto experience level?",
      options: [
        { text: "Complete beginner", value: "beginner" },
        { text: "Some experience", value: "intermediate" },
        { text: "Advanced user", value: "advanced" }
      ]
    },
    {
      question: "How much crypto do you plan to hold?",
      options: [
        { text: "Less than KES 50,000", value: "small" },
        { text: "KES 50,000 - 500,000", value: "medium" },
        { text: "More than KES 500,000", value: "large" }
      ]
    },
    {
      question: "How will you primarily use crypto?",
      options: [
        { text: "Trading/buying/selling", value: "trading" },
        { text: "Long-term holding", value: "holding" },
        { text: "Daily transactions", value: "spending" }
      ]
    },
    {
      question: "What device do you use most?",
      options: [
        { text: "Smartphone only", value: "mobile" },
        { text: "Computer/laptop", value: "desktop" },
        { text: "Both equally", value: "both" }
      ]
    }
  ];

  const getRecommendation = () => {
    const [experience, amount, usage, device] = answers;

    if (experience === "beginner" && device === "mobile") {
      return {
        wallet: "Trust Wallet",
        reason: "Perfect for beginners with a mobile-first design and strong security",
        pros: ["Easy to use", "Built-in DApp browser", "Multi-coin support"],
        cons: ["Hot wallet (online)", "Not ideal for large amounts"],
        downloadLink: "https://trustwallet.com/",
        security: "Medium"
      };
    }

    if (amount === "large" || usage === "holding") {
      return {
        wallet: "Ledger Hardware Wallet",
        reason: "Best security for large amounts and long-term storage",
        pros: ["Offline storage", "Highest security", "Multi-currency"],
        cons: ["Costs money (~$60)", "Less convenient for trading"],
        downloadLink: "https://www.ledger.com/",
        security: "Highest"
      };
    }

    if (usage === "trading" && device !== "mobile") {
      return {
        wallet: "MetaMask",
        reason: "Great for trading and DeFi applications",
        pros: ["Browser integration", "DeFi compatibility", "Popular exchanges support"],
        cons: ["Can be complex", "Ethereum-focused"],
        downloadLink: "https://metamask.io/",
        security: "Medium-High"
      };
    }

    return {
      wallet: "Exodus Wallet",
      reason: "Great balance of features and ease of use",
      pros: ["Beautiful interface", "Built-in exchange", "Multi-platform"],
      cons: ["Limited DeFi features", "Hot wallet"],
      downloadLink: "https://www.exodus.com/",
      security: "Medium"
    };
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const recommendation = getRecommendation();
    
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-green-950/30 to-blue-950/30 border-green-500/30">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-white flex items-center justify-center gap-3">
                <Wallet className="h-8 w-8 text-green-500" />
                Your Recommended Wallet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-400 mb-2">
                  {recommendation.wallet}
                </h3>
                <p className="text-slate-300 text-lg">
                  {recommendation.reason}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-green-500 font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {recommendation.pros.map((pro, index) => (
                      <li key={index} className="text-slate-300 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-orange-500 font-semibold mb-3">
                    Things to Consider
                  </h4>
                  <ul className="space-y-2">
                    {recommendation.cons.map((con, index) => (
                      <li key={index} className="text-slate-300 flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300">Security Level:</span>
                  <span className={`font-bold ${
                    recommendation.security === 'Highest' ? 'text-green-500' :
                    recommendation.security === 'Medium-High' ? 'text-yellow-500' :
                    'text-orange-500'
                  }`}>
                    {recommendation.security}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open(recommendation.downloadLink, '_blank')}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                >
                  <Smartphone className="h-4 w-4 mr-2" />
                  Get {recommendation.wallet}
                </Button>
                <Button onClick={resetQuiz} variant="outline" className="border-slate-600 text-slate-300">
                  Take Quiz Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Wallet className="h-10 w-10 text-orange-500" />
            Find Your Perfect Crypto Wallet
          </h2>
          <p className="text-xl text-slate-300">
            Answer a few questions to get a personalized wallet recommendation
          </p>
          <div className="mt-4 text-slate-400">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>

        <Card className="bg-slate-900/60 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-xl">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(option.value)}
                variant="outline"
                className="w-full text-left justify-start h-auto p-4 border-slate-600 text-slate-300 hover:bg-orange-500/20 hover:border-orange-500"
              >
                {option.text}
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
