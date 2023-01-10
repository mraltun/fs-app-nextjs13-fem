import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { getUserFromCookie } from "@/lib/auth";
import TasksCard from "@/components/TasksCard";

const getData = async (id) => {
  const user = await getUserFromCookie(cookies());
  const project = await db.project.findFirst({
    where: { id, ownerId: user?.id },
    include: {
      tasks: true,
    },
  });

  return project;
};

export default async function ProjectPage({ params }) {
  const project = await getData(params.id);

  return (
    <div className='h-full overflow-y-auto pr-6 w-1/1'>
      <TasksCard tasks={project.tasks} title={project.name} />
    </div>
  );
}
