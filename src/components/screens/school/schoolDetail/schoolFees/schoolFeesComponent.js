import { 
  DollarSign, 
  CreditCard, 
  Calendar, 
  Receipt,
  PiggyBank,
  Calculator,
  Clock,
  AlertCircle,
  CheckCircle,
  FileText,
  Wallet,
  TrendingUp,
  Users,
  BookOpen,
  Utensils,
  Car,
  Shirt,
  Activity,
  GraduationCap
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";
import { ScrollArea, ScrollBar } from "@MEShadcnComponents/scroll-area";

const SchoolFeesComponent = () => {
  const tuitionFees = [
    {
      grade: "Grade 9",
      annual: "$12,500",
      semester: "$6,250",
      monthly: "$1,042",
      features: ["Core subjects", "Basic lab access", "Library privileges", "Student activities"]
    },
    {
      grade: "Grade 10",
      annual: "$13,200",
      semester: "$6,600",
      monthly: "$1,100",
      features: ["Core subjects", "Advanced lab access", "Career counseling", "Student activities"]
    },
    {
      grade: "Grade 11",
      annual: "$14,000",
      semester: "$7,000",
      monthly: "$1,167",
      features: ["Core + electives", "Full lab access", "College prep", "Leadership programs"]
    },
    {
      grade: "Grade 12",
      annual: "$14,800",
      semester: "$7,400",
      monthly: "$1,233",
      features: ["Full curriculum", "AP courses", "College counseling", "Graduation support"]
    }
  ];

  const additionalFees = [
    {
      category: "Academic",
      icon: BookOpen,
      fees: [
        { item: "Registration Fee", amount: "$250", frequency: "Annual", required: true },
        { item: "Technology Fee", amount: "$150", frequency: "Annual", required: true },
        { item: "Lab Fee (Science)", amount: "$75", frequency: "Per semester", required: false },
        { item: "AP Exam Fee", amount: "$95", frequency: "Per exam", required: false },
        { item: "Textbook Rental", amount: "$300", frequency: "Annual", required: true }
      ]
    },
    {
      category: "Activities & Sports",
      icon: Activity,
      fees: [
        { item: "Athletic Participation", amount: "$200", frequency: "Per season", required: false },
        { item: "Drama Club", amount: "$125", frequency: "Annual", required: false },
        { item: "Music Program", amount: "$175", frequency: "Annual", required: false },
        { item: "Field Trip Fund", amount: "$100", frequency: "Annual", required: false },
        { item: "Yearbook", amount: "$65", frequency: "Annual", required: false }
      ]
    },
    {
      category: "Services",
      icon: Utensils,
      fees: [
        { item: "Lunch Program", amount: "$850", frequency: "Annual", required: false },
        { item: "Transportation", amount: "$600", frequency: "Annual", required: false },
        { item: "After School Care", amount: "$300", frequency: "Monthly", required: false },
        { item: "Health Insurance", amount: "$450", frequency: "Annual", required: false },
        { item: "Lost ID Replacement", amount: "$15", frequency: "Per incident", required: false }
      ]
    },
    {
      category: "Uniforms & Supplies",
      icon: Shirt,
      fees: [
        { item: "School Uniform Set", amount: "$180", frequency: "Annual", required: true },
        { item: "PE Uniform", amount: "$45", frequency: "Annual", required: true },
        { item: "School Supplies Kit", amount: "$125", frequency: "Annual", required: true },
        { item: "Graduation Cap & Gown", amount: "$85", frequency: "One-time", required: false },
        { item: "Student Planner", amount: "$20", frequency: "Annual", required: true }
      ]
    }
  ];

  const paymentOptions = [
    {
      title: "Annual Payment",
      discount: "5% discount",
      description: "Pay full year tuition upfront",
      dueDate: "August 1st",
      benefits: ["5% tuition discount", "No payment processing fees", "Early bird benefits"],
      popular: true
    },
    {
      title: "Semester Payment",
      discount: "2% discount",
      description: "Pay by semester",
      dueDate: "August 1st & January 15th",
      benefits: ["2% tuition discount", "Flexible payment schedule", "Mid-year adjustments"],
      popular: false
    },
    {
      title: "Monthly Payment",
      discount: "No discount",
      description: "12 monthly installments",
      dueDate: "5th of each month",
      benefits: ["Budget-friendly", "Automatic payments", "No large upfront cost"],
      popular: false
    },
    {
      title: "Custom Plan",
      discount: "Varies",
      description: "Personalized payment schedule",
      dueDate: "As agreed",
      benefits: ["Flexible terms", "Special circumstances", "Financial counseling"],
      popular: false
    }
  ];

  const financialAid = [
    {
      program: "Merit Scholarships",
      amount: "Up to 50% tuition",
      criteria: "Academic excellence, GPA 3.5+",
      deadline: "March 1st",
      renewable: true
    },
    {
      program: "Need-Based Aid",
      amount: "Up to 75% tuition",
      criteria: "Demonstrated financial need",
      deadline: "April 15th",
      renewable: true
    },
    {
      program: "Athletic Scholarships",
      amount: "Up to 30% tuition",
      criteria: "Sports excellence and participation",
      deadline: "February 1st",
      renewable: true
    },
    {
      program: "Sibling Discount",
      amount: "10% per additional child",
      criteria: "Multiple children enrolled",
      deadline: "Ongoing",
      renewable: true
    },
    {
      program: "Employee Discount",
      amount: "25% tuition reduction",
      criteria: "School district employees",
      deadline: "Ongoing",
      renewable: true
    }
  ];

  const feeStructureBreakdown = [
    { category: "Tuition", percentage: 75, amount: "$10,500", description: "Core education costs" },
    { category: "Facilities", percentage: 12, amount: "$1,680", description: "Building maintenance & utilities" },
    { category: "Technology", percentage: 8, amount: "$1,120", description: "IT infrastructure & devices" },
    { category: "Activities", percentage: 3, amount: "$420", description: "Sports & extracurricular programs" },
    { category: "Administration", percentage: 2, amount: "$280", description: "Administrative operations" }
  ];

  const importantDates = [
    { date: "March 1", event: "Merit Scholarship Applications Due", type: "scholarship" },
    { date: "April 15", event: "Financial Aid Applications Due", type: "financial" },
    { date: "May 1", event: "Tuition Contracts Due", type: "contract" },
    { date: "July 1", event: "Payment Plans Begin", type: "payment" },
    { date: "August 1", event: "Annual/Semester Payments Due", type: "payment" },
    { date: "January 15", event: "Spring Semester Payment Due", type: "payment" }
  ];

  return (
    <ScrollArea className="h-[calc(100vh-350px)]">
      <div className="space-y-4 sm:space-y-6">
        {/* Fee Overview */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Tuition & Fee Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-dark/5 p-3 rounded-lg text-center">
                <div className="text-lg sm:text-xl font-bold text-dark">$13,625</div>
                <div className="text-xs sm:text-sm text-gray-600">Average Annual</div>
              </div>
              <div className="bg-dark/5 p-3 rounded-lg text-center">
                <div className="text-lg sm:text-xl font-bold text-dark">$1,135</div>
                <div className="text-xs sm:text-sm text-gray-600">Average Monthly</div>
              </div>
              <div className="bg-dark/5 p-3 rounded-lg text-center">
                <div className="text-lg sm:text-xl font-bold text-dark">45%</div>
                <div className="text-xs sm:text-sm text-gray-600">Receive Aid</div>
              </div>
              <div className="bg-dark/5 p-3 rounded-lg text-center">
                <div className="text-lg sm:text-xl font-bold text-dark">4</div>
                <div className="text-xs sm:text-sm text-gray-600">Payment Plans</div>
              </div>
            </div>

            {/* Fee Breakdown Chart */}
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
              <h4 className="font-semibold text-sm sm:text-base text-dark mb-3">Fee Structure Breakdown</h4>
              <div className="space-y-2">
                {feeStructureBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex justify-between text-xs sm:text-sm mb-1">
                        <span className="text-dark font-medium">{item.category}</span>
                        <span className="text-gray-600">{item.amount} ({item.percentage}%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-dark h-2 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tuition by Grade */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Tuition by Grade Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {tuitionFees.map((grade, index) => (
                <div key={index} className="border border-dark/10 rounded-lg p-4 bg-dark/5">
                  <h4 className="font-semibold text-sm sm:text-base text-dark mb-3">{grade.grade}</h4>
                  
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-dark">{grade.annual}</div>
                      <div className="text-xs text-gray-600">Annual</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-dark">{grade.semester}</div>
                      <div className="text-xs text-gray-600">Semester</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-dark">{grade.monthly}</div>
                      <div className="text-xs text-gray-600">Monthly</div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs font-medium text-gray-700 mb-2">Includes:</p>
                    <div className="flex flex-wrap gap-1">
                      {grade.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-white px-2 py-1 rounded border text-gray-600">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Fees */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Receipt className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Additional Fees
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {additionalFees.map((category, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-semibold text-sm sm:text-base text-dark flex items-center gap-2">
                  <category.icon className="h-4 w-4 text-dark" />
                  {category.category}
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                  {category.fees.map((fee, idx) => (
                    <div key={idx} className={`bg-gray-50 border rounded-lg p-3 ${fee.required ? 'border-orange-200 bg-orange-50' : 'border-gray-200'}`}>
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-medium text-xs sm:text-sm text-dark">{fee.item}</h5>
                        {fee.required ? (
                          <AlertCircle className="h-3 w-3 text-orange-500 flex-shrink-0" />
                        ) : (
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                        )}
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-dark">{fee.amount}</div>
                        <div className="text-xs text-gray-600">{fee.frequency}</div>
                        <div className="text-xs text-gray-500">
                          {fee.required ? "Required" : "Optional"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Payment Options */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Payment Options
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {paymentOptions.map((option, index) => (
                <div key={index} className={`border rounded-lg p-4 ${option.popular ? 'border-dark bg-dark/5' : 'border-gray-200 bg-gray-50'}`}>
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-sm sm:text-base text-dark">{option.title}</h4>
                    {option.popular && (
                      <span className="text-xs bg-dark text-white px-2 py-1 rounded">Popular</span>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-xs sm:text-sm text-gray-700">{option.description}</div>
                    <div className="text-sm font-medium text-green-600">{option.discount}</div>
                    <div className="text-xs text-gray-600">Due: {option.dueDate}</div>
                    
                    <div>
                      <p className="text-xs font-medium text-gray-700 mb-1">Benefits:</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {option.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-1">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Financial Aid */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <PiggyBank className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Financial Aid & Scholarships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              {financialAid.map((aid, index) => (
                <div key={index} className="bg-dark/5 border border-dark/10 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-sm sm:text-base text-dark">{aid.program}</h4>
                    <span className="text-sm font-bold text-green-600">{aid.amount}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-xs sm:text-sm text-gray-700">{aid.criteria}</div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Deadline: {aid.deadline}</span>
                      <span>{aid.renewable ? "Renewable" : "One-time"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Financial Aid Process */}
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
              <h4 className="font-semibold text-sm sm:text-base text-dark mb-2">How to Apply for Financial Aid</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="text-center">
                  <div className="bg-dark text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2 text-xs">1</div>
                  <div className="font-medium text-dark">Submit Application</div>
                  <div className="text-gray-600">Complete financial aid form</div>
                </div>
                <div className="text-center">
                  <div className="bg-dark text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2 text-xs">2</div>
                  <div className="font-medium text-dark">Provide Documents</div>
                  <div className="text-gray-600">Submit required paperwork</div>
                </div>
                <div className="text-center">
                  <div className="bg-dark text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2 text-xs">3</div>
                  <div className="font-medium text-dark">Review & Award</div>
                  <div className="text-gray-600">Receive aid decision</div>
                </div>
              </div>
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
                  <div className="text-center">
                    <div className="text-sm font-bold text-dark">{item.date}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-dark">{item.event}</div>
                  </div>
                  <div className="text-xs text-gray-600 capitalize">{item.type}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods & Policies */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Wallet className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Payment Methods & Policies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm sm:text-base text-dark">Accepted Payment Methods</h4>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                    <li>• Online payments (credit/debit cards)</li>
                    <li>• Bank transfers and ACH payments</li>
                    <li>• Check payments (by mail or in person)</li>
                    <li>• Cash payments (in person only)</li>
                    <li>• Payment plans with automatic deduction</li>
                    <li>• Third-party financing options</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm sm:text-base text-dark">Payment Policies</h4>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                    <li>• Late payment fee: $50 after 30 days</li>
                    <li>• Returned payment fee: $35</li>
                    <li>• Payment plan setup fee: $25</li>
                    <li>• Refund policy: Pro-rated before semester start</li>
                    <li>• Outstanding balances affect enrollment</li>
                    <li>• Transcripts held for unpaid balances</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <ScrollBar orientation="vertical" className="bg-dark" />
    </ScrollArea>
  );
};

export default SchoolFeesComponent;
