export interface Material {
  id: string
  name: string
  type: "document" | "video"
  url: string
}

export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  materials: string[]
  program: string
  level: number
  lectures: Material[]
}

export const courses: Course[] = [
  {
    id: "1",
    title: "CS 135: Designing Functional Programs",
    description:
      "An introduction to the fundamentals of computer programming and algorithm design using functional programming.",
    instructor: "Dr. Brad Lushman",
    materials: ["Racket Basics", "Recursion", "Higher-Order Functions"],
    program: "Computer Science",
    level: 100,
    lectures: [],
  },
  {
    id: "2",
    title: "MATH 135: Algebra for Honours Mathematics",
    description:
      "An introduction to the language of mathematics and proof techniques through a study of the basic algebraic systems of mathematics.",
    instructor: "Dr. David Jao",
    materials: ["Proofs", "Number Theory", "Group Theory"],
    program: "Mathematics",
    level: 100,
    lectures: [],
  },
  {
    id: "3",
    title: "ECE 105: Classical Mechanics",
    description:
      "A calculus-based course covering kinematics, Newton's laws, energy, momentum, rotational motion, and oscillations.",
    instructor: "Dr. Donna Strickland",
    materials: ["Kinematics", "Newton's Laws", "Conservation Laws"],
    program: "Electrical Engineering",
    level: 100,
    lectures: [],
  },
  {
    id: "4",
    title: "ECON 101: Introduction to Microeconomics",
    description: "An introduction to microeconomic analysis relevant for understanding the Canadian economy.",
    instructor: "Dr. Mary Thompson",
    materials: ["Supply and Demand", "Market Structures", "Consumer Theory"],
    program: "Economics",
    level: 100,
    lectures: [],
  },
  {
    id: "5",
    title: "BIOL 130: Introductory Cell Biology",
    description:
      "An introduction to the basic concepts of cell biology, including cell structure, function, and metabolism.",
    instructor: "Dr. Brian Dixon",
    materials: ["Cell Structure", "Cell Metabolism", "Cell Division"],
    program: "Biology",
    level: 100,
    lectures: [],
  },
  {
    id: "6",
    title: "CS 246: Object-Oriented Software Development",
    description: "Introduction to object-oriented programming and software design patterns using C++.",
    instructor: "Dr. Ondřej Lhoták",
    materials: ["C++ Basics", "OOP Concepts", "Design Patterns"],
    program: "Computer Science",
    level: 200,
    lectures: [],
  },
  {
    id: "7",
    title: "MATH 237: Calculus 3 for Honours Mathematics",
    description:
      "Calculus of several variables; partial differentiation, Taylor series, extrema, Lagrange multipliers, multiple integration, coordinate systems, vector fields, line integrals, surface integrals, Green's theorem, Stokes' theorem, Divergence theorem.",
    instructor: "Dr. Stephen New",
    materials: ["Partial Derivatives", "Multiple Integrals", "Vector Calculus"],
    program: "Mathematics",
    level: 200,
    lectures: [],
  },
  {
    id: "8",
    title: "ECE 380: Analog Control Systems",
    description:
      "Modeling dynamic systems; linear system responses; stability analysis; linear feedback theory; linear design; state space analysis; nonlinear stability analysis.",
    instructor: "Dr. Daniel Miller",
    materials: ["System Modeling", "Feedback Control", "State Space Methods"],
    program: "Electrical Engineering",
    level: 300,
    lectures: [],
  },
]

export const programs = Array.from(new Set(courses.map((course) => course.program))).sort()
export const levels = Array.from(new Set(courses.map((course) => course.level))).sort((a, b) => a - b)

