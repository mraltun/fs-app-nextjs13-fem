import { Suspense } from "react";
import { cookies } from "next/headers";
import Link from "next/link";
import { delay } from "@/lib/async";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import GreetingsSkeleton from "@/components/GreetingSkeleton";
import Greeting from "@/components/Greeting";
import ProjectCard from "@/components/ProjectCard";
import TaskCard from "@/components/TaskCard";
import NewProject from "@/components/NewProject";

const getData = async () => {
  await delay(2000);
  const user = await getUserFromCookie(cookies());
  const projects = await db.project.findMany({
    where: {
      ownerId: user?.id,
    },
    include: {
      tasks: true,
    },
  });

  return { projects };
};

export default async function Page() {
  const { projects } = await getData();

  return (
    <div className='h-full overflow-y-auto pr-6 w-1/1'>
      <div className=' h-full  items-stretch justify-center min-h-[content]'>
        <div className='flex-1 grow flex'>
          {/* Suspense lets you display a fallback until its children have finished loading. (We show skeleton while loading Greeting) */}
          <Suspense fallback={<GreetingsSkeleton />}>
            <Greeting />
          </Suspense>
        </div>
        <div className='flex flex-2 grow items-center flex-wrap mt-3 -m-3 '>
          {projects.map((project) => (
            <div className='w-1/3 p-3' key={project.id}>
              <Link href={`/project/${project.id}`}>
                <ProjectCard project={project} />
              </Link>
            </div>
          ))}
          <div className='w-1/3 p-3'>
            <NewProject />
          </div>
        </div>
        <div className='mt-6 flex-2 grow w-full flex'>
          <div className='w-full'>
            <TaskCard />
          </div>
        </div>
      </div>
    </div>
  );
}
