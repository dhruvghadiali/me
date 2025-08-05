import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  Users,
  Clock,
  Calendar,
  Star,
  Target,
  TrendingUp,
  Brain,
  Microscope,
  Calculator,
  Globe,
  Palette,
  Music,
  Dumbbell,
  Languages
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";
import { ScrollArea, ScrollBar } from "@MEShadcnComponents/scroll-area";

const SchoolAcademicClassesComponent = () => {
  const gradeData = [
    { grade: "Grade 9", students: 280, classes: 12, avgSize: 23 },
    { grade: "Grade 10", students: 295, classes: 14, avgSize: 21 },
    { grade: "Grade 11", students: 315, classes: 16, avgSize: 20 },
    { grade: "Grade 12", students: 310, classes: 18, avgSize: 17 }
  ];

  const coreSubjects = [
    {
      icon: BookOpen,
      name: "English Language Arts",
      description: "Comprehensive literacy program covering reading, writing, speaking, and listening skills",
      grades: "9-12",
      levels: ["Regular", "Honors", "AP Literature", "AP Language"],
      teachers: 8,
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: Calculator,
      name: "Mathematics",
      description: "Progressive math curriculum from Algebra to Calculus and Statistics",
      grades: "9-12",
      levels: ["Algebra I", "Geometry", "Algebra II", "Pre-Calculus", "AP Calculus", "AP Statistics"],
      teachers: 6,
      color: "bg-green-50 border-green-200"
    },
    {
      icon: Microscope,
      name: "Science",
      description: "Hands-on science education covering Biology, Chemistry, Physics, and Environmental Science",
      grades: "9-12",
      levels: ["Biology", "Chemistry", "Physics", "AP Biology", "AP Chemistry", "AP Physics"],
      teachers: 7,
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: Globe,
      name: "Social Studies",
      description: "Comprehensive study of history, geography, civics, and global cultures",
      grades: "9-12",
      levels: ["World History", "US History", "Government", "Economics", "AP US History", "AP World History"],
      teachers: 5,
      color: "bg-orange-50 border-orange-200"
    }
  ];

  const electivePrograms = [
    {
      icon: Palette,
      name: "Visual Arts",
      classes: ["Drawing & Painting", "Digital Art", "Photography", "Sculpture", "Art History"],
      teachers: 3
    },
    {
      icon: Music,
      name: "Performing Arts",
      classes: ["Band", "Choir", "Orchestra", "Theater Arts", "Music Theory"],
      teachers: 4
    },
    {
      icon: Languages,
      name: "World Languages",
      classes: ["Spanish I-IV", "French I-III", "German I-II", "Latin I-II"],
      teachers: 4
    },
    {
      icon: Dumbbell,
      name: "Physical Education",
      classes: ["PE", "Health", "Weight Training", "Team Sports", "Individual Fitness"],
      teachers: 3
    }
  ];

  const specialPrograms = [
    {
      title: "Advanced Placement (AP)",
      description: "College-level courses with opportunity to earn college credit",
      subjects: ["Calculus AB/BC", "Biology", "Chemistry", "Physics", "Literature", "Language", "US History", "World History", "Psychology"],
      students: 245,
      passRate: "87%"
    },
    {
      title: "International Baccalaureate (IB)",
      description: "Internationally recognized diploma program for global citizenship",
      subjects: ["Theory of Knowledge", "Extended Essay", "Creativity Action Service", "Higher Level Subjects", "Standard Level Subjects"],
      students: 156,
      passRate: "92%"
    },
    {
      title: "STEM Excellence Program",
      description: "Integrated Science, Technology, Engineering, and Mathematics curriculum",
      subjects: ["Engineering Design", "Computer Science", "Robotics", "Environmental Science", "Research Methods"],
      students: 189,
      passRate: "95%"
    }
  ];

  return (
    <ScrollArea className="h-[calc(100vh-350px)]">
      <div className="space-y-4 sm:space-y-6">
        {/* Academic Overview */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Academic Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Grade Level Statistics */}
            <div>
              <h4 className="font-semibold text-sm sm:text-base text-dark mb-3">Grade Level Enrollment</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {gradeData.map((grade, index) => (
                  <div key={index} className="bg-dark/5 p-3 rounded-lg text-center">
                    <h5 className="font-semibold text-sm text-dark">{grade.grade}</h5>
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">Students:</span>
                        <span className="text-dark font-medium">{grade.students}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">Classes:</span>
                        <span className="text-dark font-medium">{grade.classes}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">Avg Size:</span>
                        <span className="text-dark font-medium">{grade.avgSize}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Calendar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h4 className="font-semibold text-sm sm:text-base text-dark mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-dark" />
                  Academic Calendar
                </h4>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">School Year:</span>
                    <span className="text-dark font-medium">August 20 - June 15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Semesters:</span>
                    <span className="text-dark font-medium">2 (18 weeks each)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Class Periods:</span>
                    <span className="text-dark font-medium">8 periods/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Period Length:</span>
                    <span className="text-dark font-medium">50 minutes</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h4 className="font-semibold text-sm sm:text-base text-dark mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-dark" />
                  Daily Schedule
                </h4>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">First Period:</span>
                    <span className="text-dark font-medium">7:30 - 8:20 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lunch:</span>
                    <span className="text-dark font-medium">11:30 AM - 12:20 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Period:</span>
                    <span className="text-dark font-medium">2:40 - 3:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Study Hall:</span>
                    <span className="text-dark font-medium">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Subject Areas */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Core Subject Areas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {coreSubjects.map((subject, index) => (
                <div key={index} className={`border-2 rounded-lg p-4 ${subject.color}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <subject.icon className="h-5 w-5 sm:h-6 sm:w-6 text-dark mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-dark">{subject.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-700 mt-1">{subject.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-600">Grade Levels:</span>
                      <span className="text-dark font-medium">{subject.grades}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-600">Teachers:</span>
                      <span className="text-dark font-medium">{subject.teachers}</span>
                    </div>
                    
                    <div>
                      <p className="text-xs font-medium text-gray-700 mb-1">Course Levels:</p>
                      <div className="flex flex-wrap gap-1">
                        {subject.levels.map((level, idx) => (
                          <span key={idx} className="text-xs bg-white px-2 py-1 rounded border text-gray-600">
                            {level}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Special Programs */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Special Academic Programs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {specialPrograms.map((program, index) => (
              <div key={index} className="bg-dark/5 border border-dark/10 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-dark">{program.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1">{program.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-600">Students Enrolled</div>
                    <div className="text-lg font-bold text-dark">{program.students}</div>
                    <div className="text-xs text-green-600">Pass Rate: {program.passRate}</div>
                  </div>
                </div>
                
                <div>
                  <p className="text-xs font-medium text-gray-700 mb-2">Available Subjects:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    {program.subjects.map((subject, idx) => (
                      <div key={idx} className="bg-white px-2 py-1 rounded border text-xs text-gray-600">
                        {subject}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Elective Programs */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Palette className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Elective Programs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {electivePrograms.map((program, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <div className="text-center mb-3">
                    <program.icon className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-dark" />
                    <h4 className="font-semibold text-xs sm:text-sm text-dark">{program.name}</h4>
                    <p className="text-xs text-gray-600 mt-1">{program.teachers} teachers</p>
                  </div>
                  
                  <div className="space-y-1">
                    {program.classes.map((cls, idx) => (
                      <div key={idx} className="text-xs text-gray-700 py-1 px-2 bg-white rounded">
                        {cls}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Academic Support & Resources */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Academic Support & Resources
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Support Services */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm sm:text-base text-dark">Support Services</h4>
                <div className="space-y-2">
                  <div className="bg-dark/5 p-3 rounded-lg">
                    <h5 className="font-medium text-xs sm:text-sm text-dark">Tutoring Center</h5>
                    <p className="text-xs text-gray-600 mt-1">Free peer and teacher tutoring available</p>
                    <p className="text-xs text-gray-600">Hours: 7:00 AM - 4:00 PM daily</p>
                  </div>
                  
                  <div className="bg-dark/5 p-3 rounded-lg">
                    <h5 className="font-medium text-xs sm:text-sm text-dark">Study Skills Workshop</h5>
                    <p className="text-xs text-gray-600 mt-1">Time management and study strategies</p>
                    <p className="text-xs text-gray-600">Offered monthly</p>
                  </div>
                  
                  <div className="bg-dark/5 p-3 rounded-lg">
                    <h5 className="font-medium text-xs sm:text-sm text-dark">Academic Counseling</h5>
                    <p className="text-xs text-gray-600 mt-1">Course planning and college preparation</p>
                    <p className="text-xs text-gray-600">Individual appointments available</p>
                  </div>
                </div>
              </div>

              {/* Academic Resources */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm sm:text-base text-dark">Academic Resources</h4>
                <div className="space-y-2">
                  <div className="bg-dark/5 p-3 rounded-lg">
                    <h5 className="font-medium text-xs sm:text-sm text-dark">Library & Media Center</h5>
                    <p className="text-xs text-gray-600 mt-1">25,000+ books, digital databases, research assistance</p>
                    <p className="text-xs text-gray-600">Open 7:00 AM - 5:00 PM</p>
                  </div>
                  
                  <div className="bg-dark/5 p-3 rounded-lg">
                    <h5 className="font-medium text-xs sm:text-sm text-dark">Computer Labs</h5>
                    <p className="text-xs text-gray-600 mt-1">3 labs with latest software and technology</p>
                    <p className="text-xs text-gray-600">Available for student use</p>
                  </div>
                  
                  <div className="bg-dark/5 p-3 rounded-lg">
                    <h5 className="font-medium text-xs sm:text-sm text-dark">Online Learning Platform</h5>
                    <p className="text-xs text-gray-600 mt-1">24/7 access to course materials and assignments</p>
                    <p className="text-xs text-gray-600">Parent portal available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Graduation Requirements */}
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
              <h4 className="font-semibold text-sm sm:text-base text-dark mb-3">Graduation Requirements</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs sm:text-sm">
                <div className="text-center">
                  <div className="font-bold text-dark text-lg">4</div>
                  <div className="text-gray-600">English</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-dark text-lg">4</div>
                  <div className="text-gray-600">Math</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-dark text-lg">3</div>
                  <div className="text-gray-600">Science</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-dark text-lg">3</div>
                  <div className="text-gray-600">Social Studies</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-dark text-lg">2</div>
                  <div className="text-gray-600">World Language</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-dark text-lg">6</div>
                  <div className="text-gray-600">Electives</div>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2 text-center">Total: 22 credits required for graduation</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <ScrollBar orientation="vertical" className="bg-dark" />
    </ScrollArea>
  );
};

export default SchoolAcademicClassesComponent;
