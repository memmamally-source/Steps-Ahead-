import { useParams } from 'react-router';
import { LessonBody } from '@/components/learning';
import { Empty, PageTitle, PreviewPill } from '@/components/ui';
import { content } from '@/content';
import { useStudyContext } from '@/state/studyTimer';

/** Full-page "Teach Me This" mini lesson for a concept. */
export function Learn() {
  const { conceptId = '' } = useParams();
  const concept = content.concept(conceptId);
  useStudyContext(concept ? { activity: 'lesson', conceptIds: [concept.id] } : null);
  if (!concept) return <Empty>That concept isn’t available.</Empty>;
  return (
    <div>
      <PageTitle title={concept.title} back={true} action={<PreviewPill />} />
      <LessonBody key={concept.id} concept={concept} />
    </div>
  );
}
