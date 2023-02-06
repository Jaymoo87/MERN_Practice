export const getStudents = async (req, res) => {
  try {
    const allStudents = await student.find();
    res.status(200).json(allStudents);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error, check it out." });
  }
};

export const createStudent = async (req, res) => {
  const student = req.body;
  const newStudent = new student(student);
  try {
    await newStudent.save();
    res.status(200).json(newStudent);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};
