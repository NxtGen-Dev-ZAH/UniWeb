import { useRouter } from 'next/router';
import CourseDescriptionForm from '@/components/CourseDescriptionForm';

const CoursePage = () => {
  const router = useRouter();
  const { courseName } = router.query;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Course: {courseName}</h1>
      <CourseDescriptionForm />
    </div>
  );
};

export default CoursePage;