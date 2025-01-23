import { writeFile } from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, courseName, teacherName } = req.body;

  if (!courseName || !teacherName) {
    return res.status(400).json({ error: 'Course name and teacher name are required' });
  }

  try {
    const templateContent = `
      ${type === 'theory' ? 'Theory Template' : 'Practical Template'}
      
      Course Name: ${courseName}
      Teacher Name: ${teacherName}

      Add more details here as needed...
    `;

    // Save the template as a Word document (e.g., .docx or .txt for simplicity)
    const fileName = `${courseName.replace(/\s+/g, '_')}_${type}_Template.docx`;
    const filePath = path.join(process.cwd(), 'public', 'templates', fileName);
    await writeFile(filePath, templateContent);

    res.status(200).json({ message: 'Template generated successfully', filePath: `/templates/${fileName}` });
  } catch (error) {
    console.error('Error generating template:', error);
    res.status(500).json({ error: 'Failed to generate template' });
  }
}
