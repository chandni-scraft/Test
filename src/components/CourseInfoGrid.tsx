import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, GraduationCap } from "lucide-react";
const CourseInfoGrid = () => {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
    <Card className="text-center">
      <CardContent className="p-4 md:p-6">
        <Clock className="h-6 w-6 md:h-8 md:w-8 text-green-600 mx-auto mb-2 md:mb-3" />
        <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Duration</h4>
        <p className="text-muted-foreground text-xs md:text-sm">Full day course</p>
      </CardContent>
    </Card>

    <Card className="text-center">
      <CardContent className="p-4 md:p-6">
        <Users className="h-6 w-6 md:h-8 md:w-8 text-orange-600 mx-auto mb-2 md:mb-3" />
        <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Who It's For</h4>
        <p className="text-muted-foreground text-xs md:text-sm">Students wanting to secure a place in top medical/dental schools in the UK.</p>
      </CardContent>
    </Card>

    <Card className="text-center">
      <CardContent className="p-4 md:p-6">
        <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-red-600 mx-auto mb-2 md:mb-3" />
        <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Led By</h4>
        <p className="text-muted-foreground text-xs md:text-sm">UK Doctors and senior medical students.</p>
      </CardContent>
    </Card>
  </div>;
};
export default CourseInfoGrid;