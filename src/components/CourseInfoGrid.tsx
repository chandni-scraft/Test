import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, MapPin, DollarSign, GraduationCap } from "lucide-react";
const CourseInfoGrid = () => {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12 md:mb-16">
      <Card className="text-center">
        <CardContent className="p-4 md:p-6">
          <MapPin className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mx-auto mb-2 md:mb-3" />
          <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Location</h4>
          <p className="text-muted-foreground text-xs md:text-sm">London (venue TBC)</p>
        </CardContent>
      </Card>
      
      <Card className="text-center">
        <CardContent className="p-4 md:p-6">
          <Clock className="h-6 w-6 md:h-8 md:w-8 text-green-600 mx-auto mb-2 md:mb-3" />
          <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Duration</h4>
          <p className="text-muted-foreground text-xs md:text-sm">Half-day (approx. 4-5 hours)</p>
        </CardContent>
      </Card>
      
      <Card className="text-center">
        <CardContent className="p-4 md:p-6">
          <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-purple-600 mx-auto mb-2 md:mb-3" />
          <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Price</h4>
          <p className="text-muted-foreground text-xs md:text-sm">£150 per student</p>
        </CardContent>
      </Card>

      <Card className="text-center">
        <CardContent className="p-4 md:p-6">
          <Users className="h-6 w-6 md:h-8 md:w-8 text-orange-600 mx-auto mb-2 md:mb-3" />
          <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Who It's For</h4>
          <p className="text-muted-foreground text-xs md:text-sm">Year 10-13 students who want to apply to medicine or dentistry</p>
        </CardContent>
      </Card>

      <Card className="text-center">
        <CardContent className="p-4 md:p-6">
          <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-red-600 mx-auto mb-2 md:mb-3" />
          <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Lead By</h4>
          <p className="text-muted-foreground text-xs md:text-sm">UK doctors and trained medical students
        </p>
        </CardContent>
      </Card>
    </div>;
};
export default CourseInfoGrid;