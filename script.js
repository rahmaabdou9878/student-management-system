class Student {
  constructor(name, id, grades, attendance) {
    this.name = name;
    this.id = id;
    this.grades = grades;
    this.attendance = attendance;
  }

  // حساب المتوسط بـ reduce
  getAverage() {
    const total = this.grades.reduce((acc, grade) => acc + grade, 0);
    return total / this.grades.length;
  }

  // التقدير بـ if/else
  getGrade() {
    const avg = this.getAverage();
    if (avg >= 90) return 'A';
    else if (avg >= 80) return 'B';
    else if (avg >= 70) return 'C';
    else if (avg >= 60) return 'D';
    else if (avg >= 50) return 'E';
    else return 'F';
  }

  // النتيجة النهائية بـ &&
  getResult() {
    if (this.getAverage() >= 50 && this.attendance >= 75) {
      return 'ناجح';
    } else {
      return 'راسب';
    }
  }
}

// المصفوفة الرئيسية 4 طلاب (2 ناجح و 2 متعثر)
const studentsList = [
  new Student('رحمه', 1, [85, 90, 88], 95),
  new Student('أحمد', 2, [70, 65, 72], 80),
  new Student('مصطفى', 3, [45, 42, 48], 88),
  new Student('سارة', 4, [40, 44, 41], 90),
];

// 1- تقرير لكل طالب
console.log('===== تقرير جميع الطلاب =====');
studentsList.forEach(s => {
  console.log(`${s.name} | متوسط: ${s.getAverage().toFixed(2)} | تقدير: ${s.getGrade()} | نتيجة: ${s.getResult()}`);
});

// 2- لجنة الرأفة
const needSupport = studentsList.filter(s => {
  const avg = s.getAverage();
  return avg >= 40 && avg <= 49;
});
console.log('\nالمتعثرون للرأفة:', needSupport.map(s => s.name));

// 3- إضافة 5 درجات بـ map
const afterSupport = needSupport.map(s => {
  const newGrades = s.grades.map(g => g + 5);
  return new Student(s.name, s.id, newGrades, s.attendance);
});

// 4- التحليل بـ reduce
const totalNewAvgs = afterSupport.reduce((acc, s) => acc + s.getAverage(), 0);

console.log('\nبعد الرأفة:');
afterSupport.forEach(s => {
  console.log(`${s.name} | متوسط جديد: ${s.getAverage().toFixed(2)} | نتيجة: ${s.getResult()}`);
});

// 5- درع حماية من القسمة على صفر
let overallAverage;
if (afterSupport.length === 0) {
  overallAverage = 0; 
  console.log('لا يوجد متعثرون - درع حماية');
} else {
  overallAverage = totalNewAvgs / afterSupport.length;
}
console.log(`\nالمتوسط العام للمتعثرين بعد الرأفة: ${overallAverage.toFixed(2)}`);class Student {
  constructor(name, id, grades, attendance) {
    this.name = name;
    this.id = id;
    this.grades = grades;
    this.attendance = attendance;
  }

  // حساب المتوسط بـ reduce
  getAverage() {
    const total = this.grades.reduce((acc, grade) => acc + grade, 0);
    return total / this.grades.length;
  }

  // التقدير بـ if/else
  getGrade() {
    const avg = this.getAverage();
    if (avg >= 90) return 'A';
    else if (avg >= 80) return 'B';سس
    else if (avg >= 70) return 'C';
    else if (avg >= 60) return 'D';
    else if (avg >= 50) return 'E';
    else return 'F';
  }

  // النتيجة النهائية بـ &&
  getResult() {
    if (this.getAverage() >= 50 && this.attendance >= 75) {
      return 'ناجح';
    } else {
      return 'راسب';
    }
  }
}

// المصفوفة الرئيسية 4 طلاب (2 ناجح و 2 متعثر)
const studentsList = [
  new Student('شروق', 1, [85, 90, 88], 95),
  new Student('أحمد', 2, [70, 65, 72], 80),
  new Student('مصطفى', 3, [45, 42, 48], 88),
  new Student('سارة', 4, [40, 44, 41], 90),
];

// 1- تقرير لكل طالب
console.log('===== تقرير جميع الطلاب =====');
studentsList.forEach(s => {
  console.log(`${s.name} | متوسط: ${s.getAverage().toFixed(2)} | تقدير: ${s.getGrade()} | نتيجة: ${s.getResult()}`);
});

// 2- لجنة الرأفة
const needSupport = studentsList.filter(s => {
  const avg = s.getAverage();
  return avg >= 40 && avg <= 49;
});
console.log('\nالمتعثرون للرأفة:', needSupport.map(s => s.name));

// 3- إضافة 5 درجات بـ map
const afterSupport = needSupport.map(s => {
  const newGrades = s.grades.map(g => g + 5);
  return new Student(s.name, s.id, newGrades, s.attendance);
});

// 4- التحليل بـ reduce
const totalNewAvgs = afterSupport.reduce((acc, s) => acc + s.getAverage(), 0);

console.log('\nبعد الرأفة:');
afterSupport.forEach(s => {
  console.log(`${s.name} | متوسط جديد: ${s.getAverage().toFixed(2)} | نتيجة: ${s.getResult()}`);
});

// 5- درع حماية من القسمة على صفر
let overallAverage;
if (afterSupport.length === 0) {
  overallAverage = 0; 
  console.log('لا يوجد متعثرون - درع حماية');
} else {
  overallAverage = totalNewAvgs / afterSupport.length;
}
console.log(`\nالمتوسط العام للمتعثرين بعد الرأفة: ${overallAverage.toFixed(2)}`);