import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
const SuccessStoriesSection = () => {
  return <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-foreground">Success Stories</h3>
          <p className="text-xl text-muted-foreground">Real results from our students</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-primary-50 to-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Thanks to SurgeAhead's workshop, I felt incredibly prepared for my medical school interviews. The surgical skills training gave me unique talking points, and I got offers from 3 out of 4 universities I applied to!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg" style={{
                backgroundColor: '#104475'
              }}>
                  JM
                </div>
                <div>
                  <div className="font-semibold text-foreground">Krishma</div>
                  <div className="text-sm text-muted-foreground">London</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-muted-foreground mb-4 italic">&quot;The personal statement support was invaluable. They helped me restructure my entire statement and it made such a difference. I'm now studying at my dream university!&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg" style={{
                backgroundColor: '#104475'
              }}>
                  DT
                </div>
                <div>
                  <div className="font-semibold text-foreground">David T.</div>
                  <div className="text-sm text-muted-foreground">London</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "The MMI practice sessions were game-changing. I went from feeling anxious about interviews to being confident and articulate. The feedback was so detailed and helped me improve dramatically!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg" style={{
                backgroundColor: '#104475'
              }}>
                  SP
                </div>
                <div>
                  <div className="font-semibold text-foreground">Sarah P.</div>
                  <div className="text-sm text-muted-foreground">London</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default SuccessStoriesSection;