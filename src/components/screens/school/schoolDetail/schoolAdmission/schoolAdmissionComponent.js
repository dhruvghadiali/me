import { 
  UserPlus, 
  FileText, 
  Calendar, 
  CheckCircle,
  Clock,
  Users,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  AlertCircle,
  TrendingUp,
  Target,
  BookOpen,
  Award,
  Heart,
  Home,
  Briefcase,
  Star,
  Info
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";
import { ScrollArea, ScrollBar } from "@MEShadcnComponents/scroll-area";

const SchoolAdmissionComponent = () => {
  const admissionRequirements = [
    {
      grade: "Grade 9",
      requirements: [
        "Completed Grade 8 with minimum 75% average",
        "Official transcript from previous school",
        "English proficiency test (if applicable)",
        "Immunization records",
        "Birth certificate or passport"
      ],
      additionalInfo: "Entry-level grade with foundational assessment"
    },
    {
      grade: "Grade 10-12",
      requirements: [
        "Official transcripts from all previous schools",
        "Minimum 3.0 GPA from previous institution",
        "Letter of recommendation from previous school",
        "English proficiency test (international students)",
        "Course prerequisite verification"
      ],
      additionalInfo: "Transfer students evaluated on individual basis"
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Submit Application",
      description: "Complete online application form with personal information",
      timeline: "15-20 minutes",
      documents: ["Application form", "Application fee ($50)"],
      icon: FileText
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Upload all required academic and personal documents",
      timeline: "1-2 days",
      documents: ["Transcripts", "Recommendations", "Test scores", "ID documents"],
      icon: CheckCircle
    },
    {
      step: 3,
      title: "Assessment & Interview",
      description: "Complete entrance assessment and attend interview session",
      timeline: "2-3 hours",
      documents: ["Entrance test", "Student interview", "Parent meeting"],
      icon: Users
    },
    {
      step: 4,
      title: "Review & Decision",
      description: "Application review by admissions committee",
      timeline: "5-10 business days",
      documents: ["Committee review", "Decision letter", "Enrollment packet"],
      icon: Award
    }
  ];

  const importantDates = [
    { date: "October 1", event: "Application Period Opens", status: "upcoming", category: "application" },
    { date: "December 15", event: "Early Decision Deadline", status: "upcoming", category: "deadline" },
    { date: "February 1", event: "Regular Decision Deadline", status: "upcoming", category: "deadline" },
    { date: "March 15", event: "Admission Decisions Released", status: "upcoming", category: "decision" },
    { date: "May 1", event: "Enrollment Confirmation Due", status: "upcoming", category: "enrollment" },
    { date: "June 15", event: "Final Document Submission", status: "upcoming", category: "documents" },
    { date: "August 1", event: "Orientation Week Begins", status: "upcoming", category: "orientation" }
  ];

  const entranceExams = [
    {
      exam: "Mathematics Assessment",
      duration: "60 minutes",
      topics: ["Algebra", "Geometry", "Basic Statistics"],
      format: "Multiple choice + Problem solving",
      passingScore: "70%"
    },
    {
      exam: "English Proficiency",
      duration: "45 minutes",
      topics: ["Reading comprehension", "Grammar", "Writing skills"],
      format: "Multiple choice + Essay",
      passingScore: "75%"
    },
    {
      exam: "Science Aptitude",
      duration: "45 minutes",
      topics: ["General Science", "Scientific method", "Basic concepts"],
      format: "Multiple choice + Short answers",
      passingScore: "65%"
    },
    {
      exam: "General Knowledge",
      duration: "30 minutes",
      topics: ["Current affairs", "General awareness", "Logical reasoning"],
      format: "Multiple choice",
      passingScore: "60%"
    }
  ];

  const admissionStats = [
    { metric: "Total Applications", value: "2,450", change: "+12%", period: "2024" },
    { metric: "Acceptance Rate", value: "68%", change: "+3%", period: "2024" },
    { metric: "Average GPA", value: "3.4", change: "+0.1", period: "Admitted students" },
    { metric: "International Students", value: "15%", change: "+2%", period: "Enrolled students" }
  ];

  const requiredDocuments = [
    {
      category: "Academic Records",
      documents: [
        { name: "Official Transcripts", required: true, description: "From all previously attended schools" },
        { name: "Grade Reports", required: true, description: "Most recent semester/year grades" },
        { name: "Standardized Test Scores", required: false, description: "SAT, ACT, or equivalent (if available)" },
        { name: "Course Descriptions", required: false, description: "For transfer credit evaluation" }
      ]
    },
    {
      category: "Personal Documents",
      documents: [
        { name: "Birth Certificate", required: true, description: "Certified copy" },
        { name: "Passport/ID", required: true, description: "Government-issued photo ID" },
        { name: "Immunization Records", required: true, description: "Complete vaccination history" },
        { name: "Residency Proof", required: true, description: "Utility bill or lease agreement" }
      ]
    },
    {
      category: "Recommendations",
      documents: [
        { name: "Teacher Recommendation", required: true, description: "From core subject teacher" },
        { name: "Counselor Recommendation", required: true, description: "From school counselor or principal" },
        { name: "Character Reference", required: false, description: "From community leader or mentor" },
        { name: "Previous School Report", required: true, description: "Conduct and attendance record" }
      ]
    }
  ];

  const specialPrograms = [
    {
      program: "International Student Program",
      description: "Comprehensive support for students from other countries",
      features: ["English language support", "Cultural orientation", "Visa assistance", "Host family program"],
      eligibility: "Non-US students with valid study permits",
      additionalFee: "$500/year"
    },
    {
      program: "Transfer Student Services",
      description: "Specialized assistance for students changing schools",
      features: ["Credit evaluation", "Academic planning", "Transition support", "Peer mentoring"],
      eligibility: "Students transferring from other high schools",
      additionalFee: "No additional fee"
    },
    {
      program: "Advanced Placement Track",
      description: "Accelerated program for high-achieving students",
      features: ["AP course access", "College counseling", "Research opportunities", "Merit scholarships"],
      eligibility: "Minimum 3.5 GPA and entrance exam scores",
      additionalFee: "$300/year"
    }
  ];

  const contactInfo = [
    {
      department: "Admissions Office",
      contact: "Ms. Sarah Johnson",
      title: "Director of Admissions",
      phone: "(555) 123-4567",
      email: "admissions@springfieldhigh.edu",
      hours: "Monday-Friday: 8:00 AM - 5:00 PM"
    },
    {
      department: "International Students",
      contact: "Mr. David Chen",
      title: "International Student Coordinator",
      phone: "(555) 123-4580",
      email: "international@springfieldhigh.edu",
      hours: "Monday-Friday: 9:00 AM - 4:00 PM"
    },
    {
      department: "Student Services",
      contact: "Mrs. Maria Rodriguez",
      title: "Student Services Manager",
      phone: "(555) 123-4591",
      email: "services@springfieldhigh.edu",
      hours: "Monday-Friday: 7:30 AM - 4:30 PM"
    }
  ];

  return (
    <ScrollArea className="h-[calc(100vh-350px)]">
      <div className="space-y-4 sm:space-y-6">
        {/* Admission Overview */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <UserPlus className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Admission Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Admission Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {admissionStats.map((stat, index) => (
                <div key={index} className="bg-dark/5 p-3 rounded-lg text-center">
                  <div className="text-lg sm:text-xl font-bold text-dark">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.metric}</div>
                  <div className="text-xs text-green-600">{stat.change} from last year</div>
                </div>
              ))}
            </div>

            {/* Quick Info */}
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
              <h4 className="font-semibold text-sm sm:text-base text-dark mb-2">Quick Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div>
                  <div className="font-medium text-dark">Application Fee</div>
                  <div className="text-gray-600">$50 (non-refundable)</div>
                </div>
                <div>
                  <div className="font-medium text-dark">Decision Timeline</div>
                  <div className="text-gray-600">5-10 business days</div>
                </div>
                <div>
                  <div className="font-medium text-dark">Class Size</div>
                  <div className="text-gray-600">Average 22 students</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Application Process */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Application Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {applicationProcess.map((step, index) => (
                <div key={index} className="flex gap-4 p-4 bg-dark/5 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-dark text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-sm sm:text-base text-dark">{step.title}</h4>
                      <span className="text-xs text-gray-600">{step.timeline}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 mb-2">{step.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {step.documents.map((doc, idx) => (
                        <span key={idx} className="text-xs bg-white px-2 py-1 rounded border text-gray-600">
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Admission Requirements */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Admission Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {admissionRequirements.map((req, index) => (
                <div key={index} className="border border-dark/10 rounded-lg p-4">
                  <h4 className="font-semibold text-sm sm:text-base text-dark mb-2">{req.grade}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3">{req.additionalInfo}</p>
                  <ul className="space-y-1">
                    {req.requirements.map((requirement, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Required Documents */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Required Documents
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {requiredDocuments.map((category, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-semibold text-sm sm:text-base text-dark">{category.category}</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {category.documents.map((doc, idx) => (
                    <div key={idx} className={`bg-gray-50 border rounded-lg p-3 ${doc.required ? 'border-orange-200 bg-orange-50' : 'border-gray-200'}`}>
                      <div className="flex items-start justify-between mb-1">
                        <h5 className="font-medium text-xs sm:text-sm text-dark">{doc.name}</h5>
                        {doc.required ? (
                          <AlertCircle className="h-3 w-3 text-orange-500 flex-shrink-0" />
                        ) : (
                          <Info className="h-3 w-3 text-blue-500 flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-gray-600">{doc.description}</p>
                      <div className="text-xs text-gray-500 mt-1">
                        {doc.required ? "Required" : "Optional"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Entrance Examinations */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Entrance Examinations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {entranceExams.map((exam, index) => (
                <div key={index} className="bg-dark/5 border border-dark/10 rounded-lg p-4">
                  <h4 className="font-semibold text-sm sm:text-base text-dark mb-2">{exam.exam}</h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="text-dark font-medium">{exam.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Format:</span>
                      <span className="text-dark font-medium">{exam.format}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Passing Score:</span>
                      <span className="text-green-600 font-medium">{exam.passingScore}</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Topics covered:</p>
                      <div className="flex flex-wrap gap-1">
                        {exam.topics.map((topic, idx) => (
                          <span key={idx} className="text-xs bg-white px-2 py-1 rounded border text-gray-600">
                            {topic}
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
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Special Admission Programs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {specialPrograms.map((program, index) => (
                <div key={index} className="border border-dark/10 rounded-lg p-4 bg-gray-50">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-sm sm:text-base text-dark">{program.program}</h4>
                    <span className="text-xs text-green-600 font-medium">{program.additionalFee}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 mb-3">{program.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs font-medium text-gray-700 mb-1">Program Features:</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-1">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-700 mb-1">Eligibility:</p>
                      <p className="text-xs text-gray-600">{program.eligibility}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Dates */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Important Dates & Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {importantDates.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="text-center min-w-[80px]">
                    <div className="text-sm font-bold text-dark">{item.date}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-dark">{item.event}</div>
                  </div>
                  <div className="text-xs text-gray-600 capitalize">{item.category}</div>
                  <div className={`w-2 h-2 rounded-full ${item.status === 'upcoming' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Admissions Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="bg-dark/5 border border-dark/10 rounded-lg p-4">
                  <h4 className="font-semibold text-sm sm:text-base text-dark mb-1">{contact.department}</h4>
                  <p className="text-xs text-gray-600 mb-3">{contact.contact} - {contact.title}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <Phone className="h-3 w-3 text-dark" />
                      <span className="text-dark">{contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <Mail className="h-3 w-3 text-dark" />
                      <span className="text-dark">{contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <Clock className="h-3 w-3 text-dark" />
                      <span className="text-gray-600">{contact.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <ScrollBar orientation="vertical" className="bg-dark" />
    </ScrollArea>
  );
};

export default SchoolAdmissionComponent;
