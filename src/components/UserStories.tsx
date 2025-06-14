
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Star, TrendingUp } from "lucide-react";

export const UserStories = () => {
  const stories = [
    {
      name: "Sarah M.",
      location: "Nairobi",
      story: "I started with just KES 5,000 in Bitcoin last year. Now I've built a portfolio worth over KES 80,000 by following the safety guides here.",
      achievement: "1,500% growth in 12 months",
      photo: "👩🏿‍💼",
      category: "Investment Success"
    },
    {
      name: "James K.",
      location: "Mombasa", 
      story: "My brother in Canada sends money home using crypto now. We save over KES 3,000 in fees every month compared to Western Union.",
      achievement: "60% savings on remittances",
      photo: "👨🏿‍💻",
      category: "Remittances"
    },
    {
      name: "Grace W.",
      location: "Kisumu",
      story: "I almost lost KES 25,000 to a fake P2P trader. Thanks to the scam alerts here, I spotted the red flags and avoided the trap.",
      achievement: "KES 25,000 saved from scam",
      photo: "👩🏿‍🎓",
      category: "Scam Prevention"
    },
    {
      name: "David O.",
      location: "Eldoret",
      story: "Used to spend hours figuring out crypto taxes. The tax calculator here saved me time and helped me file correctly with KRA.",
      achievement: "Proper tax compliance",
      photo: "👨🏿‍🔧",
      category: "Tax Planning"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-950/20 to-blue-950/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Users className="h-10 w-10 text-green-500" />
            Real Success Stories from Kenya
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See how fellow Kenyans are using crypto safely and successfully with our guides and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <Card key={index} className="bg-slate-900/60 border-slate-700 hover:bg-slate-900/80 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-4xl">{story.photo}</span>
                  <div>
                    <div className="text-white">{story.name}</div>
                    <div className="text-slate-400 text-sm">{story.location}</div>
                    <div className="text-orange-500 text-xs font-semibold mt-1">
                      {story.category}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300 italic">
                  "{story.story}"
                </p>
                
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-3 rounded-lg border border-green-500/30">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-green-400 font-semibold text-sm">
                      Achievement: {story.achievement}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                  <span className="text-slate-400 text-sm ml-2">Verified Success</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-orange-500/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Share Your Success Story
              </h3>
              <p className="text-slate-300 mb-6">
                Help inspire other Kenyans by sharing how crypto has helped you achieve your financial goals.
              </p>
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                Submit Your Story
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
