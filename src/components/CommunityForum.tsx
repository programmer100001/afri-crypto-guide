
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, ThumbsUp, Clock, Users, Trophy } from "lucide-react";

export const CommunityForum = () => {
  const [newQuestion, setNewQuestion] = useState({ title: "", content: "" });

  const topQuestions = [
    {
      id: 1,
      title: "Best time to buy Bitcoin in Kenya?",
      author: "CryptoNewbie254",
      timeAgo: "2 hours ago",
      upvotes: 15,
      replies: 8,
      category: "Trading",
      answered: true
    },
    {
      id: 2,
      title: "How to report crypto gains to KRA?",
      author: "TaxHelper",
      timeAgo: "5 hours ago",
      upvotes: 23,
      replies: 12,
      category: "Tax",
      answered: true
    },
    {
      id: 3,
      title: "Safest P2P platforms for beginners?",
      author: "SafeTrader",
      timeAgo: "1 day ago",
      upvotes: 31,
      replies: 19,
      category: "Safety",
      answered: false
    },
    {
      id: 4,
      title: "MetaMask vs Trust Wallet - which is better?",
      author: "WalletExplorer",
      timeAgo: "2 days ago",
      upvotes: 18,
      replies: 14,
      category: "Wallets",
      answered: true
    }
  ];

  const topContributors = [
    { name: "CryptoExpert254", posts: 89, helpfulVotes: 234 },
    { name: "SafetyFirst", posts: 67, helpfulVotes: 189 },
    { name: "BlockchainTeacher", posts: 54, helpfulVotes: 156 }
  ];

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New question:", newQuestion);
    alert("Question submitted! Our community will help you soon.");
    setNewQuestion({ title: "", content: "" });
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <MessageCircle className="h-10 w-10 text-blue-500" />
            Community Q&A Forum
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Get help from experienced Kenyan crypto users. Ask questions, share knowledge, and learn together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Forum Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Ask Question Form */}
            <Card className="bg-slate-900/60 border-slate-700">
              <CardHeader>
                <CardTitle className="text-blue-500">Ask the Community</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitQuestion} className="space-y-4">
                  <Input
                    value={newQuestion.title}
                    onChange={(e) => setNewQuestion({...newQuestion, title: e.target.value})}
                    className="bg-slate-800 border-slate-600 text-white"
                    placeholder="What's your crypto question?"
                    required
                  />
                  <Textarea
                    value={newQuestion.content}
                    onChange={(e) => setNewQuestion({...newQuestion, content: e.target.value})}
                    className="bg-slate-800 border-slate-600 text-white"
                    placeholder="Provide more details about your question..."
                    rows={3}
                    required
                  />
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Ask Question
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Recent Questions */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Recent Questions</h3>
              {topQuestions.map((question) => (
                <Card key={question.id} className="bg-slate-900/60 border-slate-700 hover:bg-slate-900/80 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-lg mb-2">
                          {question.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span>by {question.author}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {question.timeAgo}
                          </span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded text-xs font-semibold ${
                        question.answered 
                          ? 'bg-green-600 text-white' 
                          : 'bg-orange-600 text-white'
                      }`}>
                        {question.answered ? 'ANSWERED' : 'OPEN'}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-slate-300">
                          <ThumbsUp className="h-4 w-4" />
                          {question.upvotes}
                        </span>
                        <span className="flex items-center gap-1 text-slate-300">
                          <MessageCircle className="h-4 w-4" />
                          {question.replies} replies
                        </span>
                      </div>
                      <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                        {question.category}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card className="bg-slate-900/60 border-slate-700">
              <CardHeader>
                <CardTitle className="text-green-500 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-300">Active Members</span>
                  <span className="text-white font-bold">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Questions Asked</span>
                  <span className="text-white font-bold">1,293</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Questions Answered</span>
                  <span className="text-white font-bold">1,156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Success Rate</span>
                  <span className="text-green-500 font-bold">89%</span>
                </div>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card className="bg-slate-900/60 border-slate-700">
              <CardHeader>
                <CardTitle className="text-yellow-500 flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">
                        #{index + 1} {contributor.name}
                      </div>
                      <div className="text-xs text-slate-400">
                        {contributor.posts} posts • {contributor.helpfulVotes} helpful votes
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      index === 0 ? 'bg-yellow-500 text-black' :
                      index === 1 ? 'bg-gray-400 text-black' :
                      'bg-orange-600 text-white'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-slate-900/60 border-slate-700">
              <CardHeader>
                <CardTitle className="text-orange-500">Quick Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start border-slate-600 text-slate-300">
                  Beginner's Guide
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start border-slate-600 text-slate-300">
                  Safety Checklist
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start border-slate-600 text-slate-300">
                  Exchange Reviews
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
